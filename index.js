//write your code here
//Grade calculation
//Input Student grade
let score;
function gradeOperator(score){
if(score > 79 && score <= 100){
    return "grade: A"
}
else if(score > 60 && score < 79){

    return "grade: B"
    }
else if (score > 50 && score < 59){
   return "grade: C"
    }
else if(score > 40 && score < 49){
    return "grade: D"
    }
else if(score < 40 && score > 0){
     return "grade: E"
    }    
} 
    console.log(gradeOperator(77))
  
//if the avg > 79 > 60 - B
//if the avg > 59 > 49 - C
//if the avg > 49 > 40- D
//if the avg < 40 - E
let speed;
function moveSpeed(speed){
if(speed < 70){
    return 'OK'

}else if(speed > 70){
   let points = ((speed - 70) / 5)
    if(points >= 12){
        return 'License suspended'

    }else{
        return 'Points:' + points
    }
 
}
}

console.log(moveSpeed(10));

//net salary
//monthly taxable  = 24,000, 32,333, above 32,333
//annual taxable 288,000, 388,000, above 388,000

//let salary;
//let payee ; 
//let NHIF ;
//let NSSF ;
////let benefits; 
//function basicsalary(salary, benefits){
//    let gross = salary + benefits;
//    let NSSF = gross * 0.06;

//if(gross <= 24000){
//    payee(gross * 0.1)
//}else if(gross <= 32333 && gross >= 24001){
//    payee(gross * 0.25)
//}else if(gross >= 32333){
//    payee(gross * 0.3)
//}
//console.log('gross, salary;' , gross)
//console.log('payee, deduction;' , payee)
//console.log('NSSF, deduction;' , NSSF)

//NHIF
//    if(gross <= 5999 && gross >= 0){
//        payee(gross - 150)
//    }else if(gross <= 7999 && gross >= 6000){
//        NHIF(gross - 300)
//    }else if(gross <= 11999 && gross >= 8000){
//        NHIF(gross - 400)
//    }else if(gross <= 14999 && gross >= 12000){
//        NHIF(gross - 500)
//    }else if(gross <= 19999 && gross >= 15000){
//        NHIF(gross - 600)
//    }else if(gross <= 24999 && gross >= 20000){
//        NHIF(gross - 700)
//    }else if(gross <= 29999 && gross >= 25000){
//        NHIF(gross - 800)
//    }else if(gross <= 34999 && gross >= 30000){
//        NHIF(gross - 900)
//    }else if(gross <= 39999 && gross >= 35000){
//        NHIF(gross - 950)
//    }else if(gross <= 44999 && gross >= 40000){
//        NHIF(gross - 1000)
//    }else if(gross <= 49999 && gross >= 45000){
//        NHIF(gross - 1100)
//    }else if(gross <= 59999 && gross >= 50000){
//        NHIF(gross - 1200)
//    }else if(gross <= 69999 && gross >= 60000){
//        NHIF(gross - 1300)
//    }else if(gross <= 79999 && gross >= 70000){
//        NHIF(gross - 1400)
//    }else if(gross <= 89999 && gross >= 80000){
//        NHIF(gross - 1500)
//    }else if(gross <= 99999 && gross >= 90000){
//        NHIF(gross - 1600)
//    }else if(gross >= 100000){
//        NHIF(gross - 1700)}
//        console.log('NHIF deduction:', NHIF)
//        console.log('Taxes: payee + NSSF + NHIF :' + (NSSF + PAYE + NHIF ))
//        let netSalary = 'Net Salary:  ' + (gross - (NSSF + PAYE + NHIF ))
//        return netSalary;
//    }
//   console.log(basicsalary(60000, 2500));
let salary;
let benefits;
let NHIF;
let NSSF;
let PAYEE;
function basicsalary(salary, benefits){
    let gross = salary + benefits;
    let NSSF = gross * 0.06;
if (gross <= 24000) {
        PAYEE = (gross*0.1)
    }
    else if (gross >= 32333) {
       PAYEE = (gross*0.3)
    }
    else if (gross >= 24001) {
        PAYEE = (gross*0.25)
    }
console.log('Gross salary:', gross)
 console.log('PAYE deductions:', PAYEE)
 console.log('NSSF deduction:', NSSF)
//NHIF
        if (gross <= 5999 && gross > 0 ){
            NHIF = (150)}
        else if (gross > 6000 && gross <= 7999) {
            NHIF = (300)}
        else if( gross > 8000 && gross <= 11999){
            NHIF = (400)}
        else if ( gross > 12000 && gross <= 14999) {
            NHIF = (500) }
        else if (gross > 15000 && gross <= 19999) {
            NHIF = (600) }
        else if(gross > 15000 && gross <= 24999) {
            NHIF =  (750)}
        else if( gross > 25000 && gross <= 29999){
            NHIF = (850)}
        else if (gross > 30000 && gross <= 34999) {
            NHIF = (900) }
        else if (gross > 35000 && gross <= 39999) {
            NHIF = (950) }
        else if (gross > 40000 && gross <= 44999) {
            NHIF =(1000) }
        else if (gross > 45000 && gross <= 49999) {
            NHIF = (1100) }
        else if  (gross > 50000 && gross <= 59999){
            NHIF = (1200) }
        else if (gross > 60000 && gross <= 69999) {
            NHIF = (1300) }
        else if (gross > 70000 && gross <= 79999) {
            NHIF = (1400) }
        else if  (gross > 80000 && gross <= 89999) {
            NHIF = (1500) }
        else if (gross > 90000 && gross <= 99999) {
            NHIF = (1600) }
        else if (gross >= 100000) {
            NHIF = (1700)}
    console.log('NHIF deduction:', NHIF)
    console.log('Taxes: PAYEE + NSSF + NHIF :' + (NSSF + PAYEE + NHIF ))
    let netSalary = 'Net Salary:  ' + (gross - (NSSF + PAYEE + NHIF ))
    return netSalary;
}
        console.log(basicsalary(1200000, 350));