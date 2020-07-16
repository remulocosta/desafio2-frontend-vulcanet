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
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 280px;
  height: 38px;
  display: flex;
  align-items: center;
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
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }
`;

export const Customers = styled.div``;

export const ContentAttendance = styled.main`
  flex: 1;
  margin-top: 10px;
  background-color: var(--background);
  border-radius: 20px 0px 0px 0px;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentChannels = styled.div`
  display: flex;
  flex-direction: column;

  width: 64px;
  height: 100%;

  background: var(--secondary);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);
  border-radius: 20px 0px 0px 0px;

  > :first-child {
    border-radius: 20px 0px 0px 0px;
  }

  button {
    position: relative;
    border: 0;
    background: transparent;

    width: 64px;
    height: 64px;

    svg {
      width: 64px;
      height: 64px;
      padding: 19px;

      span {
        color: #000;
        z-index: -1;
        position: absolute;
      }

      &.calendar {
        color: var(--blue);

        &:hover {
          color: var(--white);
          background: var(--blue);
          border-radius: 20px 0px 0px 0px;
        }
      }

      &.whatsapp {
        color: var(--whatsapp);

        &.selected,
        &:hover {
          color: var(--white);
          background: var(--whatsapp);
        }
      }

      &.email {
        color: var(--email);

        &.selected,
        &:hover {
          color: var(--white);
          background: var(--email);
        }
      }

      &.skype {
        color: var(--skype);

        &.selected,
        &:hover {
          color: var(--white);
          background: var(--skype);
        }
      }

      &.telefone {
        color: var(--telefone);

        &.selected,
        &:hover {
          color: var(--white);
          background: var(--telefone);
        }
      }

      &.webchat {
        color: var(--webchat);

        &.selected,
        &:hover {
          color: var(--white);
          background: var(--webchat);
        }
      }
    }

    span {
      position: absolute;
      top: calc(100% - 20px);
      left: calc(100% - 20px);

      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 16px;
      min-height: 16px;
      padding: 0;

      background: var(--red);
      color: var(--white);
      border-radius: 50%;
      border: 2px solid var(--border);

      font-size: 10px;
      font-weight: bold;
    }
  }
`;
