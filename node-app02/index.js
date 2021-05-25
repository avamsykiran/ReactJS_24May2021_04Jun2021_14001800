import Series from "./Series.js";

let s1 = new Series(1,10);
let s2 = new Series(100,110);
let s3 = new Series(1000,110);

let p1 =s1.generate();
let p2 =s2.generate();
let p3 =s3.generate();

p1.then(
    result => console.log(result),
    err => console.log(err)
);

p2.then(
    result => console.log(result),
    err => console.log(err)
);

p3.then(
    result => console.log(result),
    err => console.log(err)
);