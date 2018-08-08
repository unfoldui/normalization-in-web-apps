var requireFile = require('./utils')

const users = requireFile('./users')

module.exports = [
	{
		id  : 1,
		body: "Haha, what a joke! :D ",
		user: users[1],
	},
	{
		id  : 2,
		body: "It's an observable fact",
		user: users[0],
	},
	{
		id  : 3,
		body: "Haha right. Seriously cut it out bro. You are making a crazy talk.",
		user: users[1]
	},
	{
		id  : 4,
		body: "No I'm not, 'bro'. Want to see my proof?",
		user: users[0],
	},
	{
		id  : 5,
		body: "SHUT YOUR MOUTH! YOU SHUT IT RIGHT NOW.",
		user: users[1],
	},
	{
		id  : 6,
		body: "Haha, you drinkin' too much bro?",
		user: users[1],
	},
	{
		id  : 7,
		body: "I'm serious. And I'm pretty sure humans evolved from primates.",
		user: users[2],
	},
	{
		id  : 8,
		body: "GOD DAMMIT WOULD ALL YOU JUST SHUT UP",
		user: users[1],
	}
]