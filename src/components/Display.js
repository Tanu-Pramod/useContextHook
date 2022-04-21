import React, { useContext } from 'react'
import {countContext} from '../App';

function Display() {
  const {count} = useContext(countContext);
  return (
    <div>
      {count}

    </div>
  )
}

export default Display;
