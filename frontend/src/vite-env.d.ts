/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_AUTH0_DOMAIN: string;
  readonly VITE_APP_AUTH0_CLIENT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
