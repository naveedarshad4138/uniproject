import React from 'react'
import { motion } from 'framer-motion';
export const AlertBox = (props) => {
    const {alertStatus, msg} = props;
  return (
    <>
        <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 200 }} className={`alert text-center position-fixed end-0 w-30 mx-auto ${alertStatus === 'danger' ? "alert-danger" : "alert-success"}  alert-dismissible fade show`} style={{ zIndex: 1, top: 80 }} role="alert">
          <strong>{msg}</strong>
        </motion.div>
    </>
  )
}
