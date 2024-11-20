import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // À désactiver
      },
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log('Erreur de connexion:', error);
      } else {
        console.log('Connexion réussie, prêt à envoyer des e-mails!', success);
      }
    });
    try {
      await transporter.sendMail({
        from: email,
        to: 'saintpol.luc@gmail.com',
        subject: 'Incoming message from the porfolio',
        text: message,
      });

      res.status(200).json({ message: 'Email send succesfuly' });
    } catch (error) {
      res.status(500).json({ error: 'Error: Email wasnt send' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.Status(405).end(`Method ${req.method} not authorized`);
  }
}
