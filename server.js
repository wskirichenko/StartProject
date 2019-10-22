const compression = require('compression');
const path        = require('path');
const express     = require('express');
const app         = express();
const request     = require('request');

const axios       = require('axios')
const xml         = require('xml')
const querystring = require('querystring')

app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, './')));
app.use("/", express.static(path.join(__dirname, './src')));
app.use("/", express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/dist/pages/index.html');
})

// Zoho Lead generation

// App name = eetweb
// App specific password = q8QjLcqVG2CN
// Link = https://www.zoho.com/crm/developer/docs/api/using-authentication-token.html#Generate

const ZOHO_TOKEN    = process.env.ZOHO_TOKEN    || "9689144a63cc367a56cbdbb92a4536bc";
const ZOHO_EMAIL    = process.env.ZOHO_EMAIL    || "admin@eetech.co";
const ZOHO_PASSWORD = process.env.ZOHO_PASSWORD || "****";

app.post('/addlead', (req, res) => {

	// // req.body example
	//
	// {
	// 	first_name: 'Denis',
	// 	last_name: 'Benyaminov',
	// 	email: 'denis.benyaminov@gmail.com',
	// 	country: 'US',
	// 	state: 'NV',
	// 	company: 'WS',
	// 	type_of_software: 'AI app development',
	// 	company_size: 'E - 20+ engineers'
	// }

	try {
		// Add timestamp to email for new records in Zoho
		if (req.body && req.body.email) {
			req.body.email += ("_" + new Date().getTime());
		}

		const xmlData = xml({
			Leads: [{
				row: [
					{ _attr: { no: '1' } },
					{ FL: [{ _attr: { val: 'Lead Source' } }, 'EE&T Website form'] },
					{ FL: [{ _attr: { val: 'Lead Owner' }  }, 'EE&T'] },
					{ FL: [{ _attr: { val: 'First Name' }  }, req.body.first_name || 'Unknown'] },
					{ FL: [{ _attr: { val: 'Last Name' }   }, req.body.last_name  || 'Unknown'] },
					{ FL: [{ _attr: { val: 'Email' }       }, req.body.email      || 'No email address specified'] },
					{ FL: [{ _attr: { val: 'Company' }     }, req.body.company    || 'No company specified'] },
					{ FL: [{ _attr: { val: 'Description' } },
						"Country: "                 + ( req.body.country          || "No country specified"          ) + "\n" +
						"State: "                   + ( req.body.state            || "No state specified"          ) + "\n" +
						"Company Size: "            + ( req.body.company_size     || "No company_size specified"     ) + "\n" +
						"Type of Software needed: " + ( req.body.type_of_software || "No type_of_software specified" )
					    || 'No description'] }
				]}
			]
		})

		const qs = querystring.stringify({
			authtoken      : ZOHO_TOKEN,
			newFormat      : 1,
			isApproval     : true,
			scope          : 'crmapi',
			duplicateCheck : 2,
			xmlData        : xmlData
		})

		console.log("qs", qs);

		axios.post(
			`https://crm.zoho.eu/crm/private/xml/Leads/insertRecords?${qs}`
		).then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})

		return res.status(200).json({ id: req.body.email })
	} catch (e) {
		return res.status(400).json({ error: e.toString() })
	}
})

app.listen(3000, () => {
	console.log('Server is running! localhost:' + 3000);
})