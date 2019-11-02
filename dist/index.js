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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 命令集合
 */

// import chalk from 'chalk'
const commandMap = {
    create: {
        description: "create a new project from a cx template",
        usages: ['cx create templateName projectName'],
        action: async () => {
            console.log('create');
            const { description, author } = await _inquirer2.default.prompt(_prompt2.default);
            const loading = (0, _ora2.default)('download template...');
            loading.start();
            await (0, _get2.default)('yTime', 'ppp');
            await (0, _generate2.default)('./ppp', './build', {
                description,
                author,
                showRouter: true
            });
            loading.succeed();
            console.log(_logSymbols2.default.success, makeGreen('initial success'));
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