import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import facebookLogo from '../../images/facebook.svg';
import twitterLogo from '../../images/twitter.svg';
import googleLogo from '../../images/google.svg';
import linkedInLogo from '../../images/LinkedIn.svg';

function SignupSignin() {
  const userElement = <FontAwesomeIcon icon={faUser} />
  const passIcon = <FontAwesomeIcon icon={faLock } />;

  return (
    <section className='container'>
      <div className='form-container'>
        <div className='signin-signup'>
          <form action="" className="sign-in-form">
            <h2 className="sign-in-form__title">Sign in</h2>
            <div className="sign-in-form__field">
              <i className="sign-in-form__icon">{userElement}</i>
              <input type="text" className="sign-in-form__input sign-in-form__input_userName" placeholder='Username'/>
            </div>
            <div className="sign-in-form__field">
              <i className="sign-in-form__icon">{passIcon}</i>
              <input type="password" className="sign-in-form__input sign-in-form__input_password" placeholder='Password' autoComplete="on"/>
            </div>
            <button className="sign-in__submit">Login</button>

            <p className="sign-in__social-text">Or sign in with social platforms</p>

            <nav className="sign-in__social-navigation">
              <ul className="sign-in__social-list">
                <li className="sign-in__social-image">
                  <a href="https://www.facebook.com/" className="sign-in__social-image_link" target='_blank' rel="noreferrer">
                    <img src={facebookLogo} alt="facebook logo" className="sign-in__social-image_icon"/>
                  </a>
                </li>
                <li className="sign-in__social-image">
                  <a href="https://twitter.com/" className="sign-in__social-image_icon" target='_blank' rel="noreferrer">
                    <img src={twitterLogo} alt="twitter logo" className="sign-in__social-image_icon"/>
                  </a>
                </li>
                <li className="sign-in__social-image">
                  <a href="https://accounts.google.com/signin/" className="sign-in__social-image_icon" target='_blank' rel="noreferrer">
                    <img src={googleLogo} alt="Google logo" className="sign-in__social-image_icon"/>
                  </a>
                </li>
                <li className="sign-in__social-image">
                  <a href="linkedin.com" className="sign-in__social-image_icon" target='_blank' rel="noreferrer">
                    <img src={linkedInLogo} alt="LinkedIn logo" className="sign-in__social-image_icon"/>
                  </a>
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSignin;