"use client";
import { Menu, Moon, Search } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function MobileNavbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b bg-background/90 px-4 py-3 backdrop-blur-md">
      {/* Logo */}
      <div className="text-xl font-bold">إسلامي</div>

      {/* Right-side icons */}
      <div className="flex items-center gap-4">
        <button className="p-2">
          <Search className="h-5 w-5" />
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2"
        >
          <Moon className="h-5 w-5" />
        </button>

        {/* Hamburger menu for guest pages */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className="h-5 w-5" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="mt-[1rem] w-screen rounded-none  dropdown-content"
            side="bottom"
          >
            <DropdownMenuItem className="py-3 text-xl">
              <Link href="/about">About Us</Link>
            </DropdownMenuItem>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-3 text-xl">
              <Link href="/contact">Contact Us</Link>
            </DropdownMenuItem>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="py-3 text-xl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Toggle Theme
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
