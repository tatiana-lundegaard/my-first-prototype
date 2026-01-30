"use client";

import { useState } from "react";
import { Stepper } from "@mantine/core";
import { StepVehicle } from "@/components/onboarding/StepVehicle";
import { StepDriver } from "@/components/onboarding/StepDriver";
import { StepCoverage } from "@/components/onboarding/StepCoverage";
import { StepSummary } from "@/components/onboarding/StepSummary";
import { CameraUpload } from "@/components/CameraUpload";
import type {
  OnboardingFormData,
  OnboardingStep,
  VehicleData,
  DriverData,
  CoverageData,
} from "@/lib/types/onboarding";
import {
  defaultVehicle,
  defaultDriver,
  defaultCoverage,
} from "@/lib/types/onboarding";

const STEPS: OnboardingStep[] = ["vehicle", "driver", "coverage", "summary"];

export default function OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    vehicle: defaultVehicle,
    driver: defaultDriver,
    coverage: defaultCoverage,
  });

  const step = STEPS[stepIndex];

  const handleVehicleNext = (data: VehicleData) => {
    setFormData((prev) => ({ ...prev, vehicle: data }));
    setStepIndex(1);
  };

  const handleDriverNext = (data: DriverData) => {
    setFormData((prev) => ({ ...prev, driver: data }));
    setStepIndex(2);
  };

  const handleDriverBack = () => setStepIndex(0);

  const handleCoverageNext = (data: CoverageData) => {
    setFormData((prev) => ({ ...prev, coverage: data }));
    setStepIndex(3);
  };

  const handleCoverageBack = () => setStepIndex(1);

  const handleSummaryBack = () => setStepIndex(2);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Sjednání pojištění</h1>
      <Stepper active={stepIndex} mt="lg" size="sm">
        <Stepper.Step label="Vozidlo" />
        <Stepper.Step label="Řidič" />
        <Stepper.Step label="Pojištění" />
        <Stepper.Step label="Přehled" />
      </Stepper>
      <div className="mt-8">
        {step === "vehicle" && (
          <StepVehicle data={formData.vehicle} onNext={handleVehicleNext} />
        )}
        {step === "driver" && (
          <StepDriver
            data={formData.driver}
            onNext={handleDriverNext}
            onBack={handleDriverBack}
          />
        )}
        {step === "coverage" && (
          <StepCoverage
            data={formData.coverage}
            onNext={handleCoverageNext}
            onBack={handleCoverageBack}
          />
        )}
        {step === "summary" && (
          <>
            <StepSummary data={formData} onBack={handleSummaryBack} />
            <div className="mt-8 border-t border-gray-200 pt-6">
              <CameraUpload label="Nahrát doklad (např. technický průkaz)" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
