import { StringCalculator } from './string-calculator';

console.log(StringCalculator.add('1,2,3,4,5'));
console.log(StringCalculator.add('1\n2\n3\n4\n5'));
console.log(StringCalculator.add('//;\n1;2;3;4;5'));
console.log(StringCalculator.add('//#\n1#2#3#4#5'));
console.log(StringCalculator.add('//[+++]\n1+++2+++3+++4+++5'));
console.log(StringCalculator.add('//[(((][)))]\n1(((2(((3)))4)))5'));
console.log(StringCalculator.add('//[a][b][c][d]\n1a2b3c4d5'));
console.log(StringCalculator.add('//[*][---][!]\n1,2*3---4!5\n6'));
console.log(StringCalculator.add('// \n1 2 3 4 5'));
console.log(StringCalculator.add('///\n1/2/3/4/5'));
console.log(StringCalculator.add('//\'\n1\'2\'3\'4\'5'));
console.log(StringCalculator.add('//*\n1\n2,3\n4*5'));
