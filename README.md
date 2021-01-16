# genshin-api

The repository for the code side of our in-house Genshin Impact API.

## API links

The API is situated at [http://genshin-api.eastus.cloudapp.azure.com:1337/](http://genshin-api.eastus.cloudapp.azure.com:1337/).

The current requests are supported:

- `/characters`
  - `/{id}` where id is the id of the character

### For devs

Dependencies:

- MariaDB >= 10.1
- NodeJS >=10.16.0 <=14.x.x

DB Installation:

- Download the appropriate version of MariaDB for your system
  - Mac/Linux: start sql prompt with `sudo mysql -u root`
  - Windows: start sql prompt by looking for "MySQL Client" in the start menu
    - alternatively, navigate to the installation folder of MariaDB and run `./bin/mysql.exe -u root -p`. The console should ask you to enter your password.
- Initialise the `strapi_dev` databse following [step 4 of the azure setup](https://strapi.io/documentation/developer-docs/latest/deployment/azure.html#_4-choosing-and-installing-a-database).
- Ask someone for an SQL dump of the current dev database.
  - Run the following command: `mysql.exe -u {username} -p strapi_dev < {dump_file_name}.sql` where:
    - `{username}` is the name of a user who has access to the `strapi_dev` database;
    - `{dump_file_name}` is the name of the `.sql` dump.

Application Installation ~~(windows is a little more cancer)~~ :

- Checkout `master` or `development` branch (whichever is more up to date)
- run `npm install`
  - if (for some reason) `npm install` does not work, try:
    - deleting the `package-lock.json` file and the `node_modules/` folder;
    - ~~crying~~.
- create a `.env` file at the root directory of the project
  ```
  DB_HOST='127.0.0.1'
  DB_PORT=3306
  DB_NAME='strapi_dev'
  DB_USER='strapi'
  DB_PASS='mypasswordhere' <== change this to your password
  DB_SSL=false
  ```
- run `yarn develop`

  - make sure to have `yarn` installed first orz

- if you have an account on your dev server, use the same credentials to login. Otherwise, contact an admin to have an account created

Useful links:

- [console](http://genshin-api.eastus.cloudapp.azure.com:1337/admin)
- [dev server](http://genshin-api.eastus.cloudapp.azure.com:3001/)

- [azure setup](https://strapi.io/documentation/developer-docs/latest/deployment/azure.html)

The `/scripts` folder contains code used to source v1.0 of the API.
