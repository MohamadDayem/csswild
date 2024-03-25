const tab = [10, 58, 29];

tab.forEach(function(element) {
 console.log(element);
});

////////////////////////////////////////////////////////
const tab = [10, 58, 29];

const mappedArray = tab.map(function(element) {
  return element * 2; 
});

console.log(mappedArray);


//////////////////////////////////////////


function myForEach(tab, callback)
{
    for(let i = 0; i < tab.length; i++) {
        callback(tab[i], i, tab)
    }
}

function myFilter(tab, callback)
{
    const newTab = [];
    for (let i = 0; i < tab.length; i++) {
        if (callback(tab[i], i, tab)) {
            newTab.push(tab[i])
        }
    }
    return newTab;
}

function myMap(tab, callback)
{
    const newTab = [];
    for (let i = 0; i < tab.length; i++) {
        newTab.push(callback(tab[i], i, tab))
    }
    return newTab;
}

////////////////////////////////////////////////////////////


//// Define a class called Student
class Student {
    constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  }
  
  // Creating an array of Student objects
  const students = [
    new Student('John', 18, 'A'),
    new Student('Alice', 17, 'B'),
    new Student('Bob', 16, 'C')
  ];
  
  // Using map to get an array of student names
  const studentNames = students.map(student => student.name);
  console.log("Student Names:", studentNames);
  
  // Using forEach to log details of each student
  console.log("Student Details:");
  students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
  });
////////////////////////////////
///william code 

class MyArray {
    constructor(tab = []) {
        this.tab = tab
    }
    
    forEach(callback) {
        for (let i = 0; i < this.tab.length; i++) {
            callback(this.tab[i], i, this.tab)
        }
    }
    
    filter(callback) {
        const newTab = []
        for (let i = 0; i < this.tab.length; i++) {
            if (callback(this.tab[i], i, this.tab)) {
                newTab.push(this.tab[i])
            }
        }
        return newTab;
    }
    
    map(callback) {
        const newTab = []
        for (let i = 0; i < this.tab.length; i++) {
            newTab.push(callback(this.tab[i], i, this.tab))
        }
        return newTab
    }
}