console.log("video N' 150");

let obj = {
	userNmae0: 'santa',
	userNmae1: 'rudolf',
	userNmae2: 'mr.grinch'
}

// turn the object to array
Object.keys(obj).forEach((key,index) => {
	console.log(key,obj[key]);
});

// take the values
Object.values(obj).forEach( (value) => {
	console.log(value);
});


Object.entries(obj).forEach( (value) => {
	console.log(value);
});

let newObj = Object.entries(obj).map( (value) => {
	return value[1] + value[0].replace('userNmae','');
});

console.log(newObj);