import { Outlet, useOutletContext, useParams } from 'react-router';
import { Link } from 'react-router-dom';
export default function Book() {
    const {books}= useParams()
    const {name} = useOutletContext();
    
    return (
        <div>
            <h2>{books}</h2>
            <li><Link to="chapters">Chapters</Link></li>
            <li><Link to="characters">Charcters</Link></li>
            <Outlet context={{books, name}}/>
        </div>
    );
}

