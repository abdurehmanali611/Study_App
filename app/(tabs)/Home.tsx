import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <ScrollView>
    <View style = {styles.overall}>
      <View style = {styles.secondcont}>
        <Text style = {styles.welcometxt}>Welcome, UserName</Text>
        <TouchableOpacity>
        <Image 
        source={require('../../assets/images/login.png')}
        style = {styles.logimage}
        />
        </TouchableOpacity>
      </View>
      <View>
        <Image 
        source={require('../../assets/images/online.jpg')}
        style = {styles.online}
        />
      </View>
      <View style = {styles.videocourselist}>
        <Text style = {styles.videocourse}>Video Courses</Text>
        <Image 
        source={require('../../assets/images/python.webp')}
        style = {styles.online}
        />
      </View>
      <View style = {styles.videocourselist}>
        <Text style = {styles.videocourse}>Resources</Text>
        <Image 
        source={require('../../assets/images/python.webp')}
        style = {styles.online}
        />
      </View>
      <View style = {styles.videocourselist}>
        <Text style = {styles.videocourse}>Project Ideas</Text>
        <Image 
        source={require('../../assets/images/python.webp')}
        style = {styles.online}
        />
      </View>
    </View>
    </ScrollView>
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
  logimage: {
    borderRadius: 20,
    width: 70,
    height: 70
  },
  secondcont: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 95
  },
  welcometxt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    width: 150
  },
  online: {
    borderRadius: 20, 
    height: 200, 
    width: 330
  },
  videocourse: {
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: 'medium',
  },
  videocourselist: {

  }
})


export default home