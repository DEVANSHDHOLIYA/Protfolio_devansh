import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const replacements = {
  'text-slate-200': 'text-slate-900 dark:text-slate-200',
  // 'text-white': 'text-slate-900 dark:text-white', // Excluded due to buttons
  'text-slate-300': 'text-slate-600 dark:text-slate-300',
  'text-slate-400': 'text-slate-500 dark:text-slate-400',
  'bg-slate-900/50': 'bg-slate-100/70 dark:bg-slate-900/50',
  'bg-slate-900': 'bg-slate-100 dark:bg-slate-900',
  'bg-slate-950': 'bg-white dark:bg-slate-950',
  'bg-slate-800': 'bg-slate-200 dark:bg-slate-800',
  'border-slate-800/50': 'border-slate-200/50 dark:border-slate-800/50',
  'border-slate-800': 'border-slate-200 dark:border-slate-800'
};

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Since we might run this multiple times playfully, avoid double replacing by checking if dark: is already there
  for (const [oldClass, newClass] of Object.entries(replacements)) {
      const escapedOldClass = oldClass.replaceAll('/', '\\/');
      const regex = new RegExp(`(?<!dark:)\\b${escapedOldClass}\\b(?!\\s*dark:)`, 'g');
      newContent = newContent.replace(regex, newClass);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  processFile(path.join(dir, file));
}

// Special case for App.jsx and main.jsx
['App.jsx', 'main.jsx'].forEach(file => {
  const p = path.join('c:/Users/Devansh/OneDrive/Desktop/protfolio/src', file);
  if (fs.existsSync(p)) processFile(p);
});

console.log('Done');
