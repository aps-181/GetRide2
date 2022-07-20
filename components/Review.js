import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useSelector } from 'react-redux'
import { selectOrigin, selectDestination, selectVehicle, selectTrip } from '../slices/navSlice'
const Review = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const vehicle = useSelector(selectVehicle)
    const trip = useSelector(selectTrip)

    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`m-3 bg-white h-full`}>
                <View style={tw`border rounded-lg p-2`}>
                    <Text style={tw`text-lg p-1`}>{origin.description}</Text>
                    <View style={tw`border-t-2 border-gray-200`} />
                    <Text style={tw`text-lg p-1`}>{destination.description}</Text>
                </View>
                <View style={tw`flex flex-row justify-between mt-2`}>
                    <View style={[tw`mt-2 items-center`, { height: 50, width: 178, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-center my-auto text-lg`}>Today</Text>
                    </View>
                    <View style={[tw`mt-2 items-center`, { height: 50, width: 178, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-center my-auto text-lg`}>Now</Text>
                    </View>
                </View>
                <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                    <Text style={tw`text-left ml-2 text-lg my-auto`}>Available Seats</Text>
                    <Text style={[tw`text-right mr-2 text-lg my-auto`, { marginLeft: 'auto' }]}>{trip}</Text>
                </View>

                <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                    <Text style={tw`text-left ml-2 text-lg my-auto`}>Vehicle</Text>
                    <Text style={[tw`text-right mr-2 my-auto`, { marginLeft: 'auto' }]}>Maruti Alto KL 64 6464 </Text>
                </View>

                <View style={[tw`mt-2 flex-row p-2 px-2 mt-4`, { height: 50, borderColor: "#000", borderWidth: 1 }]}>
                    <Text style={tw`text-left ml-2 text-lg my-auto`}>Fee (per person per km)</Text>
                    <Text style={[tw`text-right mr-2 text-lg my-auto`, { marginLeft: 'auto' }]}>50</Text>
                </View>

            </View>
            <View style={tw`mt-auto bg-white border-t border-gray-200`}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("Review")}
                    style={tw`bg-green-500 py-3 m-3 rounded-md items-center`}>
                    <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Create Trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({})