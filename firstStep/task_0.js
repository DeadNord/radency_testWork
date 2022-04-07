// npm run task_0

class Combinatorics {
  static combine = (() => {
    let res = null;
    const combinations = (arr, k, start, idx, current) => {
      if (idx === k) {
        res.push([...current]);
        return;
      }
      for (let i = start; i < arr.length; i += 1) {
        current[idx] = arr[i];
        combinations(arr, k, i + 1, idx + 1, current);
      }
    };

    return (arr, k) => {
      res = [];
      combinations(arr, k, 0, 0, []);
      const temp = res;
      res = null;
      return temp;
    };
  })();
}

const chooseOptimalDistance = (t, k, ls) => {
  if (t < 0) {
    console.log("t >= 0");
  }
  if (k < 1) {
    console.log("k >= 1");
  }
  if (ls.length < 1) {
    console.log("ls >= 1");
  }
  const comb = Combinatorics.combine(ls, k);

  const sums = comb.map(i =>
    i.reduce(function (sum, elem) {
      return sum + elem;
    }, 0),
  );
  const filter = sums.filter(x => x <= t);
  const result = Math.max(...filter);

  if (result > 0) {
    console.log(result);
    return result;
  }
  console.log(null);
  return null;
};

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null
