import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Button, Input } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const NgNhp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ngNhp}>
      <View style={styles.ngNhpChild} />
      <Image
        style={styles.undrawProjectFeedbackReCm3Icon}
        contentFit="cover"
        source={require("../assets/undraw-project-feedback-re-cm3l-11.png")}
      />
      <Button
        style={[styles.rectangleParent, styles.groupChildLayout]}
        title="Tiếp tục"
        appearance="outline"
        textStyle={styles.groupButtonText}
        onPress={() => navigation.navigate("Homepage")}
      >
        Tiếp tục
      </Button>
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
          <View style={[styles.timeStyle, styles.textPosition]}>
            <Text style={[styles.text, styles.textClr]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.inputsParent, styles.inputsPosition]}>
        <Input
          style={[styles.inputs, styles.postPosition]}
          placeholderTextColor="#aaa"
          textStyle={styles.inputsTextInputText}
        />
        <Text style={[styles.post, styles.postPosition]}>Số điện thoại</Text>
      </View>
      <View style={[styles.inputsGroup, styles.inputsPosition]}>
        <Input
          style={[styles.inputs, styles.postPosition]}
          placeholderTextColor="#aaa"
          textStyle={styles.inputsTextInput1Text}
        />
        <Text style={[styles.post, styles.postPosition]}>Mật khẩu</Text>
      </View>
      <Text style={[styles.ngNhp1, styles.textClr]}>Đăng nhập</Text>
      <Image
        style={styles.ngNhpItem}
        contentFit="cover"
        source={require("../assets/group-3191.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  inputsTextInputText: {
    color: "#000",
  },
  inputsTextInput1Text: {
    color: "#000",
  },
  groupChildLayout: {
    height: 60,
    position: "absolute",
  },
  ngNhp1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
  },
  btnTextLayout: {
    height: "26.67%",
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
  textPosition: {
    top: 0,
    left: 0,
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  inputsPosition: {
    height: 71,
    left: 36,
    right: 36,
    top: "50%",
    position: "absolute",
  },
  postPosition: {
    top: "50%",
    position: "absolute",
  },
  ngNhpChild: {
    top: -52,
    left: -10,
    borderBottomRightRadius: Border.br_131xl,
    borderBottomLeftRadius: Border.br_131xl,
    width: 395,
    height: 549,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  undrawProjectFeedbackReCm3Icon: {
    top: 67,
    left: 68,
    width: 232,
    height: 274,
    position: "absolute",
  },
  rectangleParent: {
    top: 651,
    width: 375,
    backgroundColor: "#40B59F",
    left: 0,
  },
  batteryIcon: {
    width: 24,
    right: 0,
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
    top: 0,
    left: 0,
  },
  timeStyle: {
    width: 28,
    height: 17,
    position: "absolute",
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
  inputs: {
    marginTop: -35.5,
    right: 0,
    left: 0,
  },
  post: {
    marginTop: -30.5,
    left: 8,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    color: Color.colorLightseagreen_300,
    width: 246,
    height: 16,
    textAlign: "left",
  },
  inputsParent: {
    marginTop: 55,
  },
  inputsGroup: {
    marginTop: 132,
  },
  ngNhp1: {
    marginLeft: -143.5,
    top: 302,
    left: "50%",
    fontSize: FontSize.size_20xl,
    letterSpacing: 1,
    width: 287,
    height: 174,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
  },
  ngNhpItem: {
    top: 764,
    left: 160,
    width: 55,
    height: 10,
    position: "absolute",
  },
  ngNhp: {
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

export default NgNhp;
