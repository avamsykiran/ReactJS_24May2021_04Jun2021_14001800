
export const greet1 = () => "Hello";

export const greetUser1 = (username="somebody") => `Hello ${username}`; 

export const greetUserAsPerTime1 = (username="nobody") => {
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
};

export const greetAll1 = (userNames)=> console.log(greetUser1(`${userNames}`));