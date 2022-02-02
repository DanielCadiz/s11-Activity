console.log('Commands:')
console.log('addStudent()');
console.log('countStudents()');
console.log('printStudents()');
console.log('findStudent()');
console.log('addSection()');

let student = [];
//let searchedName;

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

/*function searchStudent() {
	let searchName = prompt('Find Student:');
	searchedName = student.filter(function(name){
		return name.toLowerCase().includes(searchName.toLowerCase());
	})
}

function findStudent() {
	searchStudent();
	if (searchedName == false) {
		console.log("No student found with the name " + searchName);
	} else {
		if (searchedName.length > 1){
			console.log(searchedName.join(', ') + " are enrollees");
		} else {
			console.log(searchedName.toString() + " is an Enrollee");
		}
	}
}*/

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
	let sectionedStudents = student.map(function(name){
		return name + " - section " + section;
	})
	console.log(sectionedStudents);
}

function removeStudent(name) {
	let firstUp = name[0].toUpperCase();
	console.log('firstUp: '+ firstUp);
	let newname = name.slice(0, 1, firstUp);
	console.log('newname: '+ newname);
	console.log(name[0].toUpperCase());
	console.log(name);
	let studentIndex = student.indexOf(newname);
	console.log('index: '+ student);
	return student.splice(studentIndex, 1);
}