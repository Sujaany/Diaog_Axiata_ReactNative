import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ResetPw from "./resetPin";

export default class LockScreen extends Component {
  state = {
    pin: "",
    attempt: 3,
    errorInfo: "",
    toggleView: true,
    validPin: "7890",
    blocked: false
  };

  handleInputPin = async pinNumber => {
    // console.log(number);
    await this.setState({ pin: this.state.pin + pinNumber }, () =>
      console.log(this.state.pin)
    );
    if (
      (await this.state.pin.length) === 4 &&
      (await this.state.pin) === this.state.validPin
    ) {
      alert("Successfully Logged In");
      await this.setState({ pin: "" }, () => console.log(this.state.pin));
      await this.setState({ attempt: 3 }, () =>
        console.log(this.state.attempt)
      );
      console.log("Success");
    } else if ((await this.state.pin.length) === 4) {
      if ((await this.state.attempt) === 3) {
        await this.setState({ errorInfo: "Incorrect PIN " });
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.attempt--;
        return;
      }
      if ((await this.state.attempt) === 2) {
        await this.setState({
          errorInfo: "PIN incorrect. Next incorrect will block you"
        });
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.attempt--;
        return;
      }
      if ((await this.state.attempt) <= 1) {
        await this.setState({
          errorInfo: "You are blocked . Please reset Pin"
        });
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.attempt--;
        return;
      }
    }
  };

  handleClearPin = () => {
    this.setState({ pin: "" }, () => console.log(this.state.pin));
    console.log(this.state.pin);
  };

  toggleViewFunc = () => {
    this.setState({ toggleView: !this.state.toggleView });
  };

  resetPin = () => {
    this.setState({ validPin: "1234" });
  };

  renderLogin = () => {
    if (this.state.toggleView === true) {
      return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>
          <View style={styles.loginContainer}>
            <View style={{ flex: 0.5, backgroundColor: "#000" }} />
            <Text style={styles.title}>Enter PIN to unlock </Text>
            <View
              style={{ flexDirection: "row", marginTop: 50, marginTop: 40 }}
            >
              <View
                style={
                  this.state.pin.length > 0
                    ? {
                        backgroundColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 1
                    ? {
                        backgroundColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 2
                    ? {
                        backgroundColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 3
                    ? {
                        backgroundColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#aa0061",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20
                      }
                }
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                width: "80%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.state.errorInfo}
              </Text>
            </View>
            <View style={{ marginTop: 50, width: "80%" }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("1")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("2")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>2</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("3")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("4")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>4</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("5")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>5</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("6")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      border: "#000"
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>6</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("7")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>7</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("8")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>8</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("9")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 35
                    }}
                  >
                    <Text style={{ fontSize: 20 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("0")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 20,
                      marginLeft: 25
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleClearPin()}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("./assets/clear.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                fontSize: 20,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#00416A"
              }}
            >
              <Text style={{ color: "#00416A" }}>Forgot PIN ?</Text>
              <TouchableOpacity onPress={() => this.toggleViewFunc()}>
                <Text style={{ color: "#00416A" }}>Tap here to reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogin()}
        {this.state.toggleView === false ? (
          <ResetPw
            toggleViewFunc={this.toggleViewFunc.bind(this)}
            resetPin={this.resetPin.bind(this)}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFB6C1",
    elevation: 2
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#00416A"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
