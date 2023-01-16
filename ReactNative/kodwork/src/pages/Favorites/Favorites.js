import React from "react";
import { FlatList, Text, View, Button } from "react-native";

import styles from "./Favorites.style";
import { useSelector } from "react-redux";
import JobCard from "../../components/JobCard";

const Favorites = ({ navigation }) => {
  const [isRemoveBtn, setIsRemoveBtn] = React.useState(true);

  const { favoriteJobs } = useSelector((state) => state.job);

  console.log(favoriteJobs);

  const renderJobs = ({ item }) => {
    return <JobCard job={item} isRemoveBtn={isRemoveBtn} />;
  };
  return (
    <>
      {favoriteJobs.length > 0 ? (
        <FlatList data={favoriteJobs} renderItem={renderJobs} />
      ) : (
        <View>
          <Text style={styles.title}>
            You don't have any favorite job postings.
          </Text>
        </View>
      )}
      <Button
        title="Go to Job page"
        onPress={() => navigation.navigate("JobBoard")}
      />
    </>
  );
};

export default Favorites;
