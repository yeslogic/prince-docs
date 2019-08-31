---
title: Server Integration
---

Server Integration
==================

Prince can be used server-side to produce PDFs, invoked by a wrapper script. Some care needs to be used in the configuration to make it reliable and secure.

Security and performance
------------------------

When you control the input, Prince produces the expected output. But when you have no control on the input, as happens when running Prince on a server, it might be important to harden the installation in order to reduce a possible surface of vulnerability. Prince offers some options to aid the configuration, while other possibilities depend on the environment configuration on the server.

It might be a good precaution to run Prince with the command-line option [`--no-local-files`](doc-latest/doc-refs.html#cl-no-local-files) in order to exclude any unwanted access to the local file system. It is also a good idea *not* to enable [`--xml-external-entities`](doc-latest/doc-refs.html#cl-xxe) or [`--xinclude`](doc-latest/doc-refs.html#cl-xinclude) (they are not enabled by default).

A more comprehensive hardening practice is to run Prince in a chroot/jail/vms/container. Prince needs access to several libraries it depends on, as well as fonts and SSL certificates. To check direct dependencies, run the following command:

`ldd /usr/lib/prince/bin/prince`

When running multiple instances of Prince, it might be advisable to disable parallel rasterization with the command-line option [`--raster-threads=1`](doc-latest/doc-refs.html#cl-raster-threads) to improve throughput. Setting `GC_MARKERS=1` in the environment will do the same for garbage collection threads.

Prince Wrappers
---------------

Since different server configurations make use of different scripting languages, wrappers in those languages are necessary to invoke Prince. Wrappers for several of the most widely used scripting languages are available for download on the [Wrappers Download Page](wrappers.html).

A useful tool for writing custom wrappers in other languages are the .

For details on the usage of each of the wrappers, please consult the following chapters.
