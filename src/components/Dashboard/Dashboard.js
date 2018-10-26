import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mood from "./Mood";
import Habit from "./Habit";
import Header from '../Header/Header'
import "../CSS/Dashboard.scss";
import { getHabits, checkHabit } from "../../ducks/habitReducer";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    const { auth } = this.props.firebase;
    if (auth.uid) {
      this.props.getHabits(auth.uid);
      this.props.checkHabit(auth.uid);
    }
  }
  componentDidUpdate(prevProps) {
    const { auth } = this.props.firebase;
    if (auth !== prevProps.firebase.auth) {
      if (auth.uid) {
        this.props.getHabits(auth.uid);
        this.props.checkHabit(auth.uid);
      }
    }
  }
  render() {
    return (
      <div className="dashboard">
        <Header/>
        <Mood className="moodCard" />
        <Habit className="moodCard" auth={this.props.firebase.auth} />
      </div>
    );
  }
}
export default connect(state => state,{ getHabits, checkHabit })(Dashboard);
