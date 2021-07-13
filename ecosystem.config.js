module.exports = {
    apps: [
        {
            name: "server",
            script: "server/src/server.js",

            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
