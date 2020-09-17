import React, { useEffect } from "react";
import { compose } from "redux";
import Profile from "./Profile";
import { connect } from "react-redux";
import Preloader from "../../mini-components/Preloader";
import { GetProfile } from "../../Redux/Reducers/ProfileReducer";
import { withRouter } from "react-router-native";
// import { withRouter } from "react-router-native";

const ProfileContainer = ({ myId, GetProfile, profileUserId, match }) => {
  if (!match.params.userId) {
    match.params.userId = myId;
  }
  useEffect(() => {
    GetProfile(match.params.userId);
  }, [match.params.userId]);
  if (!profileUserId) return <Preloader />;
  return <Profile />;
};

const mapStateToProps = (state) => ({
  profileUserId: state.Profile.profile.userId,
  isAuth: state.Auth.isAuth,
  myId: state.Auth.id,
});

export default compose(
  connect(mapStateToProps, { GetProfile }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
