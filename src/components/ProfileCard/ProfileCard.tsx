"use client";
import React, { useEffect, useState } from "react";
import { GlassCard } from "../GlassCard/GlassCard";
import "./ProfileCard.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export const ProfileCard = () => {
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/profile", {
          withCredentials: true,
        });
        const { email, id } = res.data;
        setEmail(email);
        setUserId(id);
        setEditedData((p) => ({ ...p, email }));
      } catch (err) {
        console.error(err);
      }
    };
    userData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (editedData.password !== editedData.confirmPassword) {
      alert("Undefined pass");
      return;
    }

    try {
      const payload: { email?: string; password?: string } = {};
      if (editedData.email !== email) payload.email = editedData.email;
      if (editedData.password) payload.password = editedData.password;

      await axios.patch(`http://localhost:5000/users/${userId}`, payload, {
        withCredentials: true,
      });

      setEmail(editedData.email);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {
    await axios.post(
      "http://localhost:5000/auth/logout",
      {},
      { withCredentials: true }
    );
    router.push("/login");
  };

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
              name="email"
              className="profile__card__input"
              value={isEditing ? editedData.email : email}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="profile__card__container">
            <label htmlFor="password" className="profile__card__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="profile__card__input"
              value={isEditing ? editedData.password : "123456"}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="profile__card__container">
            <label htmlFor="confirmPassword" className="profile__card__label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="profile__card__input"
              value={isEditing ? editedData.confirmPassword : "123456"}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="profile__button__wrapper">
            <button
              className="profile__save__btn"
              type="button"
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              className="profile__save__btn"
              type="button"
              onClick={() => logOut()}
            >
              Logout
            </button>
          </div>
          {/*  */}
          <div className="profile__card__social">
            <p className="profice__card__connect">connect with</p>
          </div>

          <div className="profile__card__btns">
            <button className="profile__social__btn">
              <img src="google.png" alt="google" className="social__img" />
            </button>
            <button className="profile__social__btn">
              <img src="github.png" alt="github" className="social__img" />
            </button>
            <button className="profile__social__btn">
              <img src="facebook.png" alt="facebook" className="social__img" />
            </button>
          </div>

          {/*  */}
        </form>
      </div>
    </GlassCard>
  );
};

// при лог ауте, можно вернуться на profile page хотя не должно быть такого, т.к гварды ставили.
