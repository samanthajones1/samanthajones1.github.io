// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  //1b
  applyFilter(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

//1a
function applyFilter(filterFunction){

  //1c
  for (var q = 0; q < image.length; q++) { 

    for (var t = 0; t < image[q].length; t++) { 

      //2a
      var rgbString = image[q][t];

      //2b
      var rgbNumbers = rgbStringToArray(rgbString);
      
      //2c 
      filterFunction(rgbNumbers); 
      
      //2d
      rgbString = rgbArrayToString(rgbNumbers);

      //2e 

      image[q][t] = rgbString;

    }
    }
    

}


// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  Math.min(num, 225);
  Math.max(num, 0);
    

}

console.log(keepInBounds(-30)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(127)); // should print 127

// TODO 3: Create reddify function

function reddify(array){
  array[RED] = 200;

}

// TODO 6: Create more filter functions


// CHALLENGE code goes below here
