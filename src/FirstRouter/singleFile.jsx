import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect ,memo } from "react";

function SingleFile() {
  const params = useParams();
  const url = `https://fakestoreapi.com/products/${params.id}`;
  const [data, setData] = useState(null);

  console.log(params);
  useEffect(() => {
    const fetchingSingle = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setData(response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingSingle();
  }, [params.id]);

  return (
    <div>
      {data ? (
        <div key={data.id}>
          <img src={data.image} alt={data.title} style={{width:"300px", height:"400px", borderRadius:"5px"}}/>
          <h2>{data.title}</h2>
          <h4>{data.description}</h4>
          <h3>{data.category}</h3>
          <h1> ${data.price}</h1>
        </div>
      ) : 
        <h1>Loading....</h1>
      }
    </div>
  );
}

export default memo(SingleFile);

//In React Router, useParams is a hook that allows you to access the parameters (or URL variables) defined in your route's path.
// useparams returns an object like this {id:'1'} , if we have mode dynamic segment then it will be {id:'1', second:''}

// in our url /container/id ---> the useParams give access to the dynamic segments parameters in our case it is id
