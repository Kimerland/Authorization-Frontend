"use client";
import "../../styles/globals.css";
import "./ProfileCard.css";
import React, { useEffect, useState } from "react";
import { GlassCard } from "../GlassCard/GlassCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileSchemaType } from "@/schemas/profile.schema";

export const ProfileCard = () => {
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/profile", {
          withCredentials: true,
        });
        const { email, id } = res.data;
        setEmail(email);
        setUserId(id);
        reset({ email, password: "", confirmPassword: "" });
      } catch (err) {
        console.error(err);
      }
    };
    userData();
  }, [reset]);

  const onSubmit = async (data: ProfileSchemaType) => {
    try {
      const payload: { email?: string; password?: string } = {};
      if (data.email !== email) payload.email = data.email;
      if (data.password) payload.password = data.password;

      await axios.patch(`http://localhost:5000/users/${userId}`, payload, {
        withCredentials: true,
      });

      setEmail(data.email);
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
        <form className="form-base" onSubmit={handleSubmit(onSubmit)}>
          <p className="form-title">Profile Settings</p>

          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input profile__card__input"
              readOnly={!isEditing}
              {...register("email")}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input profile__card__input"
              readOnly={!isEditing}
              {...register("password")}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input profile__card__input"
              readOnly={!isEditing}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="profile__button__wrapper">
            {isEditing ? (
              <button
                className="primary-button profile__save__btn"
                type="submit"
              >
                Save
              </button>
            ) : (
              <button
                className="primary-button profile__save__btn"
                type="submit"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}

            <button className="primary-button" type="button" onClick={logOut}>
              Logout
            </button>
          </div>

          <div className="social-section">
            <p className="social-text">connect with</p>
          </div>
          <SocialButtons />
        </form>
      </div>
    </GlassCard>
  );
};
