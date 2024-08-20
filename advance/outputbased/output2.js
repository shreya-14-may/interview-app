// 3. Write the code to find the vowels

const findVowels = (str)=>{
    let count =0;
    for(let i=0; i< str.length; i++){
        if(['a','e','i','o','u'].includes (str[i].toLowerCase())) count++
    }
    return count;

}


console.log(findVowels("Deboshree"));