let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];
const deletePerson = (personName) => {
	let newArray = people.filter((person) => person !== personName);		//delete a particular element from an array.
	return newArray;
}
//your code below
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

const greet = function (name) {
	console.log('hello' + name)
}

greet('Samuel')

const mergeArrays = (firstArray, secondArray) => {		//merge two arrays into one.
	const all = [...chunk_one, ...chunk_two]
	return all
}

console.log(mergeArrays(chunk_one, chunk_two));