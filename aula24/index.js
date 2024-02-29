const hour = 25;

let greeting;

if ((hour >= 0 && hour < 12) || hour == 24) {
    greeting = 'Good morning';
} else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon';
} else if (hour >= 18 && hour < 24) {
    greeting = 'Good night';
} else {
    greeting = 'Invalid input';
}


console.log(greeting, hour);