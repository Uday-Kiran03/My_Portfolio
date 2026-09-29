import fs from 'fs';
import path from 'path';

const src = 'C:/Users/Uday Kiran/.gemini/antigravity/brain/cba10ad6-1085-4e40-b06c-a5a1396dce2b/.user_uploaded/media_1790670319949.png';
const dest = path.join(process.cwd(), 'public', 'aws-cloud-practitioner.png');

try {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Badge copied successfully to:', dest);
} catch (err) {
  console.error('Error copying badge:', err);
}
