import * as esbuild from "esbuild";

let ctx;
try {
  ctx = await esbuild.context({
    entryPoints: ["src/server/server.ts"],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: "node",
    target: ["node20.10"],
    packages: "external", //this means esbuild wont bundle the node_modules
    outfile: "dist/server.js",
  });
  await ctx.watch();
} catch (error) {
  console.error("An error occured: ", error);
  process.exit(1);
}
