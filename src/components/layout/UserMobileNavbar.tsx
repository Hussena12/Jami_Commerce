"use client";
import { Home, Search, ShoppingCart, User, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function UserMobileNavbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] -translate-x-1/2 transform rounded-xl border bg-background/80 p-2 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button className="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
          <Home className="h-5 w-5" />
        </button>

        {/* Search with Islamic pattern */}
        <button className="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
          <Search className="h-5 w-5" />
        </button>

        {/* Cart with indicator */}
        <div className="relative">
          <button className="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
            3
          </span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Moon className="h-5 w-5" />
        </button>

        {/* Profile */}
        <button className="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
