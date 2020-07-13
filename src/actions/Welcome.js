import React from 'react'
 import{Text,Reply} from '@botonic/react'

 export default class extends React.Component{
     render(){
         return(
         <div>
             <Text>welcome to our service</Text>
             <Text>
          Which E-coomerce website do you prefer
          <Reply payload='amazon'>Amazon</Reply>
          <Reply payload='flipkart'>Flipkart</Reply>
        </Text>
         </div>
         )
     }
 }