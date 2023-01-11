const releasePlugins = [
    '@semantic-release/changelog',
    ['@semantic-release/git', {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
];
console.log("process.env", process.env);
const branch = process.env;
const plugins = branch === 'master' ? releasePlugins : [];

// module.exports = {
//     "branches": [
//         "master",
//         {
//             name: 'feature/*',
//             channel: '${name.replace("/", "-")}',
//             prerelease: '${name.replace("/", "-")}-${Math.floor(Math.random() * 101)}',
//         },
//     ],
//     "plugins": [
//         "@semantic-release/commit-analyzer",
//         "@semantic-release/release-notes-generator",
//         "@semantic-release/npm",
//         "@semantic-release/github",
//         "@semantic-release/changelog",
//        ["@semantic-release/git", {
//             "assets": ["package.json", "package-lock.json", "CHANGELOG.md"]
//        }],
//         ...plugins,
//     ]
// }
