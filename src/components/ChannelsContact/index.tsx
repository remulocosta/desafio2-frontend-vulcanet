import React, { ButtonHTMLAttributes } from 'react';

import EmailButton from './EmailButton';
import SkypeButton from './SkypeButton';
import TelefoneButton from './TelefoneButton';
import WebchatButton from './WebchatButton';
import WhatsappButton from './WhatsappButton';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IChannelProps {
  typeBtn: string;
  selected?: boolean;
  mentions?: number;
}

const ChannelsContact: React.FC<IChannelProps & ButtonProps> = ({
  typeBtn,
  selected,
  mentions,
  ...rest
}) => {
  const getButton = [
    {
      type: 'whatsapp',
      button: (
        <WhatsappButton selected={selected} mentions={mentions} {...rest} />
      ),
    },
    {
      type: 'email',
      button: <EmailButton selected={selected} mentions={mentions} {...rest} />,
    },
    {
      type: 'telefone',
      button: (
        <TelefoneButton selected={selected} mentions={mentions} {...rest} />
      ),
    },
    {
      type: 'skype',
      button: <SkypeButton selected={selected} mentions={mentions} {...rest} />,
    },
    {
      type: 'webchat',
      button: (
        <WebchatButton selected={selected} mentions={mentions} {...rest} />
      ),
    },
  ];

  const requestButton = getButton.find((te) => te.type === typeBtn)?.button;

  return requestButton || null;
};

export default ChannelsContact;
