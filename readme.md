# Gulp kit with no libraries
__Requires Node.js installed__
<a id='top'> </a>

[nodejs.org](https://nodejs.org/en)
[gulpjs.com](https://gulpjs.com)

### Installation:

Install gulp-cli globally:
``` bash
   npm i -g gulp-cli
```
Initialize project in your project directory and create clean `package.json` file:
``` bash
   npm init
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
To start local server (everything changes automatically, just save your files):
``` bash
   gulp serve
```
---

### Functionality:

   * Compile  and minify HTML
   * Use SASS preprocessor
   * Compile SASS to CSS, auto adding prefixes and minify CSS
   * Compile and minify JS
   * Concatenate files all together
   * Launch server and make changes in real time, just save a file
   

### Package list : 

   *  `del`
   *  `gulp`
   *  ` browser-sync`
   *  `gulp-concat`
   *  `gulp-autoprefixer`
   *  `gulp-file-include`
   *  `gulp-htmlmin`
   *  `gulp-sass`
      *  `sass` (requiered to `gulp-sass` working)
   *  `gulp-uglify-es`


<!-- __Aleksandr Yamshchikov__
 [Instagram](https://www.instagram.com/yamshchik0v.dev/) -->
 
 __[UP](#top)__