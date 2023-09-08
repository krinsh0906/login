import React from 'react';

function signup() {
    return (
        <form>
        <div className='signup-container'>
            <div className='signup-headding'>
                <h2> SIGNUP</h2>
            </div>
            <div className='signup-input'>
                <div cn>
                    <label>
                        First Name :
                    </label><br />
                    <input type='text' name='name' placeholder='name' ></input><br />
                
                </div>

                <div className='space'>
        <label>
          Last Name:
        </label><br />
        <input type='text' name='name' placeholder='name' ></input><br />
      </div>


                <div className='space'>
                    <label>
                        Email:
                    </label><br />
                    <input type='email' name='email' placeholder='Email' ></input><br />
                </div>

                <div className='space'>
                    <label>
                        Password:
                    </label><br />
                    <input className='' type='password' name='password' placeholder='password' />
                </div>
                <div class="signup-forgotpass">
                    <a href="#">Forgot password?</a>
                </div>
                <button type='sumbit'> LOGIN </button>
                <div class="signup- space" >Don't Have account?
                    <a href="login.js">login now</a>

                </div>


            </div>

        </div>
        </form>
    );
}

export default signup;
