var blocks = [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": true,
    }
    ]
    var reqs = ["gym", "school", "store"]
    // console.log(blocks);
    const result=apartmentHunting(blocks, reqs); 
    function apartmentHunting(blocks, reqs) {
      // Write your code here.
     

      for(var i=0; i<blocks.length; i++){
        
        console.log("Block :" +i)
        for(var j=0; j<reqs.length; j++){
            // console.log(reqs[j]);
            var value=reqs[j];
    let index=reqs.indexOf(value);

        // console.log(reqs);
// console.log(index);
    
     
            
        if((index==0) && (blocks[i][value]==true) ){
            // console.log(index);
            console.log("gym near");
        
        }
      else if((index==1) && (blocks[i][value]==true)) {
        console.log("school near");
      }
      else if((index==2) && (blocks[i][value]==true)){
        console.log("store near");
      }
        
        }

    }
        return blocks
            
          
    }
   
    // Do not edit the line below.
    exports.apartmentHunting = apartmentHunting;
    
    