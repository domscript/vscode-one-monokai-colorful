# One Monokai Colorful for Visual Studio Code

## Installation for Visual Studio Code

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `One Monokai Colorful`
3. Click **Install** to install it
4. Click **Reload** to reload the Code
5. From the menu bar click: Code > Preferences > Color Theme > **One Monokai Colorful**
6. Click **Install** to install it.
7. Code > Preferences > Color Theme > **One Monokai Colorful**
8. Optional: Use the recommended settings below for best experience

## Beautiful functionality for **NEWCOMERS**

One Monokai Colorful is a color scheme, customized user interface theme for Visual Studio Code. It has been designed primary for TypeScript, JavaScript, React(JSX, TSX). Carefully selected shades of colors are the foundation of an uncompromising, user interface. The goal of One Monokai Colorful is to let NEWCOMERS clearly see **things** in the code.

![One Monokai Colorful](https://github.com/domscript/vscode-one-monokai-colorful/blob/main/images/main-image.png)

## I've used

Extension [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

[FiraCode Font](https://github.com/tonsky/FiraCode)

1. Setup it.
2. In your `settings.json` add the key:

```json
  "editor.fontFamily": "FiraCode-Light",
  "editor.fontLigatures": true,
```

Alternative use Extension [FiraCode font](https://marketplace.visualstudio.com/items?itemName=SeyyedKhandon.firacode)

## Disable Italics

If you wish to disable italics, select **One Monokai Colorful No Italics** as your color theme.

## Bold Note

Out of the box You will have this:

![One Monokai Colorful](https://github.com/domscript/vscode-one-monokai-colorful/blob/main/images/main-image-demo.png)

By the way i recommend in your `settings.json` add the key:

```json
  "workbench.colorCustomizations": {
    "[One Monokai Colorful]": {
      "editor.background": "#282C33",
      "terminal.background": "#21252B"
    },
    "[One Monokai Colorful (No Italics)]": {
      "editor.background": "#282C33",
      "terminal.background": "#21252B"
    }
  },
```

These are my recommendations for these settings but you can use whatever colors you wish. You don't need them if you use customCss.

## If you want this badges

![Badges - Sunset over Forest](https://github.com/domscript/vscode-one-monokai-colorful/blob/main/images/badges.png)

You need to take a risk once in a while.

1. Install [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css), but before read [Disclaimer](https://github.com/be5invis/vscode-custom-css#disclaimer).

2. Add `customCss.css`

```css
/* Sweet sunset dots */
.monaco-workbench
  .activitybar
  > .content
  .monaco-action-bar
  .badge
  .badge-content,
.monaco-action-bar .badge .badge-content,
.monaco-count-badge {
  background: linear-gradient(
    to bottom right,
    #097ea5 20%,
    #6fc0e5,
    #e29169,
    #e6b96c
  );
}
```

3. Modify your `settings.json`, to do so add the key:

```json
  "vscode_custom_css.imports": [
    "file:///<User Folder Location>/customCss.css"
  ],
```

4. You can modify it even fewer:

![One Monokai Colorful](https://github.com/domscript/vscode-one-monokai-colorful/blob/main/images/main-image-gradient.png)

You can find some ideas in [css/customCss.css](https://github.com/domscript/vscode-one-monokai-colorful/blob/main/css/customCss.css) file.
