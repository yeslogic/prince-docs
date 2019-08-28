Installation Layout
-------------------

This section details where Prince installs its files in the various supported operating systems.

### Windows installation layout

Prince installs its files to `%ProgramFiles%` on 32-bit Windows, and to `%ProgramFiles(x86)%` on 64-bit Windows.

-   `prince-gui.exe` is the Prince GUI
-   the subdirectory `engine` contains all resource files

On 64-bit Windows, the Prince GUI is a 32-bit program, but the formatting engine is 64-bit.

In the subfolder `engine` are all resource files:

| Folder    | Function                                                                        |
|-----------|---------------------------------------------------------------------------------|
| `bin`     | The Prince core (`prince.exe`)                                                  |
| `contrib` | Licenses for open source libraries used by Prince                               |
| `dict`    | LibThai dictionary, used by Prince to handle word breaking in the Thai language |
| `dtd`     | Document Type Definitions (DTDs) for XML languages understood by Prince         |
| `etc`     | The CA certificate bundle used for retrieving documents over HTTPS              |
| `hyph`    | The hyphenation dictionaries for common languages                               |
| `icc`     | ICC color profiles                                                              |
| `lib`     | Shared libraries required by Prince                                             |
| `license` | The Prince license file                                                         |
| `math`    | MathML resource files                                                           |
| `style`   | The default CSS style sheets                                                    |

### MacOS X installation layout

Prince installs its files by default to `/usr/local` on MacOS X:

-   `/usr/local/bin/prince` is the shell script
-   `/usr/local/lib/prince/` contains all resource files

In the resource directory are all resource files:

| Folder    | Function                                                                                          |
|-----------|---------------------------------------------------------------------------------------------------|
| `bin`     | The Prince core (the `prince` binary executable) and (as of Prince 11.3) the `princedebug` script |
| `dict`    | LibThai dictionary, used by Prince to handle word breaking in the Thai language                   |
| `dtd`     | Document Type Definitions (DTDs) for XML languages understood by Prince                           |
| `etc`     | The CA certificate bundle used for retrieving documents over HTTPS                                |
| `hyph`    | The hyphenation dictionaries for common languages                                                 |
| `icc`     | ICC color profiles                                                                                |
| `lib`     | Shared libraries required by Prince                                                               |
| `license` | The Prince license file                                                                           |
| `math`    | MathML resource files                                                                             |
| `style`   | The default CSS style sheets                                                                      |

### Linux and FreeBSD installation layout

Prince installs its files by default to `/usr` on Linux and FreeBSD:

-   `/usr/bin/prince` is the shell script
-   `/usr/lib/prince/` contains all resource files

In the resource directory are all resource files:

| Folder    | Function                                                                                          |
|-----------|---------------------------------------------------------------------------------------------------|
| `bin`     | The Prince core (the `prince` binary executable) and (as of Prince 11.3) the `princedebug` script |
| `dict`    | LibThai dictionary, used by Prince to handle word breaking in the Thai language                   |
| `dtd`     | Document Type Definitions (DTDs) for XML languages understood by Prince                           |
| `etc`     | The CA certificate bundle used for retrieving documents over HTTPS                                |
| `hyph`    | The hyphenation dictionaries for common languages                                                 |
| `icc`     | ICC color profiles                                                                                |
| `lib`     | Shared libraries required by Prince                                                               |
| `license` | The Prince license file                                                                           |
| `math`    | MathML resource files                                                                             |
| `style`   | The default CSS style sheets                                                                      |


