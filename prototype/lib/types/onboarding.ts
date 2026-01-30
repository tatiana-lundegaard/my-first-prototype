export type OnboardingStep = "vehicle" | "driver" | "coverage" | "summary";

export interface VehicleData {
  registrationPlate: string;
  brand: string;
  model: string;
  year: number | "";
}

export interface DriverData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export interface CoverageData {
  liabilityOnly: boolean;
  comprehensive: boolean;
}

export interface OnboardingFormData {
  vehicle: VehicleData;
  driver: DriverData;
  coverage: CoverageData;
}

export const defaultVehicle: VehicleData = {
  registrationPlate: "",
  brand: "",
  model: "",
  year: "",
};

export const defaultDriver: DriverData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: "",
};

export const defaultCoverage: CoverageData = {
  liabilityOnly: true,
  comprehensive: false,
};
