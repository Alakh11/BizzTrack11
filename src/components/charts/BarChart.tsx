import React from 'react';

interface BarChartProps {
  data: { label: string; value: number }[];
  height?: number;
  showValues?: boolean;
  maxValue?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 200,
  showValues = true,
  maxValue,
}) => {
  const calculatedMax = maxValue || Math.max(...data.map(item => item.value)) * 1.1;
  
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <div className="flex h-full items-end">
        {data.map((item, index) => {
          const percentage = (item.value / calculatedMax) * 100;
          
          return (
            <div 
              key={index} 
              className="relative flex flex-col items-center flex-1 space-y-2"
            >
              {showValues && (
                <div className="absolute -top-7 text-xs font-medium text-gray-600">
                  ₹{item.value.toLocaleString()}
                </div>
              )}
              
              <div 
                className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 ease-in-out"
                style={{ height: `${percentage}%` }}
              ></div>
              
              <div className="text-xs text-gray-500 font-medium">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;