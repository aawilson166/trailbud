<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


# trailbud

MVP:
MERN stack using create react app that allows user to create, read, update and delete overlanding trails and comments on those trails styled with bootstrap

Stretch goals:
Search feature, with filters by distance, length, ect...
Implement google maps
Authentication

Components:
Trails - Location, length, difficulty, description
Comments

create react app

react/php/laravel/postgres
angular

trails table:
name, location, description, length


SCHEDULE:

Thurs 2/4  - Make a schedule
Fri   2/5  - Study PHP
Sat   2/6  - Study PHP
Sun   2/7  - Study PHP
Mon   2/8  - Update php version
Tues  2/9  - complete backend
Wed   2/10 - complete frontend
Thurs 2/11 - MVP Delployed on heroku
Fri   2/12 - Add google maps
Sat   2/13 - Add search feature/Auth
Sun   2/14 - CSS styling
Mon   2/15 - minor touch ups
Tues  2/16 - PRESENTATION

PHP version: 8.0.0

//command to start server
//php -S localhost:8888



SEED DATA:

CREATE TABLE trails (id SERIAL, name VARCHAR(25), location VARCHAR(50), description VARCHAR(250), length INT);
INSERT INTO trails (name, location, description, length) VALUES ('The Rubicon', 'Sierra Nevada', 'Legendary trail in the Sierra Nevada mountains', 22);

composer.json file correct? --- composer init
.env.example file correct??

moved php7.4.2 from Applications > MAMP > conf
to:  Applications > MAMP > bin > php

export PATH=/Applications/MAMP/bin/php/php7.4.2/bin:$PATH

touch index.html app.js main.css in public directory

php goes in routes > api.php

axios and react scripts go in index.html

update .env file so it connects to database locally

procfile is needed to get on heroku

composer create project laravel/laravel

then composer install

index not rendering with mamp

Get server running:
composer install
composer create-project --prefer-dist laravel/laravel:^7.0 trail