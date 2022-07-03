"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const common_1 = require("@nestjs/common");
const Hello = (...args) => (0, common_1.SetMetadata)('hello', args);
exports.Hello = Hello;
//# sourceMappingURL=hello.decorator.js.map