import { signIn } from "../auth-client";

export const Login = () => {
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const { data, error } = await signIn.email({
      email: form.get("email") as string,
      password: form.get("password") as string,
      callbackURL: "/dashboard",
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 bg-gray-900 rounded shadow"
    >
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-200 font-semibold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-200 font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};
