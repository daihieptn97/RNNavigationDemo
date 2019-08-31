import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
    AsyncStorage,
    Image,
    Text,
    KeyboardAvoidingView,
    NetInfo,
    Alert,
    Linking,
    BackHandler,
    ImageBackground
} from "react-native";


class SplashScreen extends Component {
    constructor() {
        super();
    }

    //Hủy tất cả các events
    componentWillMount() {
        let contex = this;
        setTimeout(() => {
            contex.props.navigation.replace("App");
        }, 2000);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar hidden={true} />
                <View style={[styles.logContainer]}>
                    <View>
                        <Text
                            style={{
                                color: "green",
                                fontSize: 30,
                                fontWeight: "900"
                            }}
                        >
                            HUNONIC
                            </Text>
                    </View>

                </View>

            </KeyboardAvoidingView>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1
    },
    logoImage: {
        width: 100,
        height: 100
    },
    tileLogo: {
        color: "green",
        opacity: 0.8,
        fontSize: 20,
        fontWeight: "500",
        position: "absolute",
        bottom: 40
    }
});
