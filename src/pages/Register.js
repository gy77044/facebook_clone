import React from 'react';
import './Register.css';

const Register = () => {
  return (<>
    <div className='register-container'>
      <div className='upper-container'>
        <div className='upper-left-container'>
          <h1>facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className='upper-right-container'>
          <div className='upper-right-inner-container'>
            <form action=''>
              <div>
                <input
                  type='text'
                  placeholder='Email address or phone number'
                />
              </div>
              <div>
                <input type='text' placeholder='Password' />
              </div>
              <div>
                <input
                  class='register-login-btn'
                  type='button'
                  value='Log In'
                />
              </div>
              <div className="form-a-container">
                <a href="#">Forgotten password?</a>
              </div>

              <hr />
              <input  className="create-account-btn" type='button' value='Create New Account' />
            </form>
          </div>
          <div className='form-bottom-line-container'>
          <label className='form-bottom-line'><a href="#" className='form-bottom-line'>Create a Page </a>for a celebrity, brand or business.</label>
          </div>
        </div>
      </div>
    </div>
    <div className='lower-container'>
        <p className="bottom-text" >English(UK) <button>+</button></p>
        <hr className='bottom-hr'/>
       <p className="bottom-text"> SignUp LogIn Messenger Facebook Lite Watch Places Games Marketplace FacebookPay Oculus Portal Instagram Bulletin Local Fundraisers Services Voting Information Centre Groups About Create ad CreatePage Developers Careers Privacy Cookies AdChoices Terms Heap</p>
       <p className="copyright" >Meta &copy; 2022</p>
      </div>
    </>
  );
};

export default Register;
