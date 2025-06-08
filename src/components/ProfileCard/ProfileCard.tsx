"use client";
import "../../styles/globals.css";
import "./ProfileCard.css";
import React, { useEffect, useState } from "react";
import { GlassCard } from "../GlassCard/GlassCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SocialButtons } from "../SocialButtons/SocialButtons";

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
      <div className="block__card__wrapper">
        <form className="form-base">
          <p className="form-title">Profile Settings</p>

          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input profile__card__input"
              value={isEditing ? editedData.email : email}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="form-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input profile__card__input"
              value={isEditing ? editedData.password : "123456"}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="form-container">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input profile__card__input"
              value={isEditing ? editedData.confirmPassword : "123456"}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="profile__button__wrapper">
            <button
              className="primary-button profile__save__btn"
              type="button"
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              className="primary-button"
              type="button"
              onClick={() => logOut()}
            >
              Logout
            </button>
          </div>
          {/*  */}
          <div className="social-section">
            <p className="social-text">connect with</p>
          </div>
          <SocialButtons />

          {/*  */}
        </form>
      </div>
    </GlassCard>
  );
};

// при лог ауте, можно вернуться на profile page хотя не должно быть такого, т.к гварды ставили.
