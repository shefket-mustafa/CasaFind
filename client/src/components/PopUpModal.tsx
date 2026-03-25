import { motion } from "motion/react";
import { IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";

interface PopUp {
  message: string;
}

export default function PopUp({ message }: PopUp) {
  // Determine if it's a success or error message
  const isSuccess =
    message.toLowerCase().includes("successful") ||
    message.toLowerCase().includes("success") ||
    message.toLowerCase().includes("created") ||
    message.toLowerCase().includes("logged out");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4"
    >
      <div
        className={`flex items-center gap-3 backdrop-blur-md border rounded-xl p-4 shadow-2xl ${
          isSuccess
            ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-100"
            : "bg-red-500/20 border-red-400/50 text-red-100"
        }`}
      >
        {isSuccess ? (
          <IoCheckmarkCircle
            className="text-emerald-400 flex-shrink-0"
            size={20}
          />
        ) : (
          <IoAlertCircle className="text-red-400 flex-shrink-0" size={20} />
        )}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </motion.div>
  );
}
