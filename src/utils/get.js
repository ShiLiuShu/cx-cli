import downloadGit from 'download-git-repo'

const downloadLocal = async (templateName, projectName) => {
    const api = 'github:ShiLiuShu'
    return new Promise((resolve, reject) => {
        downloadGit(`${api}/${templateName}`, projectName, err => {
            if (err) return reject(err)
            resolve()
        })
    })
}

export default downloadLocal