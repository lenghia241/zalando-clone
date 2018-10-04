import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, minusOne } from "../../actions/counterActions";
import PropTypes from "prop-types";

class MainApp extends Component {
  render() {
    return (
      <div>
        <h4>Counter App</h4>
        <button
          className="waves-effect waves-light btn"
          onClick={this.props.addOne}
        >
          <i className="material-icons left">add</i>
          Add
        </button>
        <button
          className="waves-effect waves-light btn"
          onClick={this.props.minusOne}
        >
          <i className="material-icons left">remove</i>
          Minus
        </button>
        <h5>{this.props.counter}</h5>
      </div>
    );
  }
}

const mapState = state => ({
  counter: state.counter
});

MainApp.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired
};

export default connect(
  mapState,
  { addOne, minusOne }
)(MainApp);
