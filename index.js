const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);

    console.log("Let's do this!")

    console.log('action: ', github.context.action)

    console.log('What\'s on disk?')
    exec.exec("ls -al main/").then((result) => {
        console.log(result)
    })



    const actionVersion = 'v0.1-alpha-0'
    exec.exec(`ls -la /home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin`).then((result) => {
        console.log(result)
    })

    exec.exec(`/home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/perfana-cli.kt`).then((result) => {
        console.log(result)
    })

    exec.exec(`/home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/perfana-cli.rt`).then((result) => {
        console.log(result)
    })

} catch (error) {
    core.setFailed(error.message);
}
