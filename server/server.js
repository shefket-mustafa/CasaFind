"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3030;
console.log(port);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/users', authRoutes_1.default);
if (!process.env.MONGO_URI) {
    throw new Error("Missing MONGO_URI in environment variables.");
}
console.log("Starting server...");
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error("MongoDB Connection Error", err.message);
});
