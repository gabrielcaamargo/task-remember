import React from 'react';

import DayInfo from './DayInfo';
import AddTask from './AddTask';

import { HeaderWrapper } from './style';

export default function Header(){
  return(
    <HeaderWrapper>
      <DayInfo />
      <AddTask />
    </HeaderWrapper>
  )
}