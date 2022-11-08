// Constants
const SOURCE_DIRECTORY	= 'src'
const MID_DIRECTORY		= 'build'
const OUT_DIRECTORY		= 'out'

// Imports
const browserify = require('browserify')
const del = import('del')
const {src, dest, series, parallel} = require('gulp')
const extReplace = require('gulp-ext-replace')
const replace = require('gulp-replace')
const sass = require('gulp-sass')(require('sass'))
const shell = require('gulp-shell')
const tap = require('gulp-tap')
const typescript = require('gulp-typescript')
const uglify = require('gulp-uglify')

// Browserify
const browserifyTask = () =>
	src(`${MID_DIRECTORY}/main.js`)
	.pipe(tap((file) => {
		file.contents = browserify(file.path, {
			insertGlobals : true,
			debug: false,
			shim: {
				path: 'node_modules/react/index.js',
				exports: 'React'
			}
		})
		.bundle();
	}))
	.pipe(replace('nextTick(function', 'queueMicrotask(function'))
	.pipe(dest(OUT_DIRECTORY))

// Clean directories
const clean = async cb => {
	const {deleteAsync} = await del
		deleteAsync(MID_DIRECTORY)
		deleteAsync(OUT_DIRECTORY)
		return cb()
}

// Compile TypeScript
const compileTypescript = () =>
	src(`${SOURCE_DIRECTORY}/ts/**/*.ts*`)
    .pipe(typescript({
        module: 'commonjs',
        jsx: 'react',
        noEmitOnError: false,
        skipLibCheck: true
    }))
    .pipe(extReplace('.js'))
    .pipe(dest(MID_DIRECTORY))

// Compile SCSS
const compileSass = () =>
	src(`${SOURCE_DIRECTORY}/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(OUT_DIRECTORY))

// Copy HTML
const copyHtml = () =>
	src(`${SOURCE_DIRECTORY}/html/*.html`)
	.pipe(dest(OUT_DIRECTORY))

// Generate TypeScript documentation
const docs = cb => {
	shell.task('./node_modules/typedoc/bin/typedoc --out docs/ src/ts/ --jsx react')
	return cb()
}

const minify = () =>
	src(`${OUT_DIRECTORY}/main.js`)
	.pipe(uglify())
	.pipe(dest(OUT_DIRECTORY))

const dev = series(parallel(compileTypescript, compileSass, copyHtml), browserifyTask)

// Exports
exports.clean = clean
exports.default = series(dev, minify)
exports.dev = dev
exports.docs = docs
