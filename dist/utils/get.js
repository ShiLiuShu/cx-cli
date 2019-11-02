'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const downloadLocal = async (templateName, projectName) => {
    const api = 'github:ShiLiuShu';
    return new Promise((resolve, reject) => {
        (0, _downloadGitRepo2.default)(`${api}/${templateName}`, projectName, err => {
            if (err) return reject(err);
            resolve();
        });
    });
};

exports.default = downloadLocal;