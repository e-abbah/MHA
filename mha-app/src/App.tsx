// function App() {
//   return (
//     <div
//       className="h-screen w-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/Background.jpg')" }}
//     >
//       <h1 className="text-white text-6xl font-bold text-center pt-60">
//         Hello World
//       </h1>
//     </div>
//   )
// }

// export default App


import React from "react";

function Login() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      {/* Login form directly on background */}
      <div className="w-full max-w-md">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center drop-shadow-lg">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded border border-white bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded border border-white bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-white drop-shadow-md">
          Don't have an account?{" "}
          <a href="#" className="underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
