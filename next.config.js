/** @type {import('next').NextConfig} */
const nextConfig={
	webpack:(config,context)=>{
		config.watchOptions={
			aggregateTimeout:300,
			poll:200,
		};
		return config;
	}
};

export default nextConfig;
