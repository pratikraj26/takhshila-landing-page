'use strict';

// Production specific configuration
// =================================
module.exports = {
	siteBase: 'https://www.takhshila.com',

	ip: 	process.env.OPENSHIFT_NODEJS_IP ||
			process.env.IP ||
			undefined,

	port:     8082,

	sslServer: false,
};