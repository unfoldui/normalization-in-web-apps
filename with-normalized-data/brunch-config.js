exports.config = {
	files      : {
		javascripts: {
			joinTo: {
				'javascripts/app.js'   : /^app/,
				'javascripts/vendor.js': /^(?!app)/
			}
		},
		stylesheets: {joinTo: 'stylesheets/style.css'}
	},
	paths      : {
		public : "dist",
		watched: ['app', 'vendor']
	},
	plugins    : {
		babel      : {
			presets: ['es2015', "stage-2", 'react']
		},
		sass       : {
			precision: 8
		},
		fingerprint: {
			autoReplaceAndHash: true,
			srcBasePath       : "dist",
			destBasePath      : "dist"
		}
	},
	conventions: {
		ignored: [
			/^test/,
			/^((.*?\/)?[_]\w*)/
		],
	},
	overrides  : {
		production: {
			conventions: {
				ignored: [
					/[\\/]_/,
					/vendor[\\/]node[\\/]/,
					/vendor[\\/](j?ruby-.*|bundle)[\\/]/,
					/^test/,
					/^((.*?\/)?[_]\w*)/,
					/configure-store-dev/i
				]
			}
		}
	}
}