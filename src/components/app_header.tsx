import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ChatApp</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        padding: 10,
        height: 100
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    }
})