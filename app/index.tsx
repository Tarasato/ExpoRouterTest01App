import { Link, RelativePathString, router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Hello Index!</Text>
      <Link href={"/hello"}>Go to Hello</Link>
      <Link href={"/hey"}>Go to Hey</Link>
      <Link href={"/hi"}>Go to Hi</Link>
      <Pressable onPress={() => {
        router.navigate('/wow')
      }}>
        <Text style={{fontSize: 20}}>Go to Wow</Text>
      </Pressable>
      <TouchableOpacity onPress={() => {
        router.push('/woo')
      }}>
        <Text style={{fontSize: 20}}>Go to Wow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push('/major' as RelativePathString)
      }}>
        <Text style={{fontSize: 20}}>Go to Major</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.replace('/student' as RelativePathString)
      }}>
        <Text style={{fontSize: 20}}>Go to Student</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  })