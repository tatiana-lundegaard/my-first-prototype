"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, Button } from "@mantine/core";
import { coverageSchema, type CoverageSchema } from "@/lib/utils/onboarding-schema";
import type { CoverageData } from "@/lib/types/onboarding";

interface Props {
  data: CoverageData;
  onNext: (data: CoverageData) => void;
  onBack: () => void;
}

export function StepCoverage({ data, onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CoverageSchema>({
    resolver: zodResolver(coverageSchema),
    defaultValues: data,
  });

  const liabilityOnly = watch("liabilityOnly");
  const comprehensive = watch("comprehensive");

  return (
    <form onSubmit={handleSubmit((d) => onNext(d as unknown as CoverageData))} className="flex flex-col gap-4">
      <Checkbox
        label="Povinné ručení (MTPL)"
        checked={liabilityOnly}
        onChange={(e) => setValue("liabilityOnly", e.currentTarget.checked)}
      />
      <Checkbox
        label="Havarijní pojištění"
        checked={comprehensive}
        onChange={(e) => setValue("comprehensive", e.currentTarget.checked)}
      />
      {(errors.root?.message ?? errors.comprehensive?.message) && (
        <p className="text-sm text-red-600">
          {errors.root?.message ?? errors.comprehensive?.message}
        </p>
      )}
      <div className="mt-4 flex gap-2">
        <Button type="button" variant="subtle" color="dark" onClick={onBack}>
          Zpět
        </Button>
        <Button type="submit" color="green">
          Přehled
        </Button>
      </div>
    </form>
  );
}
