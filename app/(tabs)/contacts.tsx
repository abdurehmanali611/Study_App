import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const contacts = () => {
  return (
    <View style = {styles.overall}>
      <Text style = {styles.title}>Get In Touch With US</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    marginVertical: 50,
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'serif',
    fontWeight: 'semibold'
  }
})

export default contacts