import React from "react";
import { View, Text, FlatList } from "react-native";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import JobCard from "../../components/JobCard";

import useFetch from "../../hooks/useFetch";

const JobBoard = ({ navigation }) => {
  const url = `https://www.themuse.com/api/public/jobs?page=1&api_key=${process.env.API_JOBS}`;
  const { loading, data, error } = useFetch(url);

  const jobs = data.results;

  const handleJobSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <JobCard job={item} onSelect={() => handleJobSelect(item.id)} />
  );

  //error
  if (error) {
    return (
      <>
        <Error />
        <Text>{error}</Text>
      </>
    );
  }

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList data={jobs} renderItem={renderProduct} />
      )}
    </View>
  );
};

export default JobBoard;
