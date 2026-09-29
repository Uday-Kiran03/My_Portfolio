import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically ensure AWS Badge image is copied to public folder
const badgeSrc = 'C:/Users/Uday Kiran/.gemini/antigravity/brain/cba10ad6-1085-4e40-b06c-a5a1396dce2b/.user_uploaded/media_1790670319949.png';
const badgeDest = path.resolve(__dirname, 'public/aws-cloud-practitioner.png');
try {
  if (fs.existsSync(badgeSrc)) {
    fs.mkdirSync(path.dirname(badgeDest), { recursive: true });
    fs.copyFileSync(badgeSrc, badgeDest);
  }
} catch (e) {
  // Silent fallback
}

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
