/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str){
	let arr = str.split('-').map(function (item, index){
    if(index == 0){
      return item;
    } else{
     return item[0].toUpperCase() + item.slice(1); 
    }
  }).join('')
  return arr;
}
