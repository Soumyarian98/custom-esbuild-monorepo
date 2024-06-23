import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

try {
  await esbuild.build({
    entryPoints: ["/src/client/index.tsx"],
    bundle: true,
    sourcemap: true,
    minify: true,
    outfile: "public/static/bundle.js",
    define: {
      "process.env.NODE_ENV": "'production'",
    },
    plugins: [sassPlugin({ type: "style" })],
  });
  console.log("Client bundled successfully for production!");
} catch (error) {
  console.error("An error occured: ", error);
}
