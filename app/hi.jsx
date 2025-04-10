import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Hi() {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Hi World!</Text>
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