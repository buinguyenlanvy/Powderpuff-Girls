import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Completed = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.completed, styles.mapLayout]}>
      <View style={[styles.map, styles.mapLayout]} />
      <Text style={styles.driverName}>Đã đặt lịch hẹn thành công!</Text>
      <View style={styles.navbarX}>
        <LinearGradient
          style={styles.navBg}
          locations={[0, 1]}
          colors={["#fff", "rgba(236, 236, 236, 0)"]}
        />
        <Image
          style={styles.navBtnIcon}
          contentFit="cover"
          source={require("../assets/nav-btn2.png")}
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
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.cellularConnectionIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cellular-connection.png")}
            />
            <View style={[styles.timeStyle, styles.timeStyleLayout]}>
              <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle2.png")}
      />
      <Button
        style={styles.btnMain}
        title="Về trang chủ"
        appearance="filled"
        textStyle={styles.btnMainText}
        onPress={() => navigation.navigate("Homepage")}
      >
        Về trang chủ
      </Button>
      <Image
        style={[styles.ratingIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rating.png")}
      />
      <Text style={[styles.tnSIn, styles.tnSInLayout]}>{`Tên: 
Số điện thoại:
Địa điểm:
Thời gian:
Ngày:
Đơn vị:`}</Text>
      <Text style={[styles.tnKhchHng, styles.tnSInLayout]}>{`Tên khách hàng
09******09
89 Nguyễn Trãi, Bến Thành
07h00 - 09h00
15/10/2023
Vựa Vĩnh Phát`}</Text>
      <Image
        style={styles.completedChild}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={styles.image13Icon}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Text style={styles.tiChGiy}>
        Tái chế giấy tại nhà thành những vật dụng đáng yêu!
      </Text>
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
  timeStyleLayout: {
    height: 17,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: 2,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tnSInLayout: {
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  map: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  driverName: {
    top: 108,
    left: -1,
    fontSize: FontSize.heading2_size,
    width: 376,
    height: 20,
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0,
    color: Color.colorLightseagreen_300,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    position: "absolute",
  },
  navBg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    display: "none",
    backgroundColor: "transparent",
    left: "0%",
    position: "absolute",
    width: "100%",
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
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helvetica,
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
    right: -1,
    left: 1,
    height: 70,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  rectangleIcon: {
    right: 6,
    bottom: 481,
    left: 6,
    height: 195,
    borderRadius: Border.br_mini,
    maxWidth: "100%",
  },
  btnMain: {
    right: 21,
    bottom: 109,
    left: 21,
    height: 61,
    position: "absolute",
  },
  ratingIcon: {
    right: 101,
    bottom: 189,
    left: 104,
    height: 36,
  },
  tnSIn: {
    top: 157,
    left: 34,
    width: 155,
    height: 146,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  tnKhchHng: {
    top: 162,
    left: 28,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
    width: 312,
    height: 135,
    color: Color.colorLightseagreen_300,
    lineHeight: 20,
    fontSize: FontSize.textReg_size,
  },
  completedChild: {
    top: 368,
    left: 11,
    width: 160,
    height: 154,
    position: "absolute",
  },
  image13Icon: {
    top: 342,
    width: 225,
    height: 187,
    left: 0,
    position: "absolute",
  },
  tiChGiy: {
    top: 407,
    left: 207,
    fontSize: FontSize.size_smi,
    width: 126,
    height: 86,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    position: "absolute",
  },
  completed: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_13xl,
  },
});

export default Completed;
