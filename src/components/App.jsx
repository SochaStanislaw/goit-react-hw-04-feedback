import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "components/Section";
// import { Notification } from "./Notification";

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // setState((state, props) => {
  //   return {};
  // }, callback);

  onChange = change => {
    this.setState(prevState => {
      console.log(this.state)
      return {
        [change.target.textContent]:
          prevState[change.target.textContent] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    // if (this.state.good === 0)
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
    // return this.state.good > 0
    //   ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
    //   : 0;
  };

  render() {

    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        {/* section with title and option' btns */}
        <Section
        title={'leave feedback'}
        >
          <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onChange}
          />
        </Section>

        {/* section with stats and info'bout no stats yet */}
        
        <Section
        title={'stats:'}
        >
          {totalFeedback !== 0
          ? (
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          )
          : (
            <h1>
              there is no feedback
            </h1>
            // <Notification
            // message="there is no feedback"
            // />
          )              
          }
        </Section>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       xD
//     </div>
//   );
// };
