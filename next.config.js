/** @type {import('next').NextConfig} */
const nextConfig={
	output:'export',
	webpack:(config,context)=>{
		config.watchOptions={
			aggregateTimeout:300,
			poll:200,
		};
		return config;
	}
};

export default nextConfig;
