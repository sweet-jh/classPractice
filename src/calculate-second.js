function calculate_median(arr) {
  var arr1= new Array();
  for(var i=0;i<arr.length;i++)
  {
    if(i%2==0)
    {
      arr1.push(arr[i]);
    }
  }
  arr1.sort(function(a,b){
              return a-b});
  if(arr1.length%2==1)
  {
    return arr1[(arr1.length-1)/2];
  }
  else
  {
    return arr1[arr1.length/2];
  }

}
