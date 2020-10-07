module.exports = {
	name: "Essent", // optional, falls back to object key
	description: "Essent.nl pagina's",
	options: {
		// frequency: 60 * 23, 
		frequency: 1* 1000, 
		// 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://www.essent.nl/content/particulier/index.html",
		"https://www.essent.nl/content/particulier/producten/stroom_gas/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/zonnepanelen/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/verwarmingsinstallaties/service-en-onderhoud/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/isolatie/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/zonnepanelen/koop/index.html",
		"https://www.essent.nl/content/particulier/energie-besparen/isolatie/spouwmuurisolatie.html",
		"https://www.essent.nl/content/particulier/energie-besparen/isolatie/vloerisolatie.html",
		"https://www.essent.nl/content/particulier/energie-besparen/isolatie/dakisolatie.html",
		"https://www.essent.nl/kennisbank/energie-besparen/energielabel/energielabel-2020",
	]
};