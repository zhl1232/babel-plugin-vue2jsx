import syntaxJsx from "@babel/plugin-syntax-jsx";
export default function ({ types: t }) {
  return {
    name: "babel-plugin-vue2jsx",
    inherits: syntaxJsx,
    visitor: {
      // Identifier(path) {
      //   console.log(path.type, path.node.name);
      // },
      // CallExpression(path) {
      //   if (
      //     path.node.callee &&
      //     t.isIdentifier(path.node.callee.object, { name: "console" })
      //   ) {
      //     path.remove();
      //   }
      // },
      JSXElement: {
        exit(path) {
          console.log(t)
          console.log(path)
        }
      }
    },
  };
}
