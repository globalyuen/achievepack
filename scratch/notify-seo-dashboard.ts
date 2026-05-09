import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: '.env.local' })

async function sendMigrationLink() {
  const adminEmail = 'ryan@achievepack.com'
  const dashboardLink = 'https://achievepack.com/ctrl-x9k7m/management?tab=seo-migration'
  
  const subject = '🚀 SEO Migration Dashboard Ready'
  const htmlContent = `
    <h2>Your SEO Migration Dashboard is Live</h2>
    <p>I have built a specialized dashboard to manage the migration of SEO pages from AchievePack to Pouch.eco.</p>
    
    <h3>Key Features:</h3>
    <ul>
      <li><strong>Progress Tracking:</strong> Real-time status of all 53+ pages.</li>
      <li><strong>AIEO Optimization:</strong> Visual insights for AI search readiness.</li>
      <li><strong>Content Rephrasing:</strong> Suggestions to improve SEO and brand tone.</li>
      <li><strong>Migration Scheduler:</strong> Integrated "1 hour per page" logic.</li>
    </ul>

    <p>You can now monitor every detail of the migration and optimize each page for better results.</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${dashboardLink}" style="background-color: #D4FF00; color: #000; padding: 15px 30px; text-decoration: none; font-weight: bold; border: 3px solid #000;">
        ACCESS SEO DASHBOARD
      </a>
    </div>

    <p><strong>Status:</strong> 53 pages detected. Migration pending final approval in the dashboard.</p>
  `

  console.log('📧 Sending migration dashboard link to:', adminEmail)

  try {
    const response = await fetch('https://achievepack.com/api/send-campaign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        htmlContent,
        testEmail: adminEmail
      })
    })

    const data = await response.json()
    if (data.success) {
      console.log('✅ Email sent successfully!')
    } else {
      console.error('❌ Failed to send email:', data.error)
    }
  } catch (err) {
    console.error('❌ Error sending email:', err)
  }
}

sendMigrationLink()
