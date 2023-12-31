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

    // const result = github.context.action
    // console.log(result)

    // console.log(exec.exec("ls -la /home/runner/work/_actions/dviersel/perfana-action/v0.1-alpha/dist/bin"))
    const result2 = exec.exec("ls -al")
    console.log(result2)


    const actionVersion = "v0.1-alpha-0"
    const actionPath = `/home/runner/work/_actions/dviersel/perfana-action/${actionVersion}/dist/bin/`
    console.log("Action path: " + actionPath)
    console.log(exec.exec(` [[ -f ${actionPath}/perfana-cli.kt ]] && ${actionPath}/perfana-cli.kt || echo "Cannot find:\n${actionPath}/perfana-cli.kt"`))
    console.log(exec.exec(` [[ -f ${actionPath}/perfana-cli.rt ]] && ${actionPath}/perfana-cli.rt || echo "Cannot find:\n${actionPath}/perfana-cli.rt"`))

    const configFile = core.getInput('config');
    console.log(`Config file: ${configFile}`);

} catch (error) {
    core.setFailed(error.message);
}
