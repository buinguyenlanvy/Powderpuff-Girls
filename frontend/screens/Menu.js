import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import { Button } from "@ui-kitten/components";
import Carousel from "react-native-reanimated-carousel";
import TopCard from "../components/TopCard";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Menu = () => {
  const [topCardItems, setTopCardItems] = useState([<TopCard />]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.menu, styles.menuLayout]}
      onPress={() => navigation.navigate("Homepage")}
    >
      <Image
        style={[styles.mapIcon, styles.menuLayout]}
        contentFit="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.block, styles.blockPosition]}>
        <Image
          style={[styles.blockBgIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/block-bg2.png")}
        />
        <View style={styles.list}>
          <Text style={[styles.heading3, styles.lchFlexBox]}>Bảng giá mua</Text>
        </View>
        <Image
          style={[styles.icGestureIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/ic-gesture1.png")}
        />
      </View>
      <Image
        style={styles.navBtnIcon}
        contentFit="cover"
        source={require("../assets/nav-btn.png")}
      />
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.childBorder]} />
      </View>
      <Text style={[styles.ngiDng, styles.tLchFlexBox]}>Người dùng</Text>
      <Image
        style={styles.menuChild}
        contentFit="cover"
        source={require("../assets/group-291.png")}
      />
      <View style={[styles.statusBarBlack, styles.address9Layout]}>
        <View style={styles.iphoneXstatusBarsstatusBa}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={[styles.text, styles.textPosition1]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.categories}>
        <Button
          style={styles.flight}
          title="Đặt lịch"
          appearance="filled"
          textStyle={styles.flightText}
        >
          Đặt lịch
        </Button>
        <Button
          style={styles.flightShadowBox}
          title="Lịch sử"
          appearance="outline"
          textStyle={styles.flight1Text}
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
      <View style={[styles.topCard, styles.menu1ShadowBox]}>
        <Carousel
          style={styles.carousel}
          width={332}
          height
          vertical={true}
          mode="parallax"
          autoPlay={true}
          loop={true}
          data={topCardItems}
          renderItem={({ item }) => item}
        />
      </View>
      <View style={[styles.cardBngGiParent, styles.groupPosition]}>
        <View style={styles.cardLayout}>
          <View style={[styles.itemHistory, styles.boundPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout2]}
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
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image7Icon}
              resizeMode="cover"
              source={require("../assets/image-7.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text3, styles.textTypo]}>Giấy carton</Text>
              <Text style={[styles.text4, styles.text4Clr]}>18.000đ/Kg</Text>
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
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout2]}
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
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image8Icon}
              resizeMode="cover"
              source={require("../assets/image-8.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text3, styles.textTypo]}>Giấy báo</Text>
              <Text style={[styles.text4, styles.text4Clr]}>19.000đ/Kg</Text>
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
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout2]}
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
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image9Icon}
              resizeMode="cover"
              source={require("../assets/image-9.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text3, styles.textTypo]}>Giấy Photo</Text>
              <Text style={[styles.text4, styles.text4Clr]}>18.000đ/Kg</Text>
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
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.boundPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape-stroke3.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout2]}
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
          <View style={[styles.image7Parent, styles.boundPosition]}>
            <ImageBackground
              style={styles.image10Icon}
              resizeMode="cover"
              source={require("../assets/image-10.png")}
            />
            <View style={styles.textParent}>
              <Text style={[styles.text3, styles.textTypo]}>Nhựa PP</Text>
              <Text style={[styles.text4, styles.text4Clr]}>25.000đ/Kg</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menu1, styles.sectionPosition]}>
        <View style={[styles.section2, styles.sectionPosition]}>
          <View style={[styles.bg, styles.sectionPosition]} />
          <Image
            style={styles.linkIcon}
            contentFit="cover"
            source={require("../assets/link.png")}
          />
        </View>
        <View style={[styles.section1, styles.sectionPosition]}>
          <View style={[styles.bg1, styles.sectionPosition]} />
        </View>
      </View>
      <View style={styles.addressParent}>
        <Pressable
          style={styles.address4}
          onPress={() => navigation.navigate("History1")}
        >
          <Text style={[styles.lchS1, styles.lchTypo]}>Lịch sử</Text>
        </Pressable>
        <Pressable
          style={styles.address5}
          onPress={() => navigation.navigate("AIm")}
        >
          <Text style={[styles.tLch1, styles.lchTypo]}>Đặt lịch</Text>
        </Pressable>
        <Text style={[styles.address6, styles.lchTypo]}>Định giá</Text>
        <Text style={[styles.address7, styles.lchTypo]}>Support</Text>
        <Text style={[styles.address8, styles.lchTypo]}>Settings</Text>
      </View>
      <Text style={[styles.address9, styles.lchTypo]}>Log out</Text>
      <View style={styles.photoDriverParent}>
        <Image
          style={styles.photoDriverIcon}
          contentFit="cover"
          source={require("../assets/photo-driver1.png")}
        />
        <Text style={[styles.driverName, styles.lchTypo]}>Người dùng</Text>
        <Text style={[styles.text17, styles.textPosition]}>09******09</Text>
      </View>
      <Image
        style={[styles.iconlylightOutlineaddUser, styles.iconlylightPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightoutlineadduser.png")}
      />
      <Image
        style={[styles.walletIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/wallet.png")}
      />
      <Image
        style={[styles.settingIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/setting.png")}
      />
      <Image
        style={[styles.iconlylightOutlinecalendar, styles.iconlylightPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightoutlinecalendar.png")}
      />
      <Image
        style={[styles.iconlylightOutlineshieldDo, styles.iconlylightPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightoutlineshielddone.png")}
      />
      <View style={[styles.groupView, styles.groupLayout]}>
        <Text style={[styles.text18, styles.textPosition]}>Edit</Text>
        <Image
          style={[styles.icons8Edit1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icons8-edit-1.png")}
        />
        <View style={[styles.groupChild, styles.groupLayout]} />
      </View>
    </Pressable>
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
  menuLayout: {
    height: 812,
    borderRadius: Border.br_13xl,
  },
  blockPosition: {
    height: 833,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout3: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  lchFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  iconLayout2: {
    height: 0,
    position: "absolute",
  },
  searchLayout1: {
    height: 36,
    width: 232,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  tLchFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  address9Layout: {
    height: 14,
    position: "absolute",
  },
  iconLayout1: {
    height: 11,
    position: "absolute",
  },
  textPosition1: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 80,
  },
  tLchTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  menu1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
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
  text2Typo: {
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
    lineHeight: 18,
    fontFamily: FontFamily.textReg,
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
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 20,
    height: 18,
  },
  text4Clr: {
    color: Color.colorLightseagreen_300,
    alignItems: "center",
    display: "flex",
  },
  cardLayout: {
    height: 141,
    width: 156,
  },
  sectionPosition: {
    width: 313,
    top: 0,
    position: "absolute",
  },
  lchTypo: {
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.heading2_size,
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  textPosition: {
    height: 16,
    lineHeight: 20,
    top: "50%",
    fontSize: FontSize.textReg_size,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconlylightPosition: {
    left: "7.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 21,
    position: "absolute",
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
    borderRadius: Border.br_13xl,
  },
  heading3: {
    fontSize: FontSize.size_lg,
    width: 127,
    textAlign: "left",
    left: 0,
    position: "absolute",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 20,
    display: "flex",
    height: 18,
    bottom: 0,
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
    width: 30,
    left: "50%",
    borderRadius: Border.br_13xl,
  },
  block: {
    bottom: 0,
  },
  navBtnIcon: {
    top: 16,
    width: 66,
    height: 66,
    left: 0,
    position: "absolute",
  },
  searchChild: {
    borderColor: Color.colorGainsboro_200,
    height: 36,
    width: 232,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
  },
  menuChild: {
    top: 19,
    left: 83,
    width: 44,
    height: 44,
    position: "absolute",
  },
  batteryIcon: {
    width: 24,
    top: 2,
    height: 11,
    right: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 2,
    height: 11,
  },
  cellularConnectionIcon: {
    right: 50,
    width: 17,
    top: 2,
    height: 11,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helvetica,
    color: Color.colorBlack,
    top: 0,
  },
  timeStyle: {
    width: 28,
    height: 17,
    left: 0,
    top: 0,
    position: "absolute",
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
    right: "6.4%",
    left: "6.67%",
    overflow: "hidden",
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
  carousel: {
    width: 332,
    height: 188.1019744873047,
  },
  topCard: {
    top: 91,
    borderRadius: 19,
    shadowRadius: 14.11,
    elevation: 14.11,
    width: 332,
    height: 188,
    left: 21,
    position: "absolute",
    overflow: "hidden",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
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
    height: "100%",
    left: "0%",
    right: "0%",
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
    fontFamily: FontFamily.textReg,
    display: "none",
  },
  setYourLocation1: {
    fontFamily: FontFamily.textReg,
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
  text1: {
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
  text2: {
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
    height: "100%",
    left: "0%",
    right: "0%",
  },
  image7Icon: {
    width: 99,
    height: 80,
  },
  text3: {
    fontSize: FontSize.textReg_size,
    width: 126,
    textTransform: "capitalize",
    color: Color.colorDarkslateblue,
    alignItems: "center",
    display: "flex",
  },
  text4: {
    fontSize: FontSize.size_3xs,
    width: 126,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 20,
    height: 18,
    marginTop: 4,
  },
  textParent: {
    marginTop: 4,
  },
  image7Parent: {
    marginTop: -70,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    top: "50%",
    left: "0%",
    right: "0%",
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
  bg: {
    bottom: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_13xl,
  },
  linkIcon: {
    top: 743,
    left: 52,
    width: 59,
    height: 1,
    position: "absolute",
  },
  section2: {
    bottom: 0,
    left: 0,
  },
  bg1: {
    borderTopLeftRadius: Border.br_10xs,
    borderTopRightRadius: Border.br_13xl,
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    backgroundColor: Color.colorLightseagreen_300,
    bottom: 0,
    left: 0,
  },
  section1: {
    bottom: 604,
    left: 0,
  },
  menu1: {
    bottom: -1,
    left: -1,
    shadowColor: "rgba(0, 0, 0, 0.27)",
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  lchS1: {
    width: 195,
    height: 17,
    color: Color.colorDarkslateblue,
    alignItems: "center",
    display: "flex",
  },
  address4: {
    bottom: 117,
    left: 0,
    position: "absolute",
  },
  tLch1: {
    width: 226,
    color: Color.colorBlack,
    height: 17,
    alignItems: "center",
    display: "flex",
  },
  address5: {
    bottom: 156,
    left: 0,
    position: "absolute",
  },
  address6: {
    bottom: 78,
    width: 226,
    height: 17,
    color: Color.colorDarkslateblue,
    alignItems: "center",
    display: "flex",
    left: 0,
    position: "absolute",
  },
  address7: {
    bottom: 39,
    width: 226,
    height: 17,
    color: Color.colorDarkslateblue,
    alignItems: "center",
    display: "flex",
    left: 0,
    position: "absolute",
  },
  address8: {
    width: 226,
    height: 17,
    color: Color.colorDarkslateblue,
    alignItems: "center",
    display: "flex",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  addressParent: {
    bottom: 361,
    left: 68,
    height: 173,
    width: 226,
    position: "absolute",
  },
  address9: {
    bottom: 72,
    left: 49,
    width: 175,
    color: Color.colorLightseagreen_300,
    alignItems: "center",
    display: "flex",
    height: 14,
    position: "absolute",
  },
  photoDriverIcon: {
    top: -12,
    left: 109,
    width: 103,
    height: 103,
    position: "absolute",
  },
  driverName: {
    marginTop: 19,
    marginLeft: -58.5,
    width: 118,
    height: 20,
    color: Color.colorWhitesmoke_100,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  text17: {
    marginTop: 41,
    color: Color.colorWhitesmoke_100,
    width: 309,
    fontFamily: FontFamily.textReg,
  },
  photoDriverParent: {
    top: 47,
    left: 2,
    height: 114,
    width: 309,
    position: "absolute",
  },
  iconlylightOutlineaddUser: {
    height: "2.59%",
    width: "5.66%",
    top: "43.6%",
    right: "86.88%",
    bottom: "53.82%",
  },
  walletIcon: {
    top: 276,
    width: 20,
    height: 20,
  },
  settingIcon: {
    top: 434,
    width: 22,
    height: 22,
  },
  iconlylightOutlinecalendar: {
    height: "2.46%",
    width: "4.84%",
    top: "38.79%",
    right: "87.7%",
    bottom: "58.74%",
  },
  iconlylightOutlineshieldDo: {
    height: "2.96%",
    width: "5.33%",
    top: "48.65%",
    right: "87.2%",
    bottom: "48.4%",
  },
  text18: {
    marginTop: -9.5,
    width: 51,
    color: Color.colorWhite,
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  icons8Edit1: {
    top: 5,
    left: 45,
    width: 11,
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: 26,
    borderColor: Color.colorWhite,
    width: 62,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  groupView: {
    marginTop: -223,
    right: 72,
    left: 241,
    top: "50%",
  },
  menu: {
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

export default Menu;
