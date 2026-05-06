// App.tsx
import { useState } from "react";
import { Home, Flame, Wallet, MessageCircle, User } from "lucide-react";

// Existing Pages
import Homepage from "./pages/Homepage";
import Credits from "./pages/Credits";
import Matching from "./pages/Matching";
import TransactionSuccess from "./pages/TransactionSuccess";

// Future Pages (Placeholders for now, we will replace these as we build them)
import Auth from './pages/Auth'
import Messages from "./pages/Messages";
import SkillWizard from "./pages/SkillWizard";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

export type PageType =
  | "auth"
  | "home"
  | "credits"
  | "matching"
  | "success"
  | "messages"
  | "wizard"
  | "profile"
  | "notifications"

export default function App() {
  // App now starts on the Auth page to enforce student verification
  const [currentPage, setCurrentPage] = useState<PageType>("auth");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage onNavigate={setCurrentPage} />;
      case "credits":
        return <Credits onNavigate={setCurrentPage} />;
      case "matching":
        return <Matching onNavigate={setCurrentPage} />;
      case "success":
        return <TransactionSuccess onNavigate={setCurrentPage} />;
      // Placeholders for our upcoming phases
      case "auth":
        return <Auth onNavigate={setCurrentPage} />;
      case "messages":
        return <Messages onNavigate={setCurrentPage} />;
      case "wizard":
        return <SkillWizard onNavigate={setCurrentPage} />;
      case "profile":
        return <Profile onNavigate={setCurrentPage} />;
      case "notifications":
        return <Notifications onNavigate={setCurrentPage} />; 
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  // Hide navigation on pages that require 100% focus
  const hideNavPages: PageType[] = ["auth", "wizard", "success"];
  const showNav = !hideNavPages.includes(currentPage);

  // Clean, mapped array for bottom navigation items
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "matching", label: "Match", icon: Flame },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "credits", label: "Credits", icon: Wallet },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <div className="min-h-screen pb-20 bg-slate-900">
      {renderPage()}

      {/* Bottom Navigation Bar */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-slate-900 border-slate-700">
          <div className="flex items-center justify-around w-full h-16 max-w-md mx-auto">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = currentPage === id;
              return (
                <button
                  key={id}
                  onClick={() => setCurrentPage(id as PageType)}
                  className="flex flex-col items-center justify-center gap-1 transition-colors duration-200"
                >
                  <Icon
                    size={24}
                    className={
                      isActive ? "text-skwap-accent" : "text-slate-500"
                    }
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                  <span
                    className={`text-xs font-medium ${
                      isActive ? "text-skwap-accent" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
