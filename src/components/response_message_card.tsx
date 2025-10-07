import { StyleSheet, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { colors } from '../styles/colors'
import TypingEffect from './typing_effect'

interface ResponseMessageCardProps {
    message: string
}
const ResponseMessageCard: React.FC<ResponseMessageCardProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        {/* <Text style={styles.textMessage}>{message}</Text> */}
        <TypingEffect text={message} style={styles.textMessage}/>
      </View>
    </View>
  )
}

export default ResponseMessageCard

const styles = StyleSheet.create({
    container: {
        marginVertical: s(4),
        marginHorizontal: s(8),
        paddingBottom: vs(12),
    },
    messageContainer: {
        backgroundColor: colors.mediumGrey,
        borderRadius: s(20),
        maxWidth: '80%',
        padding: s(12)
    },
    textMessage: {
        fontSize: s(16),
        color: colors.white
    }
})