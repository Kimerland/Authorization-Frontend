import React from "react";
import "./AuthCard.css";
import { GlassCard } from "../GlassCard/GlassCard";

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
        </form>

        <form action=""></form>
      </div>
    </GlassCard>
  );
};
