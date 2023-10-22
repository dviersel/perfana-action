const exec = require('@actions/exec');
async function list(param) {
    let a = await exec.exec(param)
    return a
}