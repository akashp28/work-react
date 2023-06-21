import React from 'react'
import img2 from '../assets/img2.png'

const Register = () => {
  return (
    <div className="container">
       <div className="info">
           <img src={img2} className='rotate'/>
           <h2 className="title">
    <span className="title-word title-word-1">Join   </span>
    <span className="title-word title-word-2">Us</span></h2>

           Subscribe Easy Tutorials Youtube Channel to <br/>
           watch more videos <br/>
           <button id="b1"><b>About Us</b> </button>
       </div>
       <form action="./work2.html" method="get">
       <div className="login">
          <h3 className='reg'> Register Here</h3> 
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" placeholder="Full Name" required></input>
          <label htmlFor="uname">User Name :</label>
           <input type="text" id="uname" placeholder="Username" required></input>
           <label htmlFor="email">Email :</label>
           <input type="email" id="email" placeholder="Email -  format : abc@xyz.com" required></input>
           <label htmlFor="mno">Mobile No. : </label>
           <div className="mob">
           <input type="text" className="cc" id="cc" defaultValue={"+91"}  readOnly></input>
           <input type="tel"  id="mno" pattern="[0-9]{10}"  placeholder="10 Digit Mobile No." required title="Enter a valid 10 Digit Mobile No." ></input>
       </div>
       <label htmlFor="password">Password :</label>
           <input type="password" id="password" placeholder="Password" required></input>
           <input type="submit" value="Register" id="s1"></input>
   </div>
</form>

   </div>
  )
}

export default Register