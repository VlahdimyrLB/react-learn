// here the images are in src folder for better performance
// we need to import each image and we can give it a name
import img1 from "./images/book1.jpg";
import img2 from "./images/book2.jpg";
import img3 from "./images/book3.jpg";

// add export to the component we want to export
export const Books = [
  {
    id: 1,
    Title: "The Women: A Novel",
    Author: "Kristin Hannah",
    Images: img1, // now we can simply use the image here
  },
  {
    id: 2,
    Title: "Atomic Habits",
    Author: "James Clear",
    Images: img2,
  },
  {
    id: 3,
    Title: "Men Have Called Her Crazy: A Memoir",
    Author: "Anna Marie Tendler",
    Images: img3,
  },
];

// another way of export is exporting by default
// export default books;
// REMEMBER: we can only have 1 default export per file
// ALSO: by using dafault export we can change the name of it in the import however we want in the index
