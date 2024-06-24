import {Link} from 'react-router-dom';


function HomePage() {
    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                <li><Link to="/about">О нас</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;