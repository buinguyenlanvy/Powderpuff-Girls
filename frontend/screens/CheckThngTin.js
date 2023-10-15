import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Button } from "@ui-kitten/components";
import ItemHistory from "../components/ItemHistory";
import Frame from "../components/Frame";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CheckThngTin = () => {
  const [groupFlatListData, setGroupFlatListData] = useState([
    <ItemHistory />,
    <Frame />,
  ]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.checkThngTin}>
      <Image
        style={[styles.image12Icon, styles.itemPosition]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <View style={[styles.block, styles.blockPosition]}>
        <Image
          style={[styles.blockBgIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/block-bg1.png")}
        />
        <Image
          style={[styles.icons8ChevronRight961, styles.groupInnerPosition]}
          contentFit="cover"
          source={require("../assets/icons8chevronright96-1.png")}
        />
      </View>
      <View style={[styles.navbarX, styles.itemPosition]}>
        <LinearGradient
          style={[styles.navBg, styles.navBgPosition]}
          locations={[0, 1]}
          colors={["#fff", "rgba(236, 236, 236, 0)"]}
        />
        <Image
          style={styles.navBtnIcon}
          contentFit="cover"
          source={require("../assets/nav-btn2.png")}
        />
        <Text style={[styles.navText, styles.textTypo]}>Hospital Carlos</Text>
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
      <View style={styles.checkThngTinChild} />
      <Image
        style={[styles.checkThngTinItem, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={styles.icons8TimeMachine644}
        contentFit="cover"
        source={require("../assets/icons8timemachine64-4.png")}
      />
      <Text style={[styles.handToHand, styles.handClr]}>Hand to hand</Text>
      <Pressable
        style={styles.addressParent}
        onPress={() => navigation.navigate("Completed")}
      >
        <Input
          style={styles.address}
          placeholder="Địa chỉ nhận:"
          placeholderTextColor="#352555"
          textStyle={styles.addressTextInputText}
          label="89 Nguyễn Trãi"
        />
        <View style={[styles.itemHistoryParent, styles.itemLayout]}>
          <View style={[styles.itemHistory, styles.itemLayout]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg5.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon, styles.shapeIconPosition]}
                contentFit="cover"
                source={require("../assets/shape-stroke5.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line4.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address1, styles.addressClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text1, styles.textPosition]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text2, styles.addressClr]}>Maria</Text>
          </View>
          <View style={[styles.hourMinuteSelector, styles.hourPosition]}>
            <View style={styles.hourParent}>
              <View style={styles.hour}>
                <View style={[styles.inputField, styles.fieldBorder]}>
                  <Text style={styles.timeText}>07</Text>
                </View>
                <Text style={[styles.timeLabel, styles.timeTypo]}>Hour</Text>
              </View>
              <View style={styles.separatorWrapper}>
                <Image
                  style={styles.separatorIcon}
                  contentFit="cover"
                  source={require("../assets/separator.png")}
                />
              </View>
              <View style={styles.hour1}>
                <View style={[styles.inputField, styles.fieldBorder]}>
                  <Text style={styles.timeText}>20</Text>
                </View>
                <Text style={[styles.timeLabel, styles.timeTypo]}>Minute</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text3}>-</Text>
          <View style={[styles.hourMinuteSelector1, styles.hourPosition]}>
            <View style={styles.hourParent}>
              <View style={styles.hour}>
                <View style={[styles.inputField, styles.fieldBorder]}>
                  <Text style={styles.timeText}>09</Text>
                </View>
                <Text style={[styles.timeLabel, styles.timeTypo]}>Hour</Text>
              </View>
              <View style={styles.separatorWrapper}>
                <Image
                  style={styles.separatorIcon}
                  contentFit="cover"
                  source={require("../assets/separator.png")}
                />
              </View>
              <View style={styles.hour1}>
                <View style={[styles.inputField, styles.fieldBorder]}>
                  <Text style={styles.timeText}>20</Text>
                </View>
                <Text style={[styles.timeLabel, styles.timeTypo]}>Minute</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.itemHistoryGroup}>
          <View style={[styles.itemHistory1, styles.itemPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg6.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon1, styles.shapeIconPosition]}
                contentFit="cover"
                source={require("../assets/shape-stroke6.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address2, styles.addressClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text4, styles.textPosition]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text2, styles.addressClr]}>Maria</Text>
          </View>
          <View style={[styles.frameWrapper, styles.groupChildPosition]}>
            <View style={styles.textFieldParent}>
              <Input
                style={[styles.textField, styles.fieldBorder]}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="#979797"
                textStyle={styles.textFieldTextInputText}
              />
              <Text style={[styles.timeLabel4, styles.timeTypo]}>Date</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemHistoryContainer}>
          <View style={[styles.itemHistory1, styles.itemPosition]}>
            <Image
              style={[styles.bgIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bg6.png")}
            />
            <Text style={[styles.status, styles.text2Typo]}>Cancelled</Text>
            <View style={styles.icArrow}>
              <View style={[styles.bound, styles.navBgPosition]} />
              <Image
                style={[styles.shapeStrokeIcon1, styles.shapeIconPosition]}
                contentFit="cover"
                source={require("../assets/shape-stroke6.png")}
              />
            </View>
            <Image
              style={[styles.lineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
            <View style={styles.group}>
              <Text style={[styles.setYourLocation, styles.setTypo]}>
                11:24
              </Text>
              <Text style={[styles.setYourLocation1, styles.setTypo]} />
              <Text style={[styles.address2, styles.addressClr]}>
                Ealing Broadway Shopping Centre, London, W55JY, UK
              </Text>
              <Text style={[styles.text4, styles.textPosition]}>
                1, Thrale Street, London, SE19HW, UK
              </Text>
              <Image
                style={styles.icRouteIcon}
                contentFit="cover"
                source={require("../assets/ic-route.png")}
              />
            </View>
            <Text style={[styles.text2, styles.addressClr]}>Maria</Text>
          </View>
          <View style={styles.groupChildPosition} />
          <FlatList
            style={[styles.groupItem, styles.itemPosition]}
            data={groupFlatListData}
            renderItem={({ item }) => item}
          />
        </View>
        <Button
          style={[styles.rectangleParent, styles.groupInnerLayout]}
          title="Chọn đại lý"
          appearance="outline"
          textStyle={styles.groupButtonText}
        >
          Xác nhận lịch hẹn
        </Button>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  addressTextInputText: {
    fontFamily: "Quicksand-Regular",
    color: "#979797",
  },
  textFieldTextInputText: {
    fontFamily: "Quicksand-Regular",
    color: "#979797",
  },
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  itemPosition: {
    top: 0,
    left: 0,
  },
  blockPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupInnerPosition: {
    left: 324,
    position: "absolute",
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
  textTypo: {
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
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
  lineIconLayout: {
    height: 0,
    position: "absolute",
  },
  handClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  itemLayout: {
    width: 324,
    height: 65,
  },
  iconLayout: {
    maxHeight: "100%",
    borderRadius: Border.br_mini,
    bottom: "-29.23%",
    top: "-16.92%",
    height: "146.15%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Typo: {
    height: 18,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  shapeIconPosition: {
    left: "64.71%",
    top: "50.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  setTypo: {
    color: Color.colorDarkgray,
    lineHeight: 18,
    fontFamily: FontFamily.textReg,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  addressClr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  textPosition: {
    height: 40,
    top: -79,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  hourPosition: {
    width: 108,
    top: 11,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  fieldBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  timeTypo: {
    marginTop: 4,
    color: Color.m3SysLightOnSurfaceVariant,
    fontSize: 8,
    lineHeight: 10,
    fontFamily: FontFamily.textReg,
    letterSpacing: 0,
  },
  groupChildPosition: {
    height: 47,
    width: 293,
    left: 11,
    top: 9,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 60,
    width: 324,
  },
  btnTextFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  image12Icon: {
    width: 650,
    height: 458,
    left: 0,
    position: "absolute",
  },
  blockBgIcon: {
    height: 629,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  icons8ChevronRight961: {
    top: 518,
    width: 25,
    height: 36,
  },
  block: {
    height: 614,
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
    color: Color.colorDarkslateblue,
    width: 237,
    height: 20,
    textAlign: "center",
    display: "none",
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
    right: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  checkThngTinChild: {
    top: 210,
    left: 156,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 63,
    height: 4,
    position: "absolute",
  },
  checkThngTinItem: {
    bottom: 322,
    left: 65,
    width: 0,
  },
  icons8TimeMachine644: {
    top: 569,
    left: 392,
    width: 18,
    height: 41,
    position: "absolute",
  },
  handToHand: {
    height: "5.06%",
    width: "24.53%",
    top: "70.35%",
    left: "112.46%",
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  address: {
    width: 319,
    borderRadius: Border.br_13xl,
  },
  bgIcon: {
    width: "109.26%",
    right: "-4.63%",
    left: "-4.63%",
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
    height: "74.53%",
    width: "22.06%",
    right: "13.23%",
    bottom: "-24.81%",
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
    left: 21,
    display: "none",
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
  address1: {
    width: 211,
    height: 44,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    color: Color.colorDarkslategray_100,
    top: 0,
  },
  text1: {
    width: 210,
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
    height: 19,
    width: 0,
    position: "absolute",
  },
  text2: {
    width: 176,
    left: 21,
    height: 18,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    top: 14,
    alignItems: "center",
    fontFamily: FontFamily.heading2,
    fontWeight: "700",
  },
  itemHistory: {
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeText: {
    fontSize: 20,
    lineHeight: 34,
    color: Color.colorGray_100,
    fontFamily: FontFamily.textReg,
    textAlign: "center",
  },
  inputField: {
    borderRadius: 5,
    borderWidth: 1.3,
    height: 33,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 52,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
  },
  timeLabel: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  hour: {
    width: 52,
  },
  separatorIcon: {
    width: 4,
    height: 20,
  },
  separatorWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 7,
    marginLeft: 6.54,
    justifyContent: "center",
    flexDirection: "row",
  },
  hour1: {
    marginLeft: 6.54,
    width: 52,
  },
  hourParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  hourMinuteSelector: {
    left: 22,
    justifyContent: "center",
    flexDirection: "row",
  },
  text3: {
    top: 24,
    left: 149,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    width: 20,
    height: 15,
    lineHeight: 10,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  hourMinuteSelector1: {
    left: 189,
    justifyContent: "center",
    flexDirection: "row",
    height: 44,
  },
  itemHistoryParent: {
    marginTop: 40,
    height: 65,
  },
  bgIcon1: {
    width: "109.55%",
    right: "-4.78%",
    left: "-4.78%",
  },
  shapeStrokeIcon1: {
    height: "72.43%",
    width: "22.12%",
    right: "13.17%",
    bottom: "-22.7%",
  },
  address2: {
    width: 201,
    height: 44,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    fontSize: FontSize.textReg_size,
    left: 63,
    color: Color.colorDarkslategray_100,
    top: 0,
  },
  text4: {
    width: 200,
  },
  itemHistory1: {
    height: 65,
    right: 0,
    left: 0,
    position: "absolute",
  },
  textField: {
    borderRadius: Border.br_8xs,
    borderWidth: 1.2,
    width: 272,
  },
  timeLabel4: {
    width: 52,
    textAlign: "left",
  },
  textFieldParent: {
    width: 284,
  },
  frameWrapper: {
    flexDirection: "row",
  },
  itemHistoryGroup: {
    width: 314,
    marginTop: 40,
    height: 65,
  },
  groupItem: {
    maxWidth: 314,
    width: 314,
    left: 0,
    position: "absolute",
    flex: 1,
    top: 0,
  },
  itemHistoryContainer: {
    height: 73,
    width: 314,
    marginTop: 40,
  },
  rectangleParent: {
    marginTop: 40,
  },
  addressParent: {
    top: 266,
    left: 28,
    height: 483,
    position: "absolute",
  },
  checkThngTin: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_13xl,
  },
});

export default CheckThngTin;
