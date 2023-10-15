import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View>
      <Text style={styles.text}>Vựa Vĩnh Phát</Text>
      <Text style={styles.text1}>06h50 - 07h15</Text>
      <Text style={styles.text2}>Khu vực phường Bến Thành</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: FontSize.textReg_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.heading2,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.textReg,
    color: Color.colorLightseagreen_300,
    textAlign: "left",
  },
  text2: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    fontFamily: FontFamily.textReg,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
});

export default Frame;
