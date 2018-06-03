/**
 * 异步注册组件
 * @param {传入的组件数组} array
 * return {
 *    Button: function (resolve) {
 *      const { Button } = require('vant')
 *      resolve(Button)
 *    }
 *    ...
 * }
 */
export function registerComponents(components, path) {
  const p = path || 'diypage';
  const newComponents = {};
  components.forEach((c) => {
    newComponents[c] = (resolve) => {
      import(`@/components/${p}/${c}`).then((b) => {
        resolve(b);
      });
    };
  });
  return newComponents;
}

export function a() {}
