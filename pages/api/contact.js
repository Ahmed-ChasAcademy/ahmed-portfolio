// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body

    // Here you would typically:
    // 1. Send an email using Nodemailer, SendGrid, etc.
    // 2. Save to a database
    // 3. Integrate with a CRM

    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, subject, message })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return res.status(200).json({ success: true })
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}