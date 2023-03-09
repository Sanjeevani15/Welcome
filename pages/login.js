import Head from 'next/head'
import Image from 'next/image';
import intro from '../images/welcome.png';
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
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
 
	<div className=" bg-slate-100 rounded-lg mx-20 my-auto w-4/12">
			<h3 className="pt-10 text-4xl text-center font-bold text-blue-800 mb-4">Hello Again!!
            <p className="text-sm text-slate-400 font-normal">Login into you account</p></h3>

						<form className="px-8 pt-2 pb-8 mb-4 rounded">
           

							

              
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
									User Name
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="name@gmail.com"
								/>
							</div>

							<div className="mb-8">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="at least 8 characters"
									/>
									{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
								</div>	
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Log In
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
                           
                                <Link href="/">
                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
									Don&apos; have an account? Sign Up!
								</a>
              </Link>
                                
							</div>
						</form>
					</div>
			
		




    {/* ending of signup section  */}


    </div>
  )
}
