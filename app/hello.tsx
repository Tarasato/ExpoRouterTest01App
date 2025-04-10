import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

export default function Hello() {
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20 }}>Hello World!</Text>
      <TouchableOpacity onPress={() => { router.back() }} style={{marginTop: 20,}}>
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})