const branchName = 'github-renovate';

module.exports = {
    // Self-hosted configuration options
    onboardingBranch: `${branchName}/configure`,
    platform: 'github',
    dryRun: null,
    username: 'self-renovate[bot]',
    repositories: [
        'ben-foxmoore/renovate-bot',
        'ben-foxmoore/github-actions-runner-docker',
        'ben-foxmoore/kube-state-metrics',
        'ben-foxmoore/docker-build-env',
        'accelleran/docker-build-env',
    ],
    // Default Repository configuration options
    branchPrefix: `${branchName}/`,
    dependencyDashboard: true,
    dependencyDashboardTitle: 'Dependency Dashboard self-hosted',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    includeForks: true,
};
