import Header from "./components/Header"
import './index.css'
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeeddback = (id) => {
        if (window.confirm('are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeeddback} />
            </div>
        </>

    )
}

export default App