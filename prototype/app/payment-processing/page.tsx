"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import { GoPayWidget } from "@/components/GoPayWidget";

export default function PaymentProcessingPage() {
  const [sent, setSent] = useState(false);

  const handleSendQuote = async () => {
    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "demo@example.cz" }),
    });
    if (res.ok) setSent(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Platba</h1>
      <p className="mt-2 text-gray-600">
        Dokončete platbu prostřednictvím platební brány (prototyp).
      </p>
      <div className="mt-8">
        <GoPayWidget />
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button color="green" onClick={handleSendQuote} disabled={sent}>
          {sent ? "Nabídka odeslána" : "Odeslat nabídku e-mailem"}
        </Button>
        <Link href="/contract">
          <Button variant="light" color="green">
            Zpět na smlouvu
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="subtle" color="dark">
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
