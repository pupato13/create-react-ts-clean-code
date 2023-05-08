#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: "inherit" });
        return true;
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/pupato13/create-react-ts-clean-code ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

console.log("Congrats! You are ready. Follow the following command to start");
console.log(`cd ${repoName} && npm run start`);
