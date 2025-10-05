const fs = require('fs');
const path = require('path');

// Define all required files with their expected minimum sizes (in bytes)
const requiredFiles = {
  // Root files
  'package.json': 100,
  'next.config.js': 100,
  '.env.example': 100,
  'README.md': 500,
  'SETUP_GUIDE.md': 500,
  'CUSTOMIZATION_GUIDE.md': 500,
  'FILE_CHECKLIST.md': 500,
  'PROJECT_SUMMARY.md': 500,
  
  // App directory
  'src/app/layout.tsx': 500,
  'src/app/page.tsx': 500,
  'src/app/globals.css': 500,
  'src/app/kazali-arac-alim-satim/page.tsx': 500,
  
  // Components - Layout
  'src/components/layout/Header.tsx': 1000,
  'src/components/layout/Footer.tsx': 500,
  'src/components/layout/FloatingButtons.tsx': 300,
  
  // Components - Sections
  'src/components/sections/HeroBanner.tsx': 500,
  'src/components/sections/WhyUs.tsx': 300,
  'src/components/sections/ProcessTimeline.tsx': 300,
  'src/components/sections/ContactCTA.tsx': 300,
  'src/components/sections/Testimonials.tsx': 300,
  'src/components/sections/FAQ.tsx': 500,
  
  // Components - Analytics
  'src/components/analytics/GoogleTagManager.tsx': 300,
  'src/components/analytics/GoogleAnalytics.tsx': 300,
  'src/components/analytics/ConversionTracking.tsx': 300,
  
  // Lib
  'src/lib/gtm.ts': 500,
  'src/lib/analytics.ts': 500,
  
  // Styles
  'src/styles/variables.css': 300,
  'src/styles/components.css': 1000,
  'src/styles/layout.css': 500,
  
  // Types
  'src/types/index.ts': 200,
  
  // Data
  'src/data/services.ts': 500,
  'src/data/testimonials.ts': 300,
  'src/data/faq.ts': 500,
  
  // Config
  'src/config/site.ts': 200,
  'src/config/analytics.ts': 200,
  
  // Public
  'public/robots.txt': 50,
};

// Required directories
const requiredDirs = [
  'src',
  'src/app',
  'src/app/kazali-arac-alim-satim',
  'src/components',
  'src/components/layout',
  'src/components/sections',
  'src/components/ui',
  'src/components/analytics',
  'src/lib',
  'src/styles',
  'src/types',
  'src/data',
  'src/config',
  'public',
  'public/images',
  'public/favicon',
];

console.log('🔍 Checking Ankara PERT Project Files...\n');
console.log('='.repeat(60));

let missingFiles = [];
let emptyFiles = [];
let missingDirs = [];
let totalFiles = 0;
let validFiles = 0;

// Check directories
console.log('\n📁 CHECKING DIRECTORIES:\n');
requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`❌ MISSING: ${dir}`);
    missingDirs.push(dir);
  } else {
    console.log(`✅ EXISTS: ${dir}`);
  }
});

// Check files
console.log('\n📄 CHECKING FILES:\n');
Object.entries(requiredFiles).forEach(([file, minSize]) => {
  totalFiles++;
  
  if (!fs.existsSync(file)) {
    console.log(`❌ MISSING: ${file}`);
    missingFiles.push(file);
  } else {
    const stats = fs.statSync(file);
    const fileSize = stats.size;
    
    if (fileSize === 0) {
      console.log(`⚠️  EMPTY: ${file} (0 bytes)`);
      emptyFiles.push(file);
    } else if (fileSize < minSize) {
      console.log(`⚠️  TOO SMALL: ${file} (${fileSize} bytes, expected ~${minSize}+)`);
      emptyFiles.push(file);
    } else {
      console.log(`✅ OK: ${file} (${fileSize} bytes)`);
      validFiles++;
    }
  }
});

// Summary Report
console.log('\n' + '='.repeat(60));
console.log('\n📊 SUMMARY REPORT:\n');
console.log(`Total files checked: ${totalFiles}`);
console.log(`✅ Valid files: ${validFiles}`);
console.log(`❌ Missing files: ${missingFiles.length}`);
console.log(`⚠️  Empty/Small files: ${emptyFiles.length}`);
console.log(`❌ Missing directories: ${missingDirs.length}`);

