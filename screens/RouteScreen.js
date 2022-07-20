import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'

import tw from 'twrnc';
import { Icon, Image } from 'react-native-elements'
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import WhereTo from '../components/WhereTo';
import VehicleDetails from '../components/VehicleDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Review from '../components/Review';


const RouteScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();



    return (
        <SafeAreaView style={tw`bg-white h-full flex-grow`}>
            <View style={tw`h-1/3`}>
                <View>
                    <View style={tw`border-b border-gray-500 p-1`}><Text style={[tw`text-center mt-10`, { fontSize: 30 }]}>Offer a Ride</Text></View>
                    <TouchableOpacity style={tw`absolute top-9 left-3 z-50 p-3`}>
                        <FontAwesome name="arrow-left" color="black" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`h-2/3`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="WhereTo"
                        component={WhereTo}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="VehicleDetails"
                        component={VehicleDetails}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Review"
                        component={Review}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>

            </View>
        </SafeAreaView>
    )
}

export default RouteScreen

const styles = StyleSheet.create({})