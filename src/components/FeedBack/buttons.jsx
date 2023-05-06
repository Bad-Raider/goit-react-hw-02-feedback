
import React, { Component } from "react";
import css from './buttons.module.css';

class ButtonsCounter extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleButtonsClick = e => {
        
        // this.setState({
        //     good: this.state.good + 1,
        // })
        console.log(e.target.name)      
    };

  render() {
    return <section className={css.sectionFeedBack}>
        Please leave feedback
        <div >            
            <button
                type="button"
                value={this.state.good}
                name="Good"
                onClick={this.handleButtonsClick} className={css.feedbackBtn}>Good</button>
            <button
                type="button"
                value={this.state.neutral}
                name="Neutral"
                onClick={this.handleButtonsClick} 
                className={css.feedbackBtn}>Neutral</button>
            <button
                type="button"
                value={this.state.bad}
                name="Bad"
                onClick={this.handleButtonsClick} className={css.feedbackBtn}>Bad</button>
        </div>
    </section>;
  }
};

export default ButtonsCounter;