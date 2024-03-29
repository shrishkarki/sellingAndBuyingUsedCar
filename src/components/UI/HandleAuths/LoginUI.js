import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IndexContent } from "../../ContextApi/ContextApi";

const LoginUI = () => {
    const navigate = useNavigate();
    const { setLocalStorageValue } = useContext(IndexContent);
    const [visibility, setVisibility] = useState("invisible");
    const [focusState, setFocusState] = useState(false);

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })
    const [errorAuthorized, setErrorAuthorized] = useState("");

    const updateInputHandler = (e) => {
        const newFormInput = { ...inputData };
        newFormInput[e.target.id] = e.target.value;
        setInputData(newFormInput)
    }
    // const functionWrapper=()=>{
    //     setFocusState(true);
    //     setErrorAuthorized("")
    //   }

    if (localStorage.getItem("token")) {
        navigate('/')
    }

    // submitinggg form
    const submitLoginHandler = (e) => {
        e.preventDefault();

        const fd = new FormData();

        fd.append("email", inputData.email);
        fd.append("password", inputData.password);

        axios({

            url: "http://127.0.0.1:8000//accounts/login/",
            method: 'POST',

            data: fd,
            config: { withCredentials: true }
        }).then(res => {
            // console.log(res)
            localStorage.setItem("token", res.data.access);
            localStorage.setItem("username", res.data.username);
            //   localStorage.setItem("refresh",res.data.refresh);
            setLocalStorageValue(`token:${res.data.access}`);
            navigate('/')
            //   setAuth(res.data);


            navigate("/")
        }).catch(err => {

            setErrorAuthorized(err.response.data);
            setVisibility("visible")
        })
    }
    return (
        <form className="w-[100vw]" onSubmit={submitLoginHandler}>
            <div className="flex flex-col justify-center items-center  h-[400px]">
                <h3>Welcome!</h3>

                <p className={`text-red-600 pl-2 py-2 h-3 ${visibility} text-clip`}>{errorAuthorized.detail}</p>
                {/* Email */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2" onChange={(e) => updateInputHandler(e)} onFocus={() => setErrorAuthorized("")} />
                </div>

                {/* password */}
                <div>
                    <label htmlFor="password" className="mt-2">Password:</label>

                    <input id="password" type="password" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md" onChange={(e) => updateInputHandler(e)} onFocus={() => setErrorAuthorized("")} />
                    <p className='flex  cursor-pointer'><Link to="/resetPassword" className="text-amber-400 ">Forget Password? </Link></p>
                </div>

                {/* Forget password */}

                <button type='submit' className='w-[300px] bg-amber-500 mt-2 text-white rounded-md text-2xl py-1'>Login</button>

                {/* Don't have account and Signup */}
                <p className='mt-3 '>Don't have an account?  <Link to="/signUp" className='text-amber-400 cursor-pointer'>Sign Up</Link></p>

            </div>

        </form>
    )
}

export default LoginUI;
