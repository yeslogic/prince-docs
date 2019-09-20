---
title: Frequently Asked Questions
---

Frequently Asked Questions
--------------------------

Why does Prince on 64-bit Windows install into the 32-bit compatibility directory `%ProgramFiles(x86)%`? <a href="#faq-install-dir" class="self-link"></a>

The Prince GUI is still a 32-bit program, but the formatting engine is 64-bit.

How can I run Prince on Windows without showing the UI? <a href="#faq-no-ui" class="self-link"></a>

On Linux, you typically run Prince with the following command:


    prince file.xml -o file.pdf

On Windows, you replace the name of the executable with `Prince\engine\bin\prince.exe` in the installation directory (see [Windows installation layout](installation-layout.html#windows-layout)), which is the command-line program. See also [Command-line Reference](doc-refs.html#command-line).


    "C:\Program Files (x86)\Prince\engine\bin\prince.exe" file.xml -o file.pdf

Can I install Prince on cloud services or containers (Azure, AWS, Docker)? <a href="#faq-install-cloud" class="self-link"></a>

Prince can be installed on the [supported operating systems](installing.html#installing) - also when they are running in cloud or container services. On Linux, some environments might not provide for all dependencies - you can address this by either trying to install the Generic Linux Prince package (see [Tarballs - Alpine Linux, FreeBSD and Generic Linux](installing.html#install-generic)), or by trying to install the missing dependencies.

See [this forum post](https://www.princexml.com/forum/topic/2094/silent-installation-on-windows#20332) for a description of an installation on Azure.

How do I install Prince for Books? <a href="#faq-install-books" class="self-link"></a>

[Prince for Books](prince-for-books.html#pfb) is available in package bundles only - to install it, the files need to be copied into place (Windows), or an installation script needs to be run (on Linux and MacOS X). It can be installed without problem alongside a normal Prince installation - the executable to run is called `prince-books`.

How do I install the Prince wrappers? <a href="#faq-install-wrappers" class="self-link"></a>

The [Prince Wrappers](server-integration.html#wrappers) come in different languages, and each one has a different installation procedure. Mostly they are explained in the documentation for each of the [Prince Wrappers](server-integration.html#wrappers). The short principle is that the wrapper files need to be placed in a location from which they can run - this may slightly vary depending on the hosting Operating System.

