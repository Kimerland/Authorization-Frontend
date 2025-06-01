import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";

import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <AuthLayout>
        <ProfileCard />
      </AuthLayout>
    </div>
  );
};

export default ProfilePage;
