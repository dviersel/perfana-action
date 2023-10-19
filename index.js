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

    const actionVersion = core.getInput('action-version');
    console.log(`action-version: ${actionVersion}`);

    console.log(exec.exec(`ls -la /home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin`))

    // console.log(exec.exec("pwd"))

    // exec.exec("chmod 755 /home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/*")
    console.log(exec.exec(`/home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/perfana-cli.kt`))
    console.log(exec.exec(`/home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/perfana-cli.rt`))

} catch (error) {
    core.setFailed(error.message);
}
