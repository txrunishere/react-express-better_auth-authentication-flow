import type React from "react";
import { signUp } from "./auth-client";
import { useNavigate } from "react-router";

export const App = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const { data, error } = await signUp.email({
      name: form.get("name") as string,
      email: form.get("email") as string,
      password: form.get("password") as string,
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    navigate("/login", { viewTransition: true });
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
