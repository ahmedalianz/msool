interface ImportMetaEnv {
  VITE_BASE_URL: string;
  VITE_MODE: string;
  VITE_MIX_PANEL_TOKEN: string;
  VITE_RELEASE: string;
  VITE_FEATURE_DASHBOARD: string;
  VITE_FEATURE_MENU: string;
  VITE_FEATURE_AUTO_ACCESS: string;
  VITE_MANAGE_PLAN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
