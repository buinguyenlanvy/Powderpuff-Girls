import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.history}>
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
        <Text style={[styles.navText, styles.navTextPosition]} />
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
      <Image
        style={styles.icMenuIcon}
        contentFit="cover"
        source={require("../assets/ic-menu1.png")}
      />
      <Image
        style={styles.icMenuIcon}
        contentFit="cover"
        source={require("../assets/ic-menu1.png")}
      />
      <View style={styles.historyChild} />
      <View style={styles.groupParent}>
        <View style={[styles.itemHistoryParent, styles.itemLayout]}>
          <View style={styles.itemHistory}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg8.png")}
            />
            <Text style={styles.status}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke8.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line5.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
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
          <View style={styles.itemHistory}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg8.png")}
            />
            <Text style={styles.status}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke8.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line5.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
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
          <Text style={[styles.text5, styles.textLayout]}>89 Nguyễn Trãi</Text>
          <Text style={[styles.text6, styles.textFlexBox]}>15 Sep, 2023</Text>
          <Image
            style={styles.lineIcon2}
            contentFit="cover"
            source={require("../assets/line7.png")}
          />
          <Text style={[styles.text7, styles.textTypo]}>17:00</Text>
        </View>
        <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
          <View style={styles.itemHistory}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg8.png")}
            />
            <Text style={styles.status}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke8.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line5.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
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
          <View style={styles.itemHistory}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg8.png")}
            />
            <Text style={styles.status}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke8.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line5.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
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
          <Text style={[styles.text5, styles.textLayout]}>89 Nguyễn Trãi</Text>
          <Text style={[styles.text6, styles.textFlexBox]}>23 June, 2023</Text>
          <Image
            style={styles.lineIcon2}
            contentFit="cover"
            source={require("../assets/line7.png")}
          />
          <Text style={[styles.text7, styles.textTypo]}>08:00</Text>
        </View>
      </View>
      <Button
        style={[styles.btnMain, styles.navTextPosition]}
        title="Về trang chủ"
        appearance="filled"
        textStyle={styles.btnMainText}
        onPress={() => navigation.navigate("Homepage")}
      >
        Về trang chủ
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnMainText: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  navBgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  navTextPosition: {
    left: "50%",
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
  itemLayout: {
    width: 255,
    height: 97,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  textLayout: {
    width: 200,
    textTransform: "capitalize",
    left: 28,
    height: 18,
    lineHeight: 20,
  },
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
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
    marginLeft: -118.5,
    top: 35,
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
    width: 30,
    height: 30,
    position: "absolute",
  },
  historyChild: {
    top: 93,
    left: 32,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowRadius: 14,
    elevation: 14,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    width: 312,
    height: 698,
    borderRadius: Border.br_mini,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorWhite,
  },
  bgIcon: {
    height: "131.96%",
    width: "112.16%",
    top: "-11.86%",
    right: "-6.08%",
    bottom: "-20.1%",
    left: "-6.08%",
    borderRadius: Border.br_mini,
  },
  status: {
    left: 212,
    color: Color.colorIndianred,
    width: 100,
    height: 18,
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    top: 14,
    fontSize: FontSize.size_smi,
    display: "none",
    position: "absolute",
  },
  bound: {
    backgroundColor: Color.colorGray_200,
  },
  shapeStrokeIcon: {
    height: "43.4%",
    width: "24.35%",
    top: "50.28%",
    right: "10.93%",
    bottom: "6.32%",
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
    maxWidth: "100%",
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
    left: 63,
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    top: 0,
  },
  text1: {
    top: -79,
    width: 141,
    height: 40,
    fontFamily: FontFamily.interRegular,
    left: 63,
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
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
    color: Color.colorDarkslategray_100,
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
    height: 97,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text5: {
    top: 33,
    color: Color.colorDarkslateblue,
    display: "flex",
    width: 200,
    textTransform: "capitalize",
    alignItems: "center",
    position: "absolute",
    fontSize: FontSize.textReg_size,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textAlign: "left",
  },
  text6: {
    top: 67,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorSilver,
    width: 200,
    textTransform: "capitalize",
    left: 28,
    height: 18,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_smi,
  },
  lineIcon2: {
    top: 60,
    right: 27,
    height: 1,
    left: 28,
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text7: {
    top: 10,
    color: Color.colorLightseagreen_300,
    width: 200,
    textTransform: "capitalize",
    left: 28,
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "right",
    fontFamily: FontFamily.heading2,
  },
  itemHistoryParent: {
    height: 97,
  },
  itemHistoryGroup: {
    marginTop: 50,
    height: 97,
  },
  groupParent: {
    top: 142,
    left: 60,
    position: "absolute",
  },
  btnMain: {
    marginLeft: -166.5,
    bottom: 117,
    width: 333,
    height: 61,
  },
  history: {
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

export default History1;
