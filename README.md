# Customized Bibata

> [!NOTE]
> **This is a very trimmed down fork of [Bibata_Cursor](https://github.com/ful1e5/Bibata_Cursor)**

This cursor set is a masterpiece of cursors available on the internet,
hand-designed by [Abdulkaiz Khatri](https://twitter.com/ful1e5).

All cursor's SVG files are found in [svg](./svg) directory or you can also find them on
[Figma](https://www.figma.com/file/Y9RKZLXhSvaxpUzsKGJkp6/Bibata-Cursor?node-id=0%3A1).

---

![Bibata Classic](https://github.com/ful1e5/Bibata_Cursor/assets/24286590/04df0fbe-36fc-47bd-ad0a-c70eaea871f3)
![Bibata Ice](https://github.com/ful1e5/Bibata_Cursor/assets/24286590/56e7e67a-cf77-407c-871c-f663a93508f7)

---

## Variants:

-   Normal
    -   **Bibata Modern Classic:** Black and rounded edge bibata cursors.
    -   **Bibata Modern Ice:** White and rounded edge bibata cursors.

## Cursor Sizes

### Xcursor Sizes:

<kbd>16</kbd>
<kbd>20</kbd>
<kbd>22</kbd>
<kbd>24</kbd>
<kbd>28</kbd>
<kbd>32</kbd>
<kbd>40</kbd>
<kbd>48</kbd>
<kbd>56</kbd>
<kbd>64</kbd>
<kbd>72</kbd>
<kbd>80</kbd>
<kbd>88</kbd>
<kbd>96</kbd>

### Windows Cursor Size:

-   <kbd>16x16</kbd> - Small
-   <kbd>24x24</kbd> - Regular
-   <kbd>32x32</kbd> - Large
-   <kbd>48x48</kbd> - Extra Large

## Colors:

### Bibata Classic

-   Base Color - `#101821` (Black/Dark Blue)
-   Outline Color - `#FFFFFF` (White)
-   Watch Background Color - `#101821` (Black/Dark Blue)

### Bibata Ice

-   Base Color - `#FFFFFF` (White)
-   Outline Color - `#101821` (Black/Dark Blue)
-   Watch Background Color - `#FFFFFF` (White)

## Installing Bibata Cursor

#### Linux X11/Wayland

**Installation:**

```bash
tar -xvf Bibata.tar.gz                # extract `Bibata.tar.gz`
mv Bibata-* ~/.local/share/icons/     # Install to local users
sudo mv Bibata-* /usr/share/icons/    # Install to all users
```

**Uninstallation:**

```bash
rm ~/.local/share/icons/Bibata-*      # Remove from local users
sudo rm /usr/share/icons/Bibata-*     # Remove from all users
```

#### Windows

**Installation:**

1. Unzip `.zip` file
2. Open unziped directory in Explorer, and **right click** on `install.inf`.
3. Click 'Install' from the context menu, and authorize the modifications to your system.
4. Open Control Panel > Personalization and Appearance > Change mouse pointers,
   and select **Bibata Cursors**.
5. Click '**Apply**'.

**Uninstallation:**

Run the `uninstall.bat` script packed with the `.zip` archive

**OR** follow these steps:

1. Go to **Registry Editor** by typing the same in the _start search box_.
2. Expand `HKEY_CURRENT_USER` folder and expand `Control Panel` folder.
3. Go to `Cursors` folder and click on `Schemes` folder - all the available custom cursors that are
   installed will be listed here.
4. **Right Click** on the name of cursor file you want to uninstall; for eg.: _Bibata Cursors_ and
   click `Delete`.
5. Click '**yes**' when prompted.

## Build From Source

### Prerequisites

-   Python version 3.7 or higher
-   [clickgen](https://github.com/ful1e5/clickgen)>=2.1.8 (`pip install clickgen`)
-   [yarn](https://github.com/yarnpkg/yarn)

### Quick start

1. Install [build prerequisites](#prerequisites) on your system
2. `git clone https://github.com/KevinSilvester/bibata-cursor`
3. `cd bibata-cursor`
4. `yarn install`
5. `yarn generate`
6. See [Installing Bibata Cursor](#installing-bibata-cursor).

### Getting Started

Once you have the [build prerequisites](#prerequisites) installed, You can personalize colors,
customize sizes, change target platforms, and more. This process involves using external tools,
as this repository only contains SVG files and configuration for these tools:

-   [cbmp](https://github.com/ful1e5/cbmp): Used for customizing colors and generating PNG files.
-   [ctgen](https://github.com/ful1e5/clickgen): Used for customizing sizes and building XCursor and Windows Cursors.

You can refer to the README of each tool for more information on their command-line options.

#### Crafting Your Bibata

[https://bibata.live](https://bibata.live) simplifies the personalization of cursor themes, making it easy and accessible for users.
With bibata, you can enhance your cursor experience effortlessly. Best of all, it's available for free, allowing you to
enjoy a customized bibata cursor theme tailored to your preferences.

The process of creating custom cursor themes involves two main steps:

1. Rendering SVG files to PNG files.
2. Building cursor themes from PNG files.

#### Customize Colors

`cbmp` provides three options for changing colors:

1. `-bc`: Base color, which replaces the `#00FF00` color in the SVG.
2. `-oc`: Outlined color, which replaces the `#0000FF` color in the SVG.
3. `-wc` (optional): Watch Background color, which replaces the `#FF0000` color in the SVG.

```bash
npx cbmp [...] -bc '<hex>' -oc '<hex>' -wc '<hex>'
```

Alternatively, you can provide a JSON configuration file to render SVG files, which contains a sequence of `cbmp` commands:

```bash
npx cbmp render.json
```

#### Customize Sizes

##### Customize Windows Cursor size

To build Windows cursor with size `16`:

```bash
ctgen build.toml -s 16 -p windows -d 'bitmaps/Bibata-Modern-Ice' -n 'Bibata-Modern-Ice' -c 'White and rounded egde bibata cusors with size 16'
```

You can also customize output directory with `-o` option:

```bash
ctgen build.toml -s 16 -p windows -d 'bitmaps/Bibata-Modern-Ice' -o 'out' -n 'Bibata-Modern-Ice' -c 'White and rounded egde Bibata cursors with size 16'
```

##### Customize XCursor size

To build XCursor with size `16`:

```bash
ctgen build.toml -s 16 -p x11 -d 'bitmaps/Bibata-Modern-Ice' -n 'Bibata-Modern-Ice' -c 'White and rounded egde Bibata cursors with size 16'
```

You can also assign multiple sizes to `ctgen` for XCursors build:

```bash
ctgen build.toml -s 16 18 24 32 -p x11 -d 'bitmaps/Bibata-Modern-Ice' -n 'Bibata-Modern-Ice' -c 'Custom white and rounded egde Bibata cursors'
```

#### Examples

Lets generate Bibata-Modern with green and black colors:

```bash
npx cbmp -d 'svg/modern' -o 'bitmaps/Bibata-Hacker' -bc '#00FE00' -oc '#000000'
```

After rendering custom color you have to build cursor through `ctgen`:

```bash
ctgen build.toml -d 'bitmaps/Bibata-Hacker' -n 'Bibata-Hacker' -c 'Green and Black Bibata cursors.'
```

Afterwards, Generated theme can be found in the `themes` directory.

###### Bibata Gruvbox

```bash
npx cbmp -d 'svg/original' -o 'bitmaps/Bibata-Gruvbox' -bc '#282828' -oc '#EBDBB2' -wc '#000000'
ctgen build.toml -d 'bitmaps/Bibata-Gruvbox' -n 'Bibata-Gruvbox' -c 'Groovy Bibata cursors.'
```

###### Bibata Solarized Dark

```bash
npx cbmp -d 'svg/original' -o 'bitmaps/Bibata-Solarized-Dark' -bc '#002b36' -oc '#839496' -wc '#000000'
ctgen build.toml -d 'bitmaps/Bibata-Solarized-Dark' -n 'Bibata-Solarized-Dark' -c 'Solarized Dark Bibata cursors.'
```

###### Bibata Solarized Light

```bash
npx cbmp -d 'svg/original' -o 'bitmaps/Bibata-Solarized-Light' -bc '#839496' -oc '#002b36'
ctgen build.toml -d 'bitmaps/Bibata-Solarized-Light' -n 'Bibata-Solarized-Light' -c 'Solarized Light Bibata cursors.'
```

###### Bibata Dracula

```bash
npx cbmp -d 'svg/original' -o 'bitmaas/Bibata-Dracula' -bc '#282a36' -oc '#f8f8f2'
ctgen build.toml -d 'bitmaps/Bibata-Dracula' -n 'Bibata-Dracula' -c 'Dracula Bibata cursors.'
```
## Credit

[Wedge Loading Animation](https://loading.io/spinner/wedges/-pie-wedge-pizza-circle-round-rotate) ·
[Adwaita](https://github.com/GNOME/adwaita-icon-theme) ·
[Dmz](https://github.com/GalliumOS/dmz-cursor-theme) ·
[Yaru](https://github.com/ubuntu/yaru)
