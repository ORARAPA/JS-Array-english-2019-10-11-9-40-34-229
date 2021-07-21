// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof(a));
console.log(typeof(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length ; i++){
	a[i] = a[i] * 2;
}
console.log(a);



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var newColors = "";
//TODO case 1 output: 'Red Green White Black'
for(var i = 0; i < colors.length ; i++){
	newColors = newColors + colors[i];
  	if (i != colors.length-1){
    	newColors = newColors + " ";
    }
}
console.log(newColors);
// case 2 output: 'Red+Green+White+Black'
var newColors = "";
for(var i = 0; i < colors.length; i++){
	newColors = newColors + colors[i];
  	if (i != colors.length-1){
    	newColors = newColors + "+";
    }
}
console.log(newColors);
// case 3 output: 'Red,Green,White,Black'
var newColors = "";
for(var i = 0; i < colors.length; i++){
	newColors = newColors + colors[i];
  	if (i != colors.length-1){
    	newColors = newColors + ",";
    }
}
console.log(newColors);
// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i=0;i<a.length;i++){
	for (var j=1;j<(a.length-i);j++){
    	if(a[j-1] < a[j]){
        	var tmp = a[j];
          	a[j] = a[j-1];
          	a[j-1] = tmp;
        }
    }
}
console.log(a);



// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var oldCount =0;
var newCount =0;
var most = "";

for(var i=0; i<a.length; i++){
	var curr = a[i];
  	for(var j=0; j<a.length; j++){
    	if(curr == a[j]){
          newCount = newCount + 1;
        }
    }
    if(oldCount < newCount){
    	most = curr;
        oldCount = newCount;
    }
    newCount = 0;
}
console.log(most);