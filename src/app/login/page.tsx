import { AuthCard } from "@/components/AuthCard/AuthCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { PageBlockWrapper } from "@/components/PageBlockWrapper/PageBlockWrapper";
import React from "react";

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthCard />
    </AuthLayout>
  );
};

export default LoginPage;
