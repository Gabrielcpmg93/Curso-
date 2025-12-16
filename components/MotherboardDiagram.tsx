
import React from 'react';

export const MotherboardDiagram: React.FC = () => {
  const textStyle = {
    fill: '#d1d5db', // text-gray-300
    fontSize: '10px',
    fontFamily: 'sans-serif',
  };

  const componentLabelStyle = {
    ...textStyle,
    fill: '#67e8f9', // text-cyan-300
    fontSize: '11px',
    fontWeight: 'bold',
  };

  return (
    <svg viewBox="0 0 300 180" className="w-full h-auto">
      {/* Board */}
      <rect x="1" y="1" width="298" height="178" rx="5" fill="#1f2937" stroke="#4b5563" strokeWidth="1" />

      {/* CPU/AP */}
      <rect x="100" y="50" width="60" height="60" fill="#374151" stroke="#6b7280" />
      <text x="130" y="75" style={componentLabelStyle} textAnchor="middle">CPU / AP</text>
      <text x="130" y="90" style={textStyle} textAnchor="middle">(Processador)</text>

      {/* Memory */}
      <rect x="170" y="55" width="40" height="50" fill="#374151" stroke="#6b7280" />
      <text x="190" y="75" style={componentLabelStyle} textAnchor="middle">NAND</text>
      <text x="190" y="90" style={textStyle} textAnchor="middle">(Memória)</text>

      {/* PMIC */}
      <rect x="30" y="60" width="50" height="40" fill="#374151" stroke="#6b7280" />
      <text x="55" y="75" style={componentLabelStyle} textAnchor="middle">PMIC</text>
      <text x="55" y="90" style={textStyle} textAnchor="middle">(Ger. Energia)</text>

      {/* Charge IC */}
      <rect x="30" y="110" width="30" height="25" fill="#374151" stroke="#6b7280" />
      <text x="45" y="125" style={componentLabelStyle} textAnchor="middle">CI Carga</text>
      
      {/* WiFi/BT Module */}
      <rect x="100" y="120" width="40" height="30" fill="#374151" stroke="#6b7280" />
      <text x="120" y="135" style={componentLabelStyle} textAnchor="middle">Wi-Fi/BT</text>

       {/* RF Transceiver */}
      <rect x="30" y="15" width="50" height="30" fill="#374151" stroke="#6b7280" />
      <text x="55" y="30" style={componentLabelStyle} textAnchor="middle">RF</text>
       <text x="55" y="40" style={textStyle} textAnchor="middle">(Sinal/Rede)</text>


      {/* Connectors */}
      <rect x="240" y="15" width="40" height="15" fill="#111827" stroke="#6b7280" />
      <text x="260" y="10" style={textStyle} textAnchor="middle">Câm Traseira</text>
      
      <rect x="240" y="40" width="40" height="15" fill="#111827" stroke="#6b7280" />
      <text x="260" y="35" style={textStyle} textAnchor="middle">Câm Frontal</text>
      
      <rect x="230" y="150" width="50" height="20" fill="#111827" stroke="#6b7280" />
      <text x="255" y="145" style={textStyle} textAnchor="middle">Conector Tela</text>
      
      <rect x="160" y="150" width="50" height="20" fill="#111827" stroke="#6b7280" />
      <text x="185" y="145" style={textStyle} textAnchor="middle">Conector Bateria</text>

    </svg>
  );
};
