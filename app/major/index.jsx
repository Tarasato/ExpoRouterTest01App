import { Link, router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MajorHome() {
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Major Page</Text>
      <Link href={"/major/dti"}>Go to DTI</Link>
        <Link href={"/major/account"}>Go to Account</Link>
        <Link href={"/major/law"}>Go to Law</Link>
        <TouchableOpacity onPress={() => router.replace('/major/law')}> //ย้อนกลับไม่ได้
          <Text>Go to Law</Text>
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