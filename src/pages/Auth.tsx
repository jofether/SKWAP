// pages/Auth.tsx
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";
import type { PageType } from "../App";

interface AuthProps {
  onNavigate: (page: PageType) => void;
}

export default function Auth({ onNavigate }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-900">
      <div className="w-full max-w-sm mx-auto">
        {/* Branding & Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-gradient-to-tr from-skwap-accent to-cyan-500 shadow-cyan-500/30">
            <Sparkles size={32} className="text-white" strokeWidth={1.5} />
          </div>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Skwap
          </h1>
          <p className="text-sm text-slate-400">
            {isLogin
              ? "Welcome back! Ready to swap skills?"
              : "Join the ultimate skill-sharing community."}
          </p>
        </div>

        {/* Auth Toggle Tabs */}
        <div className="flex p-1 mb-8 rounded-full bg-slate-800">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-sm font-semibold rounded-full transition-all duration-200 ${
              isLogin
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-sm font-semibold rounded-full transition-all duration-200 ${
              !isLogin
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Auth Form */}
        <form className="space-y-4">
          {/* Full Name (Sign Up Only) */}
          {!isLogin && (
            <div className="relative">
              <User
                size={20}
                className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                required
                className="pl-12 input-field"
              />
            </div>
          )}

          {/* Email Address */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="pl-12 input-field"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-500"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="pl-12 pr-12 input-field"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute -translate-y-1/2 right-4 top-1/2 text-slate-500 hover:text-slate-300 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password Link (Login Only) */}
          {isLogin && (
            <div className="flex justify-end pt-1">
              <button
                type="button"
                className="text-sm font-medium transition-colors text-skwap-accent hover:text-cyan-400"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => onNavigate("home")}
            className="w-full mt-6 btn-primary"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-8 text-xs text-center text-slate-500">
          By continuing, you agree to Skwap's <br />
          <a href="#" className="underline hover:text-slate-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-300">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
