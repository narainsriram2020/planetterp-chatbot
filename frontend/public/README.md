# Public Assets

This folder contains static assets for the frontend.

## Adding UMD Logo

1. **Download a UMD logo** (PNG format recommended)
2. **Save it as `umd-logo.png`** in this folder
3. **Recommended size**: 48x48px or 96x96px for crisp display

## Image Sources

You can get UMD logos from:
- UMD Brand Guidelines: https://umd.edu/brand
- UMD Marketing Materials
- Or use a simple UMD shield/terrapin logo

## Alternative Names

If you use a different filename, update the `src` attribute in:
- `components/ChatMessage.tsx`
- `app/page.tsx`

Example: If your file is `umd-shield.png`, change:
```jsx
src="/umd-logo.png"
```
to:
```jsx
src="/umd-shield.png"
``` 