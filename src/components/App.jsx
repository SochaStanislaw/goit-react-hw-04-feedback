// import { Component } from "react";
import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
// import { Notification } from "./Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback()) * 100);

  function onChange(option) {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const options = ['good', 'neutral', 'bad']
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title={'leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onChange}
        />
      </Section>
      
      <Section title={'stats:'}>
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <h1>
            there is no feedback
          </h1>
        )}
      </Section>
    </div>
  );
};

// export class App extends Component {
  
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onChange = change => {
//     this.setState(prevState => {
//       console.log(this.state)
//       return {
//         [change.target.textContent]:
//           prevState[change.target.textContent] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100)
//   };

//   render() {

//     const options = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();

//     return (
//       <div>
//         <Section
//         title={'leave feedback'}
//         >
//           <FeedbackOptions
//           options={options}
//           onLeaveFeedback={this.onChange}
//           />
//         </Section>
//         <Section
//         title={'stats:'}
//         >
//           {totalFeedback !== 0
//           ? (
//             <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={totalFeedback}
//             positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           )
//           : (
//             <h1>
//               there is no feedback
//             </h1>
//           )              
//           }
//         </Section>
//       </div>
//     );
//   }
// };

