class SmallestIntegerFinder {
  findSmallestInt(args) {
    const min = Math.min.apply(null, args);
    return min;
  }
}