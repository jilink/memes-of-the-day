import {Config} from 'remotion';

Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      fallback: {
        ...currentConfiguration.resolve.fallback,
        "querystring": require.resolve("querystring-es3"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "http": require.resolve("stream-http") 
      }
    }
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules ?? []),
        // Add more loaders here
      ],
    },
  };
});

Config.Rendering.setImageFormat('jpeg');
