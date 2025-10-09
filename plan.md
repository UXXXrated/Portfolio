# UX Portfolio Project Plan

## Project Purpose
- Professional UX design portfolio website
- Showcase design work, case studies, and professional background
- Hosted at www.bamoore.com via GitHub Pages

## Core Sections
1. **Work/Portfolio**
   - Case studies of UX design projects
   - Project outcomes and metrics
   - Design process documentation

2. **About**
   - Professional background
   - Design philosophy
   - Skills and expertise

3. **Contact**
   - Professional contact information
   - Project inquiry form

## Hidden/Disabled Features
- Blog/Writing section
- Newsletter signup
- Comments system

## Technical Stack
- Jekyll static site generator
- Akio Creative Portfolio Theme
- GitHub Pages hosting
- SCSS for custom styling

## Project Goals
1. Professional presentation of UX work
2. Clear demonstration of design process
3. Easy contact for potential clients/employers
4. Fast, responsive performance

## Content Strategy
- Focus on portfolio work
- Minimal Distractions (blog, comments disabled)
- Clear calls to action
- Professional case study format

## Code Modification Guidelines
- Make minimal, focused changes that address only the specific task
- Preserve existing code structure and comments
- Avoid unnecessary reformatting or cleanup
- Never remove code unless explicitly requested
- Prefer small, incremental changes over large rewrites
- Test changes thoroughly before committing

## Code Tools
- Use `propose_code` tool to suggest code changes
- Always preview changes before applying

## Commit Message Style
- Keep it concise and factual
- No explanations or context unless necessary
- Format for color changes:
  ```
  Updated colors:
  Light: #oldcolor → #newcolor
  Dark: #oldcolor → #newcolor
  ```

## Image Caption Template

To add a styled caption under an image in markdown files:

```markdown
<img src="/images/your-image.png" loading="lazy" alt="Alt text">
<div style="font-size: 14px; margin-top: 8px; margin-bottom: 24px; padding: 8px 16px; line-height: 1.4; text-align: center; border: 1px solid currentColor; border-radius: 16px;">Your caption text here.</div>
```
