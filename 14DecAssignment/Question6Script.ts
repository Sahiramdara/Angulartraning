class CountSample
{
    stringValue:string;
    constructor(stringValue:string)
    {
        this.stringValue=stringValue;
    }
    getCount()
    {     const vowel=['a','e','i','o','u']
         var result=0;
        for(let char of this.stringValue)
        {  
            if(vowel.includes(char,1)){
              result=  this.getVowelCount(this.stringValue);
              console.log("Total vowel count is "+ result);
            }
            else
            {
               result=  this.getConstCount(this.stringValue);
               console.log("Total Const count is "+ result);
            }
            break;
        }
       
    }

    getVowelCount(str:String):number {
        var vowelCount=0;
        const vowel=['a','e','i','o','u']
        for(let char of str)
        {
            if(vowel.includes(char)){
                vowelCount++;
            }
        }
        return vowelCount;
    }
    getConstCount(str:string):number{
        var constCount=0;
        const vowel=['a','e','i','o','u']
        for(let char of str)
        {
            if(!vowel.includes(char)){
                constCount++;
            }
        }
        return constCount;
    }
}

let response=new CountSample('Sahiram');
response.getCount();