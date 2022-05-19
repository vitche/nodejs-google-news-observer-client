import Reference from "./main.js";

const reference = new Reference("http://34.239.11.167:85");
const eventsPromise = reference.event().list("6232623f64bd68001d0a2ac1");
eventsPromise.then((results) => {
    console.log(results);
});
