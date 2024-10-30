import React, { useState } from "react";
import Image from "../../public/sign in/Group.png";
import Layout from "./Layout";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // لاجیک ورودی
    console.log({ username, password, rememberMe });
  };

  return (
    <Layout>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src="/Group.png"
            alt="Tree News"
            width={64}
            height={64}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-700">Tree News</h2>
        </div>
        <h3 className="text-center text-gray-600 mb-4">ورود به حساب کاربری</h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-right text-gray-600"
            >
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-right text-gray-600"
            >
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-red-500">
              فراموشی رمز؟
            </a>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-gray-600 text-sm"
              >
                مرا به خاطر بسپار
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
          >
            ورود به حساب
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginForm;
