function myFunction( element,index ) {
    console.log( `${index}: ${element}`);
}
function iterativeLog(tab){

  tab.forEach(myFunction);

}

function iterate(func){
  var tab =["dog", "fish", "cat"];
  tab.forEach(func);
  return tab;
}
function doToArray(array, callback){

array.forEach(callback);
  }
