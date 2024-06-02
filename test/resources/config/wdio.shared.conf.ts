import { config as configDotEnv } from 'dotenv';
import { removeSync } from 'fs-extra';

const { generate } = require('multiple-cucumber-html-reporter');

export const config: WebdriverIO.Config = {
	//
	// ====================
	// Runner Configuration
	// ====================
	runner: 'local',
	//
	// ==================
	// Specify Test Files
	// ==================
	// NOTE: This is just a place holder and will be overwritten by each specific configuration
	specs: [],
	//
	// ============
	// Capabilities
	// ============
	// NOTE: This is just a place holder and will be overwritten by each specific configuration
	capabilities: [],
	//
	// ===================
	// Test Configurations
	// ===================
	logLevel: 'debug',
	bail: 0,
	waitforTimeout: 60 * 1000,
	connectionRetryTimeout: 65 * 1000,
	connectionRetryCount: 1,
	services: [],
	framework: 'cucumber',
	reporters: ['spec', 'cucumberjs-json'],
	cucumberOpts: {
		// CucumberOption's timeout should be at least 5s longer than WDIO's waitforTimeout
		timeout: 65 * 1000,
		require: ['./src/step-definitions/**/*.ts'],
		backtrace: true,
	},

	// =====
	// Hooks
	// =====
	// Gets executed before config execution begins.
	before: () => {
		configDotEnv();
	},

	// Gets executed once before all workers get launched.
	onPrepare: () => {
		removeSync('.tmp/');
	},
	// Gets executed after all workers got shut down and the process is about to exit.
	async onComplete() {
		generate({
			jsonDir: '.tmp/json/',
			reportPath: '.tmp/report/',
			pageTitle: 'Mobile HTML Reporter',
			reportName: 'Mobile HTML Reporter',
			displayDuration: true,
			displayReportTime: true,
		});
	},
};
