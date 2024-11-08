# Building

## Introduction

The Bastyon blockchain node is a Bitcoin fork, so most solutions are identical to the Bitcoin node building process. This package can be divided into key executable files:
- `pocketcoind`: node daemon, allowing you to run the node in terminal or docker container. Node management in this variant is implemented through the `pocketcoin.conf` configuration file or HTTP (RPC) interface.
- `pocketcoin-qt`: graphical variant that includes all daemon functionality. The interface is based on a wallet with all its inherent functions. The interface also includes tools such as RPC console, peer management panel, node settings, etc.
- `pocketcoin-cli`: console utility for managing the node through RPC interface, allows interaction with the wallet, getting statistics or configuring logging levels and categories.

Each of these executables can be built either separately or as a whole, packaged in an installation package (NSIS package for Windows, DEB archive for Debian/Ubuntu, DMG for MacOS). The build method depends on the developer's personal preferences: this guide presents two main methods (for development purposes and release versions).

## Getting Started

Administrative rights to your OS may be required for successful building to install the necessary software. It is also assumed that the user has terminal skills (package installation and file editing). Minimal knowledge about the structure and purpose of files when building C++ projects is desirable. Also, to avoid conflicts, it is recommended to use Docker for building and running the node.

## Building in Docker Container

Docker provides extensive platform choice capabilities and isolation from the main operating system. Using docker containers is not mandatory but helps avoid dependency problems during operation. Due to the minimum version requirement of `cmake v3.20+`, the Linux version in the docker container must be at least `ubuntu:22.04`. This restriction does not apply when building with `make`.

## Repository Download

Download the project from the official repository (git installation required). The main branch is valid for working in the Main network but may include commits that belong to the BETA stage. It is recommended to switch the repository to the latest tag.

```sh
apt-get update
apt-get install git
git clone https://github.com/pocketnetteam/pocketnet.core
cd pocketnet.core/
# Checkout latest stable tag
git checkout $(git describe --tags "$(git rev-list --tags --max-count=1)")
```

## Preparing Dependency Packages

The next stage involves preparing the environment and installing the minimum set of packages needed to start project compilation. Depending on the target OS, the set of additional packages and process varies slightly.

### Linux x64

```sh
apt-get update
apt-get install make automake cmake curl bzip2 g++-multilib pkg-config python3 bison \
   libtool \
   binutils-gold bsdmainutils   patch 
```

### Linux arm64

```sh
# TODO : implement
```

### Windows x64

```sh
# TODO : implement
```

### MacOS x64 (intel)

```sh
# TODO : implement
```

### MacOS arm64 (mX)

```sh
# TODO : implement
```

The `depends/` directory contains all necessary packages for building, which allow compiling code for different platforms.

```sh
cd depends/
make
cd ..
```

To build dependencies for another platform (cross-compilling), you need to pass the `HOST` argument to the `make` compiler specifying the target platform.

```sh
make HOST=host-platform-triplet
```

Common tested `host-platform-triplets` for cross compilation are:
- `x86_64-pc-linux-gnu` for Linux (64-bit)
- `x86_64-w64-mingw32` for Windows (64-bit)
- `x86_64-apple-darwin16` for macOS (64-bit)
- `arm64-apple-darwin` for ARM macOS (64-bit)


## Configuration and Compilation

### `cmake`

:::tip
This type of build is in testing phase and not intended for production use.
:::

```sh
mkdir build && cd build
cmake -DCMAKE_PREFIX_PATH=$PWD/../depends/host-platform-triplets ..
cmake --build . --config Debug -j 8
```

The following files will be compiled as a result:
```
└─ build/
   └─ src/
      └─ qt/
      │  └─ pocketcoin-qt
      ├─ pocketcoind
      ├─ pocketcoin-cli
```

### `make`

The main method for building executables and installation packages.

```sh
./autogen.sh
CONFIG_SITE=$PWD/depends/host-platform-triplets/share/config.site ./configure --prefix=/usr/local
make
```

The following files will be compiled as a result:
```
└─ src/
   └─ qt/
   │  └─ pocketcoin-qt
   ├─ pocketcoind
   └─ pocketcoin-cli
```

### `make deploy`

Final versions (Releases) are compiled using `make`, installation packages are built using `make deploy`:

```sh
make deploy
```

The following files will be compiled as a result:
```
└─ src/
   ├─ pocketnetcore_X.Y.Z_linux_x64_setup.deb
   └─ pocketnetcore_X.Y.Z_linux_x64.tar.gz
```

:::tip
The version of the final files is determined by the `./share/version.sh` script and depends on the current GIT commit. For releases, tags in the format `X.Y.Z` are used.
:::

## VSCode Setup

When using the `CMake` extension, you can manage project configuration and compilation using VSCode tools. To do this, you need to create a configuration file `.vscode/settings.json` and specify the full path to the dependencies directory:

```sh
mkdir .vscode
touch .vscode/settings.json
```

CMake control parameters in `.vscode/settings.json` file:

```json
{
   ...
    "cmake.configureArgs": [
        "-DCMAKE_PREFIX_PATH={FULL_PATH_PROJECT}/depends/x86_64-pc-linux-gnu"
    ],
    "cmake.parallelJobs": 8,
    ...
}
```