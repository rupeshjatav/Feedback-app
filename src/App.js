import Header from "./components/Header"
import './index.css'
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeeddback = (id) => {
        if (window.confirm('are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeeddback} />
            </div>
        </>

    )
}

export default App