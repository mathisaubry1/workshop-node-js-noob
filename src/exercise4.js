exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
  function repeat (nb_repeat, string)
  {
    var repeated_string = string;

    for (i = 1; i < nb_repeat; i++)
    {
      repeated_string = repeated_string + ", " + string;
    }
    return (repeated_string);
  }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
