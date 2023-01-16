import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/job/jobSlice";

import styles from "./JobCard.style";

const JobCard = ({ job, onSelect, isRemoveBtn }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeFavorite(id));
  };
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <Text style={styles.category_name}>{job.categories[0].name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <Text style={styles.location}>{job.locations[0].name}</Text>
      <Text style={styles.level}>{job.levels[0].name}</Text>
      {isRemoveBtn && (
        <TouchableOpacity
          style={styles.remove_btn_container}
          onPress={() => removeItem(job.id)}
        >
          <Text style={styles.removeBtn}>Remove</Text>
        </TouchableOpacity>
      )}
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
