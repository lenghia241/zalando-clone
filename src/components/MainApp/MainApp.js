import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, minusOne } from "../../actions/counterActions";
import { fetchApi } from "../../actions/asyncActions";
import PropTypes from "prop-types";

class MainApp extends Component {
  componentDidMount() {
    this.props.fetchApi();
  }
  render() {
    const api = JSON.stringify(this.props.async);
    return (
      <div>
        <h4>Mock App</h4>
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
        <h5>{api}</h5>
      </div>
    );
  }
}

const mapState = state => ({
  counter: state.counter,
  async: state.async
});

MainApp.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired
};

export default connect(
  mapState,
  { addOne, minusOne, fetchApi }
)(MainApp);
