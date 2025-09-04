// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://LentejaRabiosa.github.io",
	base: "/portfolio",
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            theme: 'kanagawa-wave',
        }
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
