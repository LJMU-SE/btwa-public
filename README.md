# LJMU Software Engineering Team Project Portfolio

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

## Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/ElBeenMachine>
            <img src=https://avatars.githubusercontent.com/u/73618201?v=4 width="100;"  alt=Ollie Beenham/>
            <br />
            <sub style="font-size:14px"><b>Ollie Beenham</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/ImgBotApp>
            <img src=https://avatars.githubusercontent.com/u/31427850?v=4 width="100;"  alt=Imgbot/>
            <br />
            <sub style="font-size:14px"><b>Imgbot</b></sub>
        </a>
    </td>
</tr>
</table>
