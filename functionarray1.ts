function Display (Arr : number []) : void //funtion defination
{
  console.log("Element of array are : ");

  var i : number = 0;
  for ( i=0; i<Arr.length;i++)
  {
    console.log(Arr[i]);
    
  }
}



var Marks : number [] = [67,89,77,90,88];
Display(Marks);//function call 



