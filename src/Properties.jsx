import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Properties() {
  
  const [flow, setFlow] = useState(50);

  
  const duration = (101 - flow) / 10;

  return (
    <section>
      <h2>Properties of Fluids</h2>
      <h3>Flow Rate</h3>
      <p>Adjust the slider to see how flow rate affects movement speed.</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <input
          type="range"
          min="1"
          max="100"
          value={flow}
          onChange={(e) => setFlow(e.target.value)}
          style={{ width: '200px' }}
        />
        <span>Flow: {flow}%</span>
      </div>

      <div style={{
        marginTop: '20px',
        border: '2px solid #333',
        width: '100px',
        height: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.div
          key={flow} // key to change value
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'lightblue',
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      </div>
    </section>
  );
}

export default Properties;