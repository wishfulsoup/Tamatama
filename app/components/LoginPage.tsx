import React, { FC } from "react";

const LoginPage: FC = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content" id="popup__login">
        <a href="#" className="popup__close">
          &times;
        </a>
        <h1 className="mt-[4rem]">TAMAGOTCHI</h1>
        <div className="popup__info">
          <form action="" className="popup__form">
            <div className="popup__form-group">
              <input
                type="email"
                placeholder="email"
                id="email"
                required
                className="popup__input"
              />
              <label htmlFor="email" className="popup__label">
                email
              </label>
            </div>
            <div className="popup__form-group">
              <input
                type="password"
                placeholder="password"
                id="password"
                required
                className="popup__input "
              />
              <label htmlFor="password" className="popup__label">
                password
              </label>
            </div>
            <input
              type="submit"
              className="popup__submit"
              value="LOGIN"
              id=""
            />
            <input type="checkbox" id="register" className="popup__checkbox" />
            <label htmlFor="register" className="popup__label-register">
              <span className="popup__register-button">
                <span className=" text-[#555]">Don't have an account?</span>
                Register
              </span>
            </label>
          </form>
        </div>
      </div>
      <div className="popup__register" id="register">
        <a href="#" className="popup__close">
          &times;
        </a>
        <h1 className="mt-[4rem]">REGISTER</h1>
        <div className="popup__info">
          <form action="" className="popup__form">
            <div className="popup__form-group">
              <input
                type="email"
                placeholder="email"
                id="email"
                required
                className="popup__input"
              />
              <label htmlFor="email" className="popup__label-register">
                email
              </label>
            </div>
            <div className="popup__form-group">
              <input
                type="password"
                placeholder="password"
                id="password"
                required
                className="popup__input"
              />
              <label htmlFor="password" className="popup__label">
                password
              </label>
            </div>
            <input
              type="submit"
              className="popup__submit"
              value="LOGIN"
              id=""
            />
            <input type="checkbox" className="popup__checkbox" />
            <label htmlFor="popup" className="popup__label">
              <span className="popup__register-button">
                <span className=" text-[#555]">Already have an account?</span>
                Login
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
