import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VaVechaiList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaVechaiList}>
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
        <Text style={styles.navText}>Tuyến đường phù hợp</Text>
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
      <Button
        style={[styles.rectangleParent, styles.groupChildLayout]}
        title="Xác nhận"
        appearance="filled"
        textStyle={styles.groupButtonText}
        onPress={() => navigation.navigate("CheckThngTin")}
      >
        Xác nhận
      </Button>
      <View style={styles.vaVechaiListChild} />
      <View style={styles.instanceParent}>
        <View style={styles.itemLayout}>
          <View style={styles.navBgPosition}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line2.png")}
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
          <View style={[styles.textParent, styles.textParentPosition]}>
            <Text style={styles.text3}>Vựa ve chai Thành Đạt</Text>
            <Text style={[styles.text4, styles.textTypo]}>07h00 - 07h30</Text>
            <Text style={[styles.text5, styles.textTypo]}>
              Khu vực phường Bến Thành
            </Text>
          </View>
        </View>
        <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
          <View style={styles.navBgPosition}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line2.png")}
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
          <View style={[styles.textGroup, styles.textParentPosition]}>
            <Text style={styles.text3}>Vựa Vĩnh Phát</Text>
            <Text style={[styles.text4, styles.textTypo]}>06h50 - 07h15</Text>
            <Text style={[styles.text5, styles.textTypo]}>
              Khu vực phường Bến Thành
            </Text>
          </View>
        </View>
        <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
          <View style={styles.navBgPosition}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line2.png")}
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
          <View style={[styles.textGroup, styles.textParentPosition]}>
            <Text style={styles.text3}>Vựa Hồng Ngọc</Text>
            <Text style={[styles.text4, styles.textTypo]}>07h00 - 07h15</Text>
            <Text style={[styles.text5, styles.textTypo]}>
              Khu vực phường Bến Thành
            </Text>
          </View>
        </View>
        <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
          <View style={styles.navBgPosition}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line2.png")}
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
          <View style={[styles.frameView, styles.textParentPosition]}>
            <Text style={styles.text3}>Vựa ve chai Hoàng Yến</Text>
            <Text style={[styles.text4, styles.textTypo]}>07h10 - 07h35</Text>
            <Text style={[styles.text5, styles.textTypo]}>
              Khu vực phường Bến Thành
            </Text>
          </View>
        </View>
        <View style={[styles.itemHistoryGroup, styles.itemLayout]}>
          <View style={styles.navBgPosition}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line2.png")}
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
          <View style={[styles.textParent1, styles.textParentPosition]}>
            <Text style={styles.text3}>Đại lý ve chai Nhật Minh</Text>
            <Text style={[styles.text4, styles.textTypo]}>07h10 - 07h45</Text>
            <Text style={[styles.text5, styles.textTypo]}>
              Khu vực phường Bến Thành
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
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
  timeStyleLayout: {
    height: 17,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: 2,
    position: "absolute",
  },
  groupChildLayout: {
    height: 60,
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
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    textTransform: "uppercase",
    alignItems: "center",
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
  textParentPosition: {
    bottom: "12.05%",
    top: "15.66%",
    height: "72.29%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textReg,
    lineHeight: 20,
    textAlign: "left",
  },
  itemLayout: {
    height: 83,
    width: 273,
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
    left: "50%",
    fontSize: FontSize.heading2_size,
    width: 237,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    color: Color.colorDarkslateblue,
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
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangleParent: {
    top: 715,
    left: 3,
    width: 375,
  },
  vaVechaiListChild: {
    top: 93,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowRadius: 14,
    elevation: 14,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    width: 333,
    height: 587,
    left: 21,
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
    height: "136.14%",
    width: "110.99%",
    top: "-13.25%",
    right: "-5.49%",
    bottom: "-22.89%",
    left: "-5.49%",
    borderRadius: Border.br_mini,
  },
  status: {
    left: 212,
    color: Color.colorIndianred,
    textAlign: "right",
    width: 100,
    display: "none",
    position: "absolute",
  },
  bound: {
    backgroundColor: Color.colorGray_200,
  },
  shapeStrokeIcon: {
    height: "51.8%",
    width: "23.23%",
    top: "50.28%",
    right: "12.05%",
    bottom: "-2.08%",
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
    borderRadius: Border.br_7xs,
    height: 0,
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
    width: 160,
    height: 44,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    left: 63,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.textReg_size,
    top: 0,
  },
  text1: {
    top: -79,
    width: 159,
    height: 40,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    left: 63,
    color: Color.colorDarkslategray_100,
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
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    textTransform: "uppercase",
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    left: 21,
  },
  text3: {
    fontSize: FontSize.textReg_size,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  text4: {
    color: Color.colorLightseagreen_300,
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
  },
  text5: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslateblue,
  },
  textParent: {
    width: "60.07%",
    right: "32.23%",
    left: "7.69%",
  },
  textGroup: {
    width: "56.41%",
    right: "34.07%",
    left: "9.52%",
  },
  itemHistoryGroup: {
    marginTop: 20,
  },
  frameView: {
    width: "60.81%",
    right: "31.87%",
    left: "7.33%",
  },
  textParent1: {
    width: "63.74%",
    right: "30.4%",
    left: "5.86%",
  },
  instanceParent: {
    top: 143,
    left: 51,
    position: "absolute",
  },
  vaVechaiList: {
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

export default VaVechaiList;
