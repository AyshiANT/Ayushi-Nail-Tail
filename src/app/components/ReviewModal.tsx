import { useState } from 'react';
import { X, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { supabase } from '../../lib/supabaseClient';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('reviews').insert([{ name, service, rating, text }]);
      if (error) throw error;

      alert('Thank you for your review!');
      onClose();
      // Reset form
      setRating(5);
      setName('');
      setService('');
      setText('');
    } catch (error: any) {
      alert('Error submitting review: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4 my-8 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl mb-2" style={{ color: '#1A1A1A' }}>Leave a Review</h2>
          <p className="text-sm" style={{ color: '#6B6B6B' }}>We'd love to hear about your experience!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Rating</Label>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="hover:scale-110 transition-transform"
                >
                  <Star 
                    className={`w-8 h-8 ${star <= rating ? 'fill-current' : ''}`} 
                    style={{ color: star <= rating ? '#7A2E2E' : '#E5E5E5' }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="service">Service Received (Optional)</Label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              style={{ borderColor: '#E5E5E5' }}
            >
              <option value="">Choose a service...</option>
              <option value="Classic Manicure">Classic Manicure</option>
              <option value="Gel Nails">Gel Nails</option>
              <option value="Acrylic Extensions">Acrylic Extensions</option>
              <option value="Nail Art Design">Nail Art Design</option>
              <option value="Spa Manicure">Spa Manicure</option>
            </select>
          </div>

          <div>
            <Label htmlFor="text">Your Review</Label>
            <textarea
              id="text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell us about your experience..."
              className="w-full mt-1 px-3 py-2 border rounded-md min-h-[100px] resize-y"
              style={{ borderColor: '#E5E5E5' }}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white"
            style={{ backgroundColor: '#7A2E2E' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </div>
    </div>
  );
}
