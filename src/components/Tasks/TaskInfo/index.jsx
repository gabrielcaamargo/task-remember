import React from 'react';

import { TaskInfoWrapper, TaskTitle, TaskDescription } from './styles';

export default function TaskInfo({title, subtitle}){
  return(
    <TaskInfoWrapper>
      <TaskTitle>
        {title}
      </TaskTitle>

      <TaskDescription>
        {subtitle}
      </TaskDescription>
    </TaskInfoWrapper>
  )
}