import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Group_create = ({navigation}) => {

    return <View style = {styles.overall}>
        <Text style = {styles.header}>You can create a group here or join the non-default groups</Text>
        <Text style = {styles.header}>Default group means groups that all user joined them without asking these are: </Text>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator = {false}>
        <Text style = {styles.default}>English</Text>
        <Text style = {styles.default}>Mathimatics</Text>
        <Text style = {styles.default}>Inspiration and Qoutes</Text>
        </ScrollView>
        <Text style = {styles.header}>The Non default groups are the following to join one of them press the JOIN or to create new press CREATE</Text>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator = {false}>
        <View style = {styles.buttonhome}>
            <TouchableOpacity
            onPress={() => navigation.navigate('join')}
            >
                <Text>JOIN</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.buttonhome}>
            <TouchableOpacity
            onPress={() => navigation.navigate('create')}
            >
                <Text>CREATE</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
   
    overall: {
       flex: 1,
       backgroundColor: randomRGB(),
       paddingVertical: 10,
       paddingHorizontal: 8,
       width: 369,
       marginHorizontal: 7,
       borderRadius: 20
    },
    header: {
      fontSize: 18,
      marginVertical: 10,
      backgroundColor: randomRGB(),
      width: 355,
      height: 150,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20
    },
    buttonhome: {
       marginVertical: 10,
       backgroundColor: randomRGB(),
       width: 180,
       height: 60,
       alignItems: 'center',
       justifyContent: 'center',
       borderTopLeftRadius: 30,
       borderBottomRightRadius: 30,
       marginHorizontal: 15
    },
    default: {
        fontSize: 19,
        marginHorizontal: 10,
        backgroundColor: randomRGB(),
        width: 180,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 30
    }
})

export default Group_create