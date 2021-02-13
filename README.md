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
name, location, description, length, image

SEED DATA:

CREATE TABLE trails (id SERIAL, name VARCHAR(25), location VARCHAR(50), description VARCHAR, length VARCHAR(50), image VARCHAR);

INSERT INTO trails (name, location, description, length, image) VALUES ('The Rubicon', 'Sierra Nevada Mountains, California', 'A historical road to add to our list of best overland routes. The trail began through exploration for a safe route across the Sierra Nevadas. The Rubicon Trail is known for its ruggedness and versatility, inspiring the Jeep namesake. As a popular training grounds for Jeep, the overland classic has a variety of terrain ranging from beginner to expert. Don’t be fooled by this route’s popularity; it’s still considered one of the most dangerous and difficult. Experienced overlanders shouldn’t miss this one.', '22 Miles', 'https://i.pinimg.com/originals/b0/41/40/b0414006e44d583fa9836f51c5016624.jpg');

INSERT INTO trails (name, location, description, length, image) VALUES ('The Mojave Road', 'Mojave Desert, California', 'The historic 138-mile Mojave Road takes visitors back in time. With virtually no improvements since its inception, the historic Native American trade route and wagon trail remains the same as it was 150 years ago. Overlanders should take 2-3 days to explore the stunning desert landscape and Joshua tree-lined routes.', '138 Miles', 'https://scoutofmind.com/wp-content/uploads/2018/02/mojave-trail-overland-bound-33.jpg');

INSERT INTO trails (name, location, description, length, image) VALUES ('Black Bear Pass', 'Telluride', 'The infamous Black Bear Pass promises unrivaled views of Bridal Falls and Telluride. As one of the highest mountain passes in Colorado, it’s not for the timid. Weather conditions only allow the complete route to be open for a few weeks from late summer through the early fall.  This trail earned its notoriety from steep descents with nasty switchbacks and loose falling rock. Technical terrain and breath-taking views make this bucket list-worthy for those who crave challenges.', '8 Miles', 'https://cdn.drivingline.com/media/2332313/on-the-trail-black-bear-pass-1061.jpg');

INSERT INTO trails (name, location, description, length, image) VALUES ('White Rim Trail', 'Canyonlands National Park, Utah', 'This classic route explores Canyonlands National Park’s stunning Island in the Sky district, a Mars-scape hemmed on three sides by river—to the east, the mighty Colorado; to the west, the snaking Green; to the south, their confluence. It’s only moderately difficult, but Brady recommends doing it in a high-clearance vehicle equipped with true low-range gearing, a big help when descending some steeper sections of trail. Grab an overnight permit from the Park Service and break the route into as many as four days—more days means more opportunities to camp in some of the 10 incredible campgrounds that line the 110-mile road. But keep an eye on the weather—parts of the White Rim become impassable when wet.', '110 Miles', 'https://i2.wp.com/beautahfulworld.com/wp-content/uploads/2021/01/IMG-1338-1.jpg?resize=640%2C427&ssl=1');

INSERT INTO trails (name, location, description, length, image) VALUES ('Northern Arizona Traverse', 'Dewey-Humboldt, Arizona', 'Maybe not the most rugged trail, the Northern Arizona Traverse may be the most beautiful in the state of Arizona with incredible views of beautiful forests, majestic rock formations and more on this 188-mile track that will take you to the Grand Canyon. Elevations range from 3,800 to 7,500 feet on this easy-to-navigate trail that will feature rock, pavement and dirt.', '188 Miles', 'https://expeditionportal.com/media/2018/08/IMG_9191-1500x1000.jpg');
