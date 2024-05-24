// Counting sheep...

function countSheeps(sheep) {
  
    let sheepCount = 0;
  
    
    for (let i = 0; i < sheep.length; i++) {
    
      if (sheep[i]) {
      
        sheepCount++;
      }
    }
  
    return sheepCount;
  }