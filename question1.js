const lowerCaseWords = (mixedArray) => {
    
    return new Promise((resolve, reject) => {
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
     
        const filterHavingStr = mixedArray.filter((everyElementsOfArray) => typeof everyElementsOfArray === "string");
  
      
        const mappingLower = filterHavingStr.map((filterArray) =>
          filterArray.toLowerCase()
        );
  
        
        resolve(mappingLower);
      } else {
        
        reject("Your array is not valid");
      }
    });
  };
  
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  
  
  lowerCaseWords(mixedArray)
    .then((value) =>
     
      console.log(value)
    )
    .catch((error) =>

      console.log(error)
    );