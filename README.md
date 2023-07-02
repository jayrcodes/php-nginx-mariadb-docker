# PHP Nginx MariaDB scaffold

### Start container

```
cd docker
docker compose up
```

### How to create new project

```
composer create-project laravel/laravel app
```

### Migrate database

```
cd app
php artisan migrate
```

### Create user

```
php artisan tinker

User::create([
    'name' => 'admin',
    'email' => 'admin@jayr.codes',
    'password' => Hash::make('testtest'),
]);
```

### Set mysql env

```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=acme
DB_USERNAME=batman
DB_PASSWORD=secret
```

### Access

```
http://localhost
```
