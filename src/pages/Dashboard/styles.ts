import styled from 'styled-components';

import sidebarBackgroundImg from '../../assets/union.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
`;
export const ContentSidebar = styled.div`
  width: 310px;
  height: 100%;
  /* padding: 10px 15px 0 15px; */
  padding-top: 10px;
  background: url(${sidebarBackgroundImg}) no-repeat;
  /* background-position-y: calc(100% - 100px); */
  background-position-y: 668px;
  background-size: 120%;
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 15px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  button {
    width: 38px;
    height: 38px;
    margin-left: auto;
    background-color: transparent;
    border: 0;

    svg {
      opacity: 0.2;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    color: var(--white);
  }

  span {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--tertiary);
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  width: 280px;
  height: 38px;

  color: var(--white);
  margin: 10px 15px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--white);
    margin: 8px 0 8px 8px;
  }

  svg {
    width: 38px;
    height: 38px;
    padding: 12px;
    margin-left: 2px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }
`;

export const ContentCustomers = styled.div`
  margin-top: 10px;
`;

export const ContentCustomersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 38px;

  color: var(--white);
  padding: 0 15px 10px;

  strong {
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }

  svg {
    width: 38px;
    height: 38px;
    padding: 10px;
    margin-left: 2px;
    cursor: pointer;

    &:hover {
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Customers = styled.div``;

export const ContentAttendance = styled.main`
  display: flex;

  width: 100%;
  margin-top: 10px;

  background-color: var(--background);
  border-radius: 20px 0px 0px 0px;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentMessagesData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentMessagesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;

  background: var(--white);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 64px;

  margin-bottom: auto;

  background: var(--white);
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
  border-radius: 0px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--font-tertiary);
    margin: 8px 0 8px 30px;
  }
`;

export const ContentButtonsSendMessage = styled.div`
  display: flex;
  margin: 0 20px;

  button {
    width: 38px;
    height: 38px;

    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 16px;
    /* or 80% */

    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--unticked);

    &:hover {
      color: var(--font-tertiary);
    }
  }
`;

export const ContentCustomerInfo = styled.div`
  display: flex;
  width: 296px;

  background-color: var(--white);
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.02);
`;

export const ContentMessages = styled.div`
  padding: 20px 0 0 88px;

  border: 1px solid red;

  display: flex;
  flex: 1;
  flex-direction: column;

  max-height: calc(100% - 64px - 64px);
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const ContentStartAttendance = styled.div`
  position: relative;
  width: 100%;

  border: 1px solid green;

  h2 span {
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 15px;
    line-height: 16px;
    color: #636466;
    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }

  > h2:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.7em;
    border-top: 1px solid #dddddd;
    z-index: -1;
  }
`;
