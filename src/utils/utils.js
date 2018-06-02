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
  path = path || "diypage";
  const newComponents = {};
  components.forEach(c => {
    newComponents[c] = resolve => {
      import(`@/components/${path}/${c}`).then(b => {
        resolve(b);
      });
    };
  });
  return newComponents;
}
