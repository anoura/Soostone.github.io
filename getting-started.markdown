---
layout: page
title: Getting Started
permalink: /getting-started/
---

# Getting Started

## Installation

**napkin** app is available in 2 forms.

### As a live installer

Live installer is a self extracting and self contained SHELL archive,
which doesn't require docker nor nix environment. As for now live
installer
[repository](https://soostone-napkin-public.s3.us-east-1.amazonaws.com/index.html){:target="_blank" rel="noopener"}
has versions for Mac OS Big Sur and Linux based distros.


Find a page corresponding to your environment, copy installation
snipped and executed it locally.  Let's say you run Mac, the latest
build for MacOS Big Sur:

``` shell
curl -s https://soostone-napkin-public.s3.us-east-1.amazonaws.com/x86_64-MacOS-20.5.0/last-build/napkin-live-installer.sh \
 | bash -s --
```

The bundle is very fat and it contains all dependencies. If you need
access to `ghci` - supply file pattern for derivations with apps you
are interested in:


``` shell
curl -s https://soostone-napkin-public.s3.us-east-1.amazonaws.com/x86_64-MacOS-20.5.0/last-build/napkin-live-installer.sh \
 | bash -s -- -e '*-ghc-*'
```

ghc derivation contains **ghci-8.10.4**. Pathes to napkin and all ghc apps
are goin to be imported through `$PATH` variable.  Don't forget to start
new shell session to update `$PATH` variable or you can benefit from
`exec $SHELL` trick.

### Uninstallation

Napkin Live installer provides an uninstaller too.

Type `uninstall-` and use tab to auto-complete script doing napkin
uninstallation.

``` shell
$ uninstall-
$ uninstall-b82gj7f0igpw23sapafxifsrr0f52771-napkin-0.3.8.sh
```

## Docker version

Live installer is great, because it is very lightweight, but it is not
available on
[Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) yet. There
are tutorials on the Internet for setting up
[Nix](https://nixos.wiki/wiki/Nix) with
[WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) on
Windows.



## Hello world

Napkin has lots of interesting features and the toolset is constantlly
growing.  We have a bold roadmap for years!

Let's consider a killer feature, which has a pretty simple user
interface.

Detection unused
[CTE](https://en.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL#Common_table_expression)
columns. Some columns are introduced for debugging and development
purpose, but as time goes engineer can stop using them and forget,
meanwhile such column could contribute significantl to costs of
running queries.


For comprehensive list of use cases follow [here](/).
