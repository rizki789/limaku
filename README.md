## LIMAKU WASTE MANAGEMENT

## Install

1. Clone project from [this](https://github.com/rizki789/limaku.git) github repository
```shell
git clone https://github.com/rizki789/limaku.git
```
2. Change directory
```shell
cd limaku
```
3. Install Composer Dependencies
```shell
composer install
```
4. Install NPM Dependencies
```shell
npm install && npm run dev
```
5. Create a copy of your .env file
```shell
cp .env.example .env
```
6. Generate an app encryption key
```shell
php artisan key:generate
```
7. Create an empty database for our application
8. In the .env file, add database information to allow Laravel to connect to the database
9. Migrate the database
```shell
php artisan migrate
```
10. [Optional]: Seed the database
```shell
php artisan db:seed
```
11. connect storage to public
```shell
php artisan storage:link
```
12. Run Laravel project
```shell
php artisan serve
```
