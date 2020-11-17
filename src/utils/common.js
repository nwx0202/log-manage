export function debounce(fn, delay = 300) {
  let timer = null;
  return function() {
    // const arg = arguments;
    // console.log(timer);
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // fn.apply(this, arg)();
      fn();
    }, delay);
  };
}
