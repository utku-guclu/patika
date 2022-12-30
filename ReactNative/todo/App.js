import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, FlatList, TextInput } from "react-native-web";
import Todo from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  // async storage
  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    storeTodos();
  }, [todos]);

  // storing todos to local storage
  const storeTodos = async () => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.log(error);
    }
  };
  // get todos
  const getTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem("todos");
      const currentTodos = JSON.parse(savedTodos);
      setTodos(currentTodos);
      // console.log(currentTodos);
    } catch (error) {
      console.log(error);
    }
  };

  // watch the input change
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // add item
  const addTodo = () => {
    input && setTodos([...todos, { todo: input, id: input + Math.random() }]);
    setInput("");
  };

  // delete item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // render todos
  const renderTodo = ({ item }) => (
    <Todo todo={item.todo} deleteTodo={() => deleteTodo(item.id)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO</Text>
      <View>
        <TextInput
          style={styles.input}
          onChange={handleInput}
          value={input}
          placeholder="add todo"
          placeholderTextColor={"#7b7b7b"}
        />
        <Button onPress={addTodo} color={"black"} title="Add" />
      </View>
      <FlatList
        data={todos}
        styles={styles.todos_container}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    padding: 20,
    fontSize: 30,
  },

  input: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderWidth: 2,
  },

  todos_container: {
    padding: 20,
    backgroundColor: "blue",
  },
});
