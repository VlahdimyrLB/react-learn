import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

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

// PROPS Drilling
// react data flow - we can only pass props down

// const Booklist = () => {
//   const someValue = "Shake and Bake";
//   const displayValue = () => {
//     alert(someValue);
//   };
//   return (
//     <section className="booklist">
//       {Books.map((book) => {
//         return <Book {...book} key={book.id} displayValue={displayValue} />;
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   const { Images, Title, Author, displayValue } = props;
//   return (
//     <article className="books">
//       <img src={Images} alt={Title}></img>
//       <h2>{Title}</h2>
//       <button onClick={displayValue}>Display Title</button>
//       <h4>{Author}</h4>
//     </article>
//   );
// };

// Complex Example

const Booklist = () => {
  const getBook = (id) => {
    const book = Books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {Books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { Images, Title, Author, getBook, id } = props;
  // wrapper for the function getBook(id)
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="books">
      <img src={Images} alt={Title}></img>
      <h2>{Title}</h2>
      {/* We cannot invoke getBook(id) directly or else it will run all onload, so we created a wrapper for it name getSingleBook */}
      <button onClick={getSingleBook}>Display Title</button>
      <h4>{Author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
