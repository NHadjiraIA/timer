const timer = function(arr){
 arr.forEach(element => {
   setTimeout(()=>{
    process.stdout.write('\x07');
   }, element * MILLISECONDS_RATIO);
 }); 
}
ringTimes = process.argv
            .slice(2)
            .map(x => Number(x))
            .filter(x => x >= 0 && x !== NaN);
 
ringTimes = ringTimes.sort((a, b) => {
  return a - b;
});

//Run function
const MILLISECONDS_RATIO = 1000;
timer(ringTimes);
