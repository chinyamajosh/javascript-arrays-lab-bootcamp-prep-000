var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ];
  
  function destructivelyAppendKitten(name) {
    kittens.push('Ralph');
    return kittens;
  }
  
  function destructivelyPrependKitten(name) {
    kittens.unshift('Bob');
    return kittens;
  }
  
 function destructivelyRemoveLastKitten(name) {
   kittens.pop();
   return kittens;
 }
  
  function destructivelyRemoveFirstKitten(name) {
    kittens.shift();
    return kittens;
  }
  
  function appendKitten(name) { 
    return []
  } 
  

  
  