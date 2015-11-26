function single_element(arr) {
  var arr1= new Array();
  for(var i=0;i<arr.length;i++)
  {
    if(i%2==1)
    arr1.push(arr[i]);
  }
  var arr2 = new Array();

  for(var i=0;i<arr1.length;i++)
  {
    if(arr1.indexOf(arr1[i])==arr1.lastIndexOf(arr1[i]))
      arr2.push(arr1[i]);
  }
  return arr2;
}
