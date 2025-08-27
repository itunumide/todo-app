import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/UseTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const HomeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />;
  const renderTodoItem = (item: { item: Todo }) => {
    return;
  };
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={HomeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={HomeStyles.safeArea}>
        <Header />
        <TodoInput />
        {/* <FlatList
          data={todos}
          // renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={HomeStyles.todoList}
          contentContainerStyle={HomeStyles.todoListContent}
        /> */}
      </SafeAreaView>
    </LinearGradient>
  );
}
