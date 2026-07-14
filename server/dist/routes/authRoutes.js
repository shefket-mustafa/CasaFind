"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRoutes = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is undefined. Check .env and dotenv.config()");
}
//Register
authRoutes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existing = yield User_1.default.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email already in use!' });
        }
        console.log("JWT_SECRET:", JWT_SECRET);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield User_1.default.create({ email, password: hashedPassword });
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '2d' });
        res.status(201).json({ message: 'User Registered!', accessToken: token, user: { _id: user._id, email: user.email } });
    }
    catch (err) {
        res.status(400).json({ message: 'Registration failed!', error: err.message });
    }
}));
//Login
authRoutes.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '2d' });
        res.status(200).json({ message: 'Login successful!', accessToken: token, user: { _id: user._id, email: user.email } });
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = authRoutes;
