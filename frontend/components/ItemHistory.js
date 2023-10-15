import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ItemHistory = ({ style }) => {
  return (
    <View style={[styles.itemHistory, style]}>
      <Image
        style={[styles.bgIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Text style={[styles.status, styles.text1Typo]}>Cancelled</Text>
      <View style={styles.icArrow}>
        <View style={styles.bound} />
        <Image
          style={[styles.shapeStrokeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/shape-stroke1.png")}
        />
      </View>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line1.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.setYourLocation, styles.setTypo]}>11:24</Text>
        <Text style={[styles.setYourLocation1, styles.setTypo]} />
        <Text style={[styles.address, styles.textClr]}>
          Ealing Broadway Shopping Centre, London, W55JY, UK
        </Text>
        <Text style={[styles.text, styles.textClr]}>
          1, Thrale Street, London, SE19HW, UK
        </Text>
        <Image
          style={styles.icRouteIcon}
          contentFit="cover"
          source={require("../assets/ic-route.png")}
        />
      </View>
      <Text style={[styles.text1, styles.textClr]}>Maria</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  text1Typo: {
    height: 18,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
  },
  setTypo: {
    textAlign: "left",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textReg,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  bgIcon: {
    height: "141.1%",
    width: "109.55%",
    top: "-15.07%",
    right: "-4.78%",
    bottom: "-26.03%",
    left: "-4.78%",
    borderRadius: Border.br_mini,
  },
  status: {
    left: 212,
    color: Color.colorIndianred,
    textAlign: "right",
    width: 100,
    display: "none",
    position: "absolute",
  },
  bound: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  shapeStrokeIcon: {
    height: "65.24%",
    width: "22.37%",
    top: "50.28%",
    right: "12.91%",
    bottom: "-15.52%",
    left: "64.71%",
  },
  icArrow: {
    height: "13.64%",
    width: "9.01%",
    top: "5.45%",
    right: "4.5%",
    bottom: "80.91%",
    left: "86.49%",
    display: "none",
    position: "absolute",
  },
  lineIcon: {
    top: 45,
    right: 21,
    borderRadius: Border.br_7xs,
    height: 0,
    left: 21,
    display: "none",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  setYourLocation: {
    top: -80,
    left: -2,
    display: "none",
  },
  setYourLocation1: {
    left: 0,
    top: 0,
  },
  address: {
    width: 201,
    height: 44,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    color: Color.colorDarkslategray_100,
    top: 0,
  },
  text: {
    top: -79,
    width: 200,
    height: 40,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    color: Color.colorDarkslategray_100,
  },
  icRouteIcon: {
    top: 65,
    left: 61,
    width: 16,
    height: 94,
    display: "none",
    position: "absolute",
  },
  group: {
    top: 147,
    left: 23,
    width: 0,
    height: 19,
    position: "absolute",
  },
  text1: {
    width: 176,
    left: 21,
    height: 18,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
  },
  itemHistory: {
    width: 314,
    height: 73,
  },
});

export default ItemHistory;
