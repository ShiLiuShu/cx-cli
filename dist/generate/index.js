'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _metalsmith = require('metalsmith');

var _metalsmith2 = _interopRequireDefault(_metalsmith);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars2.default.registerHelper('if_eq', function (a, b, opts) {
    return a === b ? opts.fn(this) : opts.inverse(this);
});

_handlebars2.default.registerHelper('unless_eq', function (a, b, opts) {
    return a === b ? opts.inverse(this) : opts.fn(this);
});

function generate(src, dst = '.', metadata) {
    (0, _metalsmith2.default)(process.cwd()).metadata(metadata).clean(false).source(src).destination(dst).use((files, metalsmith, done) => {
        const meta = metalsmith.metadata();
        Object.keys(files).forEach(fileName => {
            const t = files[fileName].contents.toString();
            if (/\.(html|js|css|json|vue)/.test(fileName)) {
                try {
                    files[fileName].contents = new Buffer.from(_handlebars2.default.compile(t)(meta));
                } catch (err) {
                    // console.log('failed parse file: ', fileName)
                }
            }
        });
        done();
    }).build(err => {
        (0, _rimraf2.default)(src, {}, err => {
            if (err) console.log(err);
        });
        if (err) console.log(err);
    });
}

exports.default = generate;