// Map range of number to another range
let map = function(value, x1, y1, x2, y2)
{
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

// Get random integer between minimum and maximum
function getRandomArbitrary(min, max)
{
  return Math.random() * (max - min) + min;
}