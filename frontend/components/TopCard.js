import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import TopCard from "TopCard";

const TopCard = ({ style }) => {
  const [topCardItems, setTopCardItems] = useState([<TopCard />]);

  return (
    <View style={[styles.topCard, style]}>
      <Carousel
        style={styles.carousel}
        width={332}
        height
        vertical={true}
        mode="parallax"
        autoPlay={true}
        loop={true}
        data={topCardItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: 332,
    height: 188.1019744873047,
  },
  topCard: {
    borderRadius: 19,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3.7620394229888916,
    },
    shadowRadius: 14.11,
    elevation: 14.11,
    shadowOpacity: 1,
    width: 332,
    height: 188,
    overflow: "hidden",
  },
});

export default TopCard;
