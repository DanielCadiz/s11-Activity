console.log('Commands:')
console.log('addStudent()');
console.log('countStudents()');
console.log('printStudents()');
console.log('findStudent()');
console.log('addSection()');
console.log('removeStudent()');

let student = [];
let sectionedStudents = [];

function addStudent(name) {
	if(name==null){
	console.log("Please add name.")
	} else {
	student.push(name);
	console.log(name + " was added to the student's list.")
	}
}

function countStudents() {
	if(student.length !== 1){
		console.log("There are a total of " + student.length + " students enrolling.");
	} else {
		console.log("There are a total of " + student.length + " student enrolling.");
	}
}

function printStudents() {
	student.sort();
	student.forEach(function(name){
		console.log(name);
	})
}

function findStudent() {
	let searchName = prompt('Find Student:');
	let searchedName = student.filter(function(name){
		return name.toLowerCase().includes(searchName.toLowerCase());
	})

	if (searchedName == false) {
		console.log("No student found with the name " + searchName);
	} else {
		if (searchedName.length > 1){
			console.log(searchedName.join(', ') + " are enrollees");
		} else {
			console.log(searchedName.toString() + " is an Enrollee");
		}
	}
}

function addSection(section) {
	sectionedStudents = student.map(function(name){
		return name + " - section " + section;
	})
	return sectionedStudents;
}

function removeStudent(name) {
	let first = name.slice(0,1).toUpperCase();
	let rest = name.slice(1,name.length);
	let full = first+rest;
	let index = student.indexOf(full);

	if(index >= 0) {
		student.splice(index, 1);
		console.log(name + " was removed from the student's list.")
	} else {
		console.log("No student found.")
	}
}