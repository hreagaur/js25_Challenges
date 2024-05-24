// Vowel Count

function getCount(str) {
    let vcount=0;
    
    const vowels="aeiou";
    
    for(let char of str){
      if(vowels.includes(char)) {
        vcount++;
      }
    }
    return vcount;
  }