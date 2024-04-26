import { View, Text, 
  Image, StyleSheet, 
  ScrollView, TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  Alert} 
  from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const Home = ({navigation}) =>{

  this.animtedvalue = new Animated.Value(0);

  const [menubtn, setMenubtn] = useState(true)
  const [profilebtn, setProfilebtn] = useState(true)
  const [profiles, setProfiles] = useState(false)
  const [pages, setPages] = useState(false)
  const [isenabled, setEnabled] = useState(false)
  const [avatarSource, setAvatarSource] = useState(require('../assets/profile.png'));

  const selectProfilePhoto = () => {
    Alert.alert("Photo", "Select uploading or taking a picture", [
  {text: "Camera", onPress: () => cameratake()},
  {text: "Gallery", onPress: () => galleryupload()}])

  };

  const cameratake = async() => {
    let camerapermit = await ImagePicker.requestCameraPermissionsAsync()

    if (camerapermit.granted == false){
      Alert.alert("Need Permission", "You should give us a permission")
    }

    let cameralanuch = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true
    })

    if (!cameralanuch.canceled){
      setAvatarSource(cameralanuch.assets)
    }
  }

  const galleryupload = async () => {
    let gallerypermit = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (gallerypermit.granted == false){
      Alert.alert("Need Permission", "You should give us a permission")
    }

    let gallerylaunch = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
      allowsEditing: true
    })

    if (!gallerylaunch.canceled){
      setAvatarSource(gallerylaunch.assets)
    }
  }
  
