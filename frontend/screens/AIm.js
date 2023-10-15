import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AIm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.aIm}>
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.blockBgIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/block-bg.png")}
      />
      <View style={styles.searchField}>
        <Image
          style={[styles.bgIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Image
          style={[styles.icSearchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ic-search.png")}
        />
      </View>
      <Image
        style={styles.icGestureIcon}
        contentFit="cover"
        source={require("../assets/ic-gesture.png")}
      />
      <Pressable
        style={styles.list}
        onPress={() => navigation.navigate("ThiGian")}
      >
        <View style={styles.rowLayout}>
          <View style={[styles.bound, styles.boundBg]} />
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <View style={[styles.icArrow, styles.icArrowPosition]}>
            <View style={[styles.bound1, styles.boundPosition]} />
            <Image
              style={[styles.shapeStrokeIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/shape-stroke.png")}
            />
          </View>
          <Text style={[styles.post, styles.postLayout]}>Bến Thành</Text>
          <Text style={[styles.address, styles.addressLayout]}>
            Chung cư Sai Gon Pink
          </Text>
          <Image
            style={[styles.icPlaceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ic-place.png")}
          />
        </View>
        <View style={[styles.row1, styles.rowLayout]}>
          <View style={[styles.bound, styles.boundBg]} />
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <View style={[styles.icArrow, styles.icArrowPosition]}>
            <View style={[styles.bound3, styles.boundPosition]} />
            <Image
              style={[styles.shapeStrokeIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/shape-stroke.png")}
            />
          </View>
          <Text style={[styles.post, styles.postLayout]}>Bến Thành</Text>
          <Text style={[styles.address, styles.addressLayout]}>
            87 Nguyễn Trãi
          </Text>
          <Image
            style={[styles.icPlaceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ic-place.png")}
          />
        </View>
        <View style={[styles.row1, styles.rowLayout]}>
          <View style={[styles.bound, styles.boundBg]} />
          <Image
            style={[styles.lineIcon2, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <View style={[styles.icArrow, styles.icArrowPosition]}>
            <View style={[styles.bound3, styles.boundPosition]} />
            <Image
              style={[styles.shapeStrokeIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/shape-stroke.png")}
            />
          </View>
          <Text style={[styles.post2, styles.post2Typo]}>New York</Text>
          <Text style={[styles.address2, styles.navTextClr]}>
            67, Grand Central Pkwy
          </Text>
          <Image
            style={[styles.icPlaceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ic-place1.png")}
          />
        </View>
        <View style={[styles.row1, styles.rowLayout]}>
          <View style={[styles.bound, styles.boundBg]} />
          <Image
            style={[styles.lineIcon2, styles.lineIconPosition]}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <View style={[styles.icArrow, styles.icArrowPosition]}>
            <View style={[styles.bound3, styles.boundPosition]} />
            <Image
              style={[styles.shapeStrokeIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/shape-stroke.png")}
            />
          </View>
          <Text style={[styles.post2, styles.post2Typo]}>New York</Text>
          <Text style={[styles.address2, styles.navTextClr]}>
            67, Grand Central Pkwy
          </Text>
          <Image
            style={[styles.icPlaceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ic-place1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.drivers, styles.carPosition]}>
        <View style={[styles.car, styles.carPosition]}>
          <View style={[styles.carTop, styles.carLayout]}>
            <Image
              style={[styles.carTopIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/car-top.png")}
            />
          </View>
          <View style={[styles.carTop1, styles.carLayout]}>
            <Image
              style={[styles.carTopIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/car-top1.png")}
            />
          </View>
        </View>
        <View style={styles.moto}>
          <View style={[styles.motoTop, styles.motoShadowBox]}>
            <Image
              style={[styles.motoTopIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/moto-top.png")}
            />
          </View>
          <View style={[styles.motoTop1, styles.motoShadowBox]}>
            <Image
              style={[styles.motoTopIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/moto-top.png")}
            />
          </View>
          <View style={[styles.motoTop2, styles.motoShadowBox]}>
            <Image
              style={[styles.motoTopIcon, styles.topIconLayout]}
              contentFit="cover"
              source={require("../assets/moto-top1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.btnLocIcon, styles.icArrowPosition]}
        contentFit="cover"
        source={require("../assets/btn-loc.png")}
      />
      <Image
        style={[styles.icLocIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/ic-loc.png")}
      />
      <View style={styles.navbarX}>
        <LinearGradient
          style={[styles.navBg, styles.boundPosition]}
          locations={[0, 1]}
          colors={["#fff", "rgba(236, 236, 236, 0)"]}
        />
        <Image
          style={styles.navBtnIcon}
          contentFit="cover"
          source={require("../assets/nav-btn.png")}
        />
        <Text style={[styles.navText, styles.navTextClr]}>Booking</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: "50%",
  },
  boundBg: {
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  lineIconPosition: {
    borderRadius: Border.br_7xs,
    left: 42,
    top: "50%",
    maxWidth: "100%",
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icArrowPosition: {
    right: 6,
    position: "absolute",
  },
  boundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  topIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  postLayout: {
    height: 16,
    color: Color.colorDarkgray,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    marginTop: -3.5,
    position: "absolute",
  },
  addressLayout: {
    height: 18,
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    marginTop: -22.5,
  },
  rowLayout: {
    height: 61,
    width: 333,
    borderRadius: Border.br_13xl,
  },
  post2Typo: {
    fontFamily: FontFamily.textReg,
    width: 246,
    textAlign: "left",
    left: 42,
    top: "50%",
  },
  navTextClr: {
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  carPosition: {
    height: 250,
    width: 186,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  carLayout: {
    transform: [
      {
        rotate: "-37.21deg",
      },
    ],
    height: 48,
    width: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  motoShadowBox: {
    height: 58,
    width: 34,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    transform: [
      {
        rotate: "-37.21deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
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
  image11Icon: {
    width: 464,
    height: 620,
    left: 0,
    top: 0,
    position: "absolute",
  },
  blockBgIcon: {
    bottom: 0,
    height: 271,
    right: 0,
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  bgIcon: {
    marginTop: -33,
    width: "109.9%",
    right: "-4.95%",
    left: "-4.95%",
    borderRadius: Border.br_mini,
    height: 74,
    maxWidth: "100%",
    overflow: "hidden",
  },
  icSearchIcon: {
    marginTop: -12,
    left: 10,
    position: "absolute",
  },
  searchField: {
    right: 37,
    bottom: 165,
    height: 44,
    left: 35,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  icGestureIcon: {
    marginLeft: -15.5,
    bottom: 241,
    height: 4,
    left: "50%",
    width: 30,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  bound: {
    height: 60,
    width: 333,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
  },
  lineIcon: {
    marginTop: 29,
    height: 1,
  },
  bound1: {
    position: "absolute",
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  shapeStrokeIcon: {
    height: "30.63%",
    width: "29.85%",
    top: "50.28%",
    right: "5.44%",
    bottom: "19.1%",
    left: "64.71%",
  },
  icArrow: {
    marginTop: -16.5,
    display: "none",
    height: 30,
    width: 30,
    top: "50%",
  },
  post: {
    width: 246,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 42,
    top: "50%",
  },
  address: {
    color: Color.colorDarkslateblue,
    width: 246,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 42,
    top: "50%",
    position: "absolute",
  },
  icPlaceIcon: {
    marginTop: -20.5,
    left: 0,
    position: "absolute",
  },
  bound3: {
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  row1: {
    marginTop: 3,
  },
  lineIcon2: {
    marginTop: 29.5,
    height: 0,
  },
  post2: {
    height: 16,
    color: Color.colorDarkgray,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    marginTop: -3.5,
    position: "absolute",
  },
  address2: {
    fontFamily: FontFamily.textReg,
    width: 246,
    textAlign: "left",
    left: 42,
    top: "50%",
    height: 18,
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    marginTop: -22.5,
  },
  list: {
    top: 678,
    left: 21,
    position: "absolute",
  },
  carTopIcon: {
    height: "102.81%",
    width: "105.71%",
    right: "-2.14%",
    bottom: "-2.81%",
    left: "-3.57%",
    top: "0%",
    maxHeight: "100%",
    display: "none",
  },
  carTop: {
    marginTop: 86.64,
    marginLeft: -93.25,
  },
  carTop1: {
    marginTop: -106.91,
    marginLeft: 93.25,
  },
  car: {
    marginTop: -124.87,
    marginLeft: -93.25,
  },
  motoTopIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  motoTop: {
    top: 293,
    left: 16,
  },
  motoTop1: {
    top: 97,
    left: 171,
  },
  motoTop2: {
    left: 35,
    top: 0,
  },
  moto: {
    top: -28,
    left: 20,
    width: 229,
    height: 343,
    display: "none",
    position: "absolute",
  },
  drivers: {
    marginTop: -279,
    marginLeft: -104.5,
  },
  btnLocIcon: {
    bottom: 257,
    width: 80,
    height: 80,
    borderRadius: Border.br_13xl,
  },
  icLocIcon: {
    marginTop: -160,
    marginLeft: -7.5,
    width: 78,
    height: 78,
    left: "50%",
    borderRadius: Border.br_13xl,
  },
  navBg: {
    backgroundColor: "transparent",
    display: "none",
    position: "absolute",
  },
  navBtnIcon: {
    top: 16,
    width: 66,
    height: 66,
    left: 0,
    position: "absolute",
  },
  navText: {
    marginLeft: -118.5,
    top: 35,
    fontSize: FontSize.heading2_size,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.heading2,
    textAlign: "center",
    width: 237,
    height: 20,
    display: "none",
    left: "50%",
  },
  batteryIcon: {
    width: 24,
    top: 2,
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
    right: "5.87%",
    left: "7.2%",
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  navbarX: {
    width: 375,
    height: 70,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  aIm: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 40,
    elevation: 40,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_13xl,
  },
});

export default AIm;
