# Website release checklist

## Content

- [x] Re-run `npm run verify` after any result or media change.
- [x] Confirm paper PDF is the intended public, author-visible version.
- [x] Confirm all media clips are approved for public release.
- [ ] Replace `Preprint` BibTeX metadata when an arXiv identifier is available.
- [x] Verify the OpenReview link is public before announcing the site.

## Privacy and anonymous review

- [x] No analytics or tracking scripts.
- [x] No remote fonts, YouTube, Vimeo or third-party embeds.
- [x] Video derivatives remove source metadata.
- [x] Three H.264 video derivatives total less than 2.5 MB; no clip exceeds 1.5 MB.
- [x] Keep this author-identifiable public release separate from anonymous ICLR review materials.

## Technical

- [x] `npm run build`
- [x] `npm run verify`
- [x] Desktop visual QA at 1440 px and 1200 px widths.
- [x] Tablet/mobile visual QA at 768 px and 390 px widths.
- [x] Keyboard navigation and visible focus QA.
- [x] Reduced-motion QA.
- [x] Local paper/video resources and video controls work from the `/CRAVE/` base path.
- [ ] Run and archive a production Lighthouse report after deployment.

## Publication

- [x] Commit and push after public-media approval.
- [x] Confirm GitHub Pages source is GitHub Actions.
- [x] Verify `https://youngyang-gthb.github.io/CRAVE/` after deployment.

Initial public deployment: source commit `6ac18c1`, Actions run `36287135612`, 27 September 2026 UTC.
