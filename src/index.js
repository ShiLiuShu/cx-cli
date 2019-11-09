import program from 'commander'
import VERSION from './utils/version'
import downloadLocal from './utils/get'
import inquirer from 'inquirer'
import prompt from './prompt'
import generate from './generate'
import ora from 'ora'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import { exec } from 'child_process'

/**
 * 命令集合
 */
const commandMap = {
    create: {
        description: "create a new project from a cx template",
        usages: [
            'cx create templateName projectName'
        ],
        action: async () => {
            console.log('create cx template new')
            const { description, author, projectName } = await inquirer.prompt(prompt)
            let loading = ora('download template...')
            loading.start()
            await downloadLocal('vue-webpack4-template', 'cx-cli-beta-temp')
            await generate('cx-cli-beta-temp', projectName, {
                description,
                author,
                showRouter: false
            })
            loading.succeed()
            return new Promise((resolve, reject) => {
                loading = ora('installing modules...')
                loading.start()
                exec('cnpm install', { cwd: `${projectName}` }, function (err) {
                    if (err) return reject(err)
                    resolve()
                    loading.succeed()
                    console.log(logSymbols.success, makeGreen('cx-cli initial success'))
                    console.log(chalk.cyan(`cd ${projectName} && npm run dev`))
                })
            })
        }
    }
}

function makeGreen (txt) {
    return chalk.green(txt)
} 

Object.keys(commandMap).forEach(command => {
    program.command(command)
    .description(commandMap[command].description)
    .action(() => {
        commandMap[command].action().then(() => {process.exit(-1)})
    })
})

function help () {
    console.log('\r\nUsage')
    Object.keys(commandMap).forEach(command => {
        commandMap[command].usages.forEach(usage => {
            console.log('  - ' + usage)
        })
    })
}

program.usage('<command> [options]')

program.on('-h', help)
program.on('--help', help)
program.version(VERSION, '-V --version')


program.parse(process.argv)

/**
 * 如果没有输入参数则弹出help
 */
if (!process.argv.slice(2).length) {
    program.outputHelp()
}