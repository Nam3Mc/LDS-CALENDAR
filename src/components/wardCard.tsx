"use client";

import { motion } from "framer-motion";
import { MapPin, Landmark } from "lucide-react";
import { Ward } from "@/types/ward";
import { Card, CardContent } from "@/components/ui/card";

interface WardCardProps {
  ward: Ward;
}

const WardCard: React.FC<WardCardProps> = ({ ward }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-4"
    >
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <Landmark className="w-6 h-6 mr-2 text-white" />
            {ward.name}
          </h2>
          <p className="text-lg flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-white/80" />
            {ward.address}
          </p>
          <p className="text-sm text-white/80">
            Unidad ID: <span className="font-semibold">{ward.unitId}</span>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WardCard;
