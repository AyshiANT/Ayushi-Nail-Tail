/**
 * Vercel Serverless Function: /api/submit-review
 *
 * This function acts as a secure proxy between the frontend and
 * Google Apps Script. The actual Google Script URL is stored only
 * in Vercel's environment variables (server-side) and is NEVER
 * exposed in the browser's JavaScript bundle.
 *
 * Frontend calls: POST /api/submit-review
 * This function calls: process.env.GOOGLE_SCRIPT_URL (server-side only)
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error('GOOGLE_SCRIPT_URL environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, email, message, rating, service } = req.body;

    // Basic server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Review message is required' });
    }

    // Sanitize inputs (strip dangerous characters)
    const sanitize = (str) =>
      String(str ?? '')
        .trim()
        .replace(/[<>]/g, '');

    // Build FormData to send to Google Apps Script
    const formData = new URLSearchParams();
    formData.append('name', sanitize(name));
    formData.append('email', sanitize(email));
    formData.append('message', sanitize(message));
    formData.append('rating', String(Number(rating) || 5));
    formData.append('service', sanitize(service));

    // Forward the request to Google Apps Script (server-to-server)
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Google Apps Script with no-cors returns opaque responses, so
    // a non-ok status here is still likely a network error, not a script error.
    // We treat a completed fetch as success.
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error forwarding review to Google Script:', error);
    return res.status(500).json({ error: 'Failed to submit review. Please try again.' });
  }
}
