import React, { useState, useEffect } from 'react';
import { ENUM_ICON, IconPath } from 'enums/icons';

interface IconProps {
   name: ENUM_ICON;
   fill?: string;
   size?: number;
}
export const Icon = ({ name, fill = 'black', size = 24 }: IconProps) => {
   const [iconPaths, setIconPaths] = useState<string[]>([]);
   const [viewBox, setViewBox] = useState<string>('0 0 48 48');
   const [iconFill, setIconFill] = useState<string>('');
   const [iconStroke, setIconStroke] = useState<string>('');
   const [strokeWidth, setStrokeWidth] = useState(0);
   const [iconWidth, setIconWidth] = useState<number>(24);
   const [iconHeight, setIconHeight] = useState<number>(24);

   const [strokeLinecap, setStrokeLinecap] = useState<'round'>();
   const [strokeLinejoin, setStrokeLinejoin] = useState<'round'>();

   const [fillRule, setFillRule] = useState<'evenodd' | 'nonzero' | 'inherit' | undefined>('inherit');
   const [clipRule, setClipRule] = useState<'evenodd' | 'nonzero' | 'inherit' | undefined>('inherit');

   useEffect(() => {
      if (name && IconPath.get(name)) {
         const icon = IconPath.get(name);
         if (icon) {
            setIconPaths(icon.paths);
            setViewBox(icon.viewBox || '0 0 48 48');
            setIconFill(icon.fill || fill);
            setIconWidth(icon.width || size);
            setIconHeight(icon.height || size);
            setIconStroke(icon.stroke || '');
            setStrokeWidth(icon.strokeWidth || 0);
            setFillRule(icon.fillRule || 'inherit');
            setClipRule(icon.clipRule || 'inherit');
            setStrokeLinecap(icon.strokeLinecap);
            setStrokeLinejoin(icon.strokeLinejoin);
         }
      }
   }, [name, fill]);
   return (
      <svg
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox={viewBox}
         width={`${iconWidth}px`}
         height={`${iconHeight}px`}
      >
         {iconPaths.map((path) => (
            <path
               d={path}
               clipRule={clipRule}
               fillRule={fillRule}
               key={path}
               fill={iconFill}
               stroke={iconStroke}
               strokeWidth={strokeWidth}
               strokeLinecap={strokeLinecap}
               strokeLinejoin={strokeLinejoin}
            />
         ))}
      </svg>
   );
};
