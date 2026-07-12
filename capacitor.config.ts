import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.tawasol.chat",
  appName: "تواصل",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
