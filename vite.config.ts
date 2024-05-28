import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {resolve} from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), dts({
        insertTypesEntry: true,
        outDir: "dist",
        include: [
            "lib/**/*",
        ]
    })],
    build: {
        lib: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            entry: resolve(__dirname, 'lib/index.ts'),
            name: "ethos-ui",
            fileName: "ethos-ui",
        },
        rollupOptions: {
            external: ['react', 'react-dom', "react/jsx-runtime"],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    "react/jsx-runtime": "react/jsx-runtime",
                    "tailwindcss": "tailwindcss",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    }
})
