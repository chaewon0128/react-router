import React from 'react';
import { useOutletContext } from 'react-router';
import { authors } from '../db.js'
export default function Character() {

    const {books, name} = useOutletContext();

const author = authors.filter((author) => author.name === name)[0].books
const characters = author.filter((book) => book.series === books)[0].Characters


    return (
        <div>
            <h3>Characters</h3>
            {characters.map((char)=> <li key={char}>{char}</li>)}
        </div>
    );
}

