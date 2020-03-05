export const NODE_ENV = process.env.nodeEnv;

/**
 * Imports a styles file based on NODE_ENV so that we have SSR in production
 * @param file
 */
export const importStyles = file => {
	if (NODE_ENV !== 'production') {
		return require(`../css/ssr/${ file }.js`).styles();
	} else {
		return require(`../css/dev/${ file }.scss`);
	}
};