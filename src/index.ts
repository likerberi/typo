interface Human {
	name: string;
	age : number;
	gend: string;
}

const person = {
	name: "CHOI",
	age : 30,
	gend: "male",
};

const printFunc = (person: Human) => {
	return `${person.name}, you are ${person.age}, and ${person.gend}`;
}

console.log(printFunc(person))

export {};