import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Books } from "./books";
import Book from "./Book";

// Import Export
// we imported the books array from books.js instead of clogging it here

const Booklist = () => {
  return (
    <>
      {/* Added index and number to add the book numbering */}
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {Books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
