import type { Config } from "https://deno.land/x/aleph/types.d.ts";

export default <Config>{
  sourceDir: "/docs",
  build: {
    target: "esnext",
    outputDir: "/docs",
  },
};
