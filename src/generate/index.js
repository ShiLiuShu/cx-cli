import Handlebars from 'handlebars'
import Metalsmith from 'metalsmith'
import rm from 'rimraf'

Handlebars.registerHelper('if_eq', function (a, b, opts) {
    return a === b ? opts.fn(this) : opts.inverse(this)
})

Handlebars.registerHelper('unless_eq', function (a, b, opts) {
    return a === b ? opts.inverse(this) : opts.fn(this)
})

function generate (src, dst = '.', metadata) {
    return new Promise((resolve, reject) => {
        Metalsmith(process.cwd())
        .metadata(metadata)
        .clean(false)
        .source(src)
        .destination(dst)
        .use((files, metalsmith, done) => {
            const meta = metalsmith.metadata()
            Object.keys(files).forEach(fileName => {
                const t = files[fileName].contents.toString()
                if ((/\.(html|js|css|json|vue)/).test(fileName)) {
                    try {
                        files[fileName].contents = new Buffer.from(Handlebars.compile(t)(meta))
                    } catch (err) {
                        // console.log('failed parse file: ', fileName)
                    }
                }
            })
            done()
        }).build(buildErr => {
            rm(src, {}, (err => {
                if (buildErr || err) return reject(buildErr || err)
                resolve()
            }))
        })
    })
}

export default generate
