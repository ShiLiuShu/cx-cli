'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('./utils/version');

var _version2 = _interopRequireDefault(_version);

var _get = require('./utils/get');

var _get2 = _interopRequireDefault(_get);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _generate = require('./generate');

var _generate2 = _interopRequireDefault(_generate);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 命令集合
 */
const commandMap = {
    create: {
        description: "create a new project from a cx template",
        usages: ['cx create templateName projectName'],
        action: async () => {
            console.log(_chalk2.default.cyan('🚀  Create cx template...'));
            const { description, author, projectName } = await _inquirer2.default.prompt(_prompt2.default);
            const { features } = await _inquirer2.default.prompt([{
                name: 'features',
                type: 'checkbox',
                message: 'Check the features needed for your project: ',
                default: ['ts', 'css'],
                choices: [{
                    name: 'TypeScript',
                    value: 'ts'
                }, {
                    name: 'CSS Pre-processors',
                    value: 'css'
                }, {
                    name: 'Vuex',
                    value: 'vuex'
                }, {
                    name: 'PWA Support',
                    value: 'pwa'
                }, {
                    name: 'Use UIP(统一接口平台)',
                    value: 'uip'
                }, {
                    name: 'Use UCEM(前端异常监控系统)',
                    value: 'codebug'
                }]
            }]);
            const useCssPreProcessors = features.includes('css');
            const useUip = features.includes('uip');
            if (useCssPreProcessors) {
                const { cssProcessorType } = await _inquirer2.default.prompt([{
                    name: 'cssProcessorType',
                    type: 'list',
                    message: 'Please choose a css processor: ',
                    choices: [{ name: 'sass', value: 'sass' }, { name: 'less', value: 'less' }, { name: 'stylus', value: 'stylus' }]
                }]);
            }
            let loading = (0, _ora2.default)('download template...');
            loading.start();
            await (0, _get2.default)('vue-webpack4-template', 'cx-cli-beta-temp');
            await (0, _generate2.default)('cx-cli-beta-temp', projectName, {
                description,
                author,
                showRouter: false,
                useUip
            });
            loading.succeed();
            return new Promise((resolve, reject) => {
                loading = (0, _ora2.default)('installing modules...');
                loading.start();
                (0, _child_process.exec)('cnpm install', { cwd: `${projectName}` }, function (err) {
                    if (err) return reject(err);
                    resolve();
                    loading.succeed();
                    console.log(_logSymbols2.default.success, makeGreen('cx-cli initial success'));
                    console.log(_chalk2.default.cyan(`cd ${projectName} && npm run dev`));
                });
            });
        }
    }
};

function makeGreen(txt) {
    return _chalk2.default.green(txt);
}

Object.keys(commandMap).forEach(command => {
    _commander2.default.command(command).description(commandMap[command].description).action(() => {
        commandMap[command].action().then(() => {
            process.exit(-1);
        });
    });
});

function help() {
    console.log('\r\nUsage');
    Object.keys(commandMap).forEach(command => {
        commandMap[command].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
}

_commander2.default.usage('<command> [options]');

_commander2.default.on('-h', help);
_commander2.default.on('--help', help);
_commander2.default.version(_version2.default, '-V --version');

_commander2.default.parse(process.argv);

/**
 * 如果没有输入参数则弹出help
 */
if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp();
}