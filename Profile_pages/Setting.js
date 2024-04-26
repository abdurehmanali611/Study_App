import React, { useState } from "react";
import { PermissionsAndroid, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {

    const [notification, setNotification] = useState(false)
    const [allowance, setAllowance] = useState(false)
    const [locationpermission, setLocationPermission] = useState(false)

    const Notificationallow = () => {

        setNotification(!notification)
        setAllowance(!allowance)
        
    }

    const requestlocationaccess = async () => {

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Permission',
                message: 'App needs access to your location',
                buttonPositive: 'OK'
            }
        )

        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            setLocationPermission(true)
        }else {
            setLocationPermission(false)
        }
    }

    return <View style = {{backgroundColor: randomRGB(), flex: 1}}>
        <View>
            <TouchableOpacity 
             style = {styles.notify}
            onPress={Notificationallow}>
            <Text style = {styles.notifytxt}>Desktop Notification</Text>
            <View style = {styles.switch}>
                <Switch 
                 style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                 value = {notification}
                 onValueChange={Notificationallow}
                 trackColor={{false: '#232323',  true: '#545454'}}
                />
            </View>
            </TouchableOpacity>
        </View>
        {allowance && (
           <Text style = {styles.accept}>You have turned on the desktop notification</Text>
        )}
            <View>
                {!locationpermission ? 
                    <View style = {styles.locationon}>
                        <Text style = {styles.txtlocation}>Location access:</Text>
                    <TouchableOpacity
                    style = {styles.locationbtn}
                    onPress={requestlocationaccess}
                    >
                        <Text>Allow</Text>
                    </TouchableOpacity>
                    </View>
                :
                   <View style = {styles.locationon}>
                    <Text style = {styles.txtlocation}>U want Reset: </Text>
                    <TouchableOpacity 
                    style = {styles.locationbtn}
                    onPress={() => setLocationPermission(false)}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                   </View>
                }
                {locationpermission && (
                    <Text style = {styles.accept}>you have given a permission for location</Text>
                )} 
            </View>
    </View>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green},${blue})`
}
const styles = StyleSheet.create ({

    switch: {
        width: 55,
        backgroundColor: randomRGB(),
        alignItems: 'center',
        marginHorizontal: 20,
        height: 40,
        justifyContent: 'center',
        borderRadius: 20
    },
    notify: {
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: randomRGB(),
        width: 360,
        marginHorizontal: 13,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 30,
        height: 70
    },
    notifytxt: {
        fontSize: 19,
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    locationon: {
        flexDirection: 'row',
        backgroundColor: randomRGB(),
        width: 363,
        marginHorizontal: 12,
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 30
    },
    txtlocation: {
        fontSize: 19,
        textAlign: 'center',
        height: 50,
        textAlignVertical: 'center',
        borderRadius: 30,
        paddingRight: 20
    },
    locationbtn: {
        paddingHorizontal: 40,
        width: 135,
        backgroundColor: randomRGB(),
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: 50,
        justifyContent: 'center'
    },
    accept: {
        fontSize: 20,
        backgroundColor: randomRGB(),
        width: 365,
        marginHorizontal: 12,
        height: 90,
        borderRadius: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: 20,
        fontWeight: 'bold'
    }
})

export default Setting