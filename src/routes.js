import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MoodDash from "./components/Mood/MoodDash";
import HabitDash from "./components/Habit/HabitDash";
import Login from "./components/Auth/Login";
import LandingPage from "./LandingPage";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/moods" component={MoodDash} />
    <Route path="/habits" component={HabitDash} />
  </Switch>
);
