var n = prompt('Pick a number');
var finished = false
var gpf = 0

for (i = n-1; finished == false; i-- ){
	var isPrime = false;
	if (n % i != 0) {
		continue;
	}
	for (a=2; a < i; a++){
		if (i % a == 0){
			isPrime = false;
			break;
		}
		else {
			isPrime = true;
		}
	}
	if (isPrime == false){
		continue;
	}
	finished = true;
	gpf = i;
}

console.log(gpf);