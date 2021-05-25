export default class Series {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    generate = () => {

        const job = (resolve,reject) => {

            if(this.start>=this.end){
                reject("Invlid limits")
                return;
            }

            let current = this.start;
            let h = setInterval(() => {
                console.log(current);
                current++;
                if (current > this.end) {
                    clearInterval(h)
                    resolve("Job is done!")
                }
            }, 1000);
        };

        let p = new Promise(job);

        return p;
    }
}