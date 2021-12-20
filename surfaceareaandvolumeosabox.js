function getSize(width, height, depth){
  let area = (width * height + height * depth + width * depth) * 2;
  let volume = width * height * depth;
  return [area, volume];
}