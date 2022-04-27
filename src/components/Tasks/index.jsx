import React from 'react';

import TaskInfo from './TaskInfo';
import TaskActions from './TaskActions';

import { TaskWrapper } from './styles'

export default function Tasks(){
  return (
    <TaskWrapper>
      <TaskInfo />
      <TaskActions />
    </TaskWrapper>
  )
}