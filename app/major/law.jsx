import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Law() {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Law World!</Text>
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