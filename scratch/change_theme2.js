import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Replace violet with emerald
  newContent = newContent.replaceAll('violet-', 'emerald-');
  
  // Replace zinc with neutral
  newContent = newContent.replaceAll('zinc-', 'neutral-');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
};

// Process components
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  processFile(path.join(dir, file));
}

// Process App.jsx and index.css
['App.jsx', 'main.jsx', 'index.css'].forEach(file => {
  const p = path.join('c:/Users/Devansh/OneDrive/Desktop/protfolio/src', file);
  if (fs.existsSync(p)) {
    processFile(p);
  }
});

console.log('Theme changed to Emerald & Neutral');
