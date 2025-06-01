"use client";
import React, { useEffect, useState } from "react";
import { GlassCard } from "../GlassCard/GlassCard";
import "./ProfileCard.css";
import axios from "axios";

export const ProfileCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/profile", {
          withCredentials: true,
        });
        const { email } = res.data;
        setEmail(email);
      } catch (err) {
        console.error(err);
      }
    };
    userData();
  }, []);

  return (
    <GlassCard>
      <div className="profile__card__wrapper">
        <form className="profile__card__form">
          <p className="profile__title">Profile Settings</p>

          <div className="profile__card__container">
            <label htmlFor="email" className="profile__card__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="profile__card__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="profile__card__container">
            <label htmlFor="password" className="profile__card__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="profile__card__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="profile__card__container">
            <label htmlFor="confirmPassword" className="profile__card__label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="profile__card__input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="profile__button__wrapper">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="profile__save__btn"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </GlassCard>
  );
};
