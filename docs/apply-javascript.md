Applying JavaScript in Prince
-----------------------------

Prince is not running JavaScript by default - document scripts can be enabled by specifying the [`--javascript`](doc-latest/doc-refs.html#cl-javascript) option on the command-line. Prince will then execute all JavaScript found in the HTML `script` elements in the input document.

External scripts can be run by specifying one or more [`--script=FILE`](doc-latest/doc-refs.html#cl-script) options on the command-line. These scripts will always be executed, regardless of whether document scripts have been enabled or not.

JavaScript functions can also be called from CSS generated content, by using the `prince-script()` syntax for referencing . Please note that scripts contained `prince-script()` are treated as document scripts, and hence need to be explicitly enabled.
