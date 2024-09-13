intersection(
	[[8, 12], [17, 22]],
	[[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
	[[9, 15], [18, 21]],
	[[10, 14], [21, 22]] 
) // [[10, 14]]

function intersection(user1, user2) {
	let i = 0
	let j = 0
	const res = []

	while( i < user1.length && j < user2.length) {
		const [user1Start, user1End] =  user1[i]
		const [user2Start, user2End] =  user2[j]

		const start = Math.max(user1Start, user2Start)
		const end = Math.min(user1End, user2End)

		if(start < end) {
			res.push([start, end])
		}

		user1End < user2End ? i++ : j++
	}
	console.log('file: index.js:15 ~ res:', res)
	return res
}
