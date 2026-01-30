"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, NumberInput, Button } from "@mantine/core";
import { vehicleSchema, type VehicleSchema } from "@/lib/utils/onboarding-schema";
import type { VehicleData } from "@/lib/types/onboarding";

interface Props {
  data: VehicleData;
  onNext: (data: VehicleData) => void;
}

export function StepVehicle({ data, onNext }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      registrationPlate: data.registrationPlate,
      brand: data.brand,
      model: data.model,
      year: typeof data.year === "number" ? data.year : new Date().getFullYear(),
    },
  });

  const yearVal = watch("year");

  return (
    <form onSubmit={handleSubmit((d) => onNext({ ...data, ...d }))} className="flex flex-col gap-4">
      <TextInput
        label="SPZ"
        placeholder="1AB 2345"
        {...register("registrationPlate")}
        error={errors.registrationPlate?.message}
      />
      <TextInput
        label="Značka"
        placeholder="Škoda"
        {...register("brand")}
        error={errors.brand?.message}
      />
      <TextInput
        label="Model"
        placeholder="Octavia"
        {...register("model")}
        error={errors.model?.message}
      />
      <NumberInput
        label="Rok výroby"
        placeholder="2020"
        min={1990}
        max={new Date().getFullYear() + 1}
        value={yearVal ?? ""}
        onChange={(v) => setValue("year", v as number)}
        error={errors.year?.message}
      />
      <Button type="submit" color="green" className="mt-4">
        Další
      </Button>
    </form>
  );
}
