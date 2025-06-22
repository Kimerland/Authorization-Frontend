import { AuthCard } from "@/components/AuthCard/AuthCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import React from "react";

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthCard type="login" />
    </AuthLayout>
  );
};

export default LoginPage;
