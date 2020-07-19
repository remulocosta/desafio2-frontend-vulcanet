import styled from 'styled-components';

import { Calendar } from '../IconsSVG';

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
`;

export const CalendarImage = styled(Calendar)`
  width: 64px;
  height: 64px;

  padding: 20px;

  color: var(--blue);
`;
