import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  FaCaretDown,
  FaPlus,
  FaSearch,
  FaTrashAlt,
  FaPencilAlt,
} from 'react-icons/fa';

import { format, fromUnixTime } from 'date-fns';

import ChannelMessage from '../../components/ChannelMessage';
import ChannelsContact from '../../components/ChannelsContact';
import Customer from '../../components/Customer';
import { Pic, Copy, Mic, Plane } from '../../components/IconsSVG';
import SearchBarMessage from '../../components/SearchBarMessage';
import SidebarChannel from '../../components/SidebarChannels';
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
  ContentMessagesData,
  ContentMessagesHeader,
  InputWrapper,
  ContentButtonsSendMessage,
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
  Headerobservation,
  ContentCustomerContacts,
  IconCustomerContacts,
  ContentRowContacts,
  ContactInfo,
} from './styles';

interface IUser {
  name: string;
  user: string;
  password: string;
  company: string;
  photo: string;
}

interface ICustomer {
  id: number;
  name: string;
  photo: string;
  company: string;
  lastConversations: [
    {
      channel: number;
      finishedAt: number;
      finishedAtFormatted: string;
    },
  ];
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
  const [user, setUser] = useState<IUser>(); // usuário retornado da api
  const [contactsData, setContactsData] = useState<IContact[]>([]); // contacts
  const [chatData, setChatData] = useState<IChat[]>([]); // chat data
  const [customers, setCustomers] = useState<ICustomer[]>([]); // Lista de clientes retornado da api

  const [contactsCustomer, setContactsCustomer] = useState<IContact[]>([]);
  const [customerChat, setCustomerChat] = useState<IChat[]>([]);

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedChannel, setSelectedChannel] = useState(0);

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const reqUserData = await api.get('/user');

      if (!reqUserData.data) {
        console.log('Erro: erro ao retornar user');
      }

      setUser(reqUserData.data);
    }

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

    loadUser();
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

            return { ...customer, mentions: messagesResult.length };
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
          if (chat.channel === contact.channel)
            return chat.messages.filter((msgSeen) => {
              if (msgSeen.seen === false) {
                count += 1;
                return true;
              }
            });
        });
        return { ...contact, mentions: count };
      });

      setContactsCustomer(contactsMap);
    },
    [contactsData],
  );

  const handleSetCustomerChat = useCallback(
    (channel) => {
      const currentCannelChat = chatData.filter((chat) => {
        if (
          chat.customer === selectedCustomer?.id &&
          chat.channel === channel
        ) {
          return true;
        }
      });

      setCustomerChat(() => currentCannelChat);
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

      setSelectedCustomer(() => customer);
      setCustomerChat(() => []);

      if (customerChatFilter) {
        handleSetCustomerChannels(customerChatFilter);
      }
    },
    [chatData, handleSetCustomerChannels, selectedCustomer],
  );

  return (
    <Container>
      <ContentSidebar>
        <ContentUser>
          <img src={user?.photo} alt={user?.name} />
          <UserInfo>
            <strong>{user?.name}</strong>
            <span>{user?.company}</span>
          </UserInfo>
          <button type="button">
            <FaCaretDown />
          </button>
        </ContentUser>

        <ContentSearch>
          <input name="search" />
          <FaSearch />
        </ContentSearch>

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
                  // mentions={Math.floor(Math.random() * 1101)}
                  onClick={() => handleSelectChannel(channel)}
                />
              ))}
            </>
          )}
        </SidebarChannel>

        <ContentMessagesData>
          <ContentMessagesHeader>
            <SearchBarMessage />
          </ContentMessagesHeader>

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

          <InputWrapper>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              name="send-message"
            />
            <ContentButtonsSendMessage>
              <button type="button">
                <Pic />
              </button>
              <button type="button">
                <Copy />
              </button>
              <button type="button">
                <Mic />
              </button>
              <button type="button">
                <Plane />
              </button>
            </ContentButtonsSendMessage>
          </InputWrapper>
        </ContentMessagesData>

        <ContentCustomerInfo>
          <CustomerInfoData>
            {/* <img src={selectedCustomer?.photo} alt={selectedCustomer?.name} /> */}
            <img
              src="https://ui-avatars.com/api/?name=Joao+Silva"
              alt="João da Silva"
            />
            <CustomerInfo>
              <strong>João da Silva</strong>
              <span>ACME INC</span>
              {/* <strong>{selectedCustomer?.name}</strong>
              <span>{selectedCustomer?.company}</span> */}
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

          <ContentLastAttendance>
            <HeaderLastAttendance>ÚLTIMAS CONVERSAS</HeaderLastAttendance>
            <LastAttendance>
              <IconAttendance className="whatsapp" />
              <span>25/09/2019 (10 dias atrás)</span>
            </LastAttendance>
            <LastAttendance>
              <IconAttendance className="whatsapp" />
              <span>25/09/2019 (10 dias atrás)</span>
            </LastAttendance>
            <LastAttendance>
              <IconAttendance className="skype" />
              <span>25/09/2019 (10 dias atrás)</span>
            </LastAttendance>
          </ContentLastAttendance>

          <ContentObservation>
            <Headerobservation>OBSERVAÇÕES:</Headerobservation>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              lacus, et potenti nisl viverra a, feugiat. Eget ultrices elit
              faucibus arcu volutpat vulputate.
            </span>
          </ContentObservation>

          <ContentCustomerContacts>
            <ContactInfo>
              <IconCustomerContacts className="whatsapp" />
              <ContentRowContacts>
                <strong>WHATSApp</strong>
                <span>remulo.costa@gmail.com</span>
              </ContentRowContacts>
            </ContactInfo>
            <ContactInfo>
              <IconCustomerContacts className="email" />
              <ContentRowContacts>
                <strong>WHATSApp</strong>
                <span>remulo.costa@gmail.com</span>
              </ContentRowContacts>
            </ContactInfo>
            <ContactInfo>
              <IconCustomerContacts className="skype" />
              <ContentRowContacts>
                <strong>WHATSApp</strong>
                <span>remulo.costa@gmail.com</span>
              </ContentRowContacts>
            </ContactInfo>
          </ContentCustomerContacts>
        </ContentCustomerInfo>
      </ContentAttendance>
    </Container>
  );
};

export default Dashboard;
