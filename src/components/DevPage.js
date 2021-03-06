import React from "react";
import { connect } from "react-redux";

import * as actions from "../stores/counter/COUNTER_actions";

const DevPage = (props) => {
  const {
    counter,
    incrementIt,
    decreaseIt,
    increaseFastCount,
    decreaseFastCount,
  } = props;
  return (
    <div>
      <h2>Dev Website</h2>
      <h3>Count Number: {counter}</h3>
      <button onClick={incrementIt}>Increment +1</button>
      <br />
      <br />
      <button onClick={decreaseIt}>Decrement -1</button>
      <br />
      <br />
      <button onClick={() => increaseFastCount(3)}>Fast Increase +3</button>
      <br />
      <br />
      <button onClick={() => decreaseFastCount(5)}>Fast Decrement -5</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counterreduce };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementIt: () => dispatch(actions.increaseCount()),
    decreaseIt: () => dispatch(actions.decreaseCount()),
    increaseFastCount: (n) => dispatch(actions.increaseFastCount(n)),
    decreaseFastCount: (n) => dispatch(actions.decreaseFastCount(n)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevPage);
