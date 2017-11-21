exports.run = function(input)
{
  var fs = require("fs");
  
  fs.readdir(input.directory, function callback (err, list)
  {
    if (err)
    {
      input.showError;
    } else
    {
      input.showDone (list.length);
    }
  });
};