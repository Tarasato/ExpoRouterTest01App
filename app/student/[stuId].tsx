import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function StudentInfo() {
  const {stuId} = useLocalSearchParams();
  return (
    <View style={style.container}>
      <Text style={{fontSize: 20}}>Student Infomation Page</Text>
      <Text style={{fontSize: 20}}>ยินดีต้อนรับ นักศึกษารหัส : {stuId}</Text>
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