export const prerender = false;
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, company, role, teamSize, date, timeSlot, message } = await request.json();

    if (!name || !email || !company || !date || !timeSlot) {
      return new Response(JSON.stringify({ error: 'Required fields are missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error('Gmail credentials not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword
      },
      secure: true,
      port: 465
    });

    const mailOptions = {
      from: gmailUser,
      to: 'support@qualifyme.ai',
      subject: `Demo Request: ${name} from ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
          <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
          ${role ? `<tr><td><strong>Role:</strong></td><td>${role}</td></tr>` : ''}
          ${teamSize ? `<tr><td><strong>Team Size:</strong></td><td>${teamSize}</td></tr>` : ''}
          <tr><td><strong>Preferred Date:</strong></td><td>${date}</td></tr>
          <tr><td><strong>Preferred Time:</strong></td><td>${timeSlot}</td></tr>
          ${message ? `<tr><td><strong>Message:</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Book demo error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
