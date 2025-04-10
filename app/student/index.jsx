import { Link, router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function StudentHome() {
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20 }}>Student Page</Text>
      <Link href={{
        pathname: '/student/[stuid]',
        params: {
          stuid: '10001'
        }
      }}>
        Go to Student A
      </Link>
      <Link href={{
        pathname: '/student/[stuid]',
        params: {
          stuid: '10002'
        }
      }}>
        Go to Student B
      </Link>
      <TouchableOpacity onPress={() => {
        router.navigate({
          pathname: '/student/[stuid]',
          params: {
            stuid: '10003'
          }
        })
      }}>
        <Text style={{ fontSize: 20 }}>Go to Student C</Text>
      </TouchableOpacity>
      <Pressable onPress={() => {
        router.push({
          pathname: '/student/[stuid]',
          params: {
            stuid: '10004'
          }
        })
      }}>
        <Text style={{ fontSize: 20 }}>Go to Student D</Text>
      </Pressable>
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