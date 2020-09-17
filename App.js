import React, { useEffect, Fragment } from "react";
import "react-native-gesture-handler";
import ToDoList from "./src/Components/ToDoList/ToDoList";
import store from "./src/Redux/store";
import { Provider, connect } from "react-redux";
import { Initialing } from "./src/Redux/Reducers/AppReducer";
import ProfileContainer from "./src/Components/Profile/ProfileContainer";
import Preloader from "./src/mini-components/Preloader";
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import Navigation from "./src/Components/Navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

const App = ({ Initialing, initialized }) => {
  useEffect(() => {
    Initialing();
  }, [Initialing]);
  if (!initialized) return <Preloader />;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0.001, backgroundColor: "#22162A" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Switch>
          <Route path="/profile:userId?" component={ProfileContainer} />
          <Route path="/todolist" component={ToDoList} />
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

const AppContainer = connect(mapStateToProps, { Initialing })(App);

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
