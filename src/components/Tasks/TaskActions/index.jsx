import React from 'react'

import { FaCheck } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'

import { Button } from './style' 

export default function TaskActions(){
  return(
    <div>
      <Button>
        <FaCheck className='task-done' />
      </Button>

      <Button>
        <MdDeleteOutline className='remove-task'/>
      </Button>
  </div>
  )
}