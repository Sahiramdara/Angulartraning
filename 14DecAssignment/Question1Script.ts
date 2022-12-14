let result=(a:string,b:string,c:string):[string,number][] =>{
    return [[a,a.length], [b,b.length], [c,c.length]];
};
console.log(result('Ram','Shyam','Govind'));