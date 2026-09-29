# Uplift Hackathon Tournament

## Numbered image system

To make adding photos easy, the website now uses numbered image names instead of fixed names such as `winner1.jpeg` or `Past.jpeg`.

Put your photos in the `images/` folder at the repository root using numbers only:

- `1.jpeg` or `1.jpg`
- `2.jpeg` or `2.jpg`
- `3.jpeg` or `3.jpg`
- `4.jpeg` or `4.jpg`
- and so on for as many photos as you have.

The website automatically tries `.jpeg` first and `.jpg` second. You do not need to edit the HTML when changing between those two extensions.

Suggested slots currently used by the main pages:

| Number | Suggested use |
|---|---|
| 1 | Main event / hero photo |
| 2 | Competition floor / event moment |
| 3 | Champion |
| 4 | Ssebunya Arafat |
| 5 | Other finalist / winner |
| 6 | Past tournament |
| 7 | Kenyan / international event |
| 8–30 | Extra gallery photos |

The gallery contains slots 1–30 and automatically hides slots whose files are not present. You can therefore add only the photos you actually have.

**Important:** GitHub Pages paths and filenames are case-sensitive, so keep the folder exactly `images` and use lowercase numbered filenames. GitHub recommends relative paths for repository images.

## Deploy

Keep `index.html` at the top level of the published site. The included GitHub Actions workflow deploys the site to GitHub Pages when changes are pushed to `main`.
