<div id="top"></div>
<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fortembr/datasmyth-database-viewer/">
    <img src="_repo/logo-blue.png" alt="Logo" width="400" height="">
  </a>
  <h3 align="center">DataSmyth - Database Viewer</h3>
  <p align="center">
    Fort Embr, under the DataSmyth brand, we had a requirement to use a DB viewer tool. We built this as a prototype for quick use in localhost.
    <br>
    <br>
    <a href="https://github.com/fortembr/datasmyth-database-viewer/issues" target="_blank">Bugs</a>
    ·
    <a href="https://discord.gg/jatU44PavX" target="_blank">Discord Community</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<aside>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</aside>

<!-- ABOUT THE PROJECT -->

## About The Project

We needed a DB viewer tool for a project. In researching this tool, we found [DB Docs](https://dbdocs.io). While this tool was exactly what we were looking for, there was one feature missing, self-hosting the project. The security requirements of this project forced our hand on a need to self-host. So, we threw this together fairly quickly so that we've have an internal tool.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Below are the major frameworks/libraries that are currently used in this project, or soon to be added in a future release.

In Use:

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://typescript.com/)

Coming Soon/ Considering:

- [DBML](https://dbml.org/)
- [Docker](https://www.docker.com/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Usage docs coming soon. Here are a couple of screenshots of what it looks like. 

<img width="1618" alt="Screen Shot 2023-02-10 at 19 28 16" src="https://user-images.githubusercontent.com/57743183/218226292-126001d3-d5c0-4bc2-a584-c07b1b67162d.png">

<img width="2102" alt="Screen Shot 2023-02-10 at 19 28 47" src="https://user-images.githubusercontent.com/57743183/218226301-72ad9eb9-4f9f-4b65-ba22-684670189123.png">

### JSON Data Example
```json
{
  "projectName": "MyTacoFund",
  "databaseType": "PostgreSQL",
  "projectNotes": "",
  "enumList": [
    {
      "name": "EnumAccountRole",
      "options": ["employeeAdmin", "employeeSuperAdmin", "creator", "supporter"]
    },

    {
      "name": "EnumAccountStatus",
      "options": ["active", "archvied", "hold", "inactive"]
    },

    {
      "name": "EnumProductType",
      "options": ["single", "subscription"]
    }
  ],
  "tableList": [
    {
      "name": "account",
      "id": {
        "type": "uuid",
        "primaryKey": true
      },
      "firstName": { "type": "text", "nullable": false },
      "lastName": { "type": "text", "nullable": false },
      "email": { "type": "text", "unique": true, "nullable": false },
      "phone": { "type": "text" },
      "password": { "type": "text" },
      "address": { "type": "jsonb", "nullable": true, "default": "null" },
      "socialProfiles": { "type": "jsonb", "nullable": true, "default": "null" },
      "accountRole": { "type": "enum", "enumDefined": "EnumAccountRole", "default": "supporter" },
      "accountStatus": { "type": "enum", "enumDefined": "EnumAccountStatus", "default": "active" },
      "accountVerified": { "type": "jsonb", "nullable": true, "default": "null" },
      "isActive": { "type": "boolean", "default": "true" },
      "passwordChangedAt": { "type": "date", "nullable": true, "default": "null" },
      "passwordResetToken": { "type": "text", "nullable": true, "default": "null" },
      "passwordResetExpires": { "type": "date", "nullable": true, "default": "null" },
      "recordCreated": { "type": "timestamp", "default": "new Date.now()" },
      "recordUpdated": { "type": "timestamp", "nullable": true, "default": "null" },
      "productList": {
        "type": "jsonb",
        "ref": {
          "refType": "<",
          "refField": "products.id"
        }
      }
    },
    {
      "name": "products",
      "id": {
        "type": "uuid",
        "primaryKey": true
      },
      "title": { "type": "text", "nullable": false },
      "image": { "type": "text", "nullable": false },
      "description": { "type": "text" },
      "productType": { "type": "enum", "enumDefined": "EnumProductType", "default": "single" },
      "priceUnit": { "type": "int", "nullable": false, "default": 5 },
      "recordCreated": { "type": "timestamp", "default": "new Date.now()" },
      "recordUpdated": { "type": "timestamp", "nullable": true, "default": null },
      "accountID": {
        "type": "uuid",
        "ref": {
          "refType": ">",
          "refField": "account.id"
        }
      }
    },
    {
      "name": "orders",
      "id": {
        "type": "uuid",
        "primaryKey": true
      },
      "customerID": {
        "type": "uuid",
        "ref": {
          "refType": "<>",
          "refField": "account.id"
        },
        "default": null
      },
      "productID": {
        "type": "uuid",
        "ref": {
          "refType": "<>",
          "refField": "products.id"
        }
      },
      "totalCost": { "type": "int", "nullable": false, "default": 0 },
      "recordCreated": { "type": "timestamp", "default": "new Date.now()" },
      "recordUpdated": { "type": "timestamp", "nullable": true, "default": null }
    }
  ]
}

```

<!--
_For more examples, please refer to the [Documentation](https://example.com)_
-->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Not in use. Submit a feature request via the repo issues section for now.

<!-- We've got a simple setup on Canny. You can submit either a Github issue, or a Canny feature request for the SEM Links tool.

- [Feature Requests in Canny](https://semlinks.canny.io/semlinks) -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Without these people and tools, life would be too complicated.

- Family and Friends.
- Ramen, Rice, Cheeseburgers and Pizza.
- [Carbon Digital](https://carbondigital.us/)
- [Fort Embr](https://fortembr.com/)
- [VS Code](https://code.visualstudio.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/fortembr/datasmyth-database-viewer.svg?style=for-the-badge
[contributors-url]: https://github.com/fortembr/datasmyth-database-viewer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fortembr/datasmyth-database-viewer.svg?style=for-the-badge
[forks-url]: https://github.com/fortembr/datasmyth-database-viewer/network/members
[stars-shield]: https://img.shields.io/github/stars/fortembr/datasmyth-database-viewer.svg?style=for-the-badge
[stars-url]: https://github.com/fortembr/datasmyth-database-viewer/stargazers
[issues-shield]: https://img.shields.io/github/issues/fortembr/datasmyth-database-viewer.svg?style=for-the-badge
[issues-url]: https://github.com/fortembr/datasmyth-database-viewer/issues
[license-shield]: https://img.shields.io/github/license/fortembr/datasmyth-database-viewer.svg?style=for-the-badge
[license-url]: https://github.com/fortembr/datasmyth-database-viewer/blob/master/license.md
