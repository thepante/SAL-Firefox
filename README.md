&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Screenshot](https://i.imgur.com/F1StTk6.gif)

## Sidebar Always Loaded  
The idea for this is to have the sidebar always ready to show its content, without reloading it everytime we hit the sidebar button. This way we have always the content ready. Otherwise, the default Firefox behavior is that everytime you open the sidebar its content have to load, every time again!

For example when having this script: 
 * TreeStyleTab addon doesn't have to load everytime you open the sidebar. It is already showing the tabs.
 * Bookmarks panel doesn't "lost position". You can search for something there, close the sidebar and open it again to see the search its still there.

## How to get it
1. [**Download salf-userchrome-\*.zip**](https://github.com/thepante/SAL-Firefox/releases/latest)
2. Copy its files to your `chrome` folder
3. Reopen Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. [Read more here](http://kb.mozillazine.org/index.php?title=UserChrome.css).  
If you don't have it, just create that. It is located inside your Firefox profile folder:

> In your Firefox address bar type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'. That's where the `chrome` folder should be located at.

Restart Firefox. `about:profiles` → `Restart normally`

----
**What are those files?**
 * `userChrome.css` - This file is used to add your own CSS rules to the Firefox UI, here is used to inject the next file:
 * `userChrome.js`- This .js make load any other .uc.js and .uc.xul files presented in the folder.
 * `salf.uc.js` - This SAL-Firefox script itself.
 
 Firefox load `userChrome.css` that make load `userChrome.js` which lead to load `salf.uc.js`.
 
----
### The previous version

This is a re-do of my other script [alfs](https://github.com/thepante/alfs-firefox).
Why? The previous one didn't work anymore in newer versions of Firefox. So I had to do it again. At the moment it is more basic and without added options.

This is a more clean work, a better aproach, but it losts the floating style.

| option              | alfs | salf                                                                                                                    |  
| :---             | ---:    | :---                                                                                                                    |  
| position         | in prefs.uc.js | Firefox inbuilt option                                                                                        |  
| width            | fixed in prefs.uc.js  | Firefox inbuilt, adjustable    
| styles           | `floating` and `classic` | only `classic`
| pip for videos | yes - own PiP function | none (firefox now have inbuilt PiP)
| shortcut       | yes - custom       | none - pending to-do

**Note!**
This script was made under Firefox version 75.0a1 (2020-02-28).
