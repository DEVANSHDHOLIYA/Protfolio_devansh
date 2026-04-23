import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Replace cyan with amber (vibrant neo-brutalist yellow)
  newContent = newContent.replaceAll('cyan-', 'amber-');
  
  // Replace slate with stone (warm gray)
  newContent = newContent.replaceAll('slate-', 'stone-');

  // Strip curved aesthetics for brutalist Sharp corners
  newContent = newContent.replaceAll('rounded-[2rem]', 'rounded-none border-4 border-stone-900 dark:border-stone-100 shadow-[6px_6px_0_0_#1c1917] dark:shadow-[6px_6px_0_0_#f5f5f4]');
  newContent = newContent.replaceAll('rounded-[1.5rem]', 'rounded-none border-4 border-stone-900 dark:border-stone-100 shadow-[4px_4px_0_0_#1c1917] dark:shadow-[4px_4px_0_0_#f5f5f4]');
  newContent = newContent.replaceAll('rounded-2xl', 'rounded-none');
  newContent = newContent.replaceAll('rounded-full', 'rounded-none');
  newContent = newContent.replaceAll('rounded-xl', 'rounded-none');
  
  // Clean up shadow-[xyz] strings that might conflict, or leave them. Actually, wait!
  // Buttons had hover:shadow-... we should replace hover shadow for brutalism
  newContent = newContent.replace(/hover:shadow-\[0_20px_40px_-10px_rgba\(6,182,212,0\.5\)\]/g, 'hover:shadow-[10px_10px_0_0_#1c1917] dark:hover:shadow-[10px_10px_0_0_#f5f5f4]');
  newContent = newContent.replace(/shadow-\[0_8px_20px_-5px_rgba\(6,182,212,0\.3\)\]/g, 'shadow-[6px_6px_0_0_#1c1917] dark:shadow-[6px_6px_0_0_#f5f5f4]');
  newContent = newContent.replace(/hover:shadow-\[0_12px_25px_-5px_rgba\(6,182,212,0\.5\)\]/g, 'hover:shadow-[8px_8px_0_0_#1c1917] dark:hover:shadow-[8px_8px_0_0_#f5f5f4]');
  newContent = newContent.replace(/hover:shadow-\[0_10px_20px_-5px_rgba\(6,182,212,0\.4\)\]/g, 'hover:shadow-[6px_6px_0_0_#1c1917] dark:hover:shadow-[6px_6px_0_0_#f5f5f4]');


  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  processFile(path.join(dir, file));
}

// Process App.jsx and index.css and main.jsx
['App.jsx', 'main.jsx', 'index.css'].forEach(file => {
  const p = path.join('c:/Users/Devansh/OneDrive/Desktop/protfolio/src', file);
  if (fs.existsSync(p)) {
    processFile(p);
  }
});

console.log('Design set to Neo-Brutalism with Amber & Stone');
