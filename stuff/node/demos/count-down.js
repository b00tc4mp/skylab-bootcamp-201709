let count = 3, from = new Date().getTime(), to

while (count) {
	console.log(count--)

	while((to = new Date().getTime()) - from < 1000); from = to
}