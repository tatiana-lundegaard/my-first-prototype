"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@mantine/core";
import { driverSchema, type DriverSchema } from "@/lib/utils/onboarding-schema";
import type { DriverData } from "@/lib/types/onboarding";
import { Button } from "@mantine/core";

interface Props {
  data: DriverData;
  onNext: (data: DriverData) => void;
  onBack: () => void;
}

export function StepDriver({ data, onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DriverSchema>({
    resolver: zodResolver(driverSchema),
    defaultValues: data,
  });

  return (
    <form onSubmit={handleSubmit((d) => onNext(d as unknown as DriverData))} className="flex flex-col gap-4">
      <TextInput
        label="Jméno"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <TextInput
        label="Příjmení"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <TextInput
        label="E-mail"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <TextInput
        label="Telefon"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <TextInput
        label="Datum narození"
        type="date"
        {...register("birthDate")}
        error={errors.birthDate?.message}
      />
      <div className="mt-4 flex gap-2">
        <Button type="button" variant="subtle" color="dark" onClick={onBack}>
          Zpět
        </Button>
        <Button type="submit" color="green">
          Další
        </Button>
      </div>
    </form>
  );
}
