import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.js",
    plugins: [
      nodeResolve(),
    ],
    output: [
      {
        file: "dist/jsts.es.js",
        format: "es",
        sourcemap: true,
      }
    ],
  },
];
