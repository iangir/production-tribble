import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config.resolve!.modules!.push(paths.src);
	config.resolve!.extensions!.push('.ts', '.tsx');

	// @ts-ignore
	// eslint-disable-next-line
	config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});

	config.module!.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});

	config.plugins!.push(
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify(''),
			__PROJECT__: JSON.stringify('storybook'),
		}),
	);

	config.module!.rules.push(buildCssLoader(true));
	return config;
};
