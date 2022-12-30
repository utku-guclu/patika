import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";

import news_data from "./src/news_data.json";

import NewsCard from "./src/components/NewsCard";
import NewsImages from "./src/components/NewsImages";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const renderKeys = (item) => item.u_id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Breaking News</Text>
      <FlatList
        ListHeaderComponent={() => <NewsImages />}
        data={news_data}
        renderItem={renderNews}
        keyExtractor={renderKeys}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 50,
    paddingLeft: 15,
    padding: 5,
  },
});
