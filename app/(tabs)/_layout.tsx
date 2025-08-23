import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopWidth:1,
          borderTopColor:"yellow",
          paddingBottom:30,
          paddingTop:10,
          height:90,
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:600,
        },
        headerShown:false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="flash-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
