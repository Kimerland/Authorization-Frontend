"use client";
import { api } from "./lib";

const API = "http://localhost:5555";

export const login = async (email: string, password: string) => {
  console.log("Send data", { email, password });
  const res = await api.post(
    `${API}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
  return res.data;
};

export const register = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  console.log("Send register", { email, password, confirmPassword });
  const res = await api.post(
    `${API}/auth/register`,
    { email, password, confirmPassword },
    { withCredentials: true }
  );
  return res.data;
};

export async function getMe() {
  const res = await api.get("/auth/profile");
  return res.data;
}
