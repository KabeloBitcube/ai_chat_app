import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../components/app_header';
import SentMessageCard from '../components/sent_message_card';
import ResponseMessageCard from '../components/response_message_card';
import { MESSAGE_RECEIVED, MESSAGE_SENT } from '../constants/chat';
import ChatInput from '../components/chat_input';

interface Message {
  id: number;
  message: string;
  type: string;
}

const ChatScreen = () => {
  const messageList: Message[] = [
    {
      message: 'Hello',
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

  const [messages, setMessage] = useState<Message[]>(messageList);
  const [messageInput, setMessageInput] = useState('');

  const onSendMessage = () => {
    setMessage(prevMessages => {
      return [
        ...prevMessages,
        {
          message: messageInput,
          id: prevMessages.length + 1,
          type: MESSAGE_SENT,
        },
      ];
    });

    setTimeout(() => {
      onGetResponse('This is a dummy response from the bot.');
    }, 2000);
  };

  const onGetResponse = (response: string) => {
    setMessage(prevMessages => {
      return [
        ...prevMessages,
        {
          message: response,
          id: prevMessages.length + 1,
          type: MESSAGE_RECEIVED,
        },
      ];
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
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
        <ChatInput
          messageValue={messageInput}
          setMessageValue={setMessageInput}
          onMessageSent={onSendMessage}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
