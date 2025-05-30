import { api } from "./lib";

const API = "http://localhost:5000";

export const login = async (email: string, password: string) => {
  console.log("Send data", { email, password });
  const res = await api.post(
    `${API}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
  return res.data;
};

export async function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const res = await api.post("http://localhost:5000/auth/register", {
    email,
    password,
    confirmPassword,
  });
  return res.data;
}

export async function getMe() {
  const res = await api.get("/auth/profile");
  return res.data;
}
