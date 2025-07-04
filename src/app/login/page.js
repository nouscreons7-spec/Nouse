"use client";
import { useState } from "react";
import Home from "../Home/page";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const correctPassword = "mySecret7306";

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("🚫 No access: Incorrect password.");
    }
  };

  // ✅ If authenticated, render the Home component
  if (authenticated) {
    return <Home />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          🔐 Secure Access
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}
