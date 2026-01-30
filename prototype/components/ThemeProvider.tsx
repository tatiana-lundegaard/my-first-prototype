"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { colors } from "@/lib/design-system/tokens";

const theme = createTheme({
  primaryColor: "green",
  colors: {
    green: [
      "#e8f5e9",
      "#c8e6c9",
      "#a5d6a7",
      "#81c784",
      "#66bb6a",
      colors.primary,
      "#237033",
      "#1b5e20",
      "#0d3d12",
      "#051f09",
    ],
  },
  defaultRadius: "md",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
