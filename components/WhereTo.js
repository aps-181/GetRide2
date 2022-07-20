import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'

import tw from 'twrnc';
import { Icon, Image } from 'react-native-elements'
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const WhereTo = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    return (
        <View style={tw`bg-white h-full`}>
            <Text style={tw`m-3 text-xl`}>Your route</Text>
            <View style={tw`border rounded-lg m-3 p-2`}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}


                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                    }}


                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en'
                    }}

                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <View style={tw`border-t-2 border-gray-200`} />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en'
                    }}

                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>

            <Text style={tw`m-3 text-xl`}>Schedule</Text>
            <View style={tw`flex flex-row justify-evenly`}>
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 border rounded-lg bg-white m-2 w-40 `}>
                    <Text style={tw`text-center text-lg mr-4 mt-auto`}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 border bg-yellow-200 rounded-lg bg-white m-2 w-40`}>
                    <Text style={tw`text-center text-lg mr-4 mt-auto`}>Now</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`mt-auto bg-white border-t border-gray-200`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VehicleDetails")}
                    style={tw`bg-blue-500 py-3 m-3 rounded-md items-center`}>
                    <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default WhereTo