'use strict';
const i18n = require('./../../config/locale.js');

module.exports = {
	permissionId: {
		isInt: {
			args: true,
			msg: i18n.__("is_int", "Permiso")
		},
	},
	roleId: {
		isInt: {
			args: true,
			msg: i18n.__("is_int", "Rol")
		},
	},
	notes: {
		len: {
			args: [1,1024],
			msg: i18n.__("string_lenght", "notas", "1 a 1024")
		}
	}
}