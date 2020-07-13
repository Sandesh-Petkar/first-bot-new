import React from 'react'
import {Text,Reply} from '@botonic/react'

export default class extends React.Component{

    render(){
        return (
            <div>
                <Text>Welcome to sports-buzz</Text>
                <Text>
                which is your faviroute Sports
                <Reply payload='cricket'>Cricket</Reply>
                <Reply payload='football'>Football</Reply>
                <Reply payload='hockey'>Hockey</Reply>
                </Text>
            </div>
        )
        
    }
}