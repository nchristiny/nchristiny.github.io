---
layout: post
title: "Let's Use Homebrew curl"
date:   2025-04-21
tags: 
    - macOS 
    - note to self
--- 
While macOS supplies a fine and dandy curl binary for Terminal, let's install an updated version managed by `brew`.

First let's see what is there.

```
$ which curl                                                                        
/usr/bin/curl

$ curl --version                                                                           
curl 8.7.1 (x86_64-apple-darwin23.0) libcurl/8.7.1 (SecureTransport) LibreSSL/3.3.6 zlib/1.2.12 nghttp2/1.61.0
Release-Date: 2024-03-27
Protocols: dict file ftp ftps gopher gophers http https imap imaps ipfs ipns ldap ldaps mqtt pop3 pop3s rtsp smb smbs smtp smtps telnet tftp
Features: alt-svc AsynchDNS GSS-API HSTS HTTP2 HTTPS-proxy IPv6 Kerberos Largefile libz MultiSSL NTLM SPNEGO SSL threadsafe UnixSockets
```

Not too shabby. To be frank I'd expected worse 😂 But now let's install curl via `brew`. Optionally add binary filepath to `$PATH` env var so `brew`'s curl is used instead of system's.

From curl docs[^fn-1]: 
```
$ brew install curl

$ echo 'export PATH="$(brew --prefix)/opt/curl/bin:$PATH"' >> ~/.zshrc

$ source ~/.zshrc
```
However if you are like me and use `.zshenv` for your env vars, use the following line in that file instead. (Or use `~/.zshev` as target of above `echo` command.)
```
export PATH="$(brew --prefix)/opt/curl/bin:$PATH"
```
After reloading/sourcing terminal window, we now see this.
```
$ which curl                                                                 
/opt/homebrew/opt/curl/bin/curl

$ curl --version    
curl 8.13.0 (aarch64-apple-darwin23.6.0) libcurl/8.13.0 OpenSSL/3.4.1 (SecureTransport) zlib/1.2.12 brotli/1.1.0 zstd/1.5.7 AppleIDN libssh2/1.11.1 nghttp2/1.65.0 librtmp/2.3
Release-Date: 2025-04-02
Protocols: dict file ftp ftps gopher gophers http https imap imaps ipfs ipns ldap ldaps mqtt pop3 pop3s rtmp rtsp scp sftp smb smbs smtp smtps telnet tftp ws wss
Features: alt-svc AsynchDNS brotli GSS-API HSTS HTTP2 HTTPS-proxy IDN IPv6 Kerberos Largefile libz MultiSSL NTLM SPNEGO SSL threadsafe TLS-SRP UnixSockets zstd
```

# Addendum: 
I had to revert the interpolation in `.zshenv` as it was not working as intended. Using `/opt/homebrew` hard coded instead of `$(brew --prefix)`.

¯\\_(ツ)_/¯

[^fn-1]: [everything curl - Install - macOS](https://everything.curl.dev/install/macos.html)