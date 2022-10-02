import path from 'path'
import webpack from 'webpack'
import { buildDevServer } from './build/buildDevServer'
import { buildLoaders } from './build/buildLoaders'
import { buildPlugins } from './build/buildPlugins'
import { buildResolvers } from './build/buildResolvers'






export default () => {
   const config: webpack.Configuration = {
      entry: './src/index.tsx',
      mode: 'production',
      output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
         clean: true
      },
      devServer: buildDevServer(),
      module: {
         rules: buildLoaders()
      },

      plugins: buildPlugins(),
      resolve: buildResolvers()
   }

   return config
}