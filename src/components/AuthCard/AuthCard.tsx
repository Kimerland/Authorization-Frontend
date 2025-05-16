import React from "react";
import "./AuthCard.css";
import { GlassCard } from "../GlassCard/GlassCard";
import Link from "next/link";
interface AuthCardProps {
  type?: "login" | "register";
}

export const AuthCard: React.FC<AuthCardProps> = ({ type = "login" }) => {
  return (
    <GlassCard>
      <div className="auth__card__container">
        <div className="auth__card__logo">
          <p className="auth__card__logo__text">Kimerlander</p>
        </div>

        <form className="auth__card__form">
          <p className="auth__card__title">
            {type === "login" ? "Login" : "Register"}
          </p>

          <div className="auth__form__container">
            <label htmlFor="email" className="auth__card__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="auth__card__input"
            />
          </div>

          <div className="auth__form__container">
            <label htmlFor="password" className="auth__card__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="auth__card__input"
            />
          </div>

          {type === "register" && (
            <div className="auth-card__form-group">
              <label htmlFor="confirmPassword" className="auth__card__label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Password"
                className="auth__card__input"
              />
            </div>
          )}

          {type === "login" && (
            <Link href="/forgot-password">
              <p className="forgot__password">Forgot Password?</p>
            </Link>
          )}

          <button type="submit" className="auth__card__button">
            {type === "login" ? "Sign in" : "Sign up"}
          </button>

          <div className="auth__card__social">
            <p className="auth__card__title">or continue with</p>
          </div>

          <div className="auth__card__btn">
            <button className="auth__social__btn">
              <img src="google.png" alt="google" className="social__img" />
            </button>
            <button className="auth__social__btn">
              <img src="github.png" alt="github" className="social__img" />
            </button>
            <button className="auth__social__btn">
              <img src="facebook.png" alt="facebook" className="social__img" />
            </button>
          </div>

          <div className="auth__card__switch">
            {type === "login" ? (
              <>
                <span className="auth__card__text">
                  Don&apos;t have an account yet?{" "}
                </span>
                <Link href="/register" className="auth__card__link">
                  Register for free
                </Link>
              </>
            ) : (
              <>
                <span className="auth__card__text">
                  Already have an account?{" "}
                </span>
                <Link href="/login" className="auth__card__link">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </GlassCard>
  );
};
