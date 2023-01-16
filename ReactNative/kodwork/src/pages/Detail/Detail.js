import { View, Text, ScrollView, useWindowDimensions } from "react-native";

import { useState } from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Button from "../../components/Button";

import useFetch from "../../hooks/useFetch";
import RenderHtml from "react-native-render-html";

import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/job/jobSlice";

import styles from "./Detail.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ route, navigation }) => {
  const { id } = route.params;
  const url = `https://www.themuse.com/api/public/jobs/${id}`;
  const { loading, error, data } = useFetch(url);

  const [isFavorite, setIsFavorite] = useState(false);

  const source = {
    html: `${data.contents}`,
  };
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  function addToFavorite(item) {
    dispatch(addFavorite(item));
    setIsFavorite((prevState) => !prevState);
  }
  console.log(isFavorite);
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
        <View>
          <Loading />
        </View>
      ) : (
        <>
          <ScrollView style={styles.top_container}>
            <Text style={styles.header_title}>{data.categories[0].name}</Text>
            <Text style={styles.location_title}>
              Locations :{" "}
              <Text style={styles.location_content}>
                {data.locations[0].name}
              </Text>
            </Text>
            <Text style={styles.location_title}>
              Job Level :{" "}
              <Text style={styles.location_content}>{data.levels[0].name}</Text>
            </Text>
            <Text style={styles.job_title_head}>Job Detail</Text>

            <View style={styles.content_container}>
              <RenderHtml
                baseStyle={styles.content_title}
                contentWidth={width}
                source={source}
              />
            </View>

            <View style={styles.button_container}>
              <Button
                buttonText="Submit"
                iconName="login"
                onPress={() => navigation.navigate("Favorites")}
              />
              <TouchableOpacity
                style={styles.favorite_btn}
                iconName="cards-heart"
                onPress={() => addToFavorite(data)}
                disabled={isFavorite}
              >
                <Text style={styles.favorite_btn_text}>Favorite Jobs</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Detail;
