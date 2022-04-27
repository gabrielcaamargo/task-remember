import React from 'react';

import { TaskInfoWrapper, TaskTitle, TaskDescription } from './styles';

export default function TaskInfo(){
  return(
    <TaskInfoWrapper>
      <TaskTitle>
        Título da task
      </TaskTitle>

      <TaskDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquid alias et animi eos quibusdam soluta labore saepe, facere blanditiis aut rerum optio! Quisquam cum aut natus ab. Consequatur, quisquam.
      </TaskDescription>
    </TaskInfoWrapper>
  )
}