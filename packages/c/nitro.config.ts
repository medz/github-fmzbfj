import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  compatibilityDate: "2025-09-15",
  experimental: {wasm: true},
  preset: "cloudflare-module"
});
