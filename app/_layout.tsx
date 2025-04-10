import { Slot } from "expo-router";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function RootLayout() {
  // return <Stack />;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
      <View style={style.footer} >
        <Text style={{ fontSize: 20 }}>©️ Tarasato DTI SAU</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  footer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
})