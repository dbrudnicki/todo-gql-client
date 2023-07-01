import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:4000": {},
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      documents: ["src/**/*.tsx"],
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
