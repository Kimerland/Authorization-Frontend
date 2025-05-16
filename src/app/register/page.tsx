import { AuthCard } from "@/components/AuthCard/AuthCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <AuthCard type="register" />
    </AuthLayout>
  );
};

export default RegisterPage;
