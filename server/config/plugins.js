module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: "cloudinary",
			providerOptions: {
				cloud_name: env("CLOUDINARY_NAME"),
				api_key: env("CLOUDINARY_KEY"),
				api_secret: env("CLOUDINARY_SECRET"),
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
			breakpoints: {}, // disables automatic image size generation
		},
	},
	transformer: {
		enabled: true,
		config: {
			responseTransforms: {
				removeAttributesKey: true, // removes the attributes prefix from the response
				removeDataKey: true, // removes the data key from the response
			},
		},
	},
});
