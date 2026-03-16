import { Route, Routes } from "react-router";
import { Dashboard, Login, Register } from "./pages";
import { ProtectedRoute } from "./routes/protected-route";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
