# Contributing to Bastyon

The Bastyon project operates an open contributor model where anyone is welcome to contribute towards development in the form of peer review, testing, and patches. This document explains the practical process and guidelines for contributing.

First, in terms of structure, there is no particular concept of "Bastyon developers" in the sense of privileged people. Open source often naturally revolves around a meritocracy where contributors earn trust from the developer community over time. Nevertheless, some hierarchy is necessary for practical purposes. As such, there are repository maintainers who are responsible for merging pull requests, the release cycle, and moderation.

## Getting Started

New contributors are very welcome and needed.

Reviewing and testing is highly valued and the most effective way you can contribute as a new contributor. It also will teach you much more about the code and process than opening pull requests. Please refer to the [peer review](#peer-review) section below.

Before you start contributing, familiarize yourself with the Bastyon build system and tests:
- Browser-based application architecture
- Proxy server SSL handling
- Blockchain node operation
- Content validation and consensus mechanisms

## Contributor Workflow

The codebase is maintained using the "contributor workflow" where everyone without exception contributes patch proposals using "pull requests" (PRs). This facilitates social contribution, easy testing, and peer review.

To contribute a patch, the workflow is as follows:

1. Fork repository
2. Create topic branch
3. Commit patches

### Component Repositories

For different types of contributions, use the appropriate repository:
- Frontend changes: browser-based Bastyon app repository
- Proxy server changes: SSL proxy repository
- Node changes: blockchain node repository
- Core protocol changes: main protocol repository

### Committing Patches

In general, commits should be atomic and diffs should be easy to read. For this reason, do not mix any formatting fixes or code moves with actual code changes.

Commit messages should be verbose by default consisting of:
- Short subject line (50 chars max)
- Blank line
- Detailed explanatory text

Example:
```
consensus: Update content validation rules for multimedia

This commit implements new validation rules for multimedia content
in the blockchain nodes. The changes include:
- Enhanced format verification
- Size limit enforcement
- Metadata validation
```

### Creating the Pull Request

The title of the pull request should be prefixed by the component or area that the pull request affects. Valid areas are:

- `consensus` for changes to consensus critical code
- `frontend` for changes to the browser app
- `desktop` for changes to the desktop app
- `ios` for changes to the iOS app
- `andrid` for changes to the android app
- `messenger` for changes to messenger
- `node` for changes to blockchain nodes
- `protocol` for changes to the network protocol
- `doc` for changes to documentation
- `test` for changes to test suite
- `build` for build system changes
- `sraking` for changes to staking protocol

### Content Flow Considerations

When making changes, consider the content flow architecture:
1. Browser-based content creation
2. HTTPS transmission to proxy
3. Proxy processing
4. Node validation
5. Network consensus
6. Confirmation flow

## Peer Review

Anyone may participate in peer review which is expressed by comments in the pull request. Project maintainers take into account the peer review when determining if there is consensus to merge a pull request.

### Review Types

#### Conceptual Review
- `Concept ACK` - Agrees with the general goal
- `Concept NACK` - Disagrees with the general goal (must provide reasoning)
- `Approach ACK/NACK` - Agrees/disagrees with implementation approach

#### Code Review
After conceptual agreement, reviewers should:
1. Test the code (manual + automated tests)
2. Review the code quality
3. Verify consensus compliance
4. Check documentation

### Finding Reviewers

- Look for previous contributors in the area you're changing
- Ask in development channels
- Be patient and respect maintainers' time
- Contribute reviews to others while waiting

## Technical Requirements

### Code Quality
- Follow existing code style
- Write clear documentation
- Include comprehensive tests
- Handle errors appropriately
- Consider performance implications

### Testing Requirements
1. Unit tests for new functionality
2. Integration tests for system interactions
3. Consensus validation tests
4. Network propagation tests
5. Performance benchmarks

### Security Considerations
- Follow security best practices
- Validate all inputs
- Protect user privacy
- Consider network attack vectors
- Implement proper encryption

## Decision Making Process

Whether a pull request is merged into Bastyon rests with the project maintainers. Pull requests must:

1. Have a clear use case
2. Be well peer-reviewed
3. Include appropriate tests
4. Follow code style guidelines
5. Not break existing tests
6. Include relevant documentation

Changes affecting consensus rules require:
- Extensive discussion
- Formal proposal
- Network-wide consideration
- Careful security review


## Release Process

Pocketnet Core Node Testing and Release Process
Some recent releases of Pocketcoin Core have introduced software defects resulting in forks or node crashes on the network. For example, the v0.19.17 release in late October required two emergency releases within a one week time frame in order to resolve node crashes and stuck nodes. This has caused headaches for node operators (excessive monitoring and node maintenance requirements), instability on the Bastyon social media site (disappearing posts, comments, etc), and frozen wallets on exchanges adversely affecting price and liquidity of PKOIN. This document proposes a formalized release process to improve stability of pocketnet core releases and earn trust of the Bastyon/Pocketnet Core community.

### Goals
- Create "stable" release designation with 99.99% uptime - defined at 1000 hours uptime for every 1 hour of downtime (not counting system maintenance and updates)

- Catch bugs earlier in the development cycle, process rather than have these bugs be found by the community.

- Ensure compatibility of new node releases with the nodes currently on the network (fork prevention)

- More efficient use of dev time by creating a stable software tag in code to act as a launch point for new feature development

- Creation of a stable mainline software branch which new feature branches can be based upon.

### Release Branches
PocketNet core will switch git release branch names to reflect the minor version number of the release. Branch "0.20" will be used for current releases of the 0.20.XX PocketNet Core nodes. Branch "0.21" will be used for new developments targetted for the upcoming 0.21.XX releases.

### Release Process
The release process is described in the steps below. If any software defects are encountered at any step in the process a new issue should be created on GitHub, and the rest of the team notified. Once the software defect is addressed the process should restart.

1. Apply version number release tag to branch in repo at https://github.com/pocketnetteam/pocketnet.core to initiate release process. At present branch 0.20 is for fixes to current release version while branch 0.21 includes new feature development and porting of recent changes from Bitcoin core.

2. Configure autobuild by running "./autogen.sh" and "./configure --enable-tests" to build the binaries and enable unit test in makefiles. Run "make check" on Linux to verify all unit tests pass and no test regressions have been introduced. NOTE: The GitHub PocketnetCore project has an Action which automatically runs unittests for each pull request and can be manually invoked for tags and pull requests.

3. Build Windows and Linux version of packages and generate package checksum

4. TestNet: Deploy release to node connected to testnet. Verify full sync completes, node is able to connect to front end client, complete transactions, and stake.

5. Onebox full sync/fresh install test: Development team deploys software to a node (Linux or Windows) without an existing Pocketnet Core installation or block chain to test full sync of the node. This ensures the consensus code of the new release is able to validate the entire block chain without error and is able to sync in a reasonable amount of time (within few days). Progress of this node should be checked every 24 hours and release should not commence until fully synced to the main network blockchain.

6. Onebox Upgrade testing: Development team deploys new Pocketnet Core package to one Windows node and one Linux node using the existing blockchain data on disk. Staking should be enabled on both nodes. Run these nodes for 24 hours then verify both nodes are synced to main network without errors in log before proceeding to next step.

7. Verify each onebox node is visible on block explorer and that block explorer functions are operational

8. Dev Team Node Upgrade: Upgrade 50% of development team operated nodes with the new Pocketnet Core package after completion of (4) Onebox Upgrade testing above. Run these nodes for 48 hours then verify all nodes are synced to main network without errors in log before proceeding.

9. RC release: Above steps should be completed, dev team members should check status of their nodes and sign off that nodes are in stable and in sync with the main network in the Bastyon C++ node operators chat. At this point a RC (Release Candidate) with be posted on GitHub for community download with notification posted to the Bastyon forum.

20. Stable Release: Continue running 50% of dev nodes on release package until 10 days and 1000 hours of stable operation has been achieved (minimum 4 nodes for 10 days with no errors). At this point the release on GitHub will be tagged or reposted as 'Stable' and notification will be posted to Bastyon. Exchanges will be notified of stable release.

11. Stable release complete: Update remaining dev team maintained nodes to Stable release.

## How to leave feedback on Bastyon

[Coming soon...]

## Support channels

[Coming soon...]

## Feature requests and bug reporting

[Coming soon...]


## Credits
These contribution guidelines have been  in part based on the [Bitcoin's Contributing document](https://github.com/bitcoin/bitcoin/blob/master/CONTRIBUTING.md)

## Copyright

By contributing to this repository, you agree to license your work under the project's license unless specified otherwise. Any work contributed where you are not the original author must contain its license header with the original author(s) and source.
