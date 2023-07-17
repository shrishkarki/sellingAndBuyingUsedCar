import axios from "axios";
import React,{useContext, useState} from "react";
import { IndexContent } from "../../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const SignUpUI=()=>{
    const {setEmailAddress}=useContext(IndexContent);
    const navigate=useNavigate();
    const [formInput,setFotmInput]=useState({
        username:"",
        name:"",
        email:"",
        password:"",
        phonenumber:"",
        address:""
    });
    const [alreadyExistInfo, setAlreadyExistInfo] = useState({
        existEmail: "",
        existUsername: ""

    })

// getting the values of Input
    const handlingInputHandler=(e)=>{
        const newFormInput={...formInput};
        newFormInput[e.target.id]=e.target.value;
        setFotmInput(newFormInput);
    };
    //sending the data to server
    const submitHandler=(e)=>{
        e.preventDefault();
        setEmailAddress(formInput.email);
        
        const fd=new FormData();
        fd.append("username",formInput.username);
        fd.append("name",formInput.name);
        fd.append("email",formInput.email);
        fd.append("password", formInput.password);
        fd.append("phone", formInput.phonenumber);
        fd.append("address",formInput.address);

       
        console.log(formInput);

        axios({
            url:"http://127.0.0.1:8000/accounts/register/",
            method:'POST',
            data:fd
        }).then(res=>{
            console.log(res.data);
            navigate("/login");
            alert("succesfully signed up");
            
        }).catch(err=>{
            const { username, email } = err.response.data;

            setAlreadyExistInfo({
                existEmail: email,
                existUsername: username
            });

        })

    }
return(
    <form className='w-[100vw]' onSubmit={submitHandler}>
    <div className='my-12 flex flex-col justify-start items-center h-auto'>
        <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>Sign Up</h3>
        <p className='text-center my-4'>Already have an account ? <span className='text-amber-400 cursor-pointer' onClick={() => navigate("/Login")}>Log in</span> </p>


        <div className='text-red-500 text-xs capitalize text-center'>
                    {alreadyExistInfo.existEmail && <p>{alreadyExistInfo.existEmail.toString()}</p>}
                    {alreadyExistInfo.existUsername && <p>{alreadyExistInfo.existUsername.toString()}</p>}
                </div>

        <div className='text-red-500 text-xs capitalize text-center'>
            
        </div>

        {/* email*/}

              <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"
                    onChange={(e)=>handlingInputHandler(e)}
                    onFocus={() => setAlreadyExistInfo({
                        existEmail: "",
                        existUsername: ""
                    })} required/>
                </div>

                {/* username */}

                <div className="mt-2">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="username" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"
                    onChange={(e)=>handlingInputHandler(e)}
                    onFocus={() => setAlreadyExistInfo({
                        existEmail: "",
                        existUsername: ""
                    })}/>
                </div>

                {/* Fullname */}
                <div className="mt-2">
                    <label htmlFor="name">Fullname:</label>
                    <input id="name" type="text" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2" onChange={(e)=>handlingInputHandler(e)}/>
                </div>

                {/* create password */}
                <div className="mt-2">
                    <label htmlFor="password">Create Your Password:</label>
                    <input id="password" type="password" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2" onChange={(e)=>handlingInputHandler(e)}/>
                </div>
                {/* address  */}
                <div className="mt-2">
                    <label htmlFor="address">Address:</label>
                    <input id="address" type="text" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"
                    onChange={(e)=>handlingInputHandler(e)}/>
                </div>
                {/* mobile number */}
                <div className="mt-2">
                    <label htmlFor="phonenumber">Mobile Number:</label>
                    <input id="phonenumber" type="number" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2" onChange={(e)=>handlingInputHandler(e)}/>
                </div>

                <button type='submit' className='w-[300px] bg-amber-500 my-4 text-white rounded-md text-2xl py-1' >Sign Up</button>

        </div>
</form>
);
}

 export default SignUpUI;