---
title: Prince Networking
---

Prince Networking
=================

Prince can process local files or fetch them from remote locations. To do this, a full URL needs to be provided, including the protocol.

`prince http://example.com/path/file.html` -o `out.pdf`

Authentication
--------------

If authentication is required for the URL, the credentials can be passed by means of the [`--auth-user`](doc-latest/doc-refs.html#cl-auth-user) and [`--auth-password`](doc-latest/doc-refs.html#cl-auth-password) command-line options. A more cautious way is to add the [`--auth-server`](doc-latest/doc-refs.html#cl-auth-server) option, which sends username and password credentials to the specified server only - the default is to send them to any server which challenges for authentication. The option [`--auth-scheme`](doc-latest/doc-refs.html#cl-auth-scheme) sends username and password credentials only for requests with the given scheme, either HTTP or HTTPS, while [`--auth-method`](doc-latest/doc-refs.html#cl-auth-method) specifies a comma separated list of HTTP authentication methods to enable. Valid entries are: `basic`, `digest`, `ntlm` and `negotiate`.

A shorthand command-line option for authentication is [`--auth`](doc-latest/doc-refs.html#cl-auth), which specifies a URL with credentials for HTTP authentication: `[SCHEME:]//USER:PASS@HOST[:PORT]`. Unlike the preceding options, it may be used multiple times. The username and password must be percent-encoded.

The advanced command-line option [`--no-auth-preemptive`](doc-latest/doc-refs.html#cl-no-auth-preemptive) instructs Prince not to send credentials to named servers until an authentication challenge is received. When multiple authentication methods are enabled, an initial request may be required to discover the methods supported by the remote site.

Cookies
-------

If cookies are required, the [`--cookie`](doc-latest/doc-refs.html#cl-cookie) command-line option can be used to set a value for the Set-Cookie HTTP header value. The option may be used multiple times. Alternatively, the option [`--cookiejar`](doc-latest/doc-refs.html#cl-cookiejar) specifies a file containing HTTP cookies.

SSL
---

The command-line option [`--ssl-cacert`](doc-latest/doc-refs.html#cl-ssl-cacert) specifies an SSL certificate file, while the option [`--ssl-capath`](doc-latest/doc-refs.html#cl-ssl-capath) is used to specify an SSL certificate directory.

The command-line option [`--ssl-version`](doc-latest/doc-refs.html#cl-ssl-version) sets the minimum version of SSL to allow. It may be one of: `default`, `tlsv1`, `tlsv1.0`, `tlsv1.1` or `tlsv1.2`. The value `default` lets libcurl choose. The option [`--insecure`](doc-latest/doc-refs.html#cl-insecure) disables SSL verification. Please note that using this option is not recommended!

Prince makes use of the libcurl library to process network locations - see . Please note that command-line options are passed to curl as-is. On some systems curl might use a library other than OpenSSL to handle SSL - in those cases the SSL-related command-line options might behave in a slightly different way. In case of doubt, please check your own curl documentation.

### Client Certificates

Client certificates are supported on Linux with several command-line options. The [`--ssl-cert`](doc-latest/doc-refs.html#cl-ssl-cert) option specifies an SSL client certificate file, while the [`--ssl-cert-type`](doc-latest/doc-refs.html#cl-ssl-cert-type) option defines the SSL client certificate file type (PEM, DER) - the default is PEM. The option [`--ssl-key`](doc-latest/doc-refs.html#cl-ssl-key) specifies an SSL private key file and [`--ssl-key-type`](doc-latest/doc-refs.html#cl-ssl-key-type) is used to define the SSL private key file type (PEM, DER) - the default is PEM. Last but not least, [`--ssl-key-password`](doc-latest/doc-refs.html#cl-ssl-key-password) indicates the passphrase for the private key.

On MacOS, the command-line option [`--ssl-cert`](doc-latest/doc-refs.html#cl-ssl-cert) specifies a PKCS\#12 file containing a client certificate and private key. The options [`--ssl-cert-type`](doc-latest/doc-refs.html#cl-ssl-cert-type), [`--ssl-key`](doc-latest/doc-refs.html#cl-ssl-key) and [`--ssl-key-password`](doc-latest/doc-refs.html#cl-ssl-key-password) are not available.

Client certificates are not supported on Windows.

Miscellaneous
-------------

If an HTTP proxy server is required, it can be specified with the [`--http-proxy`](doc-latest/doc-refs.html#cl-http-proxy) command-line option.

The option [`--http-timeout`](doc-latest/doc-refs.html#cl-http-timeout) can be used to define the HTTP timeout in seconds, which can be useful for slow servers.

Prince can also disable downloading multiple HTTP resources at once with the [`--no-parallel-downloads`](doc-latest/doc-refs.html#cl-no-parallel-downloads) command-line option.
