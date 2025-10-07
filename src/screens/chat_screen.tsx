import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../components/app_header';
import SentMessageCard from '../components/sent_message_card';
import ResponseMessageCard from '../components/response_message_card';
import { MESSAGE_RECEIVED, MESSAGE_SENT } from '../constants/chat';

const ChatScreen = () => {
  const messageList = [
    {
      message: 'Hello AI',
      id: 1,
      type: MESSAGE_SENT,
    },
    {
      message: 'Hi, how may I help you today?',
      id: 2,
      type: MESSAGE_RECEIVED,
    },
    {
      message: 'Tell me a joke',
      id: 3,
      type: MESSAGE_SENT,
    },
  ];

  const [messages, setMessage] = useState(messageList);

  return (
    <View>
      <AppHeader />
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return item.type === 'SENT' ? (
            <SentMessageCard message={item.message} />
          ) : (
            <ResponseMessageCard message={item.message} />
          );
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
