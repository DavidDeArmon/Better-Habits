import React, { Component } from "react";
import { connect } from "react-redux";
import { habitDays, getHabits } from "../../ducks/habitReducer";

class HabitDisplay extends Component {
  days(startDay, endDay, habitDays) {
    var start = new Date(startDay);
    var end = new Date(endDay);
    let displayArr=[];
    if(habitDays[0]){
    newHabitDays = habitDays;
      let newHabitDays = newHabitDays.map(habitEntry=>{
         habitEntry.date = new Date(habitEntry.date)
         return habitEntry.date
      })
      let j = 1
        for(let i = start; i<=end;i.setDate(i.getDate()+1)){
          let found = false;
          
          newHabitDays.forEach(day=>{
            console.log('day,i',day,i);
            day.getDate()
            console.log('+day, +i',+day, +i);
            if(day.getDate() === i.getDate() && day.getMonth() === i.getMonth() && day.getFullYear()===i.getFullYear()){
              found = true;
              console.log('found',found);
            }
          })
          if(found){
            if(this.props.habitReducer.detailed){
              displayArr.push(<div className="box" id="dataFound" key={j}>{i.getMonth()+1}/{i.getDate()}</div>);
            }else{
               displayArr.push(<div className="box" id="dataFound" key={j}></div>);
            }
          }else{
            if(this.props.habitReducer.detailed){
              displayArr.push(<div className="box" id="noData" key={j}><>{i.getMonth()+1}/{i.getDate()}</></div>);
            }else{
              displayArr.push(<div className="box" id="noData" key={j}></div>);
            }
          }
          j++
        }
    }
      return displayArr;
    }
  render() {
    var { habitDays, habits} = this.props.habitReducer;
    var {startDate,endDate} = this.props.moodReducer
    var habitDisplay = [];
    //establish array of subscribed habits and include the result of days function
    habits.forEach((habit, idx) => {
      let arrOfHabitsByID = habitDays.data.filter(habitEntry=>habitEntry.habit_id===habit.id)
      habitDisplay.push(
        <div className="habitCard" key={idx}>
          <h2>{habit.habit_name}</h2>
          {this.days(startDate, endDate, arrOfHabitsByID)}
        </div>
      );
    });
    return <div className="habitDisplay">{habitDisplay}</div>;
  };
};
export default connect(state=>state,{habitDays,getHabits})(HabitDisplay)
