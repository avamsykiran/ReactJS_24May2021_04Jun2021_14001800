
const method1 = () => {
    let count =1;

    return () => {
        count++;
        return count;
    }
};

export default  method1;