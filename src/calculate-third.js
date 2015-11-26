function even_group_calculate_average(arr) {
  var arr1=new Array();var arr2=new Array();var arr3= [0,0,0];var arr4 = new Array();
  for(var i=0;i<arr.length;i++)
  {
    if(i%2==1)
    {
      arr1.push(arr[i]);
    }
  }
  for(var i=0;i<arr1.length;i++)
  {
    if(arr1[i]%2==0)
    {
      arr2.push(arr1[i]);
    }
  }
  console.log(arr2);
  if(arr2.length==0)
  {
    arr2=[0];
    return arr2;
  }
  else
  {
    var one_num=0,two_num=0,thr_num=0;var digit=0;
    for(var i=0;i<arr2.length;i++)
    {
      digit=arr2[i].toString().length;
      console.log(digit);
      switch(digit)
      {
        case 1:
          one_num++;
          arr3[0]+=arr2[i];
          console.log(arr3[0]);
          break;
        case 2:
          two_num++;
          arr3[1]+=arr2[i];
          console.log(arr3[1]);
          break;
        case 3:
          thr_num++;
          arr3[2]+=arr2[i];
          console.log(arr3[2]);
          break;
        default:
          break;
      }
    }
    if(one_num!=0) {
      arr4.push(arr3[0]/one_num);
    }
    if(two_num!=0)
    {
      arr4.push(arr3[1]/two_num);
    }
    if(thr_num!=0)
    {
      arr4.push(arr3[2]/thr_num);
    }
    return arr4;
  }
}
