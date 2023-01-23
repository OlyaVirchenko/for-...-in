export default function orderByProps(obj, args = []) {
  let properties = [];
  for (const item in obj) {
    if (args.indexOf(item) === -1) {
      properties.push(item);
    }
  }

  properties = [...args, ...properties.sort()];
  const result = [];
  for (const item of properties) {
    result.push({ key: item, value: obj[item] });
  }
  return result;
}
