import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from "next/router";

function SingIn() {

    const router = useRouter()
    const [apiData, setApiData] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        axios.get("https://6711e8624eca2acdb5f625f9.mockapi.io/Forform")
            .then((response) => {
                setApiData(response.data)
            }
            )
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

       if (email) {
        if (password) {
            let EmailData = apiData.filter((item) => item.email == email)
            if (EmailData.length == 0) {
                alert("Can't See your email Please Resister first")
                router.push("/SignUp")
            } else {
                if (password == EmailData[0]?.password) {
                    alert("Login Successfully")
                    router.push("/Productslist")
                } else {
                    alert("Please Enter Correct Password")
                }
            }
            
        } else {
            alert("Please Fill the Password")
        }
        
       } else {
        alert("Please Fill the Email")
       }
    }



    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='card w-25 p-3 shadow'>

                <form className='' onSubmit={handleSubmit}>
                    <h4 className='text-success fw-bold text-center mb-4'>Sign Up</h4>
                    <div class="form-group  text-secondary">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control  mt-1" id="exampleInputEmail1" placeholder="Name" />
                    </div>

                    <div class="form-group mt-3  text-secondary">
                        <label for="exampleInputPassword4">Password</label>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

export default SingIn;