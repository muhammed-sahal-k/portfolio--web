// import mongoose from 'mongoose';
// import Contact from '../models/Contact.js';

// import nodemailer from "nodemailer";

// console.log("EMAIL_USER =", process.env.EMAIL_USER);
// console.log("EMAIL_PASS =", process.env.EMAIL_PASS);

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });



// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,

//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });


// // await transporter.verify();

// // console.log("SMTP Connected Successfully");



// // In-memory array fallback if database connection is pending
// const localContactLog = [];

// export const submitContactForm = async (req, res, next) => {
//   try {
//     const { name, email, message } = req.body;

//     let savedContact = null;

//     // Check if Mongoose connection is ready
//     if (mongoose.connection.readyState === 1) {
//       const contactDoc = new Contact({
//         name,
//         email,
//         message,
//         ipAddress: req.ip || req.headers['x-forwarded-for'] || '127.0.0.1',
//       });
//       savedContact = await contactDoc.save();





// //       await transporter.verify();

// // console.log("SMTP OK");



// await transporter.sendMail({
//   from: process.env.EMAIL_USER,

//   to: process.env.EMAIL_USER,

//   subject: `New Portfolio Contact - ${name}`,

//   html: `
//       <h2>New Portfolio Message</h2>

//       <p><strong>Name:</strong> ${name}</p>

//       <p><strong>Email:</strong> ${email}</p>

//       <p><strong>Message:</strong></p>

//       <p>${message}</p>
//   `,
// });




// // await transporter.sendMail({
// //   from: process.env.EMAIL_USER,

// //   to: email,

// //   subject: "Thank you for contacting me",

// //   html: `
// //       <h2>Hello ${name}</h2>

// //       <p>Thank you for contacting me.</p>

// //       <p>I received your message.</p>

// //       <p>I will reply as soon as possible.</p>

// //       <br>

// //       <p>Regards</p>

// //       <b>Muhammed Sahal</b>
// //   `,
// // });




//       console.log(`[Contact DB Saved]: Message from ${name} (${email})`);
//     } else {
//       savedContact = {
//         id: Date.now(),
//         name,
//         email,
//         message,
//         createdAt: new Date().toISOString(),
//       };
//       localContactLog.push(savedContact);
//       console.log(`[Contact Logged]: Message from ${name} (${email})`);
//     }

//     return res.status(201).json({
//       success: true,
//       message: 'Thank you! Your message has been sent successfully. Muhammed will reach out to you shortly.',
//       data: savedContact,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getContactMessages = async (req, res, next) => {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       const messages = await Contact.find().sort({ createdAt: -1 });
//       return res.status(200).json({ success: true, count: messages.length, messages });
//     }
//     return res.status(200).json({ success: true, count: localContactLog.length, messages: localContactLog });
//   } 
//   // catch (error) {
//   //   next(error);
//   // }

// catch (error) {
//   console.log("================================");
//   console.log(error);
//   console.log(error.message);
//   console.log(error.response);
//   console.log(error.responseCode);
//   console.log("================================");

//   next(error);
// }

// };



































































import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

// In-memory array fallback if database connection is pending
const localContactLog = [];

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    console.log("==================================");
    console.log("EMAIL_USER =", process.env.EMAIL_USER);
    console.log("EMAIL_PASS =", process.env.EMAIL_PASS);
    console.log("==================================");

    // Create transporter INSIDE request
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });




    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP Connected");

    let savedContact = null;

    if (mongoose.connection.readyState === 1) {
      const contactDoc = new Contact({
        name,
        email,
        message,
        ipAddress: req.ip || req.headers["x-forwarded-for"] || "127.0.0.1",
      });

      savedContact = await contactDoc.save();

      // Send mail to yourself
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Contact - ${name}`,
        html: `
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      });

      console.log("✅ Mail Sent Successfully");

      console.log(`[Contact DB Saved]: Message from ${name} (${email})`);
    } else {
      savedContact = {
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      };

      localContactLog.push(savedContact);

      console.log(`[Contact Logged]: Message from ${name} (${email})`);
    }

    return res.status(201).json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. Muhammed will reach out to you shortly.",
      data: savedContact,
    });
  } catch (error) {
    console.log("==================================");
    console.log("ERROR CODE :", error.code);
    console.log("ERROR MESSAGE :", error.message);
    console.log("ERROR RESPONSE :", error.response);
    console.log("STATUS CODE :", error.responseCode);
    console.log(error);
    console.log("==================================");

    next(error);
  }
};

export const getContactMessages = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await Contact.find().sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        count: messages.length,
        messages,
      });
    }

    return res.status(200).json({
      success: true,
      count: localContactLog.length,
      messages: localContactLog,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};