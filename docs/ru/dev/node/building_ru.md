# Building

## Introduction

This guide describes various ways to compile the PocketnetCore node or its individual components. By following the instructions in this document, you can obtain the following binary files and installation packages:

- `pocketcoind` - the node daemon, which:
  - Runs the node in headless mode
  - Is managed through the `pocketcoin.conf` configuration file
  - Provides an RPC API for external interaction

- `pocketcoin-qt` - the GUI client, which:
  - Includes the full functionality of the daemon
  - Provides a wallet interface
  - Contains developer tools (RPC console, peer management)
  - Allows configuring node parameters through a graphical interface

- `pocketcoin-cli` - a console utility for:
  - Interacting with the node via RPC
  - Managing the wallet
  - Retrieving statistics
  - Configuring logging

The build can be performed for individual components or as a complete package. Installation packages are supported:
- `NSIS` for Windows
- `DEB` for Debian/Ubuntu
- `DMG` for macOS

This guide describes two main approaches to building:
1. For development (using CMake)
2. For release versions (using GNU Make)

## Getting Started

### System Requirements

- Minimum 4 GB RAM (8 GB recommended)
- 50 GB free disk space
- Processor with 64-bit instruction support
- Operating system:
  - Linux (Ubuntu 22.04 or newer)
  - Windows 10/11
  - macOS 11 or newer

### Prerequisites

Before starting the build, make sure you have installed:

- Git
- C++ compiler (GCC 9+ for Linux, MSVC for Windows, Clang for macOS)
- CMake 3.20 or newer (for building with CMake)
- Python 3.8 or newer
- Administrator rights in the system to install dependencies

### Development Recommendations

- It is recommended to use Docker for development environment isolation
- Use version control system (git) to track changes
- For development, it is preferable to use CMake and modern IDEs (VSCode, CLion)
- When encountering dependency issues, check library versions in `depends/`

### Important Notes

- Build can take significant time (30-60 minutes depending on the system)
- When building for release, use tags from the main repository
- It is recommended to start with a debug build for development
- Document all code changes and update tests when necessary

## Usage Docker Container

[Docker](https://www.docker.com/) provides powerful tools for application development and deployment, offering the following advantages:

- Isolation of development environment from the host operating system
- Guaranteed environment reproducibility across different machines  
- Easy dependency management and configuration
- Quick switching between different environment versions
- Resource efficiency compared to virtual machines
- Convenient scaling and deployment

While using Docker is not mandatory for building the project, it helps avoid dependency issues during operation. Due to the minimum version requirement of `cmake v3.20+`, the Linux version in the Docker container must be at least `ubuntu:22.04`. This restriction does not apply when building with `make`.

## Clone Repository

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

### Installing System Requirements

#### Linux x64

```sh
apt-get update
apt-get install make automake cmake curl bzip2 g++-multilib pkg-config \
   python3 bison
```

#### Linux arm64

```sh
# TODO : implement
```

#### Windows x64

```sh
# TODO : implement
```

#### MacOS x64 (intel)

```sh
# TODO : implement
```

#### MacOS arm64 (mX)

```sh
# TODO : implement
```

### Building Dependencies

The `depends/` directory contains all necessary packages for building, which allow compiling code for different platforms.

```sh
cd depends/
make
cd ..
```

To build dependencies for another platform (cross-compilling), you need to pass the `HOST` argument to the `make` compiler specifying the target platform.

```sh
host_platform="x86_64-pc-linux-gnu"
make HOST=$host_platform
```

Common tested `host_platform` for cross compilation are:
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
cmake -DCMAKE_PREFIX_PATH=$PWD/../depends/$host_platform ..
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
CONFIG_SITE=$PWD/depends/$host_platform/share/config.site ./configure --prefix=/usr/local
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

## Usage VSCode

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
        "-DCMAKE_PREFIX_PATH=/full/path/project/depends/host_platform"
    ],
    "cmake.parallelJobs": 8,
    ...
}
```

## Usage JetBrains CLion

TODO : implement