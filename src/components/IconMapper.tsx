import React from 'react';
import * as Icons from 'lucide-react';

interface IconMapperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconMapper: React.FC<IconMapperProps> = ({ name, className = '', size = 20 }) => {
  // Safe lookup for Lucide icons
  const LucideIcon = (Icons as any)[name];

  if (!LucideIcon) {
    // Fallback icon
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <LucideIcon className={className} size={size} />;
};
export default IconMapper;
