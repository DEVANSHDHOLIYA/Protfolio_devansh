import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Replace orange with violet
  newContent = newContent.replaceAll('orange-', 'violet-');
  
  // Replace slate with zinc
  newContent = newContent.replaceAll('slate-', 'zinc-');
  
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

// Process App.jsx
['App.jsx', 'main.jsx', 'index.css'].forEach(file => {
  const p = path.join('c:/Users/Devansh/OneDrive/Desktop/protfolio/src', file);
  if (fs.existsSync(p)) {
    processFile(p);
  }
});

console.log('Theme changed to Violet & Zinc');
