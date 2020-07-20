import React, { useRef, useCallback } from 'react';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import email from '../../assets/email.png';
import logoImg from '../../assets/pecazap-positivo.png';
import skype from '../../assets/skype.png';
import telefone from '../../assets/telefone.png';
import webchat from '../../assets/webchat.png';
import whatsapp from '../../assets/whatsapp.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErros';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
  ContentChannels,
} from './styles';

interface ISignInFormData {
  usuario: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        usuario: Yup.string().required('login do Usuário obrigatório'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(3, 'No mínimo 3 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        // return ;
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="pecaZap" />

          <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
            <ContentChannels>
              <img src={whatsapp} alt="Whatsapp" />
              <img src={skype} alt="Skype" />
              <img src={email} alt="Email" />
              <img src={telefone} alt="Telefone" />
              <img src={webchat} alt="Webchat" />
            </ContentChannels>

            <Input name="usuario" icon={FaUser} placeholder="Usuário" />

            <Input
              name="password"
              icon={FaLock}
              type="password"
              placeholder="Senha"
            />

            <Button
              type="submit"
              containerStyle={{
                justifyContent: 'space-between',
                textTransform: 'uppercase',
              }}
            >
              Entrar
              <FaArrowRight size={20} />
            </Button>

            <a href="/#">Esqueceu a senha?</a>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
