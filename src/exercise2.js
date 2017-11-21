exports.run = function(input)
{
  var max = 0;  
  input.split("");
  for (i = 0; input[i]; i++)
  {
    if (input[i] > max)
    {
      max = parseInt(input[i]);
    }
  }
  return (max);
};
