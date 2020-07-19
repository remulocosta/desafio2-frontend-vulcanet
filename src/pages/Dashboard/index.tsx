import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaCaretDown, FaPlus, FaSearch } from 'react-icons/fa';

import { format, fromUnixTime } from 'date-fns';

import ChannelsContact from '../../components/ChannelsContact';
import Customer from '../../components/Customer';
import { Image, Copy, Mic, Plane } from '../../components/IconsSVG';
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
  mentions: number;
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
  const [contacts, setContacts] = useState<IContact[]>([]); // contacts
  const [chatData, setChatData] = useState<IChat[]>([]); // chat data
  const [customers, setCustomers] = useState<ICustomer[]>([]); // Lista de clientes retornado da api

  const [chatDataCustomer, setChatDataCustomer] = useState<IChat[]>(); // chat data customer
  const [contactsCustomer, setContactsCustomer] = useState<IContact[]>([]);
  const [customersChat, setCustomersChat] = useState<IChat[]>([]);

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();
  const [selectedChannel, setSelectedChannel] = useState(1);

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    // request data user -> refatorar
    (async () => {
      const resp = await api.get('/user');
      const requestUser = resp.data;

      if (requestUser) {
        setUser(requestUser);
      }
    })();

    // request data constants
    (async () => {
      const resp = await api.get('/contacts');
      const requestContacts = resp.data;

      if (requestContacts) {
        setContacts(requestContacts);
      }
    })();

    // request data chat
    (async () => {
      api.get<IChat[]>('/chats').then((response) => {
        const chatFormatted = response.data.map((chat) => {
          return {
            ...chat,
            startFormatted: format(fromUnixTime(chat.start), 'dd/MM/yyyy'),
            messagesFormatted: chat.messages.map((message) => {
              return {
                ...message,
                timestampFormatted: format(
                  fromUnixTime(message.timestamp),
                  "dd/MM/yyyy hh'h'mm",
                ),
              };
            }),
            // .flat(),
          };
        });

        setChatData(chatFormatted);
      });
    })();

    // request data customers
    (async () => {
      const resp = await api.get('/customers');
      const requestCustomers = resp.data;

      if (requestCustomers) {
        setCustomers(requestCustomers);
      }

      return resp;
    })();
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

      const customerChatFilter = chatData.filter(
        (chat) => chat.customer === customer.id,
      );

      setSelectedCustomer(() => customer);
      setChatDataCustomer(customerChatFilter);
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
                  // mentions: 2,
                  mentions: Math.floor(Math.random() * 1101),
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
              {contacts?.map(({ channel, type, mentions }) => (
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
              {contacts?.map(({ channel, type }) => (
                <ChannelsContact
                  key={channel}
                  typeBtn={type}
                  selected={selectedChannel === channel}
                  // mentions={Math.floor(Math.random() * 1101)}
                  mentions={Math.floor(Math.random() * 11)}
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
              <h2>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
              </h2>
            </ContentStartAttendance>
            <ContentStartAttendance>
              <h2>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
                <span>Featured producfewfwefwefwets</span>
              </h2>
            </ContentStartAttendance>

            <ContentStartAttendance>
              <h2>
                <span>Featured producfewfwefwefwets</span>
              </h2>
            </ContentStartAttendance>
          </ContentMessages>

          <InputWrapper>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              name="send-message"
            />
            <ContentButtonsSendMessage>
              <button type="button">
                <Image />
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
