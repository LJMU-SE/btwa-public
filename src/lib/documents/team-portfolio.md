## Project Objective

The aim of this project is to display our projects in an easy to navigate manner, as well as provide some background information on our team.

## Hardware

This site is hosted in a **kubernetes** cluster running on 3 virtual machines, allowing for high availability while the site is updating. It is deployed from a docker image hosted in an **Azure Container Registry** and is continually deployed through GitHub actions.

## Features

### Implemented Features

-   Dynamically load team members from **TypeScript** files
-   Dynamically load projects descriptions from **markdown** files
-   Load and store the last edited date of GitHub projects in local storage to accommodate for rate limiting.

### Features Not Yet Implemented

-   **Jenkins CI/CD** for automatic **kubernetes** deployment
-   Contact form
