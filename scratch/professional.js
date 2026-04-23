import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

  // Colors -> Professional Blue & Slate
  newContent = newContent.replaceAll('amber-', 'blue-');
  newContent = newContent.replaceAll('stone-', 'slate-');

  // Strip brutalist borders and shadows
  newContent = newContent.replaceAll('border-4 border-slate-900 dark:border-white shadow-[6px_6px_0_0_#1c1917] dark:shadow-[6px_6px_0_0_#f5f5f4]', 'rounded-full shadow-md text-sm border-none');
  newContent = newContent.replaceAll('border-4 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#1c1917] dark:shadow-[4px_4px_0_0_#f5f5f4]', 'rounded-full shadow-md border-none');
  
  // Hover shadow strips
  newContent = newContent.replaceAll('hover:shadow-[10px_10px_0_0_#1c1917] dark:hover:shadow-[10px_10px_0_0_#f5f5f4]', 'hover:shadow-xl hover:shadow-blue-500/20');
  newContent = newContent.replaceAll('shadow-[6px_6px_0_0_#1c1917] dark:shadow-[6px_6px_0_0_#f5f5f4]', 'shadow-md');
  newContent = newContent.replaceAll('hover:shadow-[8px_8px_0_0_#1c1917] dark:hover:shadow-[8px_8px_0_0_#f5f5f4]', 'hover:shadow-lg hover:shadow-blue-500/20');
  newContent = newContent.replaceAll('hover:shadow-[6px_6px_0_0_#1c1917] dark:hover:shadow-[6px_6px_0_0_#f5f5f4]', 'hover:shadow-md hover:shadow-blue-500/20');

  // Re-round the elements that were made flat
  newContent = newContent.replaceAll('rounded-none', 'rounded-2xl');

  // Fix buttons that might have been changed to 2xl, should be full
  newContent = newContent.replace(/rounded-2xl flex items-center/g, 'rounded-full flex items-center');
  newContent = newContent.replace(/rounded-2xl transition-all shadow-md/g, 'rounded-full transition-all shadow-md');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  processFile(path.join(dir, file));
}

// Process App.jsx and main.jsx
['App.jsx', 'main.jsx'].forEach(file => {
  const p = path.join('c:/Users/Devansh/OneDrive/Desktop/protfolio/src', file);
  if (fs.existsSync(p)) {
    processFile(p);
  }
});