startAnimation = () => {
  Animated.timing(this.animtedvalue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true
  }).start() 
  
}

  const menupressed = () => {

      if (profilebtn == false) {
        setProfilebtn(true)
        setProfiles(false)
        setMenubtn(!menubtn)
        setPages(!pages)
      }else {
        setMenubtn(!menubtn)
        setPages(!pages)
      }

  }


  const profilepressed = () => {

     if (menubtn == false) {
      setMenubtn(true)
      setPages(false)
     }

     setProfiles(!profiles)
     setProfilebtn(!profilebtn) 
  }

  return <ScrollView style = {[{animtedvalue}, isenabled && styles.nightmode]}>
  <TouchableWithoutFeedback onPress={() => {
    if (profiles == true || pages == true) {
      setProfiles(false)
      setPages(false)
      setMenubtn(true)
    }
  }}>  
    <View style = {styles.overall}>
    <View style = {styles.header_images}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('group_create')}>
              <Image 
              source={require('../assets/group.png')}
              style = {styles.menuimage}
              />
            </TouchableOpacity>
        <View style = {styles.profileoption}> 
        {profiles ? (
          <View>
            <TouchableOpacity onPress={profilepressed}>
            <Image 
            source={require('../assets/back.jpg')}
            style = {styles.back}
            />
          </TouchableOpacity>
          <View style = {[styles.profileelement, isenabled && styles.nightmode]}>
            <View style = {{marginVertical: 20, width: 250}}>
              <View>
          <Image 
          source={avatarSource}
          style = {styles.profile}
          />
        <View>
           <TouchableOpacity 
                onPress={selectProfilePhoto}>
                  <Image 
                  source={require('../assets/camera.jpg')}
                  style = {styles.camera}
                  />
                </TouchableOpacity>
              </View>
                <TouchableOpacity
                onPress={() => navigation.navigate('about')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>About Us</Text>
                </TouchableOpacity>
              </View>
              <View style = {{marginVertical: 10}}>
                <TouchableOpacity
                onPress={() => navigation.navigate('contact')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>Contacts</Text>
                </TouchableOpacity>
              </View>
              <View style = {{marginVertical: 10}}>
                <TouchableOpacity
                onPress={() => navigation.navigate('setting')}
                style = {styles.profilepage}
                >
                <Text style = {{fontSize: 19}}>Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </View>
        ):
        <View>
        <TouchableOpacity 
      onPress={profilepressed}>
        <Image 
        source={avatarSource}
        style = {styles.profile}
        />
        </TouchableOpacity>
      </View>
          }
        </View>
      </View>
      <View>
      <Text style = {styles.title}>Study Pal</Text>
      </View>
    <View style = {styles.firstimage}>
      <Image
      source= {require('../assets/study-group.png')}
      style = {styles.study}
      />
    </View>
    <View style = {styles.firstimage}>
      <Image
      source= {require('../assets/study-computers.png')}
      style = {styles.study}
      />
    </View>
    <View style = {styles.firstpara}>
      <Text style = {styles.textpart}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellat totam repellendus eveniet quod debitis. Recusandae expedita commodi, autem, eveniet iure dignissimos exercitationem fugit praesentium, ipsum quasi nisi nemo placeat.
      </Text>
    </View>
    <View style = {styles.firstpara2}>
      <Text style = {styles.textpart}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repellat totam repellendus eveniet quod debitis. Recusandae expedita commodi, autem, eveniet iure dignissimos exercitationem fugit praesentium, ipsum quasi nisi nemo placeat.
      </Text>
    </View>
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
}

const randomRGB = () => {

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create ({
    profile : {
        width: 60, 
        height: 60,
        marginHorizontal: 20, 
        borderRadius: 30,
        marginVertical: 20
    },
    firstimage: {
        backgroundColor: randomRGB(),
        width: 355,
        marginHorizontal: 14,
        borderRadius: 30,
        height: 345,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstpara: {
      backgroundColor: randomRGB(),
      width: 355,
      marginHorizontal: 14,
      borderRadius: 30,
      height: 300,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    firstpara2: {
      backgroundColor: randomRGB(),
      width: 355,
      marginHorizontal: 14,
      borderRadius: 30,
      height: 300,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    overall: {
      backgroundColor: randomRGB(),
      paddingVertical: 10
    },
    nightmode: {
        backgroundColor: '#3D3B40'
    },
    camerahome: {
     marginTop: -19,
     marginBottom: 10,
     marginLeft: 35
    },
    menuoption: {
      position: 'absolute',
      zIndex: 2
    },
    camera : {
      width: 40, 
      height: 40, 
      borderRadius: 30,
      marginTop: -45,
      marginLeft: 60
    },
    secprofile: {
      width: 70,
      height: 60,
      borderRadius: 30,
      marginVertical: 15,
      marginHorizontal: 10
    },
    profileelement: {
      marginHorizontal: 15,
      backgroundColor: randomRGB(),
      borderRadius: 30,
      flex: 1
    },
    profileoption: {
      position: 'absolute',
      zIndex: 2
    },
    menuelement: {
      backgroundColor: randomRGB(),
      height: 70,
      borderRadius: 20,
      width: 280,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 80,
      marginVertical: 5
    },
    textmenu: {
      fontSize: 17,
      fontStyle: 'italic'
    },
    back: {
      width: 60,
      height: 60,
      marginHorizontal: 15,
      borderRadius: 20,
      marginVertical: 10,
      
    },
    header_images: {
      display: 'flex',
      flexDirection: 'row'
    },
    menuimage: {
      marginVertical: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: randomRGB(),
      marginHorizontal: 305
    },
    titleparent: {
      marginTop: 10
    },
    parameter: {
     display: 'flex',
     flexDirection: 'row',
     marginHorizontal: 20
    },
    title: {
      textAlign: 'center', 
      fontSize: 20,
      backgroundColor: randomRGB(),
      width: 210,
      borderRadius: 20,
      height: 60,
      textAlignVertical: 'center',
      fontWeight: 'bold',
      marginVertical: 15,
      alignSelf: 'center'
    },
    study: {
      width: 320,
      height: 300,
      borderRadius: 30
    },
    textpart: {
      textAlign: 'center'
    },
    profilepage: {
      backgroundColor: randomRGB(),
      marginVertical: 10,
      flex: 1,
      marginHorizontal: 10,
      borderRadius: 20,
      alignItems: 'center'
    }
})

export default Home