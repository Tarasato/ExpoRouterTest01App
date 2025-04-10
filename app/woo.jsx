import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Woo() {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>woo World!</Text>
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