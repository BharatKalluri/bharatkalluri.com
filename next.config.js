module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
            require('./scripts/generate-rss');
        }
        return config;
    }
};
