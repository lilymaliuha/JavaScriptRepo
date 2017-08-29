reverseArray([1,2,3,4,5]);

function reverseArray(myArray)
{
  var b;
  var N=9;
  for(var i=0; i<N/2; i++)
    {
      b=myArray[i];
      myArray[i]=myArray[N-i-1];
      myArray[N-i-1]=b;

      
    };
for(var j=0; j<N; j++)
  {
    console.log(myArray[j]);
  }

}

function reverseArrayInPlace()
{

}