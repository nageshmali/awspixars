module.exports = {
  apps: [
    {
      name: 'my-vite-app',
      script: 'npm',
      args: 'run dev',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
