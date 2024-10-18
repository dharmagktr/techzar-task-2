import React, { useEffect, useState } from 'react'
import axios from "axios";

const page = ({ params }: { params: { ProductID: String } }) => {
  const { ProductID } = params;

  // const [apiDAta, setApiData] = useState([]);
  async function apiData() {
    const response = await fetch("https://dummyjson.com/products/category/smartphones")
    const allData = await response.json()
    // return this.setstate({allData})
    console.log(allData.products);
    return allData.products
}
  return (
    <div>
     <div>hi {ProductID}</div>
    
 
    </div>

  )
}

export default page;