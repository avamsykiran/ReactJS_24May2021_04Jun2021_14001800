
export function greet(){
    return "Hello";
}

export function greetUser(username="somebody"){
    //return "Hello " + username;
    return `Hello ${username}`; //template literal
}

export function greetUserAsPerTime(username="nobody"){
    let greet = "";

    let today = new Date();
    let h = today.getHours();

    if(h>=3 && h<=11){
        greet = "Good Morning ";
    }else if(h>=12 && h<=16){
        greet = "Good Noon";
    }else {
        greet="Good Evening"
    }

    return `${greet} ${username}`; //template literal
}

export const greetAll = function(userNames){
   /* for(let i=0;i<userNames.length;i++){
        console.log(greetUser(userNames[i]));
    }*/

    let str = `${userNames}`;
    console.log(greetUser(str));
}