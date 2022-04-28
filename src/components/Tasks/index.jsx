import React from 'react';

import TaskInfo from './TaskInfo';
import TaskActions from './TaskActions';

import { TaskWrapper } from './styles'

export default function Tasks(props){
  return (
    <TaskWrapper>
      <TaskInfo 
        title = {props.title}
        subtitle = {props.subtitle}
      />
      <TaskActions />
    </TaskWrapper>
  )
}