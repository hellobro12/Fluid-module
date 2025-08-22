import React from 'react';

function Intro() {
  return (
    <section style={{
      margin: '20px auto',
      padding: '25px'
    }}>
      <h2 style={{
        fontSize: '2em',
        color: '#333',
        marginBottom: '10px'
      }}>What is Fluid?</h2>
      <p style={{
        fontSize: '1.1em',
        color: '#555',
        marginBottom: '20px'
      }}>
        A fluid is any substance that continuously deforms (flows) under an applied shear stress. Unlike solids, fluids do not have a fixed shape and take the form of their container.
      </p>

      <div style={{ marginBottom: '15px' }}>
        <h3 style={{
          fontSize: '1.3em',
          color: '#444',
          marginBottom: '5px'
        }}>Key States of Matter</h3>
        <ul style={{
          listStyleType: 'disc',
          marginLeft: '20px',
          color: '#666'
        }}>
          <li style={{ marginBottom: '5px' }}>
            <strong>Liquids:</strong> Possess a definite volume but an indefinite shape. Their particles are in close contact but can move freely.
          </li>
          <li style={{ marginBottom: '5px' }}>
            <strong>Gases:</strong> Have neither a definite volume nor a fixed shape. Their particles are widely separated and move randomly, filling the entire volume of their container.
          </li>
        </ul>
      </div>

      <p style={{
        fontSize: '1em',
        color: '#666'
      }}>
        The following sections and simulations are designed to help you visualize these fundamental properties of fluids and their behavior under different conditions.
      </p>
    </section>
  );
}

export default Intro;