<div align="center">

# DSA Playground

A collection of data structures and algorithms challenges.

[Getting Started](#getting-started)

</div>

## Getting Started

1. Set the `DOCKER_USER` environment variable:
   
   - ```bash
     export DOCKER_USER="$(id -u):$(id -g)"
     ```

1. Build a custom image using the same user ID and group ID:

   - ```bash
     ./scripts/build.sh
     ```

1. Install the dependencies:

   - ```bash
     docker compose run -ti --rm app yarn --frozen-lockfile
     ```

1. Each solution should be accompanied by a test file with test data.

1. Start asserting your solution by running the test file:

   - ```bash
     docker compose run -ti --rm app yarn test path/to/test_file
     ```

1. This runs `yarn` in a Docker container. Alternatively, you can use `yarn` installed in your local machine.
