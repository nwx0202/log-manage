export function dateFormat(time, aFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = aFormat || '{y}-{m}-{d}';

  let date;
  if (!time) {
    return '';
  } else if (time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && (/^[0-9]+$/.test(time))) {
      time = parseInt(time, 10);
    } else if (typeof time === 'number' && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate()
  };
  const timeRes = format.replace(/{(y|m|d)+}/g, (value, key) => {
    let val = formatObj[key];
    return val < 10 ? '0' + val : val;
  });

  return timeRes;
}