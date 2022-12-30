import { ScrollView, Image } from "react-native";

import news_banner_data from "../../news_banner_data.json";

import styles from "./NewsImages.styles";

const NewsImages = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map((bannerNews) => (
        <Image
          key={bannerNews.id}
          style={styles.banner_image}
          source={{ uri: bannerNews.imageUrl }}
        />
      ))}
    </ScrollView>
  );
};

export default NewsImages;
