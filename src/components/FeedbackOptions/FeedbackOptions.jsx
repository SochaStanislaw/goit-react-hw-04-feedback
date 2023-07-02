import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = (option) => {
    onLeaveFeedback(option);
  };

  return options.map((option) => (
    <button key={option} onClick={() => handleClick(option)}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
