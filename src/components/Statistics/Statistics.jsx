import PropTypes from 'prop-types';

export const Statistics = ({

  good,
  neutral,
  bad,
  total,
  positiveFeedback,

}) => {

  return (
    <div>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {total}</li>
        <li>% of positive feedback only: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number
};
