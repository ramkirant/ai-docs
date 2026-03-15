# Prerequisites to learn

## VS Code Shortcuts

| Action | Shortcut |
| ------ | -------- |
| Open Terminal | Ctrl + Shift + ` |
| Open VS Code from command prompt | code . |

## Conda Commands 

| Action | Command |
|--------|---------|
| Create an environment by path| conda create -p envname python=pythonversion |
| Create an environment by name| conda create -n envname python=pythonversion |
| Activate an environment | conda activate .\envname |
| Deactivate an environment | conda deactivate |
| List all the environments | conda env list |
| Install package by package name | conda install package1 , package2 |
| Install packages from a file | conda install --file requirements.txt |
| Install a package from a particular channel (conda-forge) | conda install -c conda-forge numpy |
| List all the packages in an environment (environment is active) | conda list |
| List all the packages in an environment (environment is not active) | conda list -p pathtoenv |
| Uninstall packages | conda remove package |
| Update packages | conda update package |
| Remove an environment | conda env remove -p pathtoenv

## Difference between pip install and conda install
| Item | pip install | conda install |
|------|-------------|---------------|
| Package Source | Installs packages from Python Package Index (PyPI) by default | Installs packages from Conda channels (default is defaults, often people add conda-forge)
| Package Type | Focused on Python only Packages | Packages can be Python or Non-Python |
| Dependency Management | Resolves dependencies only within python packages. If two packages require incompatible versions of the same dependency, pip may install conflicting ones creating a dependency hell | Has a more powerful dependency resolver. Manages both python and non-python dependencies. |
| Installation Scope | Always installs into the current Python environment | Works at environment level. We can specify the env to install the package with conda install -n/-p packagename |
| Performance | Downloads source distributions (sdist) and compiles if wheels are not available. Can be slow, especially for heavy packages like scipy | Distributes precompiled binaries. Must faster to install |

## Best Practices to select between pip install and conda install
- Use conda install whenever possible
- Use pip install only when a package is not available on conda channels
- Use pip install when we are not using conda at all 
- Use pip install when we want the latest releases that are not available on conda channels

## What is Dependency Hell

Dependency Hell happens when installing one package breaks another package because they require incompatible versions of the same dependency. Pip always install one package at a time and it doesn't solve for the whole dependency tree before installing. Hence we may end up with a mix of packages that won't work together.

### How to avoid dependency hell with pip
- If possible, use conda. 
- Use virtual environments and isolate dependencies as per project. 
- Install from a requirements.txt file with pinned versions

### How conda avoids dependency hell
- When we install packages using conda install, conda doesn't install the packages one by one. 
- Instead, it looks at the dependency tree of all requested packages, plus what's already installed in the environment. 
- It then tries to find a set of versions that work together. 
- If it can't, it refuses to install and gives us a conflict error instead of silently breaking things. 

## Channels
A channel is a package repository (a URL) that conda searches when installing a package. 
- By default, conda looks at the defaults channel (maintained by Anaconda)
- To pick a particular channel, we need to add the -c parameter. If we say conda install -c conda-forge numpy, it will install the numpy package from conda-forge.

### Channel priority
If we have multiple channels configured, conda will look at our channel list (in order of priority) and try to find a set of dependencies that work together. If channel_priority is set to strict, conda will only install from the highest priority channel.

## Conda Forge
- conda-forge is a community-led collection of conda packages. 
- It is not maintained by Anaconda. Instead, thousands of contributors keep it up-to-date. 
- All packages are built automatically using a continuous integration CI system and made available through the conda-forge channel. 
- It contains more packages compared to the defaults conda channel. 
- conda-forge packages are often updated much sooner than the defaults channel. If we want the latest version of something like pandas, scipy or pytorch, conda-forge usually has it first.
- It supports Cross-platform consistency. Packages are built for Linux, Mac and Windows in a standardized way. It helps ensure our environment works the same across machines.