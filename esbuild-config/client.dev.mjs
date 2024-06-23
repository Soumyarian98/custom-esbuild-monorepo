import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "esbuild-postcss";

try {
  let ctx = await esbuild.context({
    entryPoints: ["src/client/index.tsx"],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: "public/static/bundle.js",
    plugins: [postcss(), sassPlugin({ type: "style" })],
    define: {
      // This is required because browser doesn't have a process.env.NODE_ENV enviournment variable
      "process.env.NODE_ENV": process.env.NODE_ENV
        ? process.env.NODE_ENV
        : "'development'",
    },
  });

  // This will constantly check the file changes and bundle it.
  await ctx.watch();
  console.log("Watcing client...");

  // This will create a server which will serve the updated files to the browser but it wont do a auto reload
  const { host, port } = await ctx.serve({
    servedir: "public",
    fallback: "public/index.html",
    port: 3000,
  });
  console.log(`Hot refresh at http://localhost:${port}`);
} catch (error) {
  console.error("An error occured: ", error);
  process.exit(1);
}
