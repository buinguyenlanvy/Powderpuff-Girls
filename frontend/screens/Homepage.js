import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homepage, styles.mapIconLayout]}>
      <Image
        style={[styles.mapIcon, styles.mapIconLayout]}
        contentFit="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.block, styles.blockPosition]}>
        <Image
          style={[styles.blockBgIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/block-bg2.png")}
        />
        <View style={styles.list}>
          <Text style={styles.heading3}>Bảng giá mua</Text>
        </View>
        <Image
          style={[styles.icGestureIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ic-gesture1.png")}
        />
      </View>
      <Pressable
        style={styles.navBtn}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/nav-btn.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchLayout1]} />
      </View>
      <Text style={[styles.ngiDng, styles.tLchFlexBox]}>Người dùng</Text>
      <Image
        style={styles.homepageChild}
        contentFit="cover"
        source={require("../assets/group-291.png")}
      />
      <StatusBar barStyle="default" />
      <View style={styles.categories}>
        <Button
          style={styles.flight}
          title="Đặt lịch"
          appearance="filled"
          textStyle={styles.flightText}
          onPress={() => navigation.navigate("AIm")}
        >
          Đặt lịch
        </Button>
        <Button
          style={styles.flightShadowBox}
          title="Lịch sử"
          appearance="outline"
          textStyle={styles.flight1Text}
          onPress={() => navigation.navigate("History1")}
        >
          Lịch sử
        </Button>
        <Button
          style={styles.flightShadowBox}
          title="Định giá"
          appearance="outline"
          textStyle={styles.flight2Text}
        >
          Định giá
        </Button>
      </View>
      <View style={[styles.cardBngGiParent, styles.groupPosition]}>
        <View style={styles.cardLayout}>
          <View style={[styles.itemHistory, styles.boundPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg9.png")}
            />
            <Text style={[styles.status, styles.text1Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address, styles.textClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text, styles.textClr]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textClr]}>Maria</Text>
          </View>
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image7Icon}
              resizeMode="cover"
              source={require("../assets/image-7.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text2, styles.textTypo]}>Giấy carton</Text>
              <Text style={[styles.text3, styles.textTypo]}>18.000đ/Kg</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardBngGi1, styles.cardLayout]}>
          <View style={[styles.itemHistory, styles.boundPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.status, styles.text1Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address, styles.textClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text, styles.textClr]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textClr]}>Maria</Text>
          </View>
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image8Icon}
              resizeMode="cover"
              source={require("../assets/image-8.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text2, styles.textTypo]}>Giấy báo</Text>
              <Text style={[styles.text3, styles.textTypo]}>19.000đ/Kg</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardBngGi1, styles.cardLayout]}>
          <View style={[styles.itemHistory, styles.boundPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.status, styles.text1Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address, styles.textClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text, styles.textClr]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textClr]}>Maria</Text>
          </View>
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image9Icon}
              resizeMode="cover"
              source={require("../assets/image-9.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text2, styles.textTypo]}>Giấy Photo</Text>
              <Text style={[styles.text3, styles.textTypo]}>18.000đ/Kg</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardBngGi1, styles.cardLayout]}>
          <View style={[styles.itemHistory, styles.boundPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.status, styles.text1Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address, styles.textClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text, styles.textClr]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textClr]}>Maria</Text>
          </View>
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image10Icon}
              resizeMode="cover"
              source={require("../assets/image-10.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text2, styles.textTypo]}>Nhựa PP</Text>
              <Text style={[styles.text3, styles.textTypo]}>25.000đ/Kg</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flightText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  flight1Text: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  flight2Text: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  mapIconLayout: {
    height: 812,
    borderRadius: Border.br_13xl,
  },
  blockPosition: {
    height: 833,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 0,
    position: "absolute",
  },
  searchLayout1: {
    height: 36,
    width: 232,
    position: "absolute",
  },
  tLchFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 80,
  },
  tLchClr: {
    color: Color.colorWhite,
    fontWeight: "700",
  },
  groupPosition: {
    left: 23,
    position: "absolute",
  },
  boundPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    fontSize: FontSize.size_smi,
    top: 14,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    height: 18,
  },
  setTypo: {
    fontFamily: FontFamily.textReg,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorDarkgray,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray_100,
    display: "none",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    width: 126,
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 20,
    height: 18,
  },
  cardLayout: {
    height: 141,
    width: 156,
  },
  mapIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  blockBgIcon: {
    bottom: -21,
    height: 833,
    right: 0,
    left: 0,
    position: "absolute",
    maxWidth: "100%",
    borderRadius: Border.br_13xl,
  },
  heading3: {
    fontSize: FontSize.size_lg,
    width: 127,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkgray,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    fontFamily: FontFamily.heading2,
    height: 18,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  list: {
    right: 227,
    bottom: 398,
    height: 18,
    left: 21,
    position: "absolute",
  },
  icGestureIcon: {
    marginLeft: -14.5,
    bottom: 835,
    left: "50%",
    width: 30,
    borderRadius: Border.br_13xl,
    height: 0,
  },
  block: {
    bottom: 0,
    height: 833,
    right: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  navBtn: {
    top: 16,
    width: 66,
    height: 66,
    left: 0,
    position: "absolute",
  },
  searchChild: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 36,
    borderRadius: Border.br_13xl,
  },
  search: {
    top: 25,
    left: 87,
  },
  ngiDng: {
    top: 33,
    left: 156,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.radioCanadaMedium,
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  homepageChild: {
    top: 19,
    left: 83,
    width: 44,
    height: 44,
    position: "absolute",
  },
  flight: {
    elevation: 15,
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  flightShadowBox: {
    marginLeft: 47,
    elevation: 15,
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  categories: {
    top: 318,
    width: 333,
    flexDirection: "row",
    left: 21,
    position: "absolute",
  },
  bgIcon: {
    height: "121.99%",
    width: "119.87%",
    top: "-8.16%",
    right: "-9.94%",
    bottom: "-13.83%",
    left: "-9.94%",
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
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
  },
  shapeStrokeIcon: {
    height: "26.82%",
    width: "35.77%",
    top: "50.28%",
    right: "-0.48%",
    bottom: "22.9%",
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
    display: "none",
    left: 21,
    maxWidth: "100%",
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
    width: 43,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    left: 63,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.textReg_size,
    height: 44,
    top: 0,
  },
  text: {
    top: -79,
    width: 42,
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
    width: 0,
    height: 19,
  },
  text1: {
    width: 176,
    fontSize: FontSize.size_smi,
    top: 14,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    height: 18,
    left: 21,
  },
  itemHistory: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
  },
  image7Icon: {
    width: 99,
    height: 80,
  },
  text2: {
    fontSize: FontSize.textReg_size,
    width: 126,
    textTransform: "capitalize",
    color: Color.colorDarkslateblue,
  },
  text3: {
    fontSize: FontSize.size_3xs,
    color: Color.colorLightseagreen_300,
    marginTop: 4,
  },
  textParent: {
    marginTop: 4,
  },
  image7Parent: {
    marginTop: -70,
    top: "50%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    left: "0%",
    right: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
  image8Icon: {
    width: 113,
    height: 80,
  },
  cardBngGi1: {
    marginLeft: 16,
  },
  image9Icon: {
    width: 92,
    height: 80,
  },
  image10Icon: {
    width: 88,
    height: 80,
  },
  cardBngGiParent: {
    top: 439,
    width: 328,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  homepage: {
    shadowRadius: 40,
    elevation: 40,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
});

export default Homepage;
