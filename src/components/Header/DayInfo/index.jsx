import React from 'react';

import { DayHour, WeekDay } from './styles';

export default function DayInfo(){
  return(
    <div>
      <DayHour>
        9:00
      </DayHour>

      <WeekDay>
        Wednesday
      </WeekDay>
    </div>
  )
}