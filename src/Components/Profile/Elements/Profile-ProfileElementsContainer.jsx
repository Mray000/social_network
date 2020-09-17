import { connect } from "react-redux";
import ProfileElements from "./Profile-ProfileElements";
import {
  UpdateStatus,
  // UpdatePhoto,
} from "../../../Redux/Reducers/ProfileReducer";
import { compose } from "redux";
import { withRouter } from "react-router-native";
const mapStateToProps = (state) => ({
  profile: state.Profile.profile,
  myId: state.Auth.id,
});

const ProfileElementsContainer = compose(
  connect(mapStateToProps, { UpdateStatus }),
  withRouter
)(ProfileElements);

export default ProfileElementsContainer;
