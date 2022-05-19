import Reference from "./main.js";

const reference = new Reference("http://34.239.11.167:85");
const eventsPromise = reference.event().list("62379ef264bd68001d0a581a");
eventsPromise.then((results) => {
    console.log(results);
});
