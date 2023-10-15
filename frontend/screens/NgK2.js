import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { Image } from "expo-image";
import { LinearProgress } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NgK2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ngK2}>
      <View style={styles.ngK2Child} />
      <Button
        style={styles.rectangleParent}
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
          <View style={[styles.timeStyle, styles.timeStyleLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.inputsParent, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsPosition]}>
          <View style={[styles.inputs, styles.inputsPosition]}>
            <Image
              style={styles.recIcon}
              contentFit="cover"
              source={require("../assets/rec1.png")}
            />
            <Text style={styles.hintText}>Password</Text>
            <Image
              style={styles.icVisibilityIcon}
              contentFit="cover"
              source={require("../assets/ic-visibility1.png")}
            />
          </View>
        </View>
        <Text style={[styles.post, styles.postTypo]}>
          Mã xác nhận đã được gửi đến số điện thoại
        </Text>
      </View>
      <Text style={styles.ngK}>Đăng ký</Text>
      <Text style={styles.text1}>09******09</Text>
      <View style={[styles.itemHistoryParent, styles.itemLayout]}>
        <View style={[styles.itemHistory, styles.itemLayout]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg7.png")}
          />
          <Text style={styles.status}>Cancelled</Text>
          <View style={styles.icArrow}>
            <View style={styles.bound} />
            <Image
              style={[styles.shapeStrokeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shape-stroke7.png")}
            />
          </View>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line5.png")}
          />
          <View style={styles.group}>
            <Text style={[styles.setYourLocation, styles.setTypo]}>11:24</Text>
            <Text style={[styles.setYourLocation1, styles.setTypo]} />
            <Text style={[styles.address, styles.text2Typo]}>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </Text>
            <Text style={[styles.text2, styles.text2Typo]}>
              1, Thrale Street, London, SE19HW, UK
            </Text>
            <Image
              style={styles.icRouteIcon}
              contentFit="cover"
              source={require("../assets/ic-route.png")}
            />
          </View>
          <Text style={styles.text3}>Maria</Text>
        </View>
        <Image
          style={[styles.lineIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line6.png")}
        />
        <Image
          style={[styles.lineIcon2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line6.png")}
        />
        <Image
          style={[styles.lineIcon3, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line6.png")}
        />
        <Image
          style={[styles.lineIcon4, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line6.png")}
        />
      </View>
      <Text style={[styles.vuiLngNhp, styles.postTypo]}>
        Vui lòng nhập mã xác nhận
      </Text>
      <LinearProgress style={styles.ngK2Item} color="#352555" />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  inputsPosition: {
    height: 71,
    top: "50%",
    position: "absolute",
  },
  postTypo: {
    color: Color.colorLightseagreen_300,
    lineHeight: 18,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: "50%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  itemLayout: {
    height: 83,
    position: "absolute",
  },
  setTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textReg,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    display: "none",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    top: 60,
    position: "absolute",
    overflow: "hidden",
  },
  ngK2Child: {
    top: -52,
    left: -10,
    borderBottomRightRadius: Border.br_131xl,
    borderBottomLeftRadius: Border.br_131xl,
    width: 395,
    height: 549,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleParent: {
    top: 651,
    width: 375,
    height: 60,
    left: 0,
    position: "absolute",
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
    color: Color.colorBlack,
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
  recIcon: {
    width: "110.23%",
    top: 16,
    right: "-5.12%",
    left: "-5.12%",
    height: 75,
    maxWidth: "100%",
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  hintText: {
    left: 4,
    width: 256,
    height: 20,
    color: Color.colorDarkslategray_100,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    display: "none",
    textAlign: "left",
    top: 0,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  icVisibilityIcon: {
    marginTop: 1.5,
    right: -18,
    width: 30,
    height: 30,
    display: "none",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  inputs: {
    marginTop: -35.5,
    right: 0,
    left: 0,
  },
  post: {
    marginTop: -31.5,
    marginLeft: -136.5,
    width: 273,
    height: 16,
    top: "50%",
  },
  inputsParent: {
    marginTop: -181,
    right: 36,
    left: 36,
  },
  ngK: {
    marginLeft: -143.5,
    fontSize: FontSize.size_20xl,
    letterSpacing: 1,
    width: 287,
    height: 174,
    left: "50%",
    color: Color.colorBlack,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    position: "absolute",
  },
  text1: {
    marginLeft: -58.5,
    top: 257,
    fontSize: 25,
    lineHeight: 35,
    width: 117,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: "50%",
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bgIcon: {
    height: "137.35%",
    width: "112.16%",
    top: "-13.86%",
    right: "-6.08%",
    bottom: "-23.49%",
    left: "-6.08%",
    borderRadius: Border.br_mini,
  },
  status: {
    left: 212,
    color: Color.colorIndianred,
    textAlign: "right",
    width: 100,
    height: 18,
    top: 14,
    display: "none",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  bound: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.colorGray_200,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  shapeStrokeIcon: {
    height: "49%",
    width: "23.53%",
    top: "50.28%",
    right: "11.76%",
    bottom: "0.72%",
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
    height: 0,
    borderRadius: Border.br_7xs,
    left: 21,
    display: "none",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  setYourLocation: {
    top: -80,
    left: -2,
    display: "none",
  },
  setYourLocation1: {
    top: 0,
    left: 0,
  },
  address: {
    width: 142,
    height: 44,
    top: 0,
  },
  text2: {
    top: -79,
    width: 141,
    height: 40,
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
  text3: {
    width: 176,
    left: 21,
    height: 18,
    top: 14,
    display: "none",
    color: Color.colorDarkslategray_100,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  itemHistory: {
    top: 0,
    right: 0,
    left: 0,
  },
  lineIcon1: {
    right: 178,
    left: 43,
  },
  lineIcon2: {
    right: 131,
    left: 90,
  },
  lineIcon3: {
    right: 84,
    left: 137,
  },
  lineIcon4: {
    right: 37,
    left: 184,
  },
  itemHistoryParent: {
    top: 339,
    right: 60,
    left: 60,
  },
  vuiLngNhp: {
    marginLeft: -88.5,
    top: 311,
    width: 177,
    height: 28,
  },
  ngK2Item: {
    top: 764,
    left: 160,
    width: 55,
    height: 10,
    position: "absolute",
  },
  ngK2: {
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

export default NgK2;
