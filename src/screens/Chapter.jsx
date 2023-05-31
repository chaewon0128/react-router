import { useOutletContext } from 'react-router';
import { authors } from '../db.js'
export default function Chapter() {


    const {books, name} = useOutletContext();

const author = authors.filter((author) => author.name === name)[0].books
const chapters = author.filter((book) => book.series === books)[0].Chapters



    return (
        <div>
            <h3>Chapters</h3>
            {chapters.map((chapter)=> <li key={chapter}>{chapter}</li>)}
        </div>
    );
}

