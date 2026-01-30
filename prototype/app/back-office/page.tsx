import Link from "next/link";
import { Button } from "@mantine/core";

export default function BackOfficePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Back office</h1>
      <p className="mt-2 text-gray-600">
        Interní přehled (prototyp – mock data).
      </p>
      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          Zde by byl seznam smluv, nabídek a plateb. Pro prototyp bez backendu
          pouze placeholder.
        </p>
      </div>
      <div className="mt-6">
        <Link href="/">
          <Button variant="subtle" color="dark">
            Zpět na úvod
          </Button>
        </Link>
      </div>
    </div>
  );
}
