import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface ChatInputProps {
  messageValue: string;
  setMessageValue: (message: string) => void;
  onMessageSent: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  messageValue,
  setMessageValue,
  onMessageSent,
}) => {

  const sendMessageHandler = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Send a message.."
        multiline
      />
      <TouchableOpacity
        style={styles.sendButton}
        onPress={sendMessageHandler}
      >
        <Icon name="send" size={s(10)} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: s(10),
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    marginRight: 10,
    marginBottom: 10
  },
  sendButton: {
    width: s(35),
    height: s(35),
    borderRadius: s(20),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
