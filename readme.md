<a id='top'> </a>
# Gulp kit with no libraries
__Requires Node.js installed__

[nodejs.org](https://nodejs.org/en)

[gulpjs.com](https://gulpjs.com)

### Installation:

Install gulp-cli globally:
``` bash
   npm i -g gulp-cli
```
Initialize project in your project directory and create `package.json` file (-y to yes to everything):
``` bash
   npm init -y
```
Create gulp core there:
``` bash
   npm i -D gulp
```
### Use:
To clear dist:
``` bash
   gulp clear
```
To build project:
``` bash
   gulp build
```
To run local server (everything changes automatically, just save your files):
``` bash
   gulp serve
```
`ctrl + c` to cancel serve
 
To render images:
``` bash
   gulp image
```

---

### Functionality:

   * Compile and minify HTML
   * Use SASS preprocessor
   * Compile .SASS to .CSS, with auto adding prefixes and minifying CSS
   * Minify JS Files
   * Minify images (for now works with `jpg,png,svg,webp`)
   * Concatenate files all together with same file extension
   * Launch server and make changes in real time, just save it
   

### Package list :
   *  `del@6.0.0`
   *  `gulp@4.0.2`
   *  ` browser-sync@2.27.5`
   *  `gulp-concat@2.6.1`
   *  `gulp-autoprefixer@8.0.0`
   *  `gulp-file-include@2.3.0`
   *  `gulp-htmlmin@5.0.1`
   *  `gulp-sass@5.0.0`
      *  `sass@1.38.0` (requiered to `gulp-sass` working)
   *  `gulp-uglify-es@3.0.0`
   * `gulp-imagemin@7.1.0`

<!-- __Aleksandr Yamshchikov__
 [Instagram](https://www.instagram.com/yamshchik0v.dev/) -->
 
 __[UP](#top)__