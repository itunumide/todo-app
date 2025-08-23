import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/UseTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
  const addTodo = useMutation(api.todos.addTodo);
   const clearAllTodo = useMutation(api.todos.clearAllTodo);
  return (
    <View style={styles.container}>
      <Text>Home hello hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>hello</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "Walk the dog" })}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>clearAllTodo()}>
        <Text>Clear all Todo</Text>
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
