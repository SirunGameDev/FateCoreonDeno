import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react()],
  //assetsInclude:["**/*.ts"],
  base: "./"
})
