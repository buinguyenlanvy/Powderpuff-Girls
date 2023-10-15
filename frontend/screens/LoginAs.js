import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const LoginAs = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginAs}>
      <Image
        style={styles.undrawProjectFeedbackReCm3Icon}
        contentFit="cover"
        source={require("../assets/undraw-project-feedback-re-cm3l-1.png")}
      />
      <Button
        style={[styles.rectangleParent, styles.rectangleLayout]}
        title="Đăng nhập"
        appearance="filled"
        textStyle={styles.groupButtonText}
        onPress={() => navigation.navigate("NgNhp")}
      >
        Đăng nhập
      </Button>
      <View style={styles.btnTextWrapper}>
        <Text style={[styles.btnText1, styles.btnFlexBox]}>Tôi cần</Text>
      </View>
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
      <View style={[styles.loginAsInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Button
            style={[styles.rectangleGroup, styles.rectangleLayout]}
            title="Đăng ký"
            appearance="outline"
            textStyle={styles.groupButton1Text}
            onPress={() => navigation.navigate("NgK1")}
          >
            Đăng ký
          </Button>
          <Image
            style={[styles.shapeIcon1, styles.shapeIconLayout]}
            contentFit="cover"
            source={require("../assets/shape.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.icons8Help641, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8help64-1.png")}
      />
      <Image
        style={[styles.icons8Help642, styles.icons8Layout]}
        contentFit="cover"
        source={require("../assets/icons8help64-21.png")}
      />
      <Image
        style={styles.loginAsChild}
        contentFit="cover"
        source={require("../assets/group-319.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  groupButton1Text: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  rectangleLayout: {
    height: 60,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 303,
    borderRadius: Border.br_mini,
    left: 336,
    top: 60,
    height: 60,
  },
  btnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    left: "0%",
    width: "100%",
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
  groupParentLayout: {
    height: 119,
    width: 375,
    left: 0,
    position: "absolute",
  },
  btnText2Clr: {
    color: Color.colorLightseagreen_200,
    position: "absolute",
  },
  shapeIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "81.07%",
    right: "16.4%",
    width: "2.53%",
    position: "absolute",
    overflow: "hidden",
  },
  icons8Layout: {
    height: 48,
    width: 48,
    left: 41,
    position: "absolute",
  },
  undrawProjectFeedbackReCm3Icon: {
    top: 46,
    width: 376,
    height: 364,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 546,
    backgroundColor: "#40B59F",
  },
  btnText1: {
    height: "100%",
    fontSize: 27,
    color: Color.colorDarkslateblue,
    top: "0%",
    position: "absolute",
  },
  btnTextWrapper: {
    height: "1.97%",
    top: "61.33%",
    right: "0%",
    bottom: "36.7%",
    left: "0%",
    position: "absolute",
    width: "100%",
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    width: 28,
    top: 0,
    left: 0,
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
  rectangleGroup: {
    top: 59,
    borderColor: "#40B59F",
    textAlign: "",
  },
  shapeIcon1: {
    height: "13.45%",
    bottom: "86.55%",
    top: "0%",
  },
  groupParent: {
    top: 0,
  },
  loginAsInner: {
    top: 568,
  },
  icons8Help641: {
    top: 561,
  },
  icons8Help642: {
    top: 641,
  },
  loginAsChild: {
    top: 764,
    left: 160,
    width: 55,
    height: 10,
    position: "absolute",
  },
  loginAs: {
    borderRadius: Border.br_13xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginAs;
