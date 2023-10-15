import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Bill = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.bill, styles.mapLayout]}>
      <View style={[styles.map, styles.mapPosition]} />
      <Text style={styles.driverName}>Đơn hàng của bạn</Text>
      <Pressable style={styles.navbarX} onPress={() => navigation.goBack()}>
        <LinearGradient
          style={[styles.navBg, styles.navBgPosition]}
          locations={[0, 1]}
          colors={["#fff", "rgba(236, 236, 236, 0)"]}
        />
        <Image
          style={[styles.navBtnIcon, styles.mapPosition]}
          contentFit="cover"
          source={require("../assets/nav-btn2.png")}
        />
        <Text style={styles.navText} />
        <View style={styles.statusBarBlack}>
          <View style={styles.iphoneXstatusBarsstatusBa}>
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
            <View style={[styles.timeStyle, styles.mapPosition]}>
              <Text style={styles.text}>9:41</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <Image
        style={[styles.rectangleIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Button
        style={styles.btnMain}
        title="Đặt lịch hẹn"
        appearance="filled"
        textStyle={styles.btnMainText}
        onPress={() => navigation.navigate("AIm")}
      >
        Đặt lịch hẹn
      </Button>
      <Text style={[styles.giyHS, styles.vnTypo]}>{`Giấy hồ sơ
Giấy báo
Bìa carton`}</Text>
      <Text style={[styles.vn12000Vn, styles.vn12000VnTypo]}>{`3.200 VNĐ
12.000 VNĐ
40.000 VNĐ`}</Text>
      <Text
        style={[styles.kilogram2Kilogram, styles.vn12000VnTypo]}
      >{`0,4 kilogram
2 kilogram
4 kilogram`}</Text>
      <Text style={[styles.tng, styles.vnTypo]}>Tổng</Text>
      <Text style={[styles.vn, styles.vnLayout]}>55.000 VNĐ</Text>
      <Image
        style={styles.image14Icon}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Pressable
        style={styles.vTrangChContainer}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={[styles.vTrangCh, styles.btnTextFlexBox]}>
          Về trang chủ
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnMainText: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  mapLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  mapPosition: {
    left: 0,
    position: "absolute",
  },
  navBgPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    height: 11,
    top: 2,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  btnTextFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  vnTypo: {
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  vn12000VnTypo: {
    height: 135,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 162,
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  vnLayout: {
    width: 86,
    left: 254,
  },
  map: {
    width: 375,
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  driverName: {
    top: 108,
    left: -1,
    letterSpacing: 0,
    lineHeight: 28,
    width: 376,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    color: Color.colorLightseagreen_300,
    fontWeight: "700",
    fontSize: FontSize.heading2_size,
    position: "absolute",
  },
  navBg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    display: "none",
    backgroundColor: "transparent",
  },
  navBtnIcon: {
    top: 16,
    width: 66,
    height: 66,
  },
  navText: {
    marginLeft: -118.5,
    top: 35,
    left: "50%",
    position: "absolute",
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
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeStyle: {
    width: 28,
    height: 17,
    top: 0,
  },
  iphoneXstatusBarsstatusBa: {
    top: -1,
    right: 1,
    width: 326,
    height: 17,
    position: "absolute",
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
    right: -1,
    left: 1,
    height: 70,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  rectangleIcon: {
    right: 6,
    bottom: 496,
    left: 6,
    height: 160,
  },
  rectangleIcon1: {
    right: 4,
    bottom: 439,
    left: 7,
    height: 65,
  },
  btnMain: {
    right: 21,
    bottom: 109,
    left: 21,
    height: 61,
    position: "absolute",
  },
  giyHS: {
    top: 157,
    width: 155,
    height: 146,
    left: 34,
    fontSize: FontSize.textReg_size,
    color: Color.colorBlack,
  },
  vn12000Vn: {
    textAlign: "right",
    width: 86,
    left: 254,
    color: Color.colorLightseagreen_300,
    height: 135,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 162,
  },
  kilogram2Kilogram: {
    marginLeft: -46.5,
    color: "#1b816e",
    width: 93,
    justifyContent: "center",
    textAlign: "center",
    left: "50%",
  },
  tng: {
    top: 328,
    width: 77,
    left: 34,
    fontSize: FontSize.textReg_size,
    color: Color.colorWhite,
    height: 17,
  },
  vn: {
    top: 323,
    height: 27,
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
    color: Color.colorWhite,
  },
  image14Icon: {
    top: 406,
    left: 9,
    width: 356,
    height: 224,
    opacity: 0.8,
    position: "absolute",
  },
  vTrangCh: {
    marginLeft: -96.5,
    textDecoration: "underline",
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 193,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 24,
    letterSpacing: 1,
    justifyContent: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  vTrangChContainer: {
    top: 710,
    left: "50%",
    position: "absolute",
  },
  bill: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_13xl,
  },
});

export default Bill;
