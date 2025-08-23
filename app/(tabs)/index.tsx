import useTheme from "@/hooks/UseTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text>Home hello hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>hello</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
