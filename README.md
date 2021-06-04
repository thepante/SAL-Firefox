<p align="center">
  <a href="https://imgur.com/a/KnstI16" target="_blank">
    <img src="https://i.imgur.com/lnIsbhN.gif">
  </a>
</p>

## Sidebar Always Loaded
This script makes the sidebar to be always been ready to show its content, without the need to load it again each time we open the sidebar panel. The panel is just hiding, but without discard its content.

> Firefox default behavior is that each time you open the sidebar the content has to load again.

**It has two visual modes:**
- Float (default): the sidebar is floating over the tab content. Has options to customize it.
- [Classic](https://i.imgur.com/F1StTk6.gif): Firefox's default look. Tab content and sidebar content shares the window's space.

[**Check out a short demo video**](https://imgur.com/a/KnstI16)

* Any addon (eg: Tree Style Tab) doesn't need to load every time you open the sidebar.
* Bookmarks or history panels doesn't "lost position". You can search for something there, open a folder or whatever, then close the sidebar and open it again, you'll see that the panel is displaying the same content as when you closed it.

## Sidebar shortcut
It has the option to set a keybind to open and close the sidebar.

Within this functionality there's a plus: Auto close. If the shortcut functionality and auto close are enabled, you can press the modifier (<kbd>ctrl</kbd> by default) and click somewhere inside the sidebar content and it will close.

For example, that is useful for switching tabs: (I have tabs on the sidebar) I open it with the shortcut and keep pressing <kbd>ctrl</kbd> to click a tab to swith to. The sidebar closes and I'm in the clicked tab without having to press the shortcut key combo again.

## How to install it
**Note that it requires to have an user script loader:** [You can check the steps here](https://github.com/thepante/setup/wiki/How-to-use-Firefox-'userChrome'-scripts).
1. [**Download salf-userchrome.zip**](https://github.com/thepante/SAL-Firefox/releases/latest/download/salf-userchrome.zip)
2. Copy the file `salf.uc.js` to your profile's `chrome` folder
3. Restart Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. [Read more here](http://kb.mozillazine.org/index.php?title=UserChrome.css).
If you don't have it, just create that. It is located inside your Firefox profile folder:

> In your Firefox address bar type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'. That's where the `chrome` folder should be located at.

Restart Firefox: `about:profiles` → `Restart normally`

## Preferences
If float mode is not enabled, then it is activated the "classic" mode, which is the (visually) Firefox default behavior. It does not discard its contents but the UI preferences are handled by the browser itself. That's mean that the "float mode settings" of this script are just for that floating mode.

### Sidebar header
You can hide it by toggling the `hide_sidebar_header` constant to `true`. This just like the shortcut preferences, are not mode specific so it works on both classic and float modes.

### Shortcut preferences

| option      | type       | default value  | values
| :---        | ---:       | ---:           | :--- |
| enabled     | `Boolean`  | `false`        | `true`, `false`
| modifier    | `String`   | `ctrl`         | `ctrl`, `alt`, `shift`, `meta`
| key         | `String`   | `e`            | [any valid key](https://gist.github.com/thepante/2a72d4937f076dc6704ed0fbb3a4ca0c)
| auto_close  | `Boolean`  | `true`         | `true`, `false`

With those default values (if enabled) the sidebar toggles visibility by pressing <kbd>ctrl</kbd> + <kbd>e</kbd>.

### Float mode specific settings

| option       | type      | default value  | values
| :---         | ---:      | ---:           | :--- |
| enabled      | `Boolean` | `true`         | `true`, `false`
| width        | `String`  | `280px`        | CSS units (`px`, `em`, `%`, etc)
| height       | `String`  | `100%`         | CSS units (`px`, `em`, `%`, etc)
| position     | `String`  | `right`        | `left`, `right`
| shadow_intst | `Number`  | `0.12`         | `0` to `1`
| transparent* | `Boolean` | `false`        | `true`, `false`
| slide        | `Boolean` | `true`         | `true`, `false`
| fade         | `Boolean` | `true`         | `true`, `false`
| speed        | `Number`  | `0.1`          | seconds

Note that `fade` and `speed` preferences are specific for the sliding (`slide`) effect.

\* `Transparent` option has blurred background, which uses the [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) property:
> From version 70 this feature is behind `thelayout.css.backdrop-filter.enabled` and the `gfx.webrender.all` preferences (both needs to be set to `true`). To change those preferences, visit `about:config`.

---

## Note
**This script was made under Firefox version 89.0a1 (Nightly, 2021-04-08).**<br>
If in a previous versions doesn't work, [try this previous script](https://github.com/thepante/SAL-Firefox/releases/tag/2.5) instead (only classic mode; [readme](https://github.com/thepante/SAL-Firefox/tree/2.5)).


This is a rework of my other script [alfs](https://github.com/thepante/alfs-firefox). That one didn't work anymore in newer versions of Firefox, so I had to redo it. At first, this one didn't had the floating mode so hadn't sense to be in that repo with "floating" in its name.
