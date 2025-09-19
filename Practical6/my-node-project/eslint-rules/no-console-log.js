/**
 * @fileoverview A custom rule to disallow console.log statements.
 * @author Mandar Gurjar
 */

"use strict";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of console.log",
      recommended: true,
    },
    messages: {
      noConsoleLog: "Using console.log is not allowed in this project.",
    },
    fixable: "code",
  },

  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;
        if (callee.type === "MemberExpression") {
          if (
            callee.object.type === "Identifier" &&
            callee.object.name === "console" &&
            callee.property.type === "Identifier" &&
            callee.property.name === "log"
          ) {
            context.report({
              node: node,
              messageId: "noConsoleLog",
              fix(fixer) {
                return fixer.remove(node.parent);
              },
            });
          }
        }
      },
    };
  },
};