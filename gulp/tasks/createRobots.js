const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');

const createRobots = () => {
  return src('./src/robots.txt')
    .pipe(plumber())
    .pipe(dest('build/'))
};


exports.createRobots = createRobots;