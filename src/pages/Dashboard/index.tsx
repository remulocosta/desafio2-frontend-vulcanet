import React from 'react';
import { FaCaretDown, FaPlus, FaSearch } from 'react-icons/fa';

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
  Customer,
  CustomerInfo,
} from './styles';

const Dashboard: React.FC = () => {
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
            <Customer className="active">
              <img
                src="https://ui-avatars.com/api/?name=Joao+Silva"
                alt="User"
              />
              <CustomerInfo>
                <strong>João da Silva</strong>
                <span>ACME INC</span>
              </CustomerInfo>
              <span>8</span>
            </Customer>
            <Customer>
              <img
                src="https://ui-avatars.com/api/?name=Carlos+Correa"
                alt="User"
              />
              <CustomerInfo>
                <strong>Carlos Correa</strong>
                <span>Premium peças</span>
              </CustomerInfo>
            </Customer>
          </Customers>
        </ContentCustomers>
      </ContentSidebar>

      <ContentAttendance>
        <p>ContentAttendance</p>
      </ContentAttendance>
    </Container>
  );
};

export default Dashboard;
