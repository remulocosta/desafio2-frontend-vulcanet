import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  animation: ${appearFromLeft} 0.5s;

  & > img {
    width: 100%;
    padding: 0 20px;
  }

  form {
    margin: 16px 0;
    width: 296px;
    text-align: center;

    a {
      color: #999999;
      display: block;
      margin-top: 20px;
      font-size: 15px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const ContentChannels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 20px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat;
  background-size: cover;
`;
