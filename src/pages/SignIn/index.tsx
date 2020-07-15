import React, { useRef, useCallback } from 'react';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';
// import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Email from '../../assets/email.png';
import logoImg from '../../assets/pecaZap-positivo.svg';
import Skype from '../../assets/skype.png';
import Telefone from '../../assets/telefone.png';
import Webchat from '../../assets/webchat.png';
import Whatsapp from '../../assets/whatsapp.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
// import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErros';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
  ContentChannels,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // const { signIn } = useAuth();
  // const { addToast } = useToast();
  // const history = useHistory();

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

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        // return ;
      }
      // addToast({
      //   type: 'error',
      //   title: 'Erro na autenticação',
      //   description:
      //     'Ocorreu um erro ao fazer o login, cheque as credenciais.',
      // });
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="pecaZap" />

          <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
            <ContentChannels>
              <img src={Whatsapp} alt="Whatsapp" />
              <img src={Skype} alt="Skype" />
              <img src={Email} alt="Email" />
              <img src={Telefone} alt="Telefone" />
              <img src={Webchat} alt="Webchat" />
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
