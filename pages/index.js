import Head from 'next/head'
import Image from 'next/image';
import intro from '../images/join.png';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React,{ useState } from 'react';

export default function Home() {

	const[user,setUser]=useState({
			username: "", 
			userType: "",
			email: "",
			password: "",
			phone:""			
		});
	
	let name, value;
	const handleInputs=(e)=>{
			console.log(e);
			name=e.target.name;
			value=e.target.value;
			
			setUser({...user,[name]:value})
	}

	const PostData=async(e)=>{
		e.preventDefault();

		const {username,userType,email,password,phone}=user;

		const res= await fetch("http://localhost:3000/user/signup",{
			mode: 'no-cors',
			method:'POST',
			headers:{	
				"Content-Type":"application/json",
				"Accept": "*/*",
				"Accept-Encoding":"gzip, deflate, br",
				"Connection":"keep-alive",
				"Access-Control-Allow-Origin" : "*", 
				"Access-Control-Allow-Credentials" : true ,
			},
			body :JSON.stringify({
				
				username:username,
				userType:userType,
				email:email,
				password:password,
				phone:phone
			})
		});
		const data =await res.json();
		if(data.status==500)
		window.alert("Invalid Registartion");
		else
		window.alert("Registartion Successful");

	}



  return (
    <div className="flex flex-wrap flex-row">
  {/* container of image */}
    <div className='flex w-6/12 h-screen'>
     <Image
      src={intro}
      alt="intro"
      width={650}
      height={500}
      //className='rounded-[15px]'
    />
   </div>
   {/* ending of conatiner for image */}

  {/* starting for signup section  */}
 
	<div className="justify-center bg-slate-100 rounded-lg mx-20 my-auto w-4/12">
						<h3 className="pt-10 text-4xl text-center font-bold text-blue-800">Let's Get Started
            <p className="text-sm text-slate-400 font-normal">Create an account to continue</p></h3>

						<form className="px-8 pt-2 pb-8 mb-4 rounded" method='POST'>
            <div className="grid grid-cols-2 gap-4 my-6">
								<div className="mr-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
										User Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="username"
										name="username"
										type="text"
										value={user.username}
										onChange={handleInputs}
										placeholder="Elon"
									/>
								</div>
								<div className="ml-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="userType">
										User Type
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="userType"
										name="userType"
										type="text"
										value={user.userType}
										onChange={handleInputs}
										placeholder="admin or employee"
									/>
								</div>
              </div>

							

              
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									name="email"
									type="email"
									value={user.email}
									onChange={handleInputs}
									placeholder="name@gmail.com"
								/>
							</div>

							<div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										name="password"
										type="password"
										value={user.password}
										onChange={handleInputs}
										placeholder="at least 8 characters"
									/>
									{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
								</div>
								<div>
									<label className="block mb-2 text-sm font-bold text-gray-700" for="phone">
										Phone Number
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="phone"
										name="phone"
										type="Number"
										value={user.phone}
										onChange={handleInputs}
										placeholder="Your Phone Number"
									/>
								</div>
							</div>
              <div className="mb-8"><input type="checkbox" className="checked:bg-blue-500" />
              <label for="checkbox" className="ml-2 text-xs text-gray-500">By creating an account you agree with our <span className="font-bold text-blue-600">Terms and Conditions</span>.</label>
              </div>
              
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button" onClick={PostData}
								>
									Create Account
								</button>
							</div>
							<hr className="mb-2 border-t" />
							
							<div className="text-center">
              <Link href="/login">
                            <a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									Already have an account? Login!
								</a>
                                </Link>
							</div>
						</form>
					</div>
			
		




    {/* ending of signup section  */}


    </div>
  )
}
