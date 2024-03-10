<div align="center">

# DSA Playground

A collection of Data Structures and Algorithms challenges.

[Getting Started](#getting-started)

</div>

## Getting Started

1. Set the `DOCKER_USER` environment variable:
   
   - ```bash
     export DOCKER_USER="$(id -u):$(id -g)"
     ```

1. Start playing:

   - ```bash
     docker compose run -ti --rm app node path/to/file
     ```

1. This runs `node` in a Docker container. Alternatively, you can use `node` installed in your local machine.
