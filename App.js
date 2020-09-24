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

const image = {
  uri:
    "https://i.pinimg.com/originals/0e/3e/68/0e3e683a50835eee5c54c48f6c590775.jpg",
};

const App = ({ Initialing, initialized, ...props }) => {
  useEffect(() => {
    Initialing();
  }, [Initialing]);
  if (!initialized) return <Preloader />;

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0.003, backgroundColor: "#0E083D" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={image} style={styles.image}>
          <Switch>
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/dialogs/:userId?" component={DialogsContainer} />
            <Redirect from="/" to="/profile" />
          </Switch>
        </ImageBackground>
      </SafeAreaView>
      <Navigation />
    </Fragment>
  );
};

const styles = StyleSheet.create({
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
