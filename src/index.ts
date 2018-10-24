import { StringCalculator } from './string-calculator';

let stringCalculator = new StringCalculator();
console.log(stringCalculator.add('1,2,3,4,5'));
console.log(stringCalculator.add('1\n2\n3\n4\n5'));
console.log(stringCalculator.add('//;\n1;2;3;4;5'));
console.log(stringCalculator.add('//#\n1#2#3#4#5'));
console.log(stringCalculator.add('//[+++]\n1+++2+++3+++4+++5'));
console.log(stringCalculator.add('//[(((][)))]\n1(((2(((3)))4)))5'));
console.log(stringCalculator.add('//[a][b][c][d]\n1a2b3c4d5'));
console.log(stringCalculator.add('//[*][---][!]\n1,2*3---4!5\n6'));
console.log(stringCalculator.add('// \n1 2 3 4 5'));
console.log(stringCalculator.add('///\n1/2/3/4/5'));
console.log(stringCalculator.add('//\'\n1\'2\'3\'4\'5'));
console.log(stringCalculator.add('//*\n1\n2,3\n4*5'));
