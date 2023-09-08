import React from 'react';
import { useState } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa'




function Login(
  
) {
  return (
    <div className='main-container'>
      <div className='main-headding'>
        <h2> LOGIN</h2>
      </div>
      <div className='main-input'>
        <div>
          <label>
            Email:
          </label><br />
          <input type='email' name='email' placeholder='Email' ></input><br />
        </div>

        <div className='space'>
          <label>
            Password:
          </label><br />
          <input className='' type='password' name='password' placeholder='password'/>
        </div>
        <div class="forgotpass">
          <a href="#">Forgot password?</a>
        </div>
        <button type='sumbit'> LOGIN </button>
        <div class="signup space" >Don't Have account?
          <a href="#">Signup now</a>

        </div>


      </div>

    </div>


  );
}

export default Login;
