// Modules in JS
// Modules are used to divide the code into multiple files
// Modules are used to import and export the code from one file to another
// Modules are used to make the code more readable and maintainable


export const greet = () => {
    console.log('Hello Shubham');
}

export const specialGreetings = (name) => {
    console.log(`Hello ${name}`);
}

  module.exports = {greet, specialGreetings};