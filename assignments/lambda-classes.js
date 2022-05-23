// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

const objectPerson = new Person({
    name: 'Fred',
    age: '25',
    location: 'Bedrock'
})

objectPerson.speak();

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)

    }
    grade(student, subject){
     student = {
            name: 'Kofi'
        }
        subject = 'React'
        
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}



const objectInstructor = new Instructor({
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Don\'t forget the homies',
    student: 'kofi'
})

objectInstructor.demo('closures');
objectInstructor.grade();

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(student, subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(student, subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

const objectStudent = new Student({
    previousBackground: 'computer science',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

objectStudent.listsSubjects();
objectStudent.PRAssignment('tt', 'Js1');
objectStudent.sprintChallenge('', 'js1');

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const objectProjectManager = new ProjectManager({
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    name: 'Desmond'
})

objectProjectManager.standUp('buzzy');
objectProjectManager.debugsCode('', 'js1');
