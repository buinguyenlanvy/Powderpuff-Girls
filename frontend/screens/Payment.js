import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Payment = () => {
  return (
    <View style={styles.payment}>
      <View style={styles.navbarX}>
        <LinearGradient
          style={[styles.navBg, styles.navBgPosition]}
          locations={[0, 1]}
          colors={["#fff", "rgba(236, 236, 236, 0)"]}
        />
        <Image
          style={styles.navBtnIcon}
          contentFit="cover"
          source={require("../assets/nav-btn3.png")}
        />
        <Text style={styles.navText} />
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
              source={require("../assets/wifi1.png")}
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
      <Image
        style={[styles.icMenuIcon, styles.icMenuIconLayout]}
        contentFit="cover"
        source={require("../assets/ic-menu1.png")}
      />
      <Image
        style={[styles.icMenuIcon, styles.icMenuIconLayout]}
        contentFit="cover"
        source={require("../assets/ic-menu1.png")}
      />
      <View style={[styles.paymentChild, styles.childBorder]} />
      <Text style={styles.navText1}>Your cards</Text>
      <View style={[styles.itemHistoryParent, styles.itemLayout]}>
        <View style={[styles.itemHistory, styles.itemLayout]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg7.png")}
          />
          <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
          <View style={styles.icArrow}>
            <View style={[styles.bound, styles.navBgPosition]} />
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
            <Text style={[styles.address, styles.textClr]}>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </Text>
            <Text style={[styles.text1, styles.textClr]}>
              1, Thrale Street, London, SE19HW, UK
            </Text>
            <Image
              style={styles.icRouteIcon}
              contentFit="cover"
              source={require("../assets/ic-route.png")}
            />
          </View>
          <Text style={[styles.text2, styles.textClr]}>Maria</Text>
        </View>
        <Text style={styles.text3}>**** **** **** 4154</Text>
        <Image
          style={styles.icons8CreditCard641}
          contentFit="cover"
          source={require("../assets/icons8creditcard64-1.png")}
        />
        <Image
          style={styles.lineIcon1}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
      </View>
      <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
        <View style={[styles.itemHistory, styles.itemLayout]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg7.png")}
          />
          <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
          <View style={styles.icArrow}>
            <View style={[styles.bound, styles.navBgPosition]} />
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
            <Text style={[styles.address, styles.textClr]}>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </Text>
            <Text style={[styles.text1, styles.textClr]}>
              1, Thrale Street, London, SE19HW, UK
            </Text>
            <Image
              style={styles.icRouteIcon}
              contentFit="cover"
              source={require("../assets/ic-route.png")}
            />
          </View>
          <Text style={[styles.text2, styles.textClr]}>Maria</Text>
        </View>
        <Text style={styles.text3}>**** **** **** 0801</Text>
        <Image
          style={styles.icons8CreditCard641}
          contentFit="cover"
          source={require("../assets/icons8creditcard64-1.png")}
        />
        <Image
          style={styles.lineIcon1}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
      </View>
      <View style={[styles.itemHistoryContainer, styles.itemLayout]}>
        <View style={[styles.itemHistory, styles.itemLayout]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bg7.png")}
          />
          <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
          <View style={styles.icArrow}>
            <View style={[styles.bound, styles.navBgPosition]} />
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
            <Text style={[styles.address, styles.textClr]}>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </Text>
            <Text style={[styles.text1, styles.textClr]}>
              1, Thrale Street, London, SE19HW, UK
            </Text>
            <Image
              style={styles.icRouteIcon}
              contentFit="cover"
              source={require("../assets/ic-route.png")}
            />
          </View>
          <Text style={[styles.text2, styles.textClr]}>Maria</Text>
        </View>
        <Text style={styles.text3}>**** **** **** 4576</Text>
        <Image
          style={styles.icons8CreditCard641}
          contentFit="cover"
          source={require("../assets/icons8creditcard64-1.png")}
        />
        <Image
          style={styles.lineIcon1}
          contentFit="cover"
          source={require("../assets/line8.png")}
        />
      </View>
      <View style={[styles.paymentInner, styles.rectangleLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.btnText, styles.btnTypo]}>Pay by cash</Text>
          <Image
            style={styles.shapeIcon}
            contentFit="cover"
            source={require("../assets/shape1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.btnText1, styles.btnTypo]}>Add new card</Text>
        <Image
          style={[styles.icons8Help642, styles.icMenuIconLayout]}
          contentFit="cover"
          source={require("../assets/icons8help64-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  icMenuIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  itemLayout: {
    height: 83,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Typo: {
    height: 18,
    alignItems: "center",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  setTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textReg,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  rectangleLayout: {
    height: 60,
    width: 375,
    position: "absolute",
  },
  groupLayout: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 303,
    height: 60,
    top: 60,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  btnTypo: {
    justifyContent: "center",
    fontSize: FontSize.size_4xl,
    top: "36.67%",
    height: "26.67%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  navBg: {
    backgroundColor: "transparent",
    display: "none",
  },
  navBtnIcon: {
    top: 16,
    width: 66,
    height: 66,
    left: 0,
    position: "absolute",
  },
  navText: {
    top: 35,
    left: "50%",
    marginLeft: -118.5,
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
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  icMenuIcon: {
    top: 30,
    left: 18,
  },
  paymentChild: {
    top: 93,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowRadius: 14,
    elevation: 14,
    borderColor: Color.colorWhitesmoke_200,
    width: 333,
    height: 442,
    borderRadius: Border.br_mini,
    left: 21,
    borderStyle: "solid",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  navText1: {
    top: 116,
    fontSize: FontSize.heading2_size,
    width: 237,
    height: 20,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    left: "50%",
    marginLeft: -118.5,
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
    width: 100,
    textAlign: "right",
    alignItems: "center",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    display: "none",
    position: "absolute",
  },
  bound: {
    backgroundColor: Color.colorGray_200,
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
    maxWidth: "100%",
    left: 21,
    display: "none",
    position: "absolute",
    overflow: "hidden",
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
    width: 142,
    height: 44,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    color: Color.colorDarkslategray_100,
    top: 0,
  },
  text1: {
    top: -79,
    width: 141,
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
  text2: {
    width: 176,
    height: 18,
    alignItems: "center",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    color: Color.colorDarkslategray_100,
    left: 21,
  },
  itemHistory: {
    left: 0,
    right: 0,
    top: 0,
  },
  text3: {
    top: 24,
    width: 170,
    display: "flex",
    left: 43,
    fontSize: FontSize.textReg_size,
    height: 18,
    alignItems: "center",
    textAlign: "right",
    textTransform: "uppercase",
    lineHeight: 20,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  icons8CreditCard641: {
    top: 21,
    width: 23,
    height: 25,
    left: 43,
    position: "absolute",
  },
  lineIcon1: {
    right: 41,
    height: 1,
    top: 60,
    left: 43,
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemHistoryParent: {
    top: 182,
    left: 60,
    right: 60,
    height: 83,
  },
  itemHistoryGroup: {
    top: 294,
    left: 60,
    right: 60,
    height: 83,
  },
  itemHistoryContainer: {
    top: 406,
    left: 60,
    right: 60,
    height: 83,
  },
  groupChild: {
    left: 336,
    borderColor: Color.colorLightseagreen_300,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  btnText: {
    color: Color.colorLightseagreen_300,
  },
  shapeIcon: {
    width: "2.53%",
    top: "38.33%",
    right: "16.4%",
    bottom: "35%",
    left: "81.07%",
    height: "26.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  paymentInner: {
    top: 678,
    left: 0,
  },
  groupItem: {
    left: 339,
    backgroundColor: Color.colorLightseagreen_300,
  },
  btnText1: {
    color: Color.colorWhite,
  },
  icons8Help642: {
    top: 15,
    left: 290,
  },
  rectangleGroup: {
    top: 594,
    left: -3,
  },
  payment: {
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

export default Payment;
