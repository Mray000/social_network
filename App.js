import React, { useEffect, Fragment } from "react";
import "react-native-gesture-handler";
import store from "./src/Redux/store";
import { Provider, connect } from "react-redux";
import { Initialing } from "./src/Redux/Reducers/AppReducer";
import ProfileContainer from "./src/Components/Profile/ProfileContainer";
import Preloader from "./src/mini-components/Preloader";
import {
  NativeRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-native";
import Navigation from "./src/Components/Navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import DialogsContainer from "./src/Components/Dialogs/DialogsContainer";
import { compose } from "redux";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const image = {
  uri:
    // "https://i.pinimg.com/originals/0e/3e/68/0e3e683a50835eee5c54c48f6c590775.jpg",
    "https://i.pinimg.com/originals/f9/3e/8e/f93e8e29eedbc48048551f1cf7efa5f9.jpg",
  // "https://i.pinimg.com/564x/49/56/7e/49567e1b2a1c54700c6771cfe7add3fd.jpg",
};

const App = ({ Initialing, initialized, ...props }) => {
  useEffect(() => {
    Initialing();
  }, [Initialing]);
  if (!initialized) return <Preloader />;
  return (
    <Fragment>
      {/* <LinearGradient
        // colors={["#120727", "#120727", "#4C444F", "#4C444F"]}
        // colors={["#0D1817", "#000000", "#0D1817", "#000000"]}
        colors={["#0D1817", "#000000", "#0D1817", "#000000"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, height: 300 }}
      > */}
      <SafeAreaView
        style={{
          flex: 0.003,
          backgroundColor: "#193248",
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Switch>
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/dialogs/:userId?" component={DialogsContainer} />
            <Redirect from="/" to="/profile" />
          </Switch>
        </View>
        {/* </ImageBackground> */}
      </SafeAreaView>
      <Navigation />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#193248",
    // resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
});

const mapStateToProps = (state) => ({
  initialized: state.App.initialized,
});

const AppContainer = compose(
  connect(mapStateToProps, { Initialing }),
  withRouter
)(App);

const MyApp = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <AppContainer />
      </NativeRouter>
    </Provider>
  );
};

export default MyApp;
