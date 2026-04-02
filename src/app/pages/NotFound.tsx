import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#F7F5F4' }}>
      <div className="max-w-md text-center">
        <div 
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#7A2E2E' }}
        >
          <span className="text-5xl text-white">404</span>
        </div>
        <h1 className="text-4xl lg:text-5xl mb-4" style={{ color: '#1A1A1A' }}>
          Page Not Found
        </h1>
        <p className="text-lg mb-8" style={{ color: '#6B6B6B' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="text-white text-lg px-8 py-6"
          style={{ backgroundColor: '#7A2E2E' }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
