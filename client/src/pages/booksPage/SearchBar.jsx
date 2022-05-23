import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios"
import "./SearchBar.css"



//SEARCH BAR I DONE
//2 FILTERS UNDER DEVELOPMENT

function SearchBar() {

  const [filter, setFilter ]= useState("");
  const [result, setResult] = useState([]);
  const [selectedCategory, setselectedCategory] = useState()
  const [apiKey, setApiKey] = useState("AIzaSyBcd2dek9-5LPhIii3Y1mjr867aFfz2-gI");

  function handleChange(event){
    const book = event.target.value
    setFilter(book);

  }


  useEffect(()=>{
    const f = filter || "books";
    console.log(f)
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+f+"&key="+apiKey+"&maxResults=40")
    .then(data => {
      // console.log(data?.data?.items)
      setResult(data?.data?.items)
    }) 
  },[filter])
  console.log("hey im result" )
  console.log(result)


  const filterByCategory = (result) => {
    // Avoid filter for empty string
    if (!selectedCategory) {
      return result;
    }

    const filteredBooks = result?.filter(
      (book) => book?.book?.volumeInfo?.categories.split(" ").indexOf(selectedCategory) !== -1 
    ) 
    // console.log(filteredBooks+ "Xckfdlllllllllllllllllllllshaouxfhq43ui fqq4h")
    console.log("hey im result after filtering" )
    console.log(filteredBooks)
    
    return filteredBooks;
   
  };
 
  const handleCategoryChange = (event) => {
    console.log(event.target.value+ "from handle");
    setselectedCategory(event.target.value);
  };

  useEffect(() => {
    var result = filterByCategory(result);
    console.log(result+"filtered**********************************")
    setFilter(result);
  }, [selectedCategory]);


  return (
    
    <div>
        {/* <h1>HEADEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEER</h1> */}
    <div>
      </div>
        <form >
         <div className="bg-input">
          <input 
          type="text" onChange={handleChange}
          className="input-control"
          placeholder="ISBN ابحث عن كتابك من خلال اسمه او "
           autoComplete="off" >
           </input>
        </div>
        <div className="brand-filter">
          <select
            id="brand-input"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Computers">Computers</option>
            <option value="Fiction">Fiction</option>
            <option value="Comics">Comics & Graphic Novels</option>
          </select>
        </div>
        {/* <div className="dropdown">
        <span>اختر اللغة</span>
        <div className="dropdown-content">
        <a href="#">en</a>
        <a href="#">ar</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>
        <a href="#">en</a>

  </div>
</div> */}
      </form>
      { result?.map(book =>(  
        
        <div className="searched-img" key={book.id}>
          {/* <h1>{book?.volumeInfo?.language == }</h1> */}
            <img  src= {book?.volumeInfo?.imageLinks?.thumbnail}  alt={book?.title}/> 
        </div>
       ))
       
       };
    </div> 
  ); 
}
export default SearchBar;
//map on result  

