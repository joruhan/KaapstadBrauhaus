import { API_CONFIG } from '../config/api.config';

interface BookingDetails {
    date: string;
    time: string;
    partySize: number;
    seating: string;
}

interface EmailData {
    email: string;
    bookingDetails: BookingDetails;
}

export const sendBookingConfirmation = async (emailData: EmailData) => {
    try {
        const response = await fetch(API_CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_CONFIG.SENDGRID_API_KEY}`
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: emailData.email }]
                }],
                from: { 
                    email: API_CONFIG.SENDGRID_FROM_EMAIL,
                    name: 'Kaapstad Brauhaus'
                },
                subject: 'Your Booking Confirmation - Kaapstad Brauhaus',
                content: [{
                    type: 'text/html',
                    value: getEmailTemplate(emailData.bookingDetails)
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send email');
        }

        return true;
    } catch (error) {
        console.error('Email service error:', error);
        throw error;
    }
};

// Email template function
const getEmailTemplate = (booking: BookingDetails): string => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #C87A44; text-align: center;">Booking Confirmation</h1>
            
            <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #333;">Booking Details:</h2>
                <p style="font-size: 16px;"><strong>Date:</strong> ${booking.date}</p>
                <p style="font-size: 16px;"><strong>Time:</strong> ${booking.time}</p>
                <p style="font-size: 16px;"><strong>Party Size:</strong> ${booking.partySize} ${booking.partySize === 1 ? 'person' : 'people'}</p>
                <p style="font-size: 16px;"><strong>Seating Area:</strong> ${booking.seating}</p>
            </div>
            
            <p style="text-align: center; color: #666;">
                Thank you for choosing Kaapstad Brauhaus. We look forward to serving you!
            </p>
        </div>
    `;
}; 