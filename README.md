&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Screenshot](https://i.imgur.com/F1StTk6.gif)

## Sidebar Always Loaded  
This script makes the sidebar to be always been ready to show its content, without the need to load it again each time we open the sidebar panel. The panel is just hiding, but without discard its content. Otherwise, the default Firefox behavior is that each time you open the sidebar is that the content has to load again.

For example when having this script:
* TreeStyleTab or any other addon, doesn't needs to load every time you open the sidebar. You open it, and there is the content of the addon being displayed without the need to re-load.
* Bookmarks or history panels doesn't "lost position". You can search for something there, open a folder, o whatever, then close the sidebar and open it again, you'll see that the panel is displaying the same content as when you closed it.

## How to get it
1. [**Download salf-userchrome-\*.zip**](https://github.com/thepante/SAL-Firefox/releases/latest)
2. Copy its files to your `chrome` folder
3. Reopen Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. [Read more here](http://kb.mozillazine.org/index.php?title=UserChrome.css).  
If you don't have it, just create that. It is located inside your Firefox profile folder:

> In your Firefox address bar type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'. That's where the `chrome` folder should be located at.

Restart Firefox. `about:profiles` → `Restart normally`

----
### The previous version

This is a re-do of my other script [alfs](https://github.com/thepante/alfs-firefox).
Why? The previous one didn't work anymore in newer versions of Firefox. So I had to do it again. At the moment this version only has the default style (no "floating mode"), nor require external settings, so you can adjust width and position within Firefox inbuilt options.

This is a lot cleaner work, a better aproach, but we lost the floating style.

| option              | alfs | salf                                                                                                                    |  
| :---             | ---:    | :---                                                                                                                    |  
| position         | in prefs.uc.js | Firefox inbuilt option                                                                                        |  
| width            | fixed in prefs.uc.js  | Firefox inbuilt, adjustable    
| styles           | `floating` and `classic` | only `classic`
| pip for videos | yes - own PiP function | none (firefox now have inbuilt PiP)
| shortcut       | yes - custom       | none - pending to-do

**Note!**
This script was made under Firefox version 75.0a1 (2020-02-28).
