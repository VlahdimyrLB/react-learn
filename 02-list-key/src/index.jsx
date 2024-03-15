import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

//for keyprop error it is typically an ID

const Books = [
  {
    id: 1,
    Title: "The Women: A Novel",
    Author: "Kristin Hannah",
    Images: "./images/book1.jpg",
  },
  {
    id: 2,
    Title: "Atomic Habits",
    Author: "James Clear",
    Images: "./images/book2.jpg",
  },
  {
    id: 3,
    Title: "Men Have Called Her Crazy: A Memoir",
    Author: "Anna Marie Tendler",
    Images: "./images/book3.jpg",
  },
];

// MAP REFERENCE
// const names = ["john", "susan"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

// Create a new variable for maping
// const newBooks = Books.map((book) => {
//   return <p>{book.Title}</p>;
// });

// const Booklist = () => {
//   // We can create a new variable for mapping and use it here
//   // return <section className="booklist">{newBooks}</section>;

//   // or can we use map() in the here right away
//   return (
//     <section className="booklist">
//       {Books.map((book) => {
//         return <h1>{book.Title}</h1>;
//       })}
//     </section>
//   );
// };

// ALWAYS SET THE KEY TO WHERE YOU ITERATE

//DESTRUCTUING APPROACH
const Booklist = () => {
  return (
    <section className="booklist">
      {Books.map((book) => {
        const { Title, Author, Images, id } = book;
        return <Book title={Title} author={Author} img={Images} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="books">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// DIRECT MAPPING APPORACH
// add index in the parameter
// use this only if the number of list is not changing
// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {Books.map((Books, index) => (
//         <Book key={index} books={Books} />
//       ))}
//     </section>
//   );
// };

// const Book = ({ books }) => {
//   return (
//     <article className="books">
//       <img src={books.Images} alt={books.Title}></img>
//       <h2>{books.Title}</h2>
//       <h4>{books.Author}</h4>
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
