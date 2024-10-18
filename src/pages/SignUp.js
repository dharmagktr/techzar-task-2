import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function SignUpp() {

    const postApi = "https://6711e8624eca2acdb5f625f9.mockapi.io/Forform"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://6711e8624eca2acdb5f625f9.mockapi.io/Forform", {
            name,
            email,
            number,
            address,
            password
        });

        setName('')
        setEmail('')
        setNumber('')
        setAddress('')
        setPassword('')
    }

    const deleted = (id) => {
        axios.delete(`https://6711e8624eca2acdb5f625f9.mockapi.io/Forform/${id}`)
        alert("deleted")
    }







    return (
        <div className='d-flex justify-content-center align-items-center vh-100 '>
            <div className='card w-25 p-3 shadow'>
            <button onClick={() => deleted("40")}>delete</button>
                <form className='' onSubmit={handleSubmit}>
                    <h4 className='text-success fw-bold text-center mb-4'>Sign Up</h4>
                    <div class="form-group  text-secondary">
                        <label for="exampleInputEmail1">Name </label>
                        <input type="text"
                            value={name} onChange={(e) => setName(e.target.value)}
                            class="form-control  mt-1"
                            id="exampleInputEmail1"
                            placeholder="Name" />
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword1">Email Address</label>
                        <input type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            class="form-control mt-1" id="exampleInputPassword1"
                            aria-describedby="emailHelp" placeholder="Email Address" />
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword2 ">Contact Number</label>
                        <input type="number"
                            value={number} onChange={(e) => setNumber(e.target.value)}
                            class="form-control mt-1" id="exampleInputPassword2" placeholder="Contact Number" />
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword3">Address</label>
                        <input type="text"
                            value={address} onChange={(e) => setAddress(e.target.value)}
                            class="form-control mt-1" id="exampleInputPassword3" placeholder="Address" />
                    </div>
                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword4">Password</label>
                        <input type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            class="form-control mt-1" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                       
                        
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpp