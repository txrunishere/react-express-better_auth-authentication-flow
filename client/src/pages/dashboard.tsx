import { useNavigate } from "react-router";
import { signOut, useSession } from "../auth-client";

export const Dashboard = () => {
  const { data: session, isPending } = useSession();
  const navigate = useNavigate();

  if (isPending) return <p>loading...</p>;

  const handleSignout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Welcome, {session?.user.name}
        </h1>
        <p className="text-gray-600 mb-6">Email: {session?.user.email}</p>
        <button
          onClick={handleSignout}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};
