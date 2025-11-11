import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      autoInstall: true,
      customCollections: {
        // Optional: If using custom icons
        custom: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
  ],
});