import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ["src/client/index.tsx"],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: "public/static/bundle.js",
    plugins: [sassPlugin({ type: "style" })],
  });

  // This will constantly check the file changes and bundle it.
  await ctx.watch();
  console.log("Watcing client...");

  // This will create a server which will serve the updated files to the browser but it wont do a auto reload
  const { host, port } = await ctx.serve({
    servedir: "public",
    fallback: "index.html",
  });
  console.log(`Hot refresh at http://localhost:${port}`);
} catch (error) {
  console.error("An error occured: ", error);
  process.exit(1);
}
