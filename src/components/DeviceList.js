import React from "react";
import DeviceItem from "./DeviceItem";
import Spinner from "./shared/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import DeviceContext from "../context/DeviceContext";

function DeviceList() {
  const { devices, isLoading } = useContext(DeviceContext);

  if (!isLoading && (!devices || devices.length === 0)) {
    return <p>No Devices Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {devices.map((device) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DeviceItem key={device.id} device={device} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default DeviceList;
