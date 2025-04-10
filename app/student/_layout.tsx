import { Slot } from "expo-router";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function RootLayout() {
  // return <Stack />;
  return (
    <View style={{ flex: 1 }} >
      <View style={style.stuheader}>
        <Text style={{color: 'white'}}>ข้อมูลนักศึกษา</Text>
      </View>
        <Slot/>
    </View>
  );
}

const style = StyleSheet.create({
  stuheader: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
  },
})