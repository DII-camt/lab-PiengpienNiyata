// Hanoi Tower function
const hanoi = (n, from, to, aux) => {
    if (n === 1) {
        console.log(`${from} --> ${to}`);
        return;
    }
    hanoi(n - 1, from, aux, to);
    console.log(`${from} --> ${to}`);
    hanoi(n - 1, aux, to, from);
};

// Run the Hanoi Tower function with 3 disks
hanoi(3, 'A', 'C', 'B');
