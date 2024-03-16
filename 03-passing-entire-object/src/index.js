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

// render component
// pass entire object as a prop

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {Books.map((book) => {
//         return <Book book={book} key={book.id} />; // passed the entire object book
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   const { Images, Title, Author } = props.book;
//   console.log(props.book);
//   return (
//     <article className="books">
//       <img src={Images} alt={Title}></img>
//       <h2>{Title}</h2>
//       <h4>{Author}</h4>
//     </article>
//   );
// };

// OR
// use spread operator
const Booklist = () => {
  return (
    <section className="booklist">
      {Books.map((book) => {
        return <Book {...book} key={book.id} />; // book is ...spread
      })}
    </section>
  );
};

const Book = (props) => {
  const { Images, Title, Author } = props;
  return (
    <article className="books">
      <img src={Images} alt={Title}></img>
      <h2>{Title}</h2>
      <h4>{Author}</h4>
    </article>
  );
};

// We can also destructure in parameter for readability

// const Book = ({ Images, Title, Author }) => {
//     console.log(props);
//     return (
//       <article className="books">
//         <img src={Images} alt={Title}></img>
//         <h2>{Title}</h2>
//         <h4>{Author}</h4>
//       </article>
//     );
//   };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
