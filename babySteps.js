array = process.argv;
sum = 0;
for(i = 2; i < process.argv.length; i++){
	sum += Number(array[i]);
}
console.log(sum);
