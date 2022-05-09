import { iterate } from '@vect/vector-mapper';

const union = (a, b) => {
  const ve = a.slice();
  iterate(b, x => {
    if (!a.includes(x)) ve.push(x);
  });
  return ve;
};
const intersect = (a, b) => {
  const ve = [];
  iterate(a, x => {
    if (b.includes(x)) ve.push(x);
  });
  return ve;
};
const difference = (a, b) => {
  const ve = [];
  iterate(a, x => {
    if (!b.includes(x)) ve.push(x);
  });
  return ve;
};

export { difference, intersect, union };
