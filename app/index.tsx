import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

interface credential {
  Email: string,
  Password: string
}

const Login = () => {

  const navigation = useNavigation()

  const [credentials, setCredentials] = useState<credential>({
    Email: '',
    Password: ''
  })

  const handleChange = (name: string, value: string) => {

  setCredentials({...credentials, [name]: value})

  }

  const handleLog = () => {
    
    credentials.Email == '' || credentials.Password == '' || credentials.Email.includes('@') == false || credentials.Password.length < 6 ? 
    alert('Please Enter the required Fields'):
    navigation.navigate('(tabs)')

    setCredentials({
      Email: '',
      Password: ''
    })

  }

  return (

    <View style = {styles.overall}>
      <MaterialIcons name='school' size={150}/>
      <View style = {styles.inputs}>
        <Text style = {styles.texts}>Email: </Text>
        <TextInput 
        placeholder='Email Address'
        textContentType='emailAddress'
        style = {styles.text_input}
        value={credentials.Email}
        onChangeText={(text: string) => handleChange('Email', text)}
        />
        <Text style = {styles.texts}>Password: </Text>
        <TextInput 
        placeholder='Password'
        textContentType='password'
        style = {styles.text_input}
        value={credentials.Password}
        onChangeText={(text: string) => handleChange('Password', text)}        />
      </View>
        <TouchableOpacity 
        style = {styles.button_family}
        onPress={handleLog}
        >
          <Text style = {styles.texts}>Login</Text>
        </TouchableOpacity>
    </View>
    
  )
}


const styles = StyleSheet.create({
  overall: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs: {
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    flexDirection: 'column',
    gap: 10,
    marginVertical: 20
  },
  texts: {
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  text_input: {
    backgroundColor: `rgba(120,120,120,0.3)`,
    width: 290,
    height: 53,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 20
  },
  button_family: {
    backgroundColor: `rgba(120,130,120,0.6)`,
    borderRadius: 20,
    width: 120, 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login