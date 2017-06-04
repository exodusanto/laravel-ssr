let { mix, plugins } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
mix.js('resources/assets/js/client-entry.js', 'public/js/main.js')
    .browserSync({
        proxy: "127.0.0.1:8000",
        open: false
    });
