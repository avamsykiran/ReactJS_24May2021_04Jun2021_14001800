
const arrayDemo = () => {

    console.log("----------------------------------------------------------")
    console.log("All array examples");
    console.log("----------------------------------------------------------")


    let arr1 = [];

    console.log(arr1);

    arr1.push("Vamsy")
    arr1.push("Sagar")
    arr1.push("Suseela")
    arr1.push("Srinu")
    console.log(arr1);

    let arr2 =[...arr1,"Deepa"];
    console.log(arr2);

    console.log(arr2.find(ele => ele.endsWith("r")))
    console.log(arr2.findIndex(ele => ele.endsWith("r")))

    arr1.forEach(ele => console.log(`${ele}\t${ele.length}`))

    arr1.filter(ele => ele.startsWith("S")).forEach(ele => console.log(ele))

    arr1.map(ele => ele.toUpperCase()).forEach(ele => console.log(ele))

};

export default arrayDemo;