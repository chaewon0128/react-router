import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '../db.js'
export default function Home() {
    return (
        <div>
            <h1>Best Seller Authors</h1>
            {authors.map((author) => <li key={author.name}><Link to={`/author/${author.name}`}>{author.name}</Link></li> ) }
        </div>
    );
}

