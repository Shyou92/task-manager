import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import facebookLogo from '../../images/icons8-facebook.svg';

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
              <i className="sign-in-form__user-icon">{userElement}</i>
              <input type="text" className="sign-in-form__userName" placeholder='Username'/>
            </div>
            <div className="sign-in-form__field">
              <i className="sign-in-form__lock-icon">{passIcon}</i>
              <input type="password" className="sign-in-form__password" placeholder='Password'/>
            </div>
            <button className="sign-in__submit">Login</button>

            <p className="sign-in__social-text">Or sign in with social platforms</p>
            <nav className="sign-in__social-navigation">
              <ul className="sign-in__social-list">
                <li className="sign-in__social-image">
                  <a href="#" className="sign-in__social-image_link">
                    <img src={facebookLogo} alt="facebook logo" className="sign-in__social-image_icon"/>
                  </a>
                </li>
                <li className="sign-in__social-image">
                  <a href="#" className="sign-in__social-image_icon"></a>
                </li>
                <li className="sign-in__social-image">
                  <a href="#" className="sign-in__social-image_icon"></a>
                </li>
                <li className="sign-in__social-image">
                  <a href="#" className="sign-in__social-image_icon"></a>
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