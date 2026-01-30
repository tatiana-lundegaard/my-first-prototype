"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/contexts/AuthContext";
import { Button, TextInput, Paper, Title, Text } from "@mantine/core";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(email, password)) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setError("Neplatné přihlášení. Pro demo použijte heslo: demo");
    }
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4 py-12">
      <Paper shadow="sm" p="xl" radius="md" className="w-full">
        <Title order={2} mb="xs">
          Přihlášení
        </Title>
        <Text size="sm" c="dimmed" mb="lg">
          Prototyp – pro vstup použijte libovolný e-mail a heslo: <strong>demo</strong>
        </Text>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextInput
            label="E-mail"
            type="email"
            placeholder="vas@email.cz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            label="Heslo"
            type="password"
            placeholder="demo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Text size="sm" c="red">
              {error}
            </Text>
          )}
          <Button type="submit" color="green" fullWidth>
            Přihlásit se
          </Button>
        </form>
      </Paper>
    </div>
  );
}
