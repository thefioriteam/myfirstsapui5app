/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"wlc/com/myfirstsapui5app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});