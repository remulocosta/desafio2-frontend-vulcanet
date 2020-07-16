import React, { useState, useCallback } from 'react';
import { FaCaretDown, FaPlus, FaSearch } from 'react-icons/fa';

import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Skype } from '../../assets/skype.svg';
import { ReactComponent as Telefone } from '../../assets/telefone.svg';
import { ReactComponent as Webchat } from '../../assets/webchat.svg';
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import Customer from '../../components/Customer';
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
  ContentChannels,
} from './styles';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState(1);
  const [selectedChannel, setSelectedChannel] = useState('whatsapp');

  const selectCustomer = useCallback((id) => {
    setSelected(id);
  }, []);

  const selectChannel = useCallback((channel) => {
    setSelectedChannel(channel);
  }, []);

  return (
    <Container>
      <ContentSidebar>
        <ContentUser>
          <img
            src="https://ui-avatars.com/api/?name=Carlos+Correa"
            alt="User"
          />
          <UserInfo>
            <strong>Carlos Correa</strong>
            <span>Premium peças</span>
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
            <Customer
              selected={selected === 1}
              customer={{
                name: '1 Pedro Henrique',
                company: 'ACME INC',
                photo: 'https://ui-avatars.com/api/?name=Joao+Silva',
                mentions: 3,
              }}
              onClick={() => selectCustomer(1)}
            />
            <Customer
              selected={selected === 2}
              customer={{
                name: '2 Pedro Henrique de jesus melo e silva',
                company: 'ACME INC',
                photo: 'https://ui-avatars.com/api/?name=Joao+Silva',
                mentions: 0,
              }}
              onClick={() => selectCustomer(2)}
            />
            <Customer
              selected={selected === 3}
              customer={{
                name: ' 3 Pedro Henrique',
                company: 'ACME INC',
                photo: 'https://ui-avatars.com/api/?name=Joao+Silva',
                mentions: 2,
              }}
              onClick={() => selectCustomer(3)}
            />
          </Customers>
        </ContentCustomers>
      </ContentSidebar>

      <ContentAttendance>
        <ContentChannels>
          <button type="button">
            <Calendar className="calendar" />
          </button>
          <button type="button" onClick={() => selectChannel('whatsapp')}>
            <Whatsapp
              className={
                selectedChannel === 'whatsapp'
                  ? 'whatsapp selected'
                  : 'whatsapp'
              }
            />
            <span>3</span>
          </button>
          <button type="button" onClick={() => selectChannel('email')}>
            <Email
              className={
                selectedChannel === 'email' ? 'email selected' : 'email'
              }
            />
            <span>1</span>
          </button>
          <button type="button" onClick={() => selectChannel('skype')}>
            <Skype
              className={
                selectedChannel === 'skype' ? 'skype selected' : 'skype'
              }
            >
              <span>3</span>
            </Skype>
          </button>
          <button type="button" onClick={() => selectChannel('telefone')}>
            <Telefone
              className={
                selectedChannel === 'telefone'
                  ? 'telefone selected'
                  : 'telefone'
              }
            />
          </button>
          <button type="button" onClick={() => selectChannel('webchat')}>
            <Webchat
              className={
                selectedChannel === 'webchat' ? 'webchat selected' : 'webchat'
              }
            />
          </button>
        </ContentChannels>
      </ContentAttendance>
    </Container>
  );
};

export default Dashboard;
