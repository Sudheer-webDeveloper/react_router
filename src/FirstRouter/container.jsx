import React from "react";
import { useState, useEffect,useCallback,memo } from "react";
import { Link } from "react-router-dom";
import SingleFile from "./singleFile";


const url = "https://fakestoreapi.com/products"

function Container() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     try {
  //       const data = await fetch(url);
  //       const response = await data.json();
  //       console.log(response);
  //       setData(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchingData();
  // },[]);
  



  const fetchData = useCallback(async()=>{
    try{
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setData(response)
    }
    catch(error){
      console.log(error)
    }
  },[setData]);

  //Note that we have included the url and setData dependencies in the dependency array for useCallback. This ensures that the callback function is recreated only when these dependencies change.

  useEffect(()=>{
    fetchData()
  },[fetchData])

  return (
    <div className="main-container">
      {data.map((date) => {
        const { id, title, price, category, description, image } = date;

        return (
          <div key={id} className="container">
            <Link to ={`/container/${id}`}>
              <div className="iamgeContainer">
                <img src={image} alt={title} />
              </div>
              <div className="second">
                <h5>{title}</h5>
                <h2> ${price}</h2>
              </div>
              <div className="third">
                <button>Try It</button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default memo(Container);
