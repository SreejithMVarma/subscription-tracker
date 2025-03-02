import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from '../config/env.js';
export const accountEmail = 'info@sreejithmvarma.in'
const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: accountEmail,
                pass: EMAIL_PASSWORD
        }, tls: {
                rejectUnauthorized: false  // Ignore self-signed certificate error
            }
})

export default transporter;