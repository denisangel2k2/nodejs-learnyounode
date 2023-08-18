let sum :number;
sum=0;
let args=process.argv;
for (let i=2; i<args.length; i++)
{
    sum+=Number(args[i]);
}
console.log(sum);
