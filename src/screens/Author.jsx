import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { authors } from '../db.js'
export default function Author() {
    const { name } = useParams();

    const [books, setBooks] = useState([])
    
    useEffect(()=> {

        let value = authors.filter((author)=> author.name === name)
     setBooks(value[0].books)
     
    }, [name])

    return (
        <div>
<h1>{name}</h1>
{books.map((book) => <li key={book.series}><Link to={`${book.series}`}>{book.series}</Link></li>)}
<Outlet context={{name}}/>
        </div>
    );
}

