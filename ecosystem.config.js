module.exports = {
	apps: [
		{
			name: 'front-ru',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start',
			env: {
				PORT: 3000
			}
		}
	]
}
