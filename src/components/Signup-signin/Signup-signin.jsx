import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import facebookLogo from '../../images/Facebook.svg';
import twitterLogo from '../../images/twitter.svg';
import googleLogo from '../../images/google.svg';
import linkedInLogo from '../../images/LinkedIn.svg';
import rocketLogo from '../../images/rocket.svg';
import scienceLogo from '../../images/science.svg';

function SignupSignin() {
  const userElement = <FontAwesomeIcon icon={faUser} />
  const passIcon = <FontAwesomeIcon icon={faLock } />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUpMode = () => {
    setSignUpMode(true);
  }

  const handleSignInMode = () => {
    setSignUpMode(false);
  }

  return (
    <section className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div className='form-container'>
        <div className='signin-signup'>
          <form action="" className="sign-form sign-form__sign-in">
            <h2 className="sign-form__title">Sign in</h2>
            <div className="sign-form__field">
              <i className="sign-form__icon">{userElement}</i>
              <input type="text" className="sign-in-form__input sign-in-form__input_userName" placeholder='Email'/>
            </div>
            <div className="sign-form__field">
              <i className="sign-form__icon">{passIcon}</i>
              <input type="password" className="sign-in-form__input sign-in-form__input_password" placeholder='Password' autoComplete="on"/>
            </div>
            <button className="sign__submit">Login</button>

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

          <form action="" className="sign-form sign-form__sign-up">
            <h2 className="sign-form__title">Sign up</h2>
            <div className="sign-form__field">
              <i className="sign-form__icon">{userElement}</i>
              <input type="text" className="sign-in-form__input sign-in-form__input_userName" placeholder='Username'/>
            </div>
            <div className="sign-form__field">
              <i className="sign-form__icon">{emailIcon}</i>
              <input type="text" className="sign-in-form__input sign-in-form__input_userName" placeholder='Username'/>
            </div>
            <div className="sign-form__field">
              <i className="sign-form__icon">{passIcon}</i>
              <input type="password" className="sign-in-form__input sign-in-form__input_password" placeholder='Password' autoComplete="on"/>
            </div>
            <button className="sign__submit">Sign up</button>

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

      <div className="panels-container">
        <div className="panels-container__panel panels-container__left-panel">
          <div className="panels-container__content">
            <h3 className="panels-container__header">New here?</h3>
            <p className="panels-container__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor ex nulla!</p>
            <button className="sign__submit panels-container__button" id="sign-up-btn" onClick={signUpMode ? handleSignInMode : handleSignUpMode}>Sign up</button>
          </div>

          <img src={rocketLogo} alt="rocket logo" className="panels-container__image"/>
        </div>

        <div className="panels-container__panel panels-container__right-panel">
          <div className="panels-container__content">
            <h3 className="panels-container__header">One of us?</h3>
            <p className="panels-container__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor ex nulla!</p>
            <button className="sign__submit panels-container__button" id="sign-in-btn" onClick={signUpMode ? handleSignInMode : handleSignUpMode}>Sign in</button>
          </div>

          <img src={scienceLogo} alt="science logo" className="panels-container__image"/>
        </div>
      </div>
    </section>
  );
};

export default SignupSignin;