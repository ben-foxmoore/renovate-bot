const branchPrefix = 'renovate';
const appName = 'acc-renovate';
const appId = '230720';

module.exports = {
    // Self-hosted configuration options
    onboardingBranch: `${branchPrefix}/configure`,
    platform: 'github',
    dryRun: null,
    // Default Repository configuration options
    branchPrefix: `${branchPrefix}/`,
    branchPrefixOld: `github-renovate/`,
    dependencyDashboard: true,
    dependencyDashboardTitle: 'Dependency Dashboard',
    // Options depending on Github App configuration
    username: '${appName}[bot]',
    gitAuthor: 'Renovate Bot <${appId}+${appName}@users.noreply.github.com>',
    repositories: [
        'accelleran/docker-build-env',
    ],
};
