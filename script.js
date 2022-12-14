function task_1(){
    const number = document.getElementById('“inputName”');
    console.log('Hello '+ number.value);
}

function task_2(){
    const pas1 = document.getElementsByName('pas1');
    const pas2 = document.getElementsByName('pas2');
    if(pas1==pas2){
        console.log('Equal');
    } else {
        console.log('Not equal');
    }
}

function task_3(){
    const max = document.getElementsByName('max')
    const random = Math.floor(Math.random() * max);
    console.log(random);
}