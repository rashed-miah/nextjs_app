import LoginBtn from "./components/LoginBtn";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <div className="text-2xl">
      <p>Hello word!!</p>
      <LoginBtn></LoginBtn>
      <UserInfo></UserInfo>
      <p>This is for server</p>
      <p> {JSON.stringify(session)}</p>
    </div>
  );
}
