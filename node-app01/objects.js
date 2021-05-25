import {Employee,Manager} from './classes.js'

const objDemo = () =>{
    console.log("----------------------------------------------------------")
    console.log("Obj Demos");
    console.log("----------------------------------------------------------")
    

    let e = new Employee(111,"Sisira",4567,789,890)
    let m = new Manager(222,"Ravali",5678,789,890,909)
    console.log(e)
    console.log(e.grossPay())
    console.log(m)
    console.log(m.grossPay())
    
    console.log("----------------------------------------------------------")
    
    let emp = {id:101,name:'Vamsy',sal:3456.0,name:"Kiran"}
    console.log(emp);

    /*
    let sal = emp.sal;
    let name = emp.name;
*/

    let {sal,name} = emp;
    console.log(`${name}\t${sal}`)
    
    sal = sal*6;

    let emp2 = {id:102,name,sal};
    console.log(emp2)

    let emp3 = {...emp2,id:110,ta:456,hra:789};
    console.log(emp3);

    let emps = [
        {id:101,name:'Vamsy',sal:3456.0,ta:456,hra:567},
        {id:102,name:'Suseela',sal:2456.0,ta:556,hra:167},
        {id:103,name:'Srinu',sal:3436.0,ta:356,hra:267},
        {id:104,name:'Sagar',sal:1456.0,ta:356,hra:367},
        {id:105,name:'Indhikaa',sal:10456.0,ta:556,hra:867}
    ];
    console.log(emps);
    console.log("----------------------------------------------------------")
    emps.forEach(e => e.gross=e.sal+e.hra+e.ta);
    console.log(emps);
   
};

export default objDemo;