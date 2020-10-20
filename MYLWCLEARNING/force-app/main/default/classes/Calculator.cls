Public class Calculator{

Public Integer Calculate(String Op, Integer num1, Integer num2){
Integer result;

If(Op=='Add'){
result=num1+num2;
}

else If(Op=='Sub'){
result=num1-num2;
}

else If(Op=='Mul'){
result=num1*num2;
}

else If(Op=='Div'){
result=num1/num2;
}

else{
system.debug('Please enter valid operator');
}

system.debug('Result: '+result);
return result;

}

}