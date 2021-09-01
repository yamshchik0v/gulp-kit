const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default

function html() {
   return src('src/**.html')
      .pipe(include({
         prefix: '@@'
      }))
      .pipe(htmlmin({
         collapseWhitespace: true
      }))
      .pipe(dest('dist'))
}

function style() {
   return src('src/sass/**.scss')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(autoprefixer())
      .pipe(concat('style.css'))
      .pipe(dest('dist'))
}

function script() {
   return src('src/script/**.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(dest('dist'))
}

function clear() {
   return del('dist')
}

function serve() {
   sync.init({
      server: './dist'
   })

   watch('src/**.html', series(html)).on('change', sync.reload)
   watch('src/sass/**/**.scss', series(style)).on('change', sync.reload)
   watch('src/script/**.js', series(script)).on('change', sync.reload)
}

exports.serve = series(clear, html, style, script, serve)
exports.build = series(clear, html, style, script)
exports.clear = clear