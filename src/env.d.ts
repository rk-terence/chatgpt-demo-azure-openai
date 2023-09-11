/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AZURE_OPENAI_API_KEY: string;
  readonly AZURE_OPENAI_ENDPOINT: string;
  readonly AZURE_OPENAI_MODELS: string;

  readonly HTTPS_PROXY: string
  readonly HEAD_SCRIPTS: string
  readonly PUBLIC_SECRET_KEY: string
  readonly SITE_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
