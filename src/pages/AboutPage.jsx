import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            This is about page
            <p>
                <Link to="/">Back to Home Page</Link>
            </p>
        </Card>
    )
}

export default AboutPage
