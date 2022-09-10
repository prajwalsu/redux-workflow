import React, { Component } from "react";
import { connect } from "react-redux";
import AddPerson from "../components/AddPerson";
import * as actionTypes from "../store/action";

class PersonDisplay extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />

        {this.props.prs.map((person) => {
          return (
            <>
              <p>{person.id}</p>
              <p>{person.name}</p>
              <p>{person.age}</p>
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedPerson: (name, age) => {
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: { name: name, age: age },
      });
    },
    onRemovedPerson: (id) => {
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDisplay);