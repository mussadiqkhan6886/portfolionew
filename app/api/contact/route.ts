import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form - ${name}`,
      html: `
            <!DOCTYPE html>
            <html>
            <head>
            <style>
            body{
                font-family:Arial,sans-serif;
                background:#f4f4f4;
                margin:0;
                padding:40px;
            }

            .container{
                max-width:650px;
                margin:auto;
                background:white;
                border-radius:12px;
                overflow:hidden;
                box-shadow:0 5px 20px rgba(0,0,0,.08);
            }

            .header{
                background:#111827;
                color:white;
                padding:30px;
            }

            .header h1{
                margin:0;
            }

            .content{
                padding:30px;
            }

            .row{
                margin-bottom:18px;
            }

            .label{
                color:#6b7280;
                font-size:13px;
                text-transform:uppercase;
                font-weight:bold;
            }

            .value{
                margin-top:6px;
                font-size:16px;
                color:#111827;
            }

            .message{
                background:#f8fafc;
                padding:18px;
                border-radius:8px;
                margin-top:10px;
                line-height:1.7;
            }

            .footer{
                text-align:center;
                padding:20px;
                background:#f9fafb;
                color:#888;
                font-size:13px;
            }
            </style>
            </head>

            <body>

            <div class="container">

            <div class="header">
            <h1>📩 New Portfolio Contact</h1>
            </div>

            <div class="content">

            <div class="row">
            <div class="label">Name</div>
            <div class="value">${name}</div>
            </div>

            <div class="row">
            <div class="label">Email</div>
            <div class="value">${email}</div>
            </div>

            <div class="row">
            <div class="label">Organization</div>
            <div class="value">${organization}</div>
            </div>

            <div class="row">
            <div class="label">Requested Service</div>
            <div class="value">${service}</div>
            </div>

            <div class="row">
            <div class="label">Message</div>
            <div class="message">
            ${message}
            </div>
            </div>

            </div>

            <div class="footer">
            Submitted from your portfolio contact form.
            </div>

            </div>

            </body>
            </html>
            `
    });

    return NextResponse.json(
      { message: "Contacted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}