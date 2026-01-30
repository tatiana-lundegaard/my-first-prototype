import { z } from "zod";

export const vehicleSchema = z.object({
  registrationPlate: z.string().min(1, "Zadejte SPZ"),
  brand: z.string().min(1, "Zadejte značku"),
  model: z.string().min(1, "Zadejte model"),
  year: z.number({ invalid_type_error: "Zadejte rok" }).min(1990, "Rok od 1990").max(new Date().getFullYear() + 1, "Neplatný rok"),
});

export const driverSchema = z.object({
  firstName: z.string().min(1, "Zadejte jméno"),
  lastName: z.string().min(1, "Zadejte příjmení"),
  email: z.string().email("Neplatný e-mail"),
  phone: z.string().min(9, "Zadejte telefon"),
  birthDate: z.string().min(1, "Zadejte datum narození"),
});

export const coverageSchema = z.object({
  liabilityOnly: z.boolean(),
  comprehensive: z.boolean(),
}).refine((d) => d.liabilityOnly || d.comprehensive, {
  message: "Vyberte alespoň povinné ručení",
  path: ["comprehensive"],
});

export const onboardingSchema = z.object({
  vehicle: vehicleSchema,
  driver: driverSchema,
  coverage: coverageSchema,
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;
export type DriverSchema = z.infer<typeof driverSchema>;
export type CoverageSchema = z.infer<typeof coverageSchema>;
