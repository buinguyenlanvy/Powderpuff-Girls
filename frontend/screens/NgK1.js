import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { Image } from "expo-image";
import { LinearProgress } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NgK1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ngK1}>
      <View style={styles.ngK1Child} />
      <Button
        style={[styles.rectangleParent, styles.groupChildLayout]}
        title="Tiếp tục"
        appearance="filled"
        textStyle={styles.groupButtonText}
        onPress={() => navigation.navigate("NgK2")}
      >
        Tiếp tục
      </Button>
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
          <View style={styles.timeStyle}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.inputsParent, styles.groupPosition]}>
        <Input style={[styles.inputs, styles.inputsPosition1]} />
        <Text style={[styles.post, styles.postTypo]}>Tên</Text>
      </View>
      <View style={[styles.inputsGroup, styles.groupPosition]}>
        <Input style={[styles.inputs, styles.inputsPosition1]} />
        <Text style={[styles.post, styles.postTypo]}>
          Số điện thoại đăng nhập
        </Text>
      </View>
      <View style={[styles.inputsContainer, styles.inputsPosition]}>
        <Input style={[styles.inputs2, styles.inputsPosition1]} />
        <Text style={[styles.post2, styles.postTypo]}>Mật khẩu</Text>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Input style={[styles.inputs, styles.inputsPosition1]} />
          <Text
            style={[styles.post, styles.postTypo]}
          >{`Xác nhận mật khẩu `}</Text>
        </View>
      </View>
      <Text style={styles.ngK}>Đăng ký</Text>
      <LinearProgress style={styles.ngK1Item} color="#352555" />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
  },
  groupChildLayout: {
    height: 60,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: 2,
    position: "absolute",
  },
  groupPosition: {
    height: 71,
    top: "50%",
    position: "absolute",
  },
  inputsPosition1: {
    top: "50%",
    position: "absolute",
  },
  postTypo: {
    height: 16,
    width: 246,
    color: Color.colorLightseagreen_300,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    left: 8,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  inputsPosition: {
    left: 36,
    right: 36,
  },
  ngK1Child: {
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
    backgroundColor: "#40B59F",
    left: 0,
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
    height: 17,
    left: 0,
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
    right: "6.13%",
    left: "6.93%",
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  inputs: {
    marginTop: -35.5,
    right: 0,
    left: 0,
  },
  post: {
    marginTop: -30.5,
  },
  inputsParent: {
    marginTop: -258,
    left: 36,
    right: 36,
  },
  inputsGroup: {
    marginTop: -181,
    left: 36,
    right: 36,
  },
  inputs2: {
    marginTop: -74,
    right: 0,
    left: 0,
  },
  post2: {
    marginTop: -69,
  },
  groupView: {
    marginTop: 3,
    right: 0,
    left: 0,
  },
  inputsContainer: {
    marginTop: -104,
    height: 148,
    top: "50%",
    position: "absolute",
  },
  ngK: {
    marginLeft: -143.5,
    left: "50%",
    fontSize: FontSize.size_20xl,
    letterSpacing: 1,
    width: 287,
    height: 174,
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
  ngK1Item: {
    top: 764,
    left: 160,
    width: 55,
    height: 10,
    position: "absolute",
  },
  ngK1: {
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

export default NgK1;