// Detailed report of issues
if (missingDirs.length > 0) {
  console.log('\n' + '='.repeat(60));
  console.log('\n❌ MISSING DIRECTORIES:\n');
  missingDirs.forEach(dir => {
    console.log(`   ${dir}`);
  });
  console.log('\n💡 Run this command to create them:');
  console.log('   mkdir -p ' + missingDirs.join(' '));
}

if (missingFiles.length > 0) {
  console.log('\n' + '='.repeat(60));
  console.log('\n❌ MISSING FILES:\n');
  missingFiles.forEach(file => {
    console.log(`   ${file}`);
  });
  console.log('\n💡 These files need to be created from artifacts');
}

if (emptyFiles.length > 0) {
  console.log('\n' + '='.repeat(60));
  console.log('\n⚠️  EMPTY OR INCOMPLETE FILES:\n');
  emptyFiles.forEach(file => {
    console.log(`   ${file}`);
  });
  console.log('\n💡 These files exist but are empty or incomplete');
  console.log('   Please copy the content from the artifacts');
}

// Check for images
console.log('\n' + '='.repeat(60));
console.log('\n🖼️  CHECKING IMAGES:\n');

const requiredImages = [
  'public/banner.webp',
  'public/kazali.webp',
  'public/hasarli.webp',
  'public/pert.webp',
  'public/hurda.webp',
];

const galleryImages = [
  'public/images/kazali-arac-alan-firmalar.webp',
  'public/images/hurda-arac-alan.webp',
  'public/images/pert-arac-alan.webp',
  'public/images/kazali-arac-alimi.webp',
  'public/images/hasarli-arac-alan.webp',
  'public/images/kazali-arac-alan-yerler.webp',
];

let missingImages = 0;
[...requiredImages, ...galleryImages].forEach(img => {
  if (!fs.existsSync(img)) {
    console.log(`❌ MISSING: ${img}`);
    missingImages++;
  } else {
    const size = fs.statSync(img).size;
    console.log(`✅ EXISTS: ${img} (${(size / 1024).toFixed(1)} KB)`);
  }
});

// Final status
console.log('\n' + '='.repeat(60));
console.log('\n🎯 FINAL STATUS:\n');

const allGood = missingFiles.length === 0 && 
               emptyFiles.length === 0 && 
               missingDirs.length === 0;

if (allGood) {
  console.log('✅ ALL FILES ARE COMPLETE!');
  console.log('✅ Project structure is ready!');
  console.log('\n📝 Next steps:');
  console.log('   1. Add your images to public/ folder');
  console.log('   2. Create .env.local from .env.example');
  console.log('   3. Run: npm install');
  console.log('   4. Run: npm run dev');
} else {
  console.log('⚠️  ISSUES FOUND!');
  console.log('\n📝 Action needed:');
  if (missingDirs.length > 0) {
    console.log(`   1. Create ${missingDirs.length} missing directories`);
  }
  if (missingFiles.length > 0) {
    console.log(`   2. Create ${missingFiles.length} missing files`);
  }
  if (emptyFiles.length > 0) {
    console.log(`   3. Fill ${emptyFiles.length} empty/incomplete files`);
  }
  if (missingImages > 0) {
    console.log(`   4. Add ${missingImages} missing images`);
  }
}

console.log('\n' + '='.repeat(60));
console.log('\n💡 TIP: Copy the output above and share it for help\n');

// Export results to a JSON file for easier parsing
const results = {
  timestamp: new Date().toISOString(),
  summary: {
    totalFiles,
    validFiles,
    missingFiles: missingFiles.length,
    emptyFiles: emptyFiles.length,
    missingDirs: missingDirs.length,
    missingImages,
  },
  details: {
    missingDirectories: missingDirs,
    missingFiles,
    emptyOrIncompleteFiles: emptyFiles,
  }
};

fs.writeFileSync('project-check-results.json', JSON.stringify(results, null, 2));
console.log('📄 Detailed results saved to: project-check-results.json\n');