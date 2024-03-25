module.exports = {
	apps: [
		{
			name: 'front-ua',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start',
			env: {
				PORT: 3001
			}
		}
	]
}
