exports.run = function(input)
{
  var total = 1;
  var all_false = true;

  for (i = 0; input[i]; i++)
  {
    if (input[i].multiply === true)
    {
      total = total * input[i].value;
      all_false = false;
    }
  }
  if (all_false === true)
  {
    return (0);
  } else
  {
    return (total);
  }
};
