const mix = require('laravel-mix').mix

mix.setPublicPath('dist')
   .js('resources/js/field.js', 'js')
   .sass('resources/sass/field.scss', 'css')
   .version()