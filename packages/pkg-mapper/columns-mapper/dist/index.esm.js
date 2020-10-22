import { Columns } from '@vect/column-getter';

const iterate = function (mx, fnOnColumns, h, w) {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);

  for (let j = 0, cols = Columns(mx); j < w; j++) fnOnColumns.call(this, cols(j, h), j);
};

const mapper = (mx, mapOnColumns, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length); // 'mapperColumns' |> logger

  const tcol = Array(w);

  for (let j = 0, cols = Columns(mx); j < w; j++) {
    tcol[j] = mapOnColumns(cols(j, h), j); // Xr().index(j).col(cols(j, h)).result(tcol[j]) |> logger
  } // tcol |> logger


  return tcol;
};

export { iterate, mapper };
