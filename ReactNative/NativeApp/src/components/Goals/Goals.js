import { View, FlatList } from "react-native";

import Card from "../Card";

import styles from "./Goals.style";

const Goals = ({ courseGoals, setCourseGoals }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(item) => {
          return (
            <Card
              style={styles.goalItem}
              number={item.item.number}
              text={item.item.text}
              // context
              courseGoals={courseGoals}
              setCourseGoals={setCourseGoals}
            />
          );
        }}
        keyExtractor={(item, index) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default Goals;
