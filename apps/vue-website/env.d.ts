/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEBSITE_TITLE: string
    readonly VITE_BLOG_NAME: string
    readonly VITE_BLOG_SLOGAN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
