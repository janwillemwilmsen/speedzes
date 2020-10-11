module.exports = {
	name: "Vandebron.nl", // optional, falls back to object key
	description: "Vandebron.nl pagina's",
	options: {
		frequency: 60 * 23, 
		// frequency: 1 * 100, 
		// 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://vandebron.nl/",
		"https://vandebron.nl/energie-berekenen",
		"https://vandebron.nl/energiebronnen",
		"https://vandebron.nl/energie-berekenen/energie-vergelijken/energievergelijker",
		"https://vandebron.nl/klantenservice",
		// "https://www.energiedirect.nl/energie/goedkope-energie",
		// "https://www.energiedirect.nl/energie/overstappen-energie",
		// "https://www.energiedirect.nl/energie/energie-besparen",
		// "https://www.energiedirect.nl/energie/energiecontract",
	]
};