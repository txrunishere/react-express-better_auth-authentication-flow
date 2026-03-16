import { signUp } from "../auth-client";

export const Register = () => {
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const { data, error } = await signUp.email({
      name: form.get("name") as string,
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
      className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-gray-200 text-sm font-semibold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-200 text-sm font-semibold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-200 text-sm font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Register
      </button>
    </form>
  );
};
