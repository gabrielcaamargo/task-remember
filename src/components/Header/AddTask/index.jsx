import React from 'react';

import { AddTaskButton, AddTaskText } from './style';

import { FaPlus } from 'react-icons/fa'

export default function AddTask(){
  return(
    <div>
      <AddTaskButton>
        <FaPlus className='plusIcon'/>
      </AddTaskButton>

      <AddTaskText>
        Add task
      </AddTaskText>
    </div>
  )
}