---
title: Help
---

The Prince Installation Guide tries to be exhaustive in explaining how to install the application. However, there might always be something not answered in the documentation, or something not working as expected. There are a couple of ways to get help to solve the problems:

-   The [Troubleshooting](#troubleshooting) section addresses possible common issues after installing and starting to use Prince;
-   The [Frequently Asked Questions](#frequently-asked-questions) section provides answers to the most frequently asked questions about installation;
-   The [forum](//www.princexml.com/forum/) is an excellent place where to find an answer to an issue, or where to ask for help;
-   You can [contact us](//www.princexml.com/contact/) for support.

Troubleshooting
---------------

We work hard to make Prince work on multiple platforms (Windows, Linux, etc) and with multiple configurations. However things don't always work correctly the first time. You're very welcome to [contact us](contact.html) for support or visit our [forum](//www.princexml.com/forum/). However if you are facing a common problem, you may be able to find an explanation and solution below.

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
Redefine the CSS generic font families to use different TrueType fonts by editing the `fonts.css` file in the Prince installation - see [Installation Layout](installing.md#installation-layout), [Fonts](styling.md#fonts) and [Redefining the generic font families](styling.md#redefining-the-generic-font-families).

Explanation  
This problem may be a symptom of the [Fontconfig](#fontconfig).

### Fontconfig

Symptom  

    Fontconfig error: Cannot load default config file

Explanation  
Prince uses the [Fontconfig](http://www.fontconfig.org) library on Linux systems to search for fonts. Fontconfig is installed as a standard component on most desktop Linux distributions such as Ubuntu and recent versions of Red Hat Linux.

Some older Linux distributions do not come with fontconfig and this may cause the above error. This error will usually be followed by errors relating to [Missing glyphs or fonts](#missing-glyphs-or-fonts) that cannot be found due to the absence of Fontconfig.

Solution 1  
install Fontconfig (see your operating system's documentation).

Solution 2  
Redefine the CSS generic font families to use TrueType fonts that are specified directly by their filenames, avoiding the need to use Fontconfig at all. In extreme cases it might be advisable to disable system fonts completely with the [`--no-system-fonts`](command-line.md#cl-no-system-fonts) command-line option. See [Fonts](styling.md#fonts) and [Redefining the generic font families](styling.md#redefining-the-generic-font-families).

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

### Prince cannot be run on MacOS Catalina.

Symptom  

    > # "prince" cannot be opened because the developer cannot be verified.
    > macOS cannot verify that this app is free from malware.

Explanation  
Gatekeeper triggers a system alert when trying to run the Prince executable.

Solution  
In order to run Prince in a version lower than 13.6, you need to open the Security and Privacy preference pane in System Preferences, select the General tab, and click "Allow Anyway".

Starting with Prince 13.6, the Prince binaries are signed and do not trigger warnings.

Alternatively, you can run the following commands from Terminal to first remove any quarantine attribute applied by Safari when downloading `prince`, and then manually add a SecAssessment system policy label to the executable:

```
$ xattr -d -r com.apple.quarantine /usr/local/bin/prince
$ spctl --add --label "Approved" /usr/local/bin/prince
```

Doing this will change the system alert to a system prompt to confirm running the executable.  For more information and possible further workarounds see also [this forum thread](https://www.princexml.com/forum/topic/4255/macos-catalina-prince-cannot-be-opened-because-the-developer).


Frequently Asked Questions
--------------------------

<dl class="faq">
  <dt id="faq-win64"><p>Why does Prince on 64-bit Windows install
  into the 32-bit compatibility directory <code>%ProgramFiles(x86)%</code>?
  <a href="#faq-win64" class="self-link"></a></p></dt>
  <dd><p>The Prince GUI is still a 32-bit program, but the formatting engine
  is 64-bit.</p></dd>

  <dt id="faq-win-no-ui"><p>How can I run Prince on Windows without showing the UI?
  <a href="#faq-win-no-ui" class="self-link"></a></p></dt>
  <dd><p>On Linux, you typically run Prince with the following command:</p>
  <pre><code class="hljs">    prince file.xml -o file.pdf</code></pre>
  <p>On Windows, you replace the name of the executable with
  <code>Prince\engine\bin\prince.exe</code> in the installation directory
  (see <a href="installing#windows-installation-layout">Windows installation layout</a>),
  which is the command-line program. See also <a href="command-line#command-line">Command-line Reference</a>.</p>
  <pre><code class="hljs">    "C:\Program Files (x86)\Prince\engine\bin\prince.exe" file.xml -o file.pdf</code></pre></dd>

  <dt id="faq-install-cloud"><p>Can I install Prince on cloud services or
  containers (Azure, AWS, Docker)? <a href="#faq-install-cloud" class="self-link"></a></p></dt>
  <dd><p>Prince can be installed on the <a href="installing#installing">supported operating systems</a> -
  also when they are running in cloud or container services. On Linux, some
  environments might not provide for all dependencies - you can address this
  by either trying to install the Generic Linux Prince package (see
  <a href="installing#install-generic">Tarballs - Alpine Linux, FreeBSD and Generic Linux</a>),
  or by trying to install the missing dependencies.</p>
  <p>Our chapter on <a href="server-integration#prince-in-cloud-computing">Prince In Cloud Computing</a>
  details installation instructions for Prince on <a href="server-integration#prince-docker-image">Docker</a>,
  <a href="server-integration#prince-on-microsoft-azure">Microsoft Azure</a>,
  <a href="server-integration#prince-on-aws-lambda">AWS Lambda</a> and
  <a href="server-integration#prince-on-ec2">AWS EC2</a>.</p>
  <p>See also <a href="https://www.princexml.com/forum/topic/2094/silent-installation-on-windows#20332">this forum post</a>
  for a description of an installation on Azure.</p></dd>

  <dt id="faq-install-books"><p>How do I install Prince for Books?
  <a href="#faq-install-books" class="self-link"></a></p></dt>
  <dd><p><a href="prince-for-books#pfb">Prince for Books</a> is available
  in package bundles only - to install it, the files need to be copied into
  place (Windows), or an installation script needs to be run (on Linux and MacOS X).
  It can be installed without problem alongside a normal Prince installation -
  the executable to run is called <code>prince-books</code>.</p></dd>

  <dt id="faq-install-wrappers"><p>How do I install the Prince wrappers?
  <a href="#faq-install-wrappers" class="self-link"></a></p></dt>
  <dd><p>The <a href="/doc/server-integration/#prince-wrappers">Prince Wrappers</a> come in
  different languages, and each one has a different installation procedure.
  Mostly they are explained in the documentation for each of the
  <a href="/doc/server-integration/#prince-wrappers">Prince Wrappers</a>. The short principle
  is that the wrapper files need to be placed in a location from which they can
  run - this may slightly vary depending on the hosting Operating System.</p></dd>
</dl>

