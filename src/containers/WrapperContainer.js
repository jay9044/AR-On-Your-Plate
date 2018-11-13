import Wrapper from "../components/Wrapper";
import { connect } from "react-redux";
import {
  updateDish,
  hideModal,
  receiveCourse,
  filterStarter,
  filterMain,
  filterDessert,
} from "../actions";

function mapStateToProps(state) {
  console.log(state.wrapper);
  console.log(state.item.dishes)
  return {
    modalVisible: state.wrapper.modalVisible,
    course: state.wrapper.course,
    starter: state.wrapper.starter,
    main: state.wrapper.main,
    dessert: state.wrapper.dessert,
    dishes: state.item.dishes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    receiveCourse: () => dispatch(receiveCourse(course)),
    filterStarter: () => dispatch(filterStarter()),
    filterMain: () => dispatch(filterMain()),
    filterDessert: () => dispatch(filterDessert()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
