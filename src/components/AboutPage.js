import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>О нас</h1>
            <ul>
                <li><Link to="/">На главную</Link></li>
            </ul>
        </div>
    );
}

export default AboutPage;