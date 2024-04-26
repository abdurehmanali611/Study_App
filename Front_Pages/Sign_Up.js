import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import {RadioButton} from 'react-native-paper'

const Sign_Up = ({navigation}) => {

   const [sex, setSex] = useState('')
   const [name, setName] = useState('')
   const [university, setUniversity] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const register = () => {

      if (name == '' || name.startsWith('_') || university == '' || university.startsWith('_') ||
      email == '' || email.startsWith('_') || password == '' || password.length < 6 ||
      sex == '') {
         
        Alert.alert(
            'Invalid Input',
            'You have entered an invalid input',
            [
                {text: 'OK'}
        ]
        )
      }else {
           navigation.navigate('Home')
      }
   }
  
  return <ScrollView 
   showsVerticalScrollIndicator = {false}
   style = {styles.overall}>
      <View style = {styles.viewall}>
      <View style = {styles.title}>
         <Text style = {styles.texttitle}>Register Here: </Text>
      </View>
      <View>
         <Text style = {styles.objecttext}>Full Name: </Text>
         <TextInput 
         value={name}
         onChangeText={(newname) => setName(newname)}
         style = {styles.textinput}
         placeholder='Your Name'
         textContentType='name'
         />
      </View> 
      <View>
         <Text style = {styles.objecttext}>University: </Text>
         <TextInput 
         value={university}
         onChangeText={(newuniversity) => setUniversity(newuniversity)}
         style = {styles.textinput}
         placeholder='University Name'
         textContentType='name'
         />
      </View> 
      <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
         <View style = {{justifyContent: 'center'}}>
            <Text>Sex: </Text>
         </View>
         <View>
       <RadioButton.Group
       value={sex}
       onValueChange={(yoursex) => setSex(yoursex)}
       >
          <RadioButton.Item 
          label='M'
          value='male'
          color='green'
          />
          <RadioButton.Item 
          label='F'
          value='female'
          color='red'
          />
       </RadioButton.Group>
       </View>
      </View>
      <View>
      <View>
         <Text style = {styles.objecttext}>Email: </Text>
         <TextInput 
         value={email}
         onChangeText={(newemail) => setEmail(newemail)}
         style = {styles.textinput}
         placeholder='Email'
         textContentType='emailAddress'
         />
      </View>
      <View>
         <Text style = {styles.objecttext}>Password: </Text>
         <TextInput 
         value={password}
         onChangeText={(newpassword) => setPassword(newpassword)}
         style = {styles.textinput}
         placeholder='Password'
         textContentType='password'
         />
      </View>
      </View>
      <View>
       <TouchableOpacity 
       style = {styles.press}
       onPress={register}
       >
          <Text>
             Register
          </Text>
       </TouchableOpacity>
      </View>
      </View>
     </ScrollView>
 
}


const randomRGB = () => {

   const red = Math.floor(Math.random() * 256)
   const green = Math.floor(Math.random() * 256)
   const blue = Math.floor(Math.random() * 256)

   return `rgb(${red},${green}, ${blue})`
}

const styles = StyleSheet.create ({

    overall : {
       paddingVertical: 10,
       backgroundColor: randomRGB(),
       paddingHorizontal: 20
    },
    title : {
        alignItems: 'center',
        marginVertical: 10
    },
    texttitle : {
        fontSize: 24,
        fontWeight: 'bold'
    },
    objecttext : {
        fontSize: 19,
        marginVertical: 10
    },
    textinput : {
        marginHorizontal: 30,
        borderRadius: 15,
        backgroundColor: randomRGB(),
        width: 300,
        height: 40,
        paddingLeft: 10,
        marginVertical: 7
    },
    press : {
      backgroundColor: randomRGB(),
      height: 50,
      width: 140,
      marginVertical: 10 ,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default Sign_Up