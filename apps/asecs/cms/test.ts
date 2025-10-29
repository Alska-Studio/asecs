import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/**
 * Recursively copy a directory
 */
function copyDirectory(src: string, dest: string): void {
  if (!fs.existsSync(src)) {
    throw new Error(`Source directory does not exist: ${src}`);
  }

  // Create destination directory if it doesn't exist
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Resolve and replace all symlinks in the directory tree
 */
function resolveSymlinks(rootDir: string): void {
  console.log(`Searching for symlinks in: ${rootDir}`);

  // Use glob to find all entries in the directory tree
  const entries = glob.sync('**/*', {
    cwd: rootDir,
    dot: true,
    absolute: true
  });

  const symlinks = [];

  // First pass: identify all symlinks
  for (const entry of entries) {
    try {
      const stats = fs.lstatSync(entry);

      if (stats.isSymbolicLink()) {
        symlinks.push(entry);
      }
    } catch (error) {
      // Skip entries that can't be accessed
      console.warn(`Warning: Could not access ${entry}: ${error}`);
    }
  }

  console.log(`Found ${symlinks.length} symlink(s)`);

  // Second pass: resolve and replace symlinks
  for (const symlinkPath of symlinks) {
    try {
      const stats = fs.lstatSync(symlinkPath);

      if (!stats.isSymbolicLink()) {
        continue;
      }

      // Get the target path (resolved)
      const targetPath = fs.readlinkSync(symlinkPath);
      const resolvedTarget = path.resolve(path.dirname(symlinkPath), targetPath);

      console.log(`\nProcessing symlink: ${symlinkPath}`);
      console.log(`  Points to: ${resolvedTarget}`);

      // Check if target exists
      if (!fs.existsSync(resolvedTarget)) {
        console.error('  Error: Target does not exist, skipping');
        continue;
      }

      // Check if target is a directory
      const targetStats = fs.statSync(resolvedTarget);
      if (!targetStats.isDirectory()) {
        console.warn('  Warning: Target is not a directory, skipping');
        continue;
      }

      // Remove the symlink
      fs.unlinkSync(symlinkPath);
      console.log('  Removed symlink');

      // Copy the target directory to the symlink location
      copyDirectory(resolvedTarget, symlinkPath);
      console.log('  Copied directory contents');

    } catch (error) {
      console.error(`Error processing symlink ${symlinkPath}: ${error}`);
    }
  }

  console.log(`\nCompleted resolving ${symlinks.length} symlink(s)`);
}

const cwd = './node_modules';

// Resolve all symlinks in the directory tree
resolveSymlinks(cwd);
