import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Camera = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.cameraIcon}
      resizeMode="cover"
      source={require("../assets/camera.png")}
    >
      <View style={[styles.cameraChild, styles.cameraChildLayout]} />
      <View style={[styles.cameraItem, styles.cameraBg]} />
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
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.iphone11ProMax1}
        onPress={() => navigation.navigate("Bill")}
      >
        <Image
          style={[styles.iphone11ProMax1Child, styles.iphone11Position]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={[styles.iphone11ProMax1Item, styles.iphone11Position]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.headerWhite1, styles.iphone11Position]}
          contentFit="cover"
          source={require("../assets/header-white-1.png")}
        />
        <View style={styles.sloMoParent}>
          <Text style={[styles.sloMo, styles.panoTypo]}>slo- mo</Text>
          <Text style={[styles.vided, styles.panoTypo]}>vided</Text>
          <Text style={styles.photo}>photo</Text>
          <Text style={[styles.square, styles.panoTypo]}>square</Text>
          <Text style={[styles.pano, styles.panoTypo]}>pano</Text>
        </View>
        <Image
          style={styles.iphone11ProMax1Inner}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-323.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cameraChildLayout: {
    width: 375,
    top: 0,
  },
  cameraBg: {
    backgroundColor: Color.colorWhite,
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
  iphone11Position: {
    left: 19,
    position: "absolute",
  },
  panoTypo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  cameraChild: {
    borderBottomRightRadius: Border.br_12xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    height: 812,
  },
  cameraItem: {
    top: -41,
    left: -10,
    borderBottomRightRadius: Border.br_131xl,
    borderBottomLeftRadius: Border.br_131xl,
    width: 395,
    height: 539,
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
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
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
  iphone11ProMax1Child: {
    top: 62,
    width: 376,
    height: 561,
  },
  iphone11ProMax1Item: {
    height: 624,
    width: 375,
    top: 0,
  },
  headerWhite1: {
    top: 10,
    width: 389,
    height: 16,
    overflow: "hidden",
  },
  sloMo: {
    width: 52,
    left: 0,
  },
  vided: {
    left: 97,
    width: 39,
  },
  photo: {
    left: 192,
    color: "#fcf8ff",
    width: 41,
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  square: {
    left: 271,
    width: 46,
  },
  pano: {
    left: 361,
    width: 35,
  },
  sloMoParent: {
    top: 644,
    left: 6,
    width: 396,
    height: 20,
    position: "absolute",
  },
  iphone11ProMax1Inner: {
    top: 712,
    left: 177,
    width: 60,
    height: 54,
    position: "absolute",
  },
  groupIcon: {
    top: 719,
    left: 303,
    width: 40,
    height: 40,
    position: "absolute",
  },
  iphone11ProMax1: {
    left: -19,
    backgroundColor: "#241332",
    width: 414,
    height: 810,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cameraIcon: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Camera;
