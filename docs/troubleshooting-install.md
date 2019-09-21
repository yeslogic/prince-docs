---
title: Troubleshooting
---

Troubleshooting
---------------

We work hard to make Prince work on multiple platforms (Windows, Linux, etc) and with multiple configurations. However things don't always work correctly the first time. You're very welcome to [contact us](contact.html) for support or visit our [forum](forum/forum.html). However if you are facing a common problem, you may be able to find an explanation and solution below.

### Missing glyphs or fonts

Symptom  

    prince: page 1: warning: no font for
          Aegean Numbers character U+10123,
          fallback to '?'

Explanation  
Prince tries to tell you which page the missing glyph appeared on, what type of character it was (eg. "Latin", "Greek", etc.) and what character it used as a fallback (usually '?').

Symptom  

    prince: internal error: no available fonts

Explanation  
However, if there are no available fonts on the system at all then it won't even be able to find the question mark glyph, and you get an internal error message.

Solution 1  
Install the [msttcorefonts](http://corefonts.sourceforge.net) package (see your operating system's documentation).

Solution 2  
Redefine the CSS generic font families to use different TrueType fonts by editing the `fonts.css` file in the Prince installation - see [Installation Layout](installation-layout.md#installation-layout), [Fonts](fonts.md#fonts) and [Redefining the generic font families](redefining-font-families.md#redefining-font-families).

Explanation  
This problem may be a symptom of the [Fontconfig](troubleshooting-install.md#fontconfig).

### Fontconfig

Symptom  

    Fontconfig error: Cannot load default config file

Explanation  
Prince uses the [Fontconfig](http://www.fontconfig.org) library on Linux systems to search for fonts. Fontconfig is installed as a standard component on most desktop Linux distributions such as Ubuntu and recent versions of Red Hat Linux.

Some older Linux distributions do not come with fontconfig and this may cause the above error. This error will usually be followed by errors relating to [Missing glyphs or fonts](troubleshooting-install.md#missing-fonts) that cannot be found due to the absence of Fontconfig.

Solution 1  
install Fontconfig (see your operating system's documentation).

Solution 2  
Redefine the CSS generic font families to use TrueType fonts that are specified directly by their filenames, avoiding the need to use Fontconfig at all. In extreme cases it might be advisable to disable system fonts completely with the [`--no-system-fonts`](command-line.md#cl-no-system-fonts) command-line option. See [Fonts](fonts.md#fonts) and [Redefining the generic font families](redefining-font-families.md#redefining-font-families).

### Shared library trouble

Symptom (Linux)  

    /usr/local/stow/prince-9/lib/prince/bin/prince: error while loading shared
    libraries: libtiff.so.4: cannot open shared object file: No such file or
    directory

Symptom (FreeBSD)  

    Shared object "libxml2.so.2" not found, required by "prince"

Explanation  
Prince uses some third-party shared libraries, these are used for things such as decoding TIFF, PNG or JPEG files and finding and loading fonts. If one or more of these shared libraries cannot be found on your system then Prince will not run. This can occur if Prince was installed from a tarball (see [Tarballs - Alpine Linux, FreeBSD and Generic Linux](installing.md#install-generic)).

Solution 1  
Install the missing library software. [Acknowledgments](acknowledgements.md#acknowledgments) provides a list of the libraries that Prince uses. It is recommended to install them through your operating system's package management tool, see your operating system's documentation for more information.

Solution 2  
Prince is just using the system shared object loader for most libraries, so the `LD_LIBRARY_PATH` environment variable might need to be edited, if you have installed these libraries in non-standard or different locations.

### `PATH` issues

Symptom  

    -bash: prince: command not found

Explanation  
The command interpreter (`bash`) does not know how to find the `prince` executable. It was not found in any of the locations specified by the `PATH` environment variable.

Solution  
Add Prince's `bin/` subdirectory to your `PATH` and ensure that these changes are saved for future shell sessions. If Prince is installed in `/opt/prince10`, then add `/opt/prince10/bin` to `PATH`. There are many different types of command interpreters (also called shells) and we cannot possibly document all of them. The appropriate command for borne-style shells (the most common type) is usually:


    export PATH=/opt/prince10/bin:$PATH

This should be added to your command interpreter's configuration. For more information see your operating system's documentation.

