/* eslint-disable */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_HTTP: string
  readonly VITE_GRAPHQL_WS: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}