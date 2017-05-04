import gulp from 'gulp';
import coverageT from 'gulp-jsx-coverage';

const args = require('yargs').argv;

const coverageTask = coverageT.createTask({
    src: [
        'test/**/*+(.js|.jsx)',
        'src/**/*.js'
    ],
    isparta: false,
    istanbul: {
        preserveComments: false,
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|test/
    },

    threshold: [
      {
        type: 'lines',
        min: 0
      }
    ],

    transpile: {
        babel: {
            include: /\.jsx?$/,
            exclude: /node_modules/,
            omitExt: ['.jsx']
        }
    },

    coverage: {
        reporters: ['text-summary', 'json', 'lcov', 'cobertura'],
        directory: 'coverage'
    },

    babel: {
        plugins: ['babel-polyfill']
    },

    cleanup: () => {
    }
});

gulp.task('coverage', coverageTask);
