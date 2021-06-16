let a = 123346756575475475456;

do{
  a=a.toString().split("").map(i=>Number(i)).reduce((x,y)=>x+y,0)
console.log(a);
}
while(a.toString().length>1)
