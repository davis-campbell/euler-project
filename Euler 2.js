var n = 0;

var fibonacci = [1, 2]

for (i = 2; fibonacci[i-1] < 4000000; i++){
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

var arrayLength = fibonacci.length;
 
for (i=0; i < arrayLength; i++){
	if (fibonacci[i] % 2 == 0){
		n += fibonacci[i];
	}
}

console.log(n);