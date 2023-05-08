import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <ul className={css.statistics}>
        <li>Good:
            <span className={css.statisticsSpan}> {good}</span>
        </li>
        <li>Neutral:
            <span className={css.statisticsSpan}> {neutral}</span>
        </li>
        <li>Bad:
            <span className={css.statisticsSpan}> {bad}</span>
        </li>
        <li>Total:
            <span className={css.statisticsSpan}> {total}</span>
        </li>
        <li> Positive feedback:
            <span className={css.statisticsSpan}> {positivePercentage}%</span>
        </li>
    </ul>
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}


