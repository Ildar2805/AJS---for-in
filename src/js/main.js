export default function orderByProps(obj, filterBy) {
  const filtered = [];
  const copyObj = { ...obj };

  for (let i = 0; i < filterBy.length; i += 1) {
    Object.keys(obj).forEach((key) => {
      if (key === filterBy[i]) {
        const propertyFromFilter = {};
        propertyFromFilter.key = filterBy[i];
        propertyFromFilter.value = obj[key];
        filtered.push(propertyFromFilter);
        delete copyObj[filterBy[i]];
      }
    });
  }

  const filteredKeys = Object.keys(copyObj).sort();
  filteredKeys.forEach((k) => {
    const property = {};
    property.key = k;
    property.value = obj[k];
    filtered.push(property);
  });

  return filtered;
}
