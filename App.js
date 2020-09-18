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

const App = ({ Initialing, initialized, ...props }) => {
  useEffect(() => {
    Initialing();
  }, [Initialing]);
  if (!initialized) return <Preloader />;
  console.log(console.log(props.match));
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0.001, backgroundColor: "#010101" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Switch>
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/dialogs/:userId?" component={DialogsContainer} />
          <Redirect from="/" to="/profile" />
        </Switch>
        <Navigation />
      </SafeAreaView>
    </Fragment>
  );
};

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
