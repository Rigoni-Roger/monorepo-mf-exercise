const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "movies",
          filename: "remoteEntry.js",
          exposes: {
            "./Movies": "./src/MoviesContent",
            "./Playlist": "./src/PlaylistContent"
          },
          shared: {
            ...deps,
            card: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            "movies-content": {
              singleton: true,
            },
            "playlist-content": {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            }
          }
        })
      ]
    }
  },
})