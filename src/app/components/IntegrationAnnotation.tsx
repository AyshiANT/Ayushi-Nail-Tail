import { Database, Lock, Image, CreditCard, Server } from 'lucide-react';

interface IntegrationAnnotationProps {
  type: 'auth' | 'database' | 'storage' | 'payment' | 'backend';
  label: string;
  className?: string;
}

export function IntegrationAnnotation({ type, label, className = '' }: IntegrationAnnotationProps) {
  const config = {
    auth: {
      icon: Lock,
      color: 'bg-blue-500/10 border-blue-500/30 text-blue-600',
      iconColor: 'text-blue-600'
    },
    database: {
      icon: Database,
      color: 'bg-green-500/10 border-green-500/30 text-green-600',
      iconColor: 'text-green-600'
    },
    storage: {
      icon: Image,
      color: 'bg-purple-500/10 border-purple-500/30 text-purple-600',
      iconColor: 'text-purple-600'
    },
    payment: {
      icon: CreditCard,
      color: 'bg-orange-500/10 border-orange-500/30 text-orange-600',
      iconColor: 'text-orange-600'
    },
    backend: {
      icon: Server,
      color: 'bg-slate-500/10 border-slate-500/30 text-slate-600',
      iconColor: 'text-slate-600'
    }
  };

  const { icon: Icon, color, iconColor } = config[type];

  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs font-medium ${color} ${className}`}>
      <Icon className={`w-3 h-3 ${iconColor}`} />
      <span>→ {label}</span>
    </div>
  );
}
