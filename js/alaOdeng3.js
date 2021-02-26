let actors = {
	danial: 3,
	george: 5,
	sean: 9,
	tim: 20,
	joe: 21
};

let minIndex = 0;
let totalActors = Object.keys(actors);
let count = Object.values(actors);

//get min count in actors
minIndex = count.indexOf(Math.min(...count));

//print result

console.log(Object.keys(actors)[minIndex]);

var json = [
	{
		id: '1',
		msg: 'hi',
		tid: '2013-05-05 23:35',
		fromWho: 'hello1@email.se'
	},
	{
		id: '2',
		msg: 'there',
		tid: '2013-05-05 23:45',
		fromWho: 'hello2@email.se'
	}
];

json.forEach((item, index) => {
	console.log(index);
});
