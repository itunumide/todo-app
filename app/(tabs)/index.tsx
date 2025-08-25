import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/UseTheme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const HomeStyles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={HomeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={HomeStyles.safeArea}>
        <Header/>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>hello</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
