import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { supabase } from '../../lib/supabaseClient';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export function BookingModal({ isOpen, onClose, selectedService }: BookingModalProps) {
  const [service, setService] = useState(selectedService || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleBooking = async () => {
    if (!name || !email || !date || !time) {
      alert("Please fill all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('bookings').insert([{ name, email, phone, service, date, time }]);
      if (error) throw error;

      setIsSuccess(true);
      // Reset state
      setService('');
      setDate('');
      setTime('');
      setName('');
      setEmail('');
      setPhone('');
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 my-8 p-6 relative">
        <button
          onClick={() => { onClose(); setTimeout(() => setIsSuccess(false), 300); }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
            <h2 className="text-3xl font-semibold" style={{ color: '#1A1A1A' }}>Booking Confirmed!</h2>
            <p className="text-lg" style={{ color: '#6B6B6B' }}>
              Your appointment has been successfully requested.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We will be in touch shortly to confirm your details.
            </p>
            <Button 
               onClick={() => { onClose(); setTimeout(() => setIsSuccess(false), 300); }}
               className="mt-8 px-8 py-2 text-white"
               style={{ backgroundColor: '#7A2E2E' }}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl mb-2" style={{ color: '#1A1A1A' }}>Book Your Appointment</h2>
              <p className="text-sm" style={{ color: '#6B6B6B' }}>Choose your service, date, and time</p>
            </div>

            <form className="space-y-4">
          <div>
            <Label htmlFor="service">Select Service</Label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              style={{ borderColor: '#E5E5E5' }}
            >
              <option value="">Choose a service...</option>
              <option value="classic-manicure">Classic Manicure</option>
              <option value="gel-nails">Gel Nails</option>
              <option value="acrylic-extensions">Acrylic Extensions</option>
              <option value="nail-art">Nail Art Design</option>
              <option value="spa-manicure">Spa Manicure</option>
              <option value="nail-care">Nail Care Package</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <div className="relative mt-1">
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#6B6B6B' }} />
              </div>
            </div>

            <div>
              <Label htmlFor="time">Time</Label>
              <div className="relative mt-1">
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  style={{ borderColor: '#E5E5E5' }}
                  required
                >
                  <option value="">Select time...</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#6B6B6B' }} />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 00000 00000"
              className="mt-1"
            />
          </div>

          <Button
            type="button"
            onClick={handleBooking}
            disabled={isSubmitting}
            className="w-full text-white"
            style={{ backgroundColor: '#7A2E2E' }}
          >
            {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
          </Button>
        </form>
        </>
        )}
      </div>
    </div>
  );
}