import DottedMap, { Point } from "dotted-map";
import { useMemo, useState } from "react";

const map = new DottedMap({ height: 60, grid: "vertical" });

map.addPin({
  lat: 41.963064,
  lng: 9.162598,
  data: "Point 1",
});
map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  data: "Point 2",
});

const points = map.getPoints();
const pins = points.filter((point) => point.data);

// const pinsMap = pins.reduce((acc, point) => ({
//   ...acc,
//   [point.data]: point
// }),{} as Record<string, Point>);

const svgOptions = {
  backgroundColor: "#FFFFFF",
  color: "#328DEC",
  radius: 0.35,
};

const svgMap = map.getSVG({
  ...svgOptions,
  shape: "circle",
});

const size = {
  x: 25,
  y: 25,
};

const offset = {
  x: -5,
  y: 2,
};

export default function Map() {
  const [pin, setActivePin] = useState(pins[0]);
  const viewBox = `0 0 120 60`;
//   const points = [];
  return (
    <div style={{height:'500px'}}>
      <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
        {points.map((point) => {
            let defaultColor = '#D0D0D0'; 
            if(point.x > 85 && point.x < 95 &&  point.y>20 && point.y<50) { 
                defaultColor = '#F5AE3B'
            }

            if(point.x > 20 && point.x < 45 && point.y>15 && point.y<42 ) { 
                defaultColor = '#9E49D4'
            }
            if(point.x > 100 && point.x < 120 && point.y>40 && point.y<70 ) { 
                defaultColor = '#328DEC'
            }
            if(point.x > 60 && point.x < 80 && point.y>35 && point.y<70 ) { 
                defaultColor = '#D87607'
            }
            if(point.x > 60 && point.x < 70 && point.y>15 && point.y<30 ) { 
                defaultColor = '#309972'
            }
           return (
          <circle
            cx={point.x}
            cy={point.y}
            r={svgOptions.radius}
            fill={defaultColor}
            
          />
        )})}
      </svg>
    </div>
  );
}
