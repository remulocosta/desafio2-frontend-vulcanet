import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  FaCaretDown,
  FaPlus,
  FaSearch,
  FaTrashAlt,
  FaPencilAlt,
} from 'react-icons/fa';

import { format, fromUnixTime, differenceInDays } from 'date-fns';

import ChannelMessage from '../../components/ChannelMessage';
import ChannelsContact from '../../components/ChannelsContact';
import Customer from '../../components/Customer';
import EmailCard from '../../components/EmailCard';
import FooterChat from '../../components/FooterChat';
import HeaderListEmails from '../../components/HeaderListEmails';
import SearchBarEmail from '../../components/SearchBarEmail';
import SearchBarMessage from '../../components/SearchBarMessage';
import SidebarChannel from '../../components/SidebarChannels';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  ContentAttendance,
  ContentSidebar,
  ContentUser,
  UserInfo,
  ContentSearch,
  ContentCustomers,
  ContentCustomersHeader,
  Customers,
  ContentMessages,
  ContentEmails,
  ContentMessagesData,
  ContentCustomerInfo,
  ContentStartAttendance,
  CustomerInfo,
  CustomerInfoData,
  ButtonsWrapper,
  ContentLastAttendance,
  HeaderLastAttendance,
  IconAttendance,
  LastAttendance,
  ContentObservation,
  HeaderObservation,
  ContentCustomerContacts,
  IconCustomerContacts,
  ContentRowContacts,
  ContactInfo,
} from './styles';

interface ILastConversations {
  daysago: number;
  channel: number;
  finishedAt: number;
  finishedAtFormatted: string;
}

interface ICustomer {
  id: number;
  name: string;
  photo: string;
  company: string;
  lastConversations: ILastConversations[];
  lastConversationsFormatted: ILastConversations[];
  observations: string;
  contacts: [
    {
      channel: number;
      value: string;
    },
  ];
  mentions?: number;
}

interface IContact {
  channel: number;
  type: string;
  mentions?: number;
}

interface IMessage {
  seen: boolean;
  timestamp: number;
  timestampFormatted: string;
  body: string;
  type: string;
}

interface IChat {
  id: number;
  customer: number;
  channel: number;
  subject: string | null;
  start: number;
  startFormatted: string;
  messages: IMessage[];
  messagesFormatted: IMessage[];
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [contactsData, setContactsData] = useState<IContact[]>([]);
  const [chatData, setChatData] = useState<IChat[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [contactsCustomer, setContactsCustomer] = useState<IContact[]>([]);
  const [customerChat, setCustomerChat] = useState<IChat[]>([]);

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedChannel, setSelectedChannel] = useState(0);

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    async function loadContacts(): Promise<void> {
      const reqContactsData = await api.get<IContact[]>('/contacts');

      if (!reqContactsData) {
        console.log('Erro: erro ao retornar contacts');
      }

      setContactsData(reqContactsData.data);
    }

    async function loadCustomers(): Promise<ICustomer[]> {
      const reqCustomersData = await api.get<ICustomer[]>('/customers');

      if (!reqCustomersData) {
        console.log('Erro: erro ao retornar customers');
      }

      return reqCustomersData.data;
    }

    async function loadChatCustomer(): Promise<IChat[]> {
      const reqChatData = await api.get<IChat[]>('/chats');

      if (!reqChatData) {
        console.log('Erro: erro ao retornar chats');
      }

      return reqChatData.data;
    }

