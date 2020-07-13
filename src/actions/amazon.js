import React from 'react'
import { Text,Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <div>
         <Text>hey Amazon is really awesome  !</Text>
         <Button url='https://www.amazon.in//'>Click here to Visit Amazon</Button>
      </div>
    )
   
  }
}