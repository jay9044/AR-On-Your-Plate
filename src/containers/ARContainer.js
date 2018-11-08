import ARDisplay from "../components/ARDisplay";
import { connect } from "react-redux";
import {
  updateCameraPermission,
  updateTurkeyObj,
  updateTurkeyMtl,
} from "../actions";

function mapStateToProps(state) {
  console.log(state.ar.turkeyMtl);
  return {
    searchModalVisible: state.ar.searchModalVisible,
    hasCameraPermission: state.ar.hasCameraPermission,
    type: state.ar.type,
    turkeyObj: state.ar.turkeyObj,
    turkeyMtl: state.ar.turkeyMtl,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateCameraPermission: () => dispatch(updateCameraPermission()),
    updateTurkeyObj: obj => dispatch(updateTurkeyObj(obj)),
    updateTurkeyMtl: obj => dispatch(updateTurkeyMtl(obj)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ARDisplay);
