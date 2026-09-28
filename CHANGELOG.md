# Changelog

## 2.0.0

Full rewrite for react-admin 5.

- Rebuilt on the `useInput` hook instead of the removed `addField` (fixes #29, #35)
- Editor switched from the unmaintained `react-mde` to `@uiw/react-md-editor`, with live preview and dark mode that follows the react-admin theme
- No more global CSS import from `node_modules` (fixes #12)
- Removed `react-markdown`, `showdown` and `prop-types`; `react-admin` is now a peer dependency
- Ships TypeScript declarations; CommonJS and ESM builds
- Tests migrated from Jest to Vitest
