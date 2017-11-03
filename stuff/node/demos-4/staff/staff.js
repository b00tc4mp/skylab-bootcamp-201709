let staff = [
	'Enric Bertran',
	'Gemma Casanovas',
	'Kevin Palomino',
	'Marc Recasens',
	'Miguel Escolano',
	'Pablo Mangione',
	'Pau Sarobe',
	'Ricardo Martinez',
	'Sergi Picazo',
	'Soledad Lopez',
	'Victor Malo'
]

staff = staff.map((person, id) => {
	const names = person.split(' ')

	return { id, name: names[0], surname: names[1] }
})

require('fs').writeFileSync('staff.json', JSON.stringify(staff, null, 4))

