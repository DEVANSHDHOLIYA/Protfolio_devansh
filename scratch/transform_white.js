import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/Devansh/OneDrive/Desktop/protfolio/src/components';

const replacements = {
  'text-white': 'text-slate-900 dark:text-white',
  'hover:text-white': 'hover:text-slate-900 dark:hover:text-white'
};

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;

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
console.log('Done');
