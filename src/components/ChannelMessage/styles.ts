import styled from 'styled-components';

import { Ticked } from '../IconsSVG';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 2px;

  &.income {
    align-items: flex-start;

    > header {
      width: calc(50% - 5px);
      height: 40px;

      justify-content: flex-start;
      align-items: center;

      font-size: 15px;
      line-height: 16px;
    }

    > p {
      position: relative;
      width: calc(50% - 5px);
      background: #fff;
      padding: 20px;
      border-radius: 0 10px 10px 10px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      font-size: 15px;
      line-height: 24px;
      color: #333333;
    }

    > p::after {
      content: '';
      position: absolute;
      top: 0;
      left: 8px;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-bottom-color: #fff;
      border-top: 0;
      border-left: 0;
      margin-left: -8px;
      margin-top: -16px;
    }
  }

  &.outcome {
    align-items: flex-end;

    > header {
      width: calc(50% - 5px);
      height: 40px;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      font-size: 15px;
      line-height: 16px;
    }

    > p {
      position: relative;
      width: calc(50% - 5px);
      background: #d1fadf;
      padding: 20px;
      border-radius: 10px 0 10px 10px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      font-size: 15px;
      line-height: 24px;
      color: #333333;
    }

    > p::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-bottom-color: #d1fadf;
      border-top: 0;
      border-right: 0;
      margin-left: -8px;
      margin-top: -16px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;

  margin-bottom: 12px;

  strong {
    margin-left: 10px;
    margin-right: 10px;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  time {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Avatar = styled.div`
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
export const Message = styled.section``;

export const Content = styled.div`
  width: 49%;
  font-size: 15px;
  line-height: 24px;
  color: #333333;

  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
`;

export const SeenIcon = styled(Ticked)`
  margin: 0 12px;
  color: var(--unticked);

  &.seen {
    color: var(--ticked);
  }
`;
