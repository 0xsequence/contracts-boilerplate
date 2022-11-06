"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Migrations__factory = exports.IExample__factory = exports.Example__factory = exports.factories = void 0;
exports.factories = require("./factories");
var Example__factory_1 = require("./factories/Example__factory");
__createBinding(exports, Example__factory_1, "Example__factory");
var IExample__factory_1 = require("./factories/interfaces/IExample__factory");
__createBinding(exports, IExample__factory_1, "IExample__factory");
var Migrations__factory_1 = require("./factories/migrations/Migrations__factory");
__createBinding(exports, Migrations__factory_1, "Migrations__factory");
