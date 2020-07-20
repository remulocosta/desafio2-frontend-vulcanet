import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaCaretDown, FaPlus, FaSearch } from 'react-icons/fa';

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
  timestampFormatted?: string;
  body: string;
  type: string;
}

interface IChat {
  id: number;
  customer: number;
  channel: number;
  subject: string | null;
  start: number;
  startFormatted?: string;
  messages: IMessage[];
  messagesFormatted?: IMessage[];
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<IUser>(); // usuário retornado da api
  const [contactsData, setContactsData] = useState<IContact[]>([]); // contacts
  const [chatData, setChatData] = useState<IChat[]>([]); // chat data
  const [customers, setCustomers] = useState<ICustomer[]>([]); // Lista de clientes retornado da api

  const [chatDataCustomer, setChatDataCustomer] = useState<IChat | null>(null); // chat data customer
  const [contactsCustomer, setContactsCustomer] = useState<IContact[]>([]);
  const [customersChat, setCustomersChat] = useState<IChat[]>([]);

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedChannel, setSelectedChannel] = useState(1);

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

  const handleSelectChannel = useCallback((channel) => {
    setSelectedChannel(channel);
  }, []);

  const handleSelectCustomer = useCallback(
    (customer) => {
      if (customer.id === selectedCustomer?.id) {
        return;
      }

      const customerChatFilter = chatData.filter((chat) => {
        return chat.customer === customer.id;
      })[0];

      setSelectedCustomer(() => customer);

      if (customerChatFilter) {
        setChatDataCustomer(() => customerChatFilter);
        console.log(customerChatFilter);
      }
    },
    [chatData, selectedCustomer],
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
            <ContentStartAttendance>
              <p>
                Atendimento iniciado em <strong>{chatDataCustomer}</strong>
              </p>
              <span />
            </ContentStartAttendance>

            <ChannelMessage typeMessage="income" seen />
            <ChannelMessage typeMessage="outcome" />
            <ChannelMessage typeMessage="income" seen />
            <ChannelMessage typeMessage="outcome" />
            <ChannelMessage typeMessage="income" />
            <ChannelMessage typeMessage="outcome" />
            <ChannelMessage typeMessage="outcome" />
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
          <div>
            <h2>
              <span>Featured producfewfwefwefwets</span>
            </h2>
          </div>
        </ContentCustomerInfo>
      </ContentAttendance>
    </Container>
  );
};

export default Dashboard;
