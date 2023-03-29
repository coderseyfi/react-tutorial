import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css'

const firstBook = {
    author: 'Dav Pilkey',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    img: '../images/book-1.jpg'
}

const secondBook = {
    author: 'James Clear',
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, velit?',
    img: '../images/amazon1.jpg'
}

const BookList = () => {
    return <section className='booklist'>
        <Book
            author={firstBook.author}
            title={firstBook.itle}
            img={firstBook.img} />
        <Book
            author={secondBook.author}
            title={secondBook.title}
            img={secondBook.img} />
    </section>
}


const Book = (props) => {
    console.log(props);
    return <article className='book'>
        <img src={props.img} alt="picture" />
        <h2>{props.title}</h2>
        <h4>
            {props.author}
        </h4>
    </article>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BookList />
)
