import styled from 'styled-components';

import Email from '../../assets/email.png';
import Skype from '../../assets/skype.png';
import Telefone from '../../assets/telefone.png';
import sidebarBackgroundImg from '../../assets/union.png';
import Webchat from '../../assets/webchat.png';
import Whatsapp from '../../assets/whatsapp.png';

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
    border-radius: 100px;
    margin-right: 10px;
    background-color: var(--gray);
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

export const ContentMessages = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  max-height: calc(100% - 64px - 64px);
  width: 100%;
  overflow-y: scroll;

  padding: 10px;

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
  display: flex;
  align-items: center;
  justify-content: center;

  span::before {
    content: '';
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 1px;

    left: 0;
    top: 50%;
    background: #dddddd;
  }

  p {
    z-index: 2;
    color: #636466;

    font-size: 15px;
    line-height: 16px;

    padding: 10px 24px;

    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;

    strong {
      color: #333333;
    }
  }
`;

export const ContentCustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;

  padding: 20px;

  background-color: var(--white);
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.02);
`;

export const CustomerInfoData = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);

  height: 70px;
  margin-bottom: 20px;

  & img {
    width: 64px;
    height: 64px;
    border-radius: 100px;
  }
`;

export const CustomerInfo = styled.div`
  display: flex;

  flex-direction: column;
  margin-left: 10px;

  & strong {
    font-weight: bold;
    font-size: 15px;
    line-height: 14px;
    margin-bottom: 6px;
  }

  & span {
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;

    color: var(--quinary);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    width: 123px;
    height: 38px;

    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px #e5e5e5;
    border-radius: 4px;
  }

  .btn-edit {
    color: var(--blue);
  }

  .btn-delete {
    color: var(--red);
  }
`;

export const ContentLastAttendance = styled.div`
  margin-top: 20px;
`;

export const HeaderLastAttendance = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;

  text-transform: uppercase;

  color: var(--quinary);
`;

export const IconAttendance = styled.div`
  color: var(--unticked);

  width: 16px;
  height: 16px;

  margin-right: 10px;

  background-size: contain, cover;

  &.whatsapp {
    background-image: url(${Whatsapp});
  }
  &.email {
    background-image: url(${Email});
  }
  &.skype {
    background-image: url(${Skype});
  }
  &.telefone {
    background-image: url(${Telefone});
  }
  &.webchat {
    background-image: url(${Webchat});
  }
`;

export const LastAttendance = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 0;
`;

export const ContentObservation = styled.div`
  & span {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Headerobservation = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;

  text-transform: uppercase;

  color: var(--quinary);
`;

export const ContentCustomerContacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const IconCustomerContacts = styled.div`
  color: var(--unticked);

  width: 24px;
  height: 24px;

  background-size: contain, cover;

  &.whatsapp {
    background-image: url(${Whatsapp});
  }
  &.email {
    background-image: url(${Email});
  }
  &.skype {
    background-image: url(${Skype});
  }
  &.telefone {
    background-image: url(${Telefone});
  }
  &.webchat {
    background-image: url(${Webchat});
  }
`;

export const ContentRowContacts = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--black);

  margin-left: 16px;

  strong {
    font-weight: bold;
    font-size: 12px;
    /* line-height: 18px; */

    text-transform: uppercase;

    color: var(--quinary);
  }

  span {
    font-size: 15px;
    /* line-height: 18px; */
  }
`;
