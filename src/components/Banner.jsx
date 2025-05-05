import React from 'react'
import banner from "../../public/Banner.jpg"
function Banner()  {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto med:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="  w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcomes here to My Book Center{" "}
            <span className="text-green-700">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">Welcome to our bookstore. Here, you will find a wide range of books. We aim to provide a seamless and enjoyable experience for all readers. Discover, explore, and enjoy the world of books with us!</p>
            
            <label className="input input-bordered flex items-centre gap-2">
     <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
     <input type="email" placeholder="mail@site.com" required/>
     </label>
     <div className="validator-hint hidden">Enter valid email address</div>
     </div>
      <button className="btn mt-6 btn-secondary ">Secondary</button>
     
    </div>
        <div className=" order-1 w-full md:w-1/2 mt-9">
        <img src={banner}  className="mt-6 w-92 h-92"alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
