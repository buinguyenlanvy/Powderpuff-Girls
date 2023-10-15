import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button } from "@ui-kitten/components";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.startIcon}
      resizeMode="cover"
      source={require("../assets/start.png")}
    >
      <View style={[styles.startChild, styles.startLayout]} />
      <Button
        style={[styles.startInner, styles.startInnerLayout]}
        title="Bắt đầu"
        appearance="outline"
        textStyle={styles.groupButtonText}
        onPress={() => navigation.navigate("LoginAs")}
      >
        Bắt đầu
      </Button>
      <View style={styles.startItem} />
      <Text style={[styles.choMngN, styles.textClr]}>Chào mừng đến</Text>
      <View style={styles.statusBarBlack}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa, styles.timeStyleLayout]}
        >
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={[styles.timeStyle, styles.timeStyleLayout]}>
            <Text style={[styles.text, styles.textClr]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-301.png")}
      />
      <Text style={[styles.vechaiday, styles.textClr]}>Vechaiday</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  startLayout: {
    width: 375,
    left: 0,
  },
  startInnerLayout: {
    height: 60,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  timeStyleLayout: {
    height: 17,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: 2,
    position: "absolute",
  },
  startChild: {
    borderBottomRightRadius: Border.br_12xs,
    backgroundColor: Color.colorWhite,
    top: 0,
    width: 375,
    position: "absolute",
    height: 812,
  },
  startInner: {
    top: 650,
    width: 375,
    left: 0,
  },
  startItem: {
    top: -41,
    left: -10,
    borderBottomRightRadius: Border.br_131xl,
    borderBottomLeftRadius: Border.br_131xl,
    width: 395,
    height: 539,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  choMngN: {
    height: 35,
    letterSpacing: 1,
    fontSize: FontSize.size_20xl,
    top: 117,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    width: 375,
    left: 0,
  },
  batteryIcon: {
    right: 0,
    width: 24,
  },
  wifiIcon: {
    right: 29,
    width: 15,
  },
  cellularConnectionIcon: {
    right: 50,
    width: 17,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  timeStyle: {
    width: 28,
    left: 0,
    top: 0,
  },
  iphoneXstatusBarsstatusBa: {
    top: -1,
    right: 1,
    width: 326,
  },
  statusBarBlack: {
    width: "86.93%",
    top: 6,
    right: "6.13%",
    left: "6.93%",
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 764,
    left: 160,
    width: 55,
    height: 10,
    position: "absolute",
  },
  vechaiday: {
    left: 44,
    width: 287,
    height: 174,
    letterSpacing: 1,
    fontSize: FontSize.size_20xl,
    top: 117,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
  },
  startIcon: {
    borderRadius: Border.br_13xl,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Start;
