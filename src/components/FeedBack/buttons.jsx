
import React, { Component } from "react";
import css from './buttons.module.css';
import Statistics from '../Statistics/info';


class ButtonsCounter extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleButtonsClickGood = () => {

        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    };

    handleButtonsClickNeutral = () => {

        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    };

    handleButtonsClickBad = () => {

        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
        console.log(this.state)      
    };

    countTotalFeedback  () {
        return Object.values(this.state).reduce((acc, num) => acc + num, 0);
    };

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        const goodFeedBack = this.state.good;
        const result = goodFeedBack * 100 / total;
        
        return parseInt(result, 10);    
    };

    render() {
        const totalFeedBack = this.countTotalFeedback();
        const positivFeedBack = this.countPositiveFeedbackPercentage();
        
    return <section className={css.sectionFeedBack}>
        <h2>Please leave feedback</h2>
        <div >            
            <button
                type="button"
                value={this.state.good}
                name="Good"
                onClick={this.handleButtonsClickGood} className={css.feedbackBtn}>Good</button>
            <button
                type="button"
                value={this.state.neutral}
                name="Neutral"
                onClick={this.handleButtonsClickNeutral} 
                className={css.feedbackBtn}>Neutral</button>
            <button
                type="button"
                value={this.state.bad}
                name="Bad"
                onClick={this.handleButtonsClickBad} className={css.feedbackBtn}>Bad</button>
        </div>
        <Statistics
            value={this.state}
            total={totalFeedBack}
            positivePercentage={positivFeedBack}
        />
    </section>
  }
};

export default ButtonsCounter;


// good={} neutral={} bad={} total={} positivePercentage={}>.