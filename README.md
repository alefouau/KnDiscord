![KnD icon](/icon128.png)
# KnDiscord
A simple and lightweight chromium extension that allow you to set a background image in Discord's web version, remove the useless topbar and remove the laggy gradient blur effect in voice channels.

### 🖼️ Screenshot

![KnD screenshot](/screenshot.webp)

### 🤔 How to use

Click in the extension icon in your browser bar, click in Choose File, then select the image, and the image will be applied to the page's background instantly.
You can adjust the image's opacity using the slider, it will also be applied instantly.
It has options to remove the topbar and the blurred gradient in voice channels, check them and reload the page to see the changes.
All settings are applied every time you open Discord

### ❓ How to install
1. Go to the [Releases page](https://github.com/alefouau/KnDiscord/releases/), download the latest **Source Code (ZIP)**
2. Extract the folder to a **place where you won't delete it**
3. Go to your browser, click in the hamburguer menu > Extensions > Manage Extensions (or type `chrome://extensions` in the address bar)
3. Find an option called "Developer Options" and enable it. Some buttons will appear
4. Click in the "Load unpacked" button, find and select the folder you extracted
5. **If the extension appears in the list, the extension is installed successfully.**

### 🛡️ Extension permissions

- 'scripting': permission to inject some code into Discord, without this, it's impossible to change anything.
- 'storage' and 'unlimitedStorage': permission to restore settings.
NOTE: this extension has access to the discord.com/* page ONLY, this extension doesn't collect any data or personal information.

### ⚙️ How it works?

This extension turns every background element in the page into a transparent background, then create a image element behind the UI and pick up the selected image from the chromium storage API for extensions.
To disable topbar, some css are applied to hide the element, then, move the Inbox and help icons to the servers bar, and remove the topbar.
To disable the blurry gradient thing in the voice channel, a css is applied (visibility: hidden), hiding completely the gradient effect

### ❓ FAQ

Why do you not use the 'background-image' css property instead of creating a image element?
> I tried to use this property, but for some reason it makes the page more slower than creating a img element.

