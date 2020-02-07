export const isMatrix = mx => Array.isArray(mx) && mx.length ? Array.isArray(mx[0]) : false

export const isMatrixLoose = mx => mx?.length ? mx[0]?.length : false
