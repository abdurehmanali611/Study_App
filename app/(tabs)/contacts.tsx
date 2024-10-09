import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const contacts = () => {
  return (
    <View style = {styles.overall}>
      <Text style = {styles.title}>Get In Touch With US</Text>
      <View>
      <View>
        <Text style = {styles.texts}>Full Name:</Text>
        <TextInput 
        placeholder='Your Name'
        textContentType='givenName'
        style = {styles.input}
        />
      </View>
      <View>
        <Text style = {styles.texts}>Email:</Text>
        <TextInput 
        placeholder='Your Email'
        textContentType='emailAddress'
        style = {styles.input}
        />
      </View>
      <View>
        <Text style = {styles.texts}>Subject:</Text>
        <TextInput 
        placeholder='Your issue title'
        textContentType='none'
        style = {styles.input}
        />
      </View>
      <View>
        <Text style = {styles.texts}>Message:</Text>
        <TextInput 
        placeholder='Your Message'
        textContentType='none'
        style = {styles.message}
        />
      </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'serif',
    fontWeight: 'semibold'
  },
  texts: {
      fontSize: 18,
      fontFamily: 'serif',
      fontStyle: 'italic'
  },
  input: {
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      fontSize: 16,
      borderRadius: 25
  },
  message: {
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      fontSize: 16,
      borderRadius: 25,
      height: 150,
      textAlignVertical: 'top'
  }
})

export default contacts