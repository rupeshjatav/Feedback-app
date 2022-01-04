// import { useState } from "react";
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of feedback item')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


export default FeedbackItem
