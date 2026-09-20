# Portfolio Site (v4 - precise corrections from real picked colors and font settings)

Corrected against real data you sent: exact picked hex colors from your live
site, your actual Wix text settings panel (confirmed Times New Roman, 70px),
your real photo, your real illustration, and cropped versions of your 3
previously-missing manual testing template thumbnails.

## What's fixed this round

1. **Hero padding reduced** - content now runs much closer to the browser
   edges instead of sitting in a narrow centered column
2. **Font corrected to Times New Roman** (not Playfair Display) - confirmed
   directly from your Wix editor's Text Settings panel, including the
   actual 70px size for the main headline
3. **Colors corrected to your exact picked values**:
   - Background: `#0D2123` (picked from your real site, not estimated)
   - Light section background: `#FAFAFA`
   - Red accent: `#DA1E33`
4. **Your real photo and illustration** are now in the hero, not placeholders
5. **Social icons repeated at the bottom** of the Contact section, matching
   the top
6. **"About Me" removed** from the nav
7. **All 5 manual testing templates now have real images** - 2 were already
   confirmed from earlier work, and I cropped the other 3 directly out of
   the combined screenshot you sent (verified each crop individually before
   using it - see below)
8. **Articles now stack vertically and are significantly larger**, matching
   your real layout exactly, with more spacing between project cards

## How I got the 3 missing template thumbnails

I don't have Wix-hosted URLs for "Test Case Template," "Bug Report
Template," or "Bug Report for Sauce Demo" - I couldn't find dedicated
subpages for them the way I did for the Shirly and Sauce Demo test-case
templates. Instead, I cropped them directly out of the combined screenshot
you sent, using Python's image library, and visually verified each crop
individually (viewed each one myself) before using it - all three came out
clean, matching exactly what you sent.

## Setup

```bash
npm install
npm run dev     # localhost:5173
npm run build   # confirmed working - real production build succeeded
```

## Updating content

`src/data/content.js` - projects, skills, articles, social links.
Screenshots in `public/screenshots/`. Your photo at `public/photo.jpg`,
illustration at `public/illustration.png`.
