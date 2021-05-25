
export class Employee{
    
    constructor(id,name,sal,ta,hra){
        this.id=id;
        this.name=name;
        this.sal=sal;
        this.hra=hra;
        this.ta=ta;
    }

    grossPay(){
        return this.sal+this.hra+this.ta;
    }

}

export class Manager extends Employee{
    constructor(id,name,sal,ta,hra,allowence){
        super(id,name,sal,ta,hra)
        this.allowence=allowence;
    }

    grossPay(){
        return this.sal+this.hra+this.ta+this.allowence;
    }
}