// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sml = args[0];
      
      for (let i = 1; i < args.length; i++) {
        if (args[i] < sml) {
          sml = args[i];
        }
      }
      
      return sml;
    }
  }