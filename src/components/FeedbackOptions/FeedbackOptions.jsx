import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return options.map(option => (

    <button 
  
    key={option}
    onClick={onLeaveFeedback}
    // className=''

    >
      {option}
    </button>
  
  ))
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func
}