import React from 'react';

import { ContentChannels, CalendarImage } from './styles';

const SidebarChannels: React.FC = ({ children }) => {
  return (
    <ContentChannels>
      <CalendarImage />
      {children}
    </ContentChannels>
  );
};

export default SidebarChannels;
