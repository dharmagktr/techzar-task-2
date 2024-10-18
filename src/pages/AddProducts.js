import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



function Addproducts() {

    // const [name, setName] = useState("")
    const [imageName, setImageName] = useState("")
    const [imageData, setImageData] = useState("")
    const [modal, setModal] = useState("")
    const [price, setPrice] = useState("")
    const [categories, setCategories] = useState("")


   const api = "https://6710cf6aa85f4164ef2f68d1.mockapi.io/seelan"

    const handleSubmit = (e) =>{

        e.preventDefault();
                console.log("hi");
                
            axios.post("https://6710cf6aa85f4164ef2f68d1.mockapi.io/seelan",
                {
                    // name,
                    imageName,
                    imageData,
                    modal,
                    price,
                    categories
                }
            )

            setImageData("");
            setImageName("");
            setPrice("");
            setCategories("");
            setModal("");
    }

    const handleImageClick = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageData(reader.result)
        };
        if (file) {
            reader.readAsDataURL(file)
            setImageName(file.name);
        }
    };

    const handleDeleted = (id) =>{
        axios.delete(`https://6710cf6aa85f4164ef2f68d1.mockapi.io/seelan/${id}`)
        alert("deleted")

    }
    


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <div className='card w-25 p-3 shadow'>
                <form className='' onSubmit={handleSubmit}>
                    <h4 className='text-success fw-bold text-center mb-4'>Sign Up</h4>


                    <div class="form-group mt-3  text-secondary">
                        <select value={categories} onChange={(e) => setCategories(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected>Brand</option>
                            <option value="apple">Apple</option>
                            <option value="oppo">Oppo</option>
                            <option value="vivo">Vivo</option>
                        </select>
                      
                    </div>

                    {/* <div class="form-group  text-secondary">
                        <label for="exampleInputEmail1">Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control  mt-1" id="exampleInputEmail1" placeholder="Name" />
                    </div> */}


                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword1">Image</label>
                        <input type="file" onChange={handleImageClick} class="form-control mt-1" id="exampleInputPassword1"
                            aria-describedby="emailHelp" placeholder="Email Address" />
                          
                           {<img height="100" src={imageData}/>} 
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword2 ">Modal</label>
                        <input type="text" value={modal} onChange={(e) => setModal(e.target.value)} class="form-control mt-1" id="exampleInputPassword2" placeholder="Contact Number" />
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword3">Price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control mt-1" id="exampleInputPassword3" placeholder="Address" />
                    </div>
                    
                    <div className='d-flex justify-content-center mt-4'>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
                <button onClick={() => handleDeleted("3")}>delete</button>
            </div>
        </div>
    )
}

export default Addproducts;