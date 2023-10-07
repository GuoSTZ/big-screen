// 单位处理

/**
 * px 转化为 page size
 * @param {Number} px 设计图px值
 * @return page size
 */
export const pxToPh = (px: number) => {
  const fontSizeStr = document.documentElement.style.fontSize;
  const fontSize = +fontSizeStr.replace('px', '') || 192;
  const scale = fontSize / 192
  return Number((px * scale).toFixed(2))
}

/**
 * 千分位分割
 * @param num 数值
 * @returns 千分位数字
 */
export const toThousands = (num: number) => {
  if (!num || typeof num !== 'number') {
    return num
  }
  const numArr = num.toString().split('.');
  let integer = numArr[0];
  let result = numArr[1] ? `.${numArr[1]}` : ''
  while (integer.length > 3) {
    result = `,${integer.slice(-3)}${result}`;
    integer = integer.slice(0, integer.length - 3);
  }
  if (integer) {
    result = integer + result
  }
  return result
}

console.log(toThousands(230.2))