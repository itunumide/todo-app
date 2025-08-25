import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/UseTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const HomeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  const completedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const totalCount = todos ? todos.length : 0;
  const progressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  return (
    <View style={HomeStyles.header}>
      <View style={HomeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={HomeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={"#fff"} />
        </LinearGradient>
        <View style={HomeStyles.titleTextContainer}>
          <Text style={HomeStyles.title}>Today&apos;s Task</Text>
          <Text style={HomeStyles.subtitle}>
            {completedCount} of {totalCount} completed{" "}
          </Text>
        </View>
      </View>
      {totalCount > 0 && (
        <View style={HomeStyles.progressContainer}>
          <View style={HomeStyles.progressBarContainer}>
            <View style={HomeStyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[
                  HomeStyles.progressFill,
                  { width: `${progressPercentage}%` },
                ]}
              />
            </View>
            <Text style={HomeStyles.progressText}>{Math.round(progressPercentage)}%</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
