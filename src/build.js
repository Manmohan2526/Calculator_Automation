import esbuild from "esbuild";

esbuild.build({
        entryPoints: ["index.js"],
        bundle: true,
        outfile: "progressbar.bundle.js",
        loader: {
            ".js": "jsx",
            ".jsx": "jsx"
        },
        format: "esm",
        target: "es2018",
        minify: true
    })
    .then(() => console.log("✅ Build completed!"))
    .catch((err) => console.error("❌ Build error:", err));