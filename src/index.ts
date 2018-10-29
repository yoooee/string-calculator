import { StringCalculator } from './string-calculator';

const stringCalc = new StringCalculator();

stringCalc.add('1,2,3,4,5');
stringCalc.add('1,2,3,4,5');
stringCalc.add('1\n2\n3\n4\n5');
stringCalc.add('//;\n1;2;3;4;5');
stringCalc.add('//#\n1#2#3#4#5');
stringCalc.add('//[+++]\n1+++2+++3+++4+++5');
stringCalc.add('//[(((][)))]\n1(((2(((3)))4)))5');
stringCalc.add('//[a][b][c][d]\n1a2b3c4d5');
stringCalc.add('//[*][---][!]\n1,2*3---4!5\n6');
stringCalc.add('// \n1 2 3 4 5');
stringCalc.add('///\n1/2/3/4/5');
stringCalc.add('//\'\n1\'2\'3\'4\'5');
stringCalc.add('//*\n1\n2,3\n4*5');
