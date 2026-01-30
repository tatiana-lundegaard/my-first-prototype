"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/contexts/AuthContext";
import { Button } from "@mantine/core";

export function Header() {
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="border-b border-[var(--mantine-color-gray-3)] bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-[#2d8a3e]">
          Pojištění vozidel
        </Link>
        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`text-sm ${pathname === "/dashboard" ? "font-semibold text-[#2d8a3e]" : "text-gray-600 hover:text-[#2d8a3e]"}`}
              >
                Dashboard
              </Link>
              <Button variant="subtle" size="xs" color="dark" onClick={logout}>
                Odhlásit
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/welcome"
                className={`text-sm ${pathname === "/welcome" ? "font-semibold text-[#2d8a3e]" : "text-gray-600 hover:text-[#2d8a3e]"}`}
              >
                Úvod
              </Link>
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-[#2d8a3e]"
              >
                Přihlásit
              </Link>
              <Link href="/onboarding">
                <Button size="xs" color="green">
                  Začít online
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
