console.log('Hello there!');
import('./dynamic.js').then((module) => console.log(module.default("General Kenobi!")));