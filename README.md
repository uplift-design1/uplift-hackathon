# Uplift Hackathon Tournament

Responsive static website for GitHub Pages.

## Numbered image system
Put your real photos in the `images` folder using numbered names:
- `1.jpg` or `1.jpeg`
- `2.jpg` or `2.jpeg`
- `3.jpg` or `3.jpeg`
- and so on.

The site tries `.jpeg` and then `.jpg`, so you can mix both extensions. The number identifies the image; the extension does not matter.

If an image number is missing, that image is simply hidden instead of breaking the page.

## Important
The ZIP contains the website code and logo, but not personal/event photographs. Add your own photos to `images/` after extracting the ZIP.

## GitHub Pages
Upload the contents of this folder to the root of your repository and push to `main`. The included GitHub Actions workflow can deploy the site through GitHub Pages.


## v7 fix
The site no longer depends on JavaScript to reveal page content. All sections render immediately, including on mobile browsers. The hamburger menu has a dedicated mobile-open style.
