import { draft } from '@vect/matrix-init';

function iterzip(mxa, mxb, y, proc) {
  const hi = mxa?.length;
  for (let i = 0; i < hi; i++)
    proc(mxa[i][y], mxb[i][y], i);
  return void 0
}

const mutazip = (mxa, mxb, y, pair) => {
  const hi = mxa?.length;
  for (let i = 0; i < hi; i++)
    mxa[i][y] = pair(mxa[i][y], mxb[i][y], i);
  return mxa
};

const zip = (mxa, mxb, y, pair) => {
  const hi = mxa?.length;
  const mx = draft(hi, y);
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], i);
  return mx
};

function duozipper(mxa, mxb, y, pair) {
  const hi = mxa?.length;
  const mx = draft(hi, y);
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], i);
  return mx
}

function trizipper(mxa, mxb, mxc, y, pair) {
  const hi = mxa?.length;
  const mx = draft(hi, y);
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], mxc[i][y], i);
  return mx
}

function quazipper(mxa, mxb, mxc, mxd, y, pair) {
  const hi = mxa?.length;
  const mx = draft(hi, y);
  for (let i = 0; i < hi; i++)
    mx[i][y] = pair(mxa[i][y], mxb[i][y], mxc[i][y], mxd[i][y], i);
  return mx
}

export { duozipper, iterzip, mutazip, quazipper, trizipper, zip, zip as zipper };