    loadContacts();
    loadCustomers().then((resCustomers) => {
      const resChatData: IChat[] = [];

      loadChatCustomer()
        .then((reqChat) => {
          Object.assign(resChatData, [...reqChat]);

          return resChatData.map((resChat) => {
            return {
              ...resChat,
              startFormatted: format(fromUnixTime(resChat.start), 'dd/MM/yyyy'),
              messagesFormatted: resChat.messages.map<IMessage>((msg) => {
                return {
                  ...msg,
                  timestampFormatted: format(
                    fromUnixTime(msg.timestamp),
                    "dd/MM/yyyy hh'h'mm",
                  ),
                };
              }),
            };
          });
        })
        .then((formattedChat) => {
          // result chat formatted
          setChatData(formattedChat);
          return formattedChat;
        })
        .then((resFormattedChat) => {
          const mapCustomer = resCustomers.map((customer) => {
            const messagesResult = resFormattedChat
              .filter((msgCustomer) => {
                return msgCustomer.customer === customer.id;
              })
              .filter((msgSeen) => {
                return (
                  msgSeen.messages.filter((linha) => {
                    return linha.seen === false;
                  }).length > 0
                );
              });

            const lastConversationsFormatted = customer.lastConversations.map(
              (last) => {
                return {
                  ...last,
                  finishedAtFormatted: format(
                    fromUnixTime(last.finishedAt),
                    'dd/MM/yyyy',
                  ),
                  daysago: differenceInDays(
                    new Date(),
                    fromUnixTime(last.finishedAt),
                  ),
                };
              },
            );

            return {
              ...customer,
              mentions: messagesResult.length,
              lastConversationsFormatted,
            };
          });

          setCustomers(mapCustomer);
        });
    });
  }, []);

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  const handleSetCustomerChannels = useCallback(
    (handleChat: IChat[]) => {
      const contactsMap = contactsData.map((contact) => {
        let count = 0;
        handleChat.filter((chat) => {
          if (chat.channel === contact.channel) {
            chat.messages.filter((msgSeen) => {
              if (msgSeen.seen === false) {
                count += 1;
                return true;
              }
              return false;
            });
            return true;
          }
          return false;
        });
        return { ...contact, mentions: count };
      });

      setContactsCustomer(contactsMap);
    },
    [contactsData],
  );

  function handleCountMentions(msg: IChat): number {
    return msg.messages.filter((email) => email.seen === false).length;
  }

  const handleSetCustomerChat = useCallback(
    (channel) => {
      const currentCannelChat = chatData.filter(
        (chat) =>
          chat.customer === selectedCustomer?.id && chat.channel === channel,
      );

      setCustomerChat(currentCannelChat);
    },
    [selectedCustomer, chatData],
  );

  const handleSelectChannel = useCallback(
    (channel) => {
      if (channel === selectedChannel) {
        return;
      }
      setSelectedChannel(channel);
      handleSetCustomerChat(channel);
    },
    [selectedChannel, handleSetCustomerChat],
  );

  const handleSelectCustomer = useCallback(
    (customer) => {
      if (customer.id === selectedCustomer?.id) {
        return;
      }

      const customerChatFilter = chatData.filter((chat) => {
        return chat.customer === customer.id;
      });

      setCustomerChat([]);

      setSelectedCustomer(customer);

      if (customerChatFilter) {
        handleSetCustomerChannels(customerChatFilter);
      }
    },
    [chatData, handleSetCustomerChannels, selectedCustomer],
  );

  return (
    <Container>
      <ContentSidebar>
        {/* content user info */}

        <ContentUser>
          <img src={user?.photo} alt={user?.name} />
          <UserInfo>
            <strong>{user?.name}</strong>
            <span>{user?.company}</span>
          </UserInfo>
          <button type="button" onClick={signOut}>
            <FaCaretDown />
          </button>
        </ContentUser>

        <ContentSearch>
          <input name="search" />
          <FaSearch />
        </ContentSearch>

        {/* sidebar customers */}

        <ContentCustomers>
          <ContentCustomersHeader>
            <strong>Clientes</strong>
            <FaPlus />
          </ContentCustomersHeader>

          <Customers>
            {customers?.map((customer) => (
              <Customer
                key={customer.id}
                selected={selectedCustomer?.id === customer.id}
                customer={{
                  name: customer.name,
                  company: customer.company,
                  photo: customer.photo,
                  mentions: customer.mentions,
                }}
                onClick={() => handleSelectCustomer(customer)}
              />
            ))}
          </Customers>
        </ContentCustomers>
      </ContentSidebar>

      {/* sidebar contacts */}

      <ContentAttendance>
        <SidebarChannel>
          {selectedCustomer && selectedCustomer ? (
            <>
              {contactsCustomer?.map(({ channel, type, mentions }) => (
                <ChannelsContact
                  key={channel}
                  typeBtn={type}
                  selected={selectedChannel === channel}
                  mentions={mentions}
                  onClick={() => handleSelectChannel(channel)}
                />
              ))}
            </>
          ) : (
            <>
              {contactsData?.map(({ channel, type }) => (
                <ChannelsContact
                  key={channel}
                  typeBtn={type}
                  selected={selectedChannel === channel}
                  onClick={() => handleSelectChannel(channel)}
                />
              ))}
            </>
          )}
        </SidebarChannel>

        <ContentMessagesData>
          {/* content chat  whatsapp */}
          {selectedChannel === 1 && (
            <>
              {/* content header chat */}
              <SearchBarMessage />

              <ContentMessages ref={messageRef}>
                {!!customerChat.length && (
                  <ContentStartAttendance>
                    <p>
                      Atendimento iniciado em{' '}
                      <strong>{customerChat[0]?.startFormatted}</strong>
                    </p>
                    <span />
                  </ContentStartAttendance>
                )}

                {customerChat[0]?.messagesFormatted.map((msgChat) => (
                  <ChannelMessage
                    key={msgChat.timestamp}
                    typeMessage={msgChat.type}
                    seen={msgChat.seen}
                    content={msgChat.body}
                    name={
                      msgChat.type === 'incoming'
                        ? selectedCustomer?.name
                        : user?.name
                    }
                    imgAvatar={
                      msgChat.type === 'incoming'
                        ? selectedCustomer?.photo
                        : user?.photo
                    }
                    date={msgChat.timestampFormatted}
                  />
                ))}
              </ContentMessages>

              {/* Footer send message */}
              <FooterChat />
            </>
          )}

          {/* content chat  email */}
          {selectedChannel === 2 && (
            <>
              {/* content header chat */}
              <SearchBarEmail />

              <HeaderListEmails />

              <ContentEmails ref={messageRef}>
                {customerChat.map((msgEmail) => (
                  <EmailCard
                    key={msgEmail.id}
                    title={msgEmail.subject || ''}
                    start_date={msgEmail.startFormatted}
                    timestamp={msgEmail.startFormatted}
                    mentions={handleCountMentions(msgEmail)}
                  />
                ))}
              </ContentEmails>
            </>
          )}
        </ContentMessagesData>

        {/* Sidebar Info Customer */}

        <ContentCustomerInfo>
          {selectedCustomer && (
            <>
              <CustomerInfoData>
                <img
                  src={selectedCustomer?.photo}
                  alt={selectedCustomer?.name}
                />
                <CustomerInfo>
                  <strong>{selectedCustomer?.name}</strong>
                  <span>{selectedCustomer?.company}</span>
                </CustomerInfo>
              </CustomerInfoData>
              <ButtonsWrapper>
                <button type="button" className="btn-edit">
                  <FaPencilAlt />
                </button>
                <button type="button" className="btn-delete">
                  <FaTrashAlt />
                </button>
              </ButtonsWrapper>
            </>
          )}
          <ContentLastAttendance>
            {selectedCustomer?.lastConversationsFormatted && (
              <>
                <HeaderLastAttendance>ÚLTIMAS CONVERSAS</HeaderLastAttendance>
                {selectedCustomer?.lastConversationsFormatted.map((last) => (
                  <LastAttendance key={last.finishedAt}>
                    <IconAttendance
                      className={contactsCustomer[last.channel - 1]?.type}
                    />
                    <span>
                      {last.finishedAtFormatted}{' '}
                      {`(${last.daysago} dias atrás)`}
                    </span>
                  </LastAttendance>
                ))}
              </>
            )}
          </ContentLastAttendance>

          <ContentObservation>
            {selectedCustomer?.observations && (
              <>
                <HeaderObservation>OBSERVAÇÕES:</HeaderObservation>
                <span>{selectedCustomer?.observations}</span>
              </>
            )}
          </ContentObservation>
          <ContentCustomerContacts>
            {selectedCustomer?.contacts &&
              selectedCustomer?.contacts.map((contact) => (
                <ContactInfo key={contact.value}>
                  <IconCustomerContacts
                    className={contactsCustomer[contact.channel - 1]?.type}
                  />
                  <ContentRowContacts>
                    <strong>
                      {contactsCustomer[contact.channel - 1]?.type}
                    </strong>
                    <span>{contact.value}</span>
                  </ContentRowContacts>
                </ContactInfo>
              ))}
          </ContentCustomerContacts>
        </ContentCustomerInfo>
      </ContentAttendance>
    </Container>
  );
};

export default Dashboard;
