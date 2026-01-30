"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-800">Pojištění vozidel</p>
            <p className="mt-1 text-sm text-gray-600">
              B2C prototyp – povinné ručení a havarijní
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/welcome" className="hover:text-[#2d8a3e]">
              Jak to funguje
            </Link>
            <Link href="/demo" className="hover:text-[#2d8a3e]">
              Demo
            </Link>
            <Link href="/back-office" className="hover:text-[#2d8a3e]">
              Back office
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Prototyp. CNB, ČKP.
        </p>
      </div>
    </footer>
  );
}
