function single_element(arr) {
  var l = arr.length;
  var arr1 = Array();
  var arr2=Array();var k=0;
  var m=0;
  for(var i=0;i<l+1;i++)
  {
    if( i%2 !=0 )
    {
    arr1[k] = arr[i];
    k++;
    }
  }

  var sum=0;
  for(var i=0;i<arr1.length+1;i++)
  {
    sum=0;
    for(var j=0;j<l;j++)
    {
      if(arr1[i]==arr[j])
        sum++;
    }

    if(sum == 1)
    {
      arr2[m]=arr1[i];
      m++;
    }
  }

  return arr2;
}
