



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
composer init


changed db from trails to trailbud

added proxy to package.json

<div key={trail.id}>

                                <div>{trail.name}</div>
                                <div>{trail.location}</div>
                                <div>{trail.description}</div>
                                <div>{trail.length}</div>
                                <img src={trail.image} alt="img"></img>

                                

                                <button value={trail.id} onClick={this.deleteTrail}>DELETE</button>

                                <form id={trail.id} onSubmit={this.updateTrail}>
                                    <input onChange={this.changeUpdateTrailName} type="text" placeholder="name"/><br/>
                                    <input onChange={this.changeUpdateTrailLocation} type="text" placeholder="location"/><br/>
                                    <input onChange={this.changeUpdateTrailDescription} type="text" placeholder="description"/><br/>
                                    <input onChange={this.changeUpdateTrailLength} type="text" placeholder="length"/><br/>
                                    <input onChange={this.changeUpdateTrailImage} type="text" placeholder="image"/><br/>


                                    <input type="submit" value="Update Trail"/>
                                </form>
                            </div>