import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style = {styles.overall}>
        <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://your-logo-url.com/logo.png' }}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our company! We are dedicated to providing the best services to our clients.
        Our team is made up of experienced professionals who are passionate about their work.
        We believe in innovation, creativity, and customer satisfaction. Thank you for visiting our page!
      </Text>
    </ScrollView>
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
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  }
})

export default explore