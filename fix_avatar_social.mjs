import fs from 'fs';

const files = [
  'audio.html',
  'contact.html',
  'donations.html',
  'events.html',
  'image.html',
  'index.html',
  'philosophy.html',
  'store.html',
  'video.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace avatar URL
  content = content.replace(
    /https:\/\/images.unsplash.com\/photo-1601416954316-21f4fcfe91d7\?auto=format&fit=crop&q=80&w=100&h=100/g,
    "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=100&h=100"
  );

  fs.writeFileSync(file, content);
}
