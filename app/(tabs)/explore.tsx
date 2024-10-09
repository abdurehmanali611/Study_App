import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.paragraph}>
          Welcome to Study Pal! Our mission is to empower students and lifelong learners with the tools they need to excel in their studies. Study Pal is designed to help you manage your study routine efficiently, stay organized, and achieve your academic goals. Whether you're a high school student, a college student, or someone pursuing continuous education, Study Pal is here to support your journey.
        </Text>
        <Text style={styles.paragraph}>
          Our app offers a variety of features tailored to enhance your study experience. From customizable study schedules and reminders to collaborative study groups and resource sharing, we aim to cover all aspects of your academic needs. We understand that every learner is unique, and our goal is to provide a flexible platform that adapts to different learning styles and preferences.
        </Text>
        <Text style={styles.paragraph}>
          At Study Pal, we believe in the power of community and collaboration. By connecting with fellow learners, you can share knowledge, seek advice, and find motivation to stay on track. Our platform is built with a user-friendly interface that makes it easy to navigate and utilize all the features available. We are committed to continuously improving Study Pal based on user feedback and technological advancements.
        </Text>
        <Text style={styles.paragraph}>
          The creation of Study Pal was driven by our shared passion for education and technology. With a strong background in software development, we combined our skills and vision to build a tool that truly makes a difference in the lives of students. We are dedicated to ensuring that Study Pal remains a valuable resource for all learners, helping them to achieve their academic aspirations and beyond.
        </Text>
        <Text style={styles.subtitle}>Our Team</Text>
        <Text style={styles.paragraph}>Meet the founders of Study Pal:</Text>
        <View style={styles.teamContainer}>
          <View style={styles.member}>
            <Image
              source={require('../../assets/images/abdu.webp') }
              style={styles.image}
            />
            <Text style={styles.name}>Abdurehman Ali</Text>
            <Text style={styles.role}>Co-Founder & Developer</Text>
          </View>
          <View style={styles.member}>
            <Image
              source={require('../../assets/images/rohobot.webp')}
              style={styles.image}
            />
            <Text style={styles.name}>Rohbot Haile</Text>
            <Text style={styles.role}>Co-Founder & Developer</Text>
          </View>
          <View style={styles.member}>
            <Image
              source={require('../../assets/images/eyob.webp')}
              style={styles.image}
            />
            <Text style={styles.name}>Eyob</Text>
            <Text style={styles.role}>Co-Founder & Developer</Text>
          </View>
        </View>
        <Text style={styles.paragraph}>
          We love hearing from our users! If you have any questions, feedback, or suggestions, please reach out to us. Together, we can make Study Pal the best study companion for students everywhere.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@studypal.com')}>
          <Text style={styles.contact}>contact@studypal.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  content: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D4ED8',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  member: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  role: {
    fontSize: 14,
    color: '#6B7280',
  },
  contact: {
    fontSize: 16,
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default explore;
