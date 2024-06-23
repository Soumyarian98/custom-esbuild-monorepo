import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "esbuild-postcss";

try {
  await esbuild.build({
    entryPoints: ["src/client/index.tsx"],
    bundle: true,
    sourcemap: true,
    minify: true,
    outfile: "public/static/bundle.js",
    define: {
      "process.env.NODE_ENV": "'production'",
    },
    plugins: [postcss(), sassPlugin({ type: "style" })],
  });
  console.log("Client bundled successfully for production!");
} catch (error) {
  console.error("An error occured: ", error);
}
