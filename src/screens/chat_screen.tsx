import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/app_header'
import SentMessageCard from '../components/sent_message_card'
import ResponseMessageCard from '../components/response_message_card'

const ChatScreen = () => {
  return (
    <View>
      <AppHeader />
      <SentMessageCard message='Hello AI'/>
      <ResponseMessageCard message='Hi, how are you?'/>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})