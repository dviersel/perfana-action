const exec = require('@actions/exec');
async function llist(param) {
    let a = await exec.exec(param)
    return a
}

export { llist }