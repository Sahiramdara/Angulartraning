let result=(a:number[]):number[] =>{
    var sortedNumbers: number[] = a.sort((n1,n2) => n1 - n2);
    return sortedNumbers;
};
let numbers:number[] = [2, 3, 4, 1, 5, 8, 11];
console.log(result(numbers));