# Website release checklist

## Content

- [ ] Re-run `npm run verify` after any result or media change.
- [ ] Confirm paper PDF is the intended public, author-visible version.
- [ ] Confirm all media clips are approved for public release.
- [ ] Replace `Preprint` BibTeX metadata when an arXiv identifier is available.
- [ ] Verify the OpenReview link is public before announcing the site.

## Privacy and anonymous review

- [x] No analytics or tracking scripts.
- [x] No remote fonts, YouTube, Vimeo or third-party embeds.
- [x] Video derivatives remove source metadata.
- [x] Three H.264 video derivatives total less than 2.5 MB; no clip exceeds 1.5 MB.
- [ ] Do not submit this author-identifiable GitHub Pages URL as an anonymous ICLR project link.

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

- [ ] Commit and push only after public-media approval.
- [ ] Confirm GitHub Pages source is GitHub Actions.
- [ ] Verify `https://youngyang-gthb.github.io/CRAVE/` after deployment.
