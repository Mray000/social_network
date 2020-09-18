import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
// import { withAuthRedirect } from "../../utils/AuthRedirect";
import { View } from "react-native";
import { withRouter } from "react-router-native";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return <Dialogs userId={props.match.params.userId} />;
};

const mapStateToProps = (state) => ({
  dialogs: state.Dialogs,
});

export default compose(connect(mapStateToProps), withRouter)(DialogsContainer);
