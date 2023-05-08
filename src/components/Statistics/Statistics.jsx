

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <div className="statistics">
        <p>Good:
            <span> {good}</span>
        </p>
        <p>Neutral:
            <span> {neutral}</span>
        </p>
        <p>Bad:
            <span> {bad}</span>
        </p>
        <p>Total:
            <span> {total}</span>
        </p>
        
        {positivePercentage>=0 && (<p> Positive feedback:
            <span> {positivePercentage}%</span>
        </p>)}
    </div>
};

export default Statistics;

