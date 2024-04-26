import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const About_Us = () => {

    return <ScrollView style={styles.container}>
    <Text style={styles.header}>About Us</Text>
    <Text style={styles.subHeader}>Welcome to our project!</Text>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Abdurehman</Text>
      <Text style={styles.memberDescription}>
        Abdurehman brings a wealth of expertise in building and making functionable products.
        With a keen eye for detail, he ensures our project meets the highest standards.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Rohobot</Text>
      <Text style={styles.memberDescription}>
        Rohobot is a creative genius, specializing in making the project styling and beautifying it.
        Her innovative ideas and problem-solving skills drive our project's success.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Eyob</Text>
      <Text style={styles.memberDescription}>
        Eyob is a versatile team member, proficient in leadership and management of the project.
        His dedication and adaptability make him an invaluable asset to our team.
      </Text>
    </View>

    <View style={styles.memberContainer}>
      <Text style={styles.memberHeader}>Kalab</Text>
      <Text style={styles.memberDescription}>
        Kalab is our technical guru, excelling in communication for project helpers and providing usefull instruments.
        His knowledge and commitment keep our project running smoothly.
      </Text>
    </View>

    <View style = {{marginBottom: 10, height: 250}}>
    <Text style={styles.summary}>
      Together, we collaborate, brainstorm, and strive for excellence, aiming to create impactful
      solutions that make a difference. Our rank between us in developing these project is like the order
      listed above
    </Text>
    </View>
  </ScrollView>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 20,
  backgroundColor: randomRGB()
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},
subHeader: {
  fontSize: 18,
  marginBottom: 20,
},
memberContainer: {
  marginBottom: 20,
  backgroundColor: randomRGB(),
  borderRadius: 20
},
memberHeader: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
memberDescription: {
  fontSize: 16,
  lineHeight: 24,
},
summary: {
  fontSize: 16,
  paddingBottom: 20,
  backgroundColor: randomRGB(),
  borderRadius: 20
}
})

export default About_Us