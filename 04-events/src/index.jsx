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

// Vanila JS Events
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function (e) {
//   // do something when event fires
// });

// REACT EVENT

// similar approach to Vanilla JS
// element, event, function
// Always use camelCase

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
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

const EventExamples = () => {
  const handleFormInput = (e) => {
    // e - element
    console.log(e);
    // console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButtonClick = () => {
    alert("Button Clicked");
  };
  const handleFormSubmission = (e) => {
    //handle submission by ourself
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section>
      {/* use onSubmit on form tag and add a type='submit' button */}
      <form onSubmit={handleFormSubmission}>
        <h2>Form</h2>
        {/* set onChange for inputs */}
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        />
        {/* or use onClick on button tag with submit type and remove the onSubmit in the form tag */}
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </form>
      {/* type button by default */}
      <button onClick={handleButtonClick}> Click Me</button>
    </section>
  );
};

//MIND GRENADE
//alternative approach
//pass anonymous fucntions (arrow) in the events directly
//simplier/less code

{
  /* <button type="submit" onClick={()=>alert('Button clicked')}>
Submit
</button> */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
