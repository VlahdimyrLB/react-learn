const Book = (props) => {
  const { Images, Title, Author, number } = props;
  return (
    <article className="books">
      {/* we can directly add # beside but I used template literals `` to showcase usage */}
      {/* {number+1} is used because arrays start with 0 we are retrieving the position not the id */}
      <span className="number">{`# ${number + 1}`}</span>
      <img src={Images} alt={Title}></img>
      <h2>{Title}</h2>
      <h4>{Author}</h4>
    </article>
  );
};

//here we use the export default to export the Book Component
export default Book;
