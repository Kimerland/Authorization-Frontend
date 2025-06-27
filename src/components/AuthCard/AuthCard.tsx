"use client";
import "../../styles/globals.css";
import "./AuthCard.css";
import React, { useEffect } from "react";
import { GlassCard } from "../GlassCard/GlassCard";
import Link from "next/link";
import { login, register } from "@/app/api/api";
import { useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  loginSchemaType,
  registerSchema,
  registerSchemaType,
} from "@/schemas/auth.schema";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import axios from "axios";
interface AuthCardProps {
  type?: "login" | "register";
}

export const AuthCard: React.FC<AuthCardProps> = ({ type = "login" }) => {
  const router = useRouter();
  const [serverError, setServerError] = React.useState("");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType | registerSchemaType>({
    resolver: zodResolver(type === "login" ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: any) => {
    setServerError("");

    try {
      if (type === "login") {
        const res = await login(data.email, data.password);
        router.push("/profile");
      } else {
        const res = await register(
          data.email,
          data.password,
          data.confirmPassword
        );
        router.push("/profile");
      }
    } catch (err: any) {
      console.log("Error", err);
      if (err.response?.data?.message) {
        setServerError(err.response.data.message);
      } else if (Array.isArray(err.response?.data?.message)) {
        setServerError(err.response.data.message.join(", "));
      } else {
        setServerError("Undefiend error");
      }
    }
  };

  useEffect(() => {
    const checkLogout = async () => {
      try {
        const res = await axios.get("http://localhost:5555/auth/profile", {
          withCredentials: true,
        });
        if (res.status === 200) {
          router.replace("/profile");
        }
      } catch {}
    };
    checkLogout();
  }, []);

  return (
    <GlassCard>
      <div className="block__card__wrapper">
        <div className="auth__card__logo">
          <p className="auth__card__logo__text">Kimerlander</p>
          {/* create more uses */}
          {serverError && <p className="error server-error">{serverError}</p>}
        </div>

        <form className="form-base" onSubmit={handleSubmit(onSubmit)}>
          <p className="form-title">
            {type === "login" ? "Login" : "Register"}
          </p>

          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="form-input"
              {...formRegister("email")}
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
              placeholder="Password"
              className="form-input"
              {...formRegister("password")}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          {type === "register" && (
            <>
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Password"
                className="form-input"
                {...formRegister("confirmPassword")}
              />

              {/* in next fix and refactoring for 2 components */}
              {(errors as FieldErrors<registerSchemaType>).confirmPassword && (
                <p className="error">
                  {
                    (errors as FieldErrors<registerSchemaType>).confirmPassword
                      ?.message
                  }
                </p>
              )}
            </>
          )}

          {type === "login" && (
            <div className="auth__forgot__wrapper">
              <Link href="/forgot-password">
                <p className="forgot__password">Forgot Password?</p>
              </Link>
            </div>
          )}

          <div className="button-wrapper">
            <button type="submit" className="primary-button">
              {type === "login" ? "Sign in" : "Sign up"}
            </button>
          </div>

          <div className="social-section">
            <p className="social-text">connect with</p>
          </div>
          <SocialButtons />

          <div className="auth__card__switch">
            {type === "login" ? (
              <>
                <div className="auth__card__switch__container">
                  <span className="auth__card__text">
                    Don&apos;t have an account yet?{" "}
                  </span>
                  <Link href="/register" className="auth__card__link">
                    Register for free
                  </Link>
                </div>
              </>
            ) : (
              <div className="auth__card__switch__container">
                <span className="auth__card__text">
                  Already have an account?{" "}
                </span>
                <Link href="/login" className="auth__card__link">
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </GlassCard>
  );
};
