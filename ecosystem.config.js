module.exports = {
	  apps: [
		      {
			            name: 'strapi-dev',
			            cwd: '/srv/strapi/mystrapiapp',
			            script: 'npm',
			            args: 'start',
			            env: {
					            NODE_ENV: 'development'
					          },
			          },
		    ],
};
