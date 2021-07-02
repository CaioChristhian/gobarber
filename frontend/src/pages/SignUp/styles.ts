import styled from "styled-components";
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
    margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.1s;

      &:hover {
        color: ${shade(0.2,'#F4EDE8')};
      }
    }
  }

  > a {
    color: #F4EDE8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.1s;

    display: flex;

    align-items: center;

    &:hover {
      color: ${shade(0.2,'#F4EDE8')};
    }
  }

  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;