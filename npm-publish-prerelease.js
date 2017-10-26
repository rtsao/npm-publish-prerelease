#!/usr/bin/env node

const {join} = require('path');
const {spawn} = require('child_process');
const semver = require('semver');

const pkg = require(join(process.cwd(), 'package.json'));

const {version} = pkg;
if (!semver.valid(version)) {
  console.error(`Error: package version "${version}" is invalid.`);
  process.exit(1);
}

const {prerelease} = semver(version);

const tag = prerelease.length
  ? prerelease.filter(part => typeof part === 'string').join('.') ||
    'prerelease'
  : void 0;

const args = process.argv.slice(2);
const tagArgs = tag ? ['--tag', tag] : [];

spawn('npm', ['publish', ...args, ...tagArgs], {
  stdio: 'inherit'
}).on('exit', code => {
  process.exitCode = code;
});
