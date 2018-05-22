#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const purify_1 = require("./purify");
console.warn('purify is deprecated and will be removed in 0.7.0.');
if (process.argv.length < 3 || process.argv.length > 4) {
    throw new Error(`
    purify should be called with either one or two arguments:

      purify input.js
      purify input.js output.js
  `);
}
const currentDir = process.cwd();
const inputFile = process.argv[2];
const tsOrJsRegExp = /\.(j|t)s$/;
if (!inputFile.match(tsOrJsRegExp)) {
    throw new Error(`Input file must be .js or .ts.`);
}
// Use provided output file, or add the .purify suffix before the extension.
const outputFile = process.argv[3]
    || inputFile.replace(tsOrJsRegExp, (subStr) => `.purify${subStr}`);
const purifyOutput = purify_1.purify(fs_1.readFileSync(path_1.join(currentDir, inputFile), 'UTF-8'));
fs_1.writeFileSync(path_1.join(currentDir, outputFile), purifyOutput);
console.log(`Emitted: ${outputFile}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF9vcHRpbWl6ZXIvc3JjL3B1cmlmeS9jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsMkJBQWlEO0FBQ2pELCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFFbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBRW5FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUM7Ozs7O0dBS2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsNEVBQTRFO0FBQzVFLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQzdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFFckUsTUFBTSxZQUFZLEdBQUcsZUFBTSxDQUFDLGlCQUFZLENBQUMsV0FBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRWhGLGtCQUFhLENBQUMsV0FBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksVUFBVSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHB1cmlmeSB9IGZyb20gJy4vcHVyaWZ5JztcblxuY29uc29sZS53YXJuKCdwdXJpZnkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDAuNy4wLicpO1xuXG5pZiAocHJvY2Vzcy5hcmd2Lmxlbmd0aCA8IDMgfHwgcHJvY2Vzcy5hcmd2Lmxlbmd0aCA+IDQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICBwdXJpZnkgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGVpdGhlciBvbmUgb3IgdHdvIGFyZ3VtZW50czpcblxuICAgICAgcHVyaWZ5IGlucHV0LmpzXG4gICAgICBwdXJpZnkgaW5wdXQuanMgb3V0cHV0LmpzXG4gIGApO1xufVxuXG5jb25zdCBjdXJyZW50RGlyID0gcHJvY2Vzcy5jd2QoKTtcblxuY29uc3QgaW5wdXRGaWxlID0gcHJvY2Vzcy5hcmd2WzJdO1xuY29uc3QgdHNPckpzUmVnRXhwID0gL1xcLihqfHQpcyQvO1xuXG5pZiAoIWlucHV0RmlsZS5tYXRjaCh0c09ySnNSZWdFeHApKSB7XG4gIHRocm93IG5ldyBFcnJvcihgSW5wdXQgZmlsZSBtdXN0IGJlIC5qcyBvciAudHMuYCk7XG59XG5cbi8vIFVzZSBwcm92aWRlZCBvdXRwdXQgZmlsZSwgb3IgYWRkIHRoZSAucHVyaWZ5IHN1ZmZpeCBiZWZvcmUgdGhlIGV4dGVuc2lvbi5cbmNvbnN0IG91dHB1dEZpbGUgPSBwcm9jZXNzLmFyZ3ZbM11cbiAgfHwgaW5wdXRGaWxlLnJlcGxhY2UodHNPckpzUmVnRXhwLCAoc3ViU3RyKSA9PiBgLnB1cmlmeSR7c3ViU3RyfWApO1xuXG5jb25zdCBwdXJpZnlPdXRwdXQgPSBwdXJpZnkocmVhZEZpbGVTeW5jKGpvaW4oY3VycmVudERpciwgaW5wdXRGaWxlKSwgJ1VURi04JykpO1xuXG53cml0ZUZpbGVTeW5jKGpvaW4oY3VycmVudERpciwgb3V0cHV0RmlsZSksIHB1cmlmeU91dHB1dCk7XG5jb25zb2xlLmxvZyhgRW1pdHRlZDogJHtvdXRwdXRGaWxlfWApO1xuIl19