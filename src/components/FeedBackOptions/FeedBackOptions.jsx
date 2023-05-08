    
const FeedBackOptions = ({ options, onLeaveFeedback }) => {

    return options.map(option => (
        (
            <button
                type="button"
                value={option}
                name={option}
                key={option}
                onClick={() => onLeaveFeedback(option)}>{option}
            </button>)
    ))
};

export default FeedBackOptions;
   
