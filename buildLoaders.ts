import webpack from 'webpack'


export function buildLoaders(): webpack.RuleSetRule[] {

   const cssLoader =
   {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
   }
   const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
   }

   const htmlLoader = {
      test: /\.html$/i,
      loader: "html-loader",
   }


   return [
      cssLoader,
      typeScriptLoader,
      htmlLoader

   ]
}