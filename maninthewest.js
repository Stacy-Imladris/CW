function checkTheBucket(bucket){
  let result = 0;
  for (let i = 0; i < bucket.length; i++){
    if (bucket[i] === "gold"){
      result += 1;
    }
  }
  return result > 0 ? true: false;
}