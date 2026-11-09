"use client";

import { useSession } from "next-auth/react";

const UserInfo = () => {
  const session = useSession();
  return (
    <div>
      <p>This is for client site</p>
      <p>{JSON.stringify(session.data)}</p>
    </div>
  );
};

export default UserInfo;
