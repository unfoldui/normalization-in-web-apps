var requireFile = require('./utils')

const users    = requireFile('./users')
const comments = requireFile('./comments')

module.exports = [
	{
		id      : 1,
		body    : "So turns out the earth... goes around the sun. Who knew?",
		user    : users[0],
		comments: [
			comments[0],
			comments[1],
			comments[2],
			comments[3],
			comments[4],
		]
	},
	{
		id      : 2,
		body    : "Crazy news... looks like all living creatures evolved from more basic forms over millennia.",
		user    : users[2],
		comments: [
			comments[5],
			comments[6],
			comments[7]
		]
	}
]