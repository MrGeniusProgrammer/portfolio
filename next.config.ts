import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	// Optionally, add any other Next.js config below
	webpack(config, { isServer }) {
		if (!isServer) {
			// We're in the browser build, so we can safely exclude the sharp module
			config.externals.push("sharp");
		}
		// audio support
		config.module.rules.push({
			test: /\.(ogg|mp3|wav|mpe?g)$/i,
			exclude: config.exclude,
			use: [
				{
					loader: require.resolve("url-loader"),
					options: {
						limit: config.inlineImageLimit,
						fallback: require.resolve("file-loader"),
						publicPath: `${config.assetPrefix}/_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
						esModule: config.esModule || false
					}
				}
			]
		});

		// shader support
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ["raw-loader", "glslify-loader"]
		});

		return config;
	}
};

export default withContentCollections(nextConfig);
