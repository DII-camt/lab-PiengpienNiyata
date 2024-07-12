const students = [
    662110182, 662110183, 662110184, 662110185, 662110186, 
    662110187, 662110188, 662110189, 662110190, 662110191, 
    662110192, 662110193, 662110194, 662110195, 662110196, 
    662110197, 662110198, 662110199, 662110200, 662110201, 
    662110202, 662110203, 662110204, 662110205, 662110265, 123456789
];

function groupRandom(students, groupSize) {
    const groups = [];
    const numGroups = Math.ceil(students.length / groupSize); // returns the smallest integer greater than or equal to a given number
    let leftOut = students.length % groupSize;

    students.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numGroups; i++) {
        let groupLength = groupSize;
        if (leftOut > 0) {
            groupLength++;
            leftOut--;
        }

        const currentGroup = students.splice(0, groupLength);//The splice() method adds and/or removes array elements.
        if (currentGroup.length > 0) {
            groups.push(currentGroup);
        }
    }

    return groups;
}

const GroupSize = 5; // Define group size
const groupedStudents = groupRandom(students, GroupSize);
console.log(groupedStudents);
