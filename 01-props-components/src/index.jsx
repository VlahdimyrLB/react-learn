import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  Title: "The Women: A Novel",
  Author: "Kristin Hannah",
  Images: "./images/book1.jpg",
};

const secondBook = {
  Title: "Atomic Habits",
  Author: "James Clear",
  Images: "./images/book2.jpg",
};

const thirdBook = {
  Title: "Men Have Called Her Crazy: A Memoir",
  Author: "Anna Marie Tendler",
  Images: "./images/book3.jpg",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Books
        author={firstBook.Author}
        title={firstBook.Title}
        img={firstBook.Images}
      />
      <Books
        author={secondBook.Author}
        title={secondBook.Title}
        img={secondBook.Images}
      />
      <Books
        author={thirdBook.Author}
        title={thirdBook.Title}
        img={thirdBook.Images}
      />
    </section>
  );
};

//Destructure props inside component/function
const Books = (props) => {
  const { img, title, author } = props;
  return (
    <article className="books">
      <img src={img} alt={props.title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// This also works Destructure props inside the function parameter directly
// const Book = ({img, title, author}) {
//   return(
//     <article className="books">
//       <img src={img} alt={props.title}></img>
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
