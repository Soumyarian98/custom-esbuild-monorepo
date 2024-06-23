import * as esbuild from "esbuild";

try {
  await esbuild.build({
    entryPoints: ["src/server/server.ts"],
    bundle: true,
    sourcemap: false,
    minify: true,
    platform: "node",
    target: ["node20.10"],
    define: {
      "process.env.NODE_ENV": "'production'",
    },
    outfile: "dist/server.js",
  });
  console.log("Server bundled successfully for production!");
} catch (error) {
  console.error("An error occured: ", error);
}
