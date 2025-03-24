import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
import Instance from "./AxiosConfig";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate()
    const [FormData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        user_password: "",
    });
    function handleOnChange() {

    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = Instance.post("/auth/register", { FormData });
            if (response.staus === 201) {
                console.log("Registration Successful")
                navigate("/login");
            }
        } catch (error) {
            console.error("Registration Failed");
        }
    }

    return (
        <div>

            <div>

                <form onClick={handleSubmit}>

                    <input
                        type="text"
                        name="fname"
                        id="first_name"
                        value={FormData.first_name}
                        placeholder="First Name"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="text"
                        name="lname"
                        id="last_name"
                        value={FormData.last}
                        placeholder="Last Name"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="email"
                        name="email"
                        id="email_id"
                        value={FormData.email}
                        placeholder="Email"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="password"
                        name=" password"
                        id="user_password"
                        value={FormData.user_password}
                        placeholder="Password"
                        onChange={handleOnChange}
                    ></input>

                    <button type="submit" value="Register"
                    ></button>

                </form>
            </div>
        </div>
    )
}

export default SignUp