import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Send, Upload, CheckCircle, AlertCircle, Eye, Code, FileText, User, Users, Trash2 } from 'lucide-react';
import { NeoCard, NeoButton, NeoBadge } from '@/components/pouch/PouchUI';
import { toast } from 'sonner';

interface EmailRecipient {
  email: string;
  name?: string;
  company?: string;
}

const EmailCampaignPage = () => {
  const [subject, setSubject] = useState('📦 The State of Sustainable Packaging 2026');
  const [recipients, setRecipients] = useState<EmailRecipient[]>([]);
  const [body, setBody] = useState(`
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
    <div style="text-align: center; padding: 20px 0;">
        <img src="https://achievepack.com/imgs/emails/outreach_header_2026.png" alt="The State of Sustainable Packaging 2026" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px;">
    </div>

    <h2 style="font-size: 24px; font-weight: 800; color: #000; margin-top: 30px; line-height: 1.2;">Achieve more results from your product launches using quantified best practices.</h2>

    <p>Hi {{name}},</p>

    <p>We analyzed 5,000+ packaging projects from the past 12 months and synthesized the findings in our latest flagship report for <strong>{{company}}</strong>.</p>

    <p>Achieve Pack's <strong>State of Sustainable Packaging 2026</strong> not only reveals current trends in eco-friendly materials, it provides actionable guidance to maximize your product shelf-life and brand appeal, starting with your very next production run.</p>

    <p style="font-weight: bold; margin-top: 25px;">Here’s a preview of what we found and questions we've answered:</p>
    <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">The average transition rate to compostable materials is up by 15%... but only for certain industries. <strong>Who's leading the pack?</strong></li>
        <li style="margin-bottom: 10px;">"Eco-friendly" is not a specific enough USP - <strong>which metrics actually drive consumer trust?</strong></li>
        <li style="margin-bottom: 10px;">Sustainability is critical, but <strong>how much can you push the price before losing volume?</strong></li>
    </ul>

    <p>Inside, you'll find these details and more, all carefully curated by Team Achieve Pack to improve your packaging strategy and deliver results.</p>

    <div style="text-align: center; margin: 40px 0;">
        <p style="font-weight: bold; font-size: 18px;">Need these insights?</p>
        <a href="https://achievepack.com/reports/state-of-packaging-2026" style="background-color: #D4FF00; color: #000; padding: 15px 30px; text-decoration: none; font-weight: 900; border: 3px solid #000; display: inline-block; text-transform: uppercase; letter-spacing: 1px;">YES. Give me the report!</a>
    </div>

    <p>While knowledge is power, action powers results. To contextualize these best practices for your unique products and requirements, we’re hosting a live workshop on <strong>May 26</strong>.</p>

    <p>We'll bring the data to life and help you apply it, with specific guidance you can use to optimize your supply chain. Attendees will also receive exclusive early access to a Sustainable Transition Planner.</p>

    <div style="text-align: center; margin: 30px 0;">
        <a href="https://achievepack.com/workshop-register" style="background-color: #000; color: #D4FF00; padding: 12px 25px; text-decoration: none; font-weight: bold; display: inline-block;">Register Now</a>
    </div>

    <div style="margin-top: 50px; border-top: 2px solid #eee; padding-top: 30px;">
        <table border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td style="padding-right: 20px;">
                    <img src="https://achievepack.com/imgs/team/Ryan%20Wong%20-%20Packaging%20Specialist.png" alt="Ryan" width="100" height="100" style="width: 100px; height: 100px; border-radius: 500px; object-fit: cover; border: 4px solid #D4FF00; display: block; -webkit-border-radius: 500px; -moz-border-radius: 500px;">
                </td>
                <td valign="middle">
                    <p style="margin: 0; font-weight: 900; font-size: 22px; color: #000; line-height: 1;">Ryan</p>
                    <p style="margin: 5px 0 0 0; color: #666; font-size: 16px; font-weight: bold;">Founder @ Achieve Pack</p>
                </td>
            </tr>
        </table>
    </div>

    <div style="margin-top: 60px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
        <p>Follow us on social</p>
        <p>Need help? <a href="mailto:ryan@achievepack.com" style="color: #666;">Contact us.</a></p>
        <p><a href="https://achievepack.com/unsubscribe" style="color: #999;">Unsubscribe</a> · <a href="#" style="color: #999;">View in browser</a></p>
    </div>
</div>
  `);

  const [previewMode, setPreviewMode] = useState<'edit' | 'preview'>('edit');
  const [isSending, setIsSending] = useState(false);

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split('\n');
      const parsedRecipients: EmailRecipient[] = [];
      
      // Assume CSV format: email,name,company
      const header = lines[0].toLowerCase().split(',');
      const emailIdx = header.findIndex(h => h.includes('email'));
      const nameIdx = header.findIndex(h => h.includes('name'));
      const companyIdx = header.findIndex(h => h.includes('company'));

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const cols = lines[i].split(',');
        parsedRecipients.push({
          email: cols[emailIdx]?.trim() || cols[0]?.trim(),
          name: nameIdx !== -1 ? cols[nameIdx]?.trim() : 'Customer',
          company: companyIdx !== -1 ? cols[companyIdx]?.trim() : 'Your Company',
        });
      }
      setRecipients(parsedRecipients);
      toast.success(`Loaded ${parsedRecipients.length} recipients!`);
    };
    reader.readAsText(file);
  };

  const handleMassSend = async () => {
    if (recipients.length === 0) return toast.error("No recipients loaded!");
    if (!confirm(`Are you sure you want to send this email to ${recipients.length} people?`)) return;

    setIsSending(true);
    try {
      const res = await fetch('/api/admin/mass-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          body,
          recipients
        })
      });
      const result = await res.json();
      if (result.success) {
        toast.success(`Campaign started! Message ID: ${result.batchId || 'N/A'}`);
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (e) {
      toast.error("Network error sending campaign");
    } finally {
      setIsSending(false);
    }
  };

  const handleSendTest = async () => {
    setIsSending(true);
    try {
      const res = await fetch('/api/admin/mass-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `[TEST] ${subject}`,
          body,
          recipients: [{ email: 'ryan@achievepack.com', name: 'Ryan (Test)', company: 'Achieve Pack' }]
        })
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Test email sent!");
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (e) {
      toast.error("Network error sending test");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-24">
      <Helmet>
        <title>Email Campaign Manager | Admin</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <NeoBadge className="mb-2">Admin Tools</NeoBadge>
            <h1 className="text-4xl font-black uppercase">Email Campaign Manager</h1>
          </div>
          <div className="flex gap-4">
            <NeoButton variant="secondary" onClick={() => setRecipients([])}>
              <Trash2 className="w-4 h-4 mr-2" /> Clear List
            </NeoButton>
            <NeoButton variant="primary" onClick={handleSendTest} disabled={isSending}>
              <Mail className="w-4 h-4 mr-2" /> Send Test
            </NeoButton>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Editor */}
          <div className="lg:col-span-2 space-y-8">
            <NeoCard>
              <div className="flex items-center justify-between mb-6 border-b border-neutral-200">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setPreviewMode('edit')}
                    className={`pb-4 px-4 font-black uppercase text-sm ${previewMode === 'edit' ? 'border-b-4 border-black' : 'text-neutral-400'}`}
                  >
                    <Code className="w-4 h-4 inline mr-2" /> Side-by-Side
                  </button>
                  <button 
                    onClick={() => setPreviewMode('preview')}
                    className={`pb-4 px-4 font-black uppercase text-sm ${previewMode === 'preview' ? 'border-b-4 border-black' : 'text-neutral-400'}`}
                  >
                    <Eye className="w-4 h-4 inline mr-2" /> Full Preview
                  </button>
                </div>
                <div className="pb-4">
                  <span className="text-xs font-bold text-neutral-400 uppercase">Live Editor</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase mb-2">Email Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold bg-white"
                  />
                </div>

                <div className={previewMode === 'edit' ? "grid lg:grid-cols-2 gap-6" : ""}>
                  <div className={previewMode === 'preview' ? "hidden" : "space-y-2"}>
                    <label className="block text-xs font-black uppercase mb-2">HTML Body</label>
                    <textarea 
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="w-full h-[600px] p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-mono text-xs bg-neutral-900 text-green-400"
                    />
                    <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <p className="text-sm font-bold text-blue-800 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Placeholders: {'{{name}}'}, {'{{company}}'}
                      </p>
                    </div>
                  </div>

                  <div className={previewMode === 'edit' || previewMode === 'preview' ? "space-y-2" : "hidden"}>
                    <label className="block text-xs font-black uppercase mb-2">Visual Preview</label>
                    <div className={`border-4 border-black p-4 bg-white overflow-auto h-[600px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]`}>
                      <div dangerouslySetInnerHTML={{ __html: body.replace(/{{name}}/g, 'Ryan').replace(/{{company}}/g, 'Achieve Pack') }} />
                    </div>
                  </div>
                </div>
              </div>
            </NeoCard>
          </div>

          {/* Right Column: Recipients */}
          <div className="space-y-8">
            <NeoCard color="bg-[#D4FF00]">
              <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" /> Recipients
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".csv"
                    onChange={handleCsvUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="border-4 border-black border-dashed p-8 text-center bg-white hover:bg-neutral-50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-black uppercase text-sm">Upload CSV</p>
                    <p className="text-xs text-neutral-500 font-bold">Format: email, name, company</p>
                  </div>
                </div>

                {recipients.length > 0 && (
                  <div className="bg-white border-4 border-black p-4 max-h-[300px] overflow-y-auto">
                    <p className="text-xs font-black uppercase mb-4 border-b pb-2">Loaded List ({recipients.length})</p>
                    <div className="space-y-2">
                      {recipients.slice(0, 10).map((r, i) => (
                        <div key={i} className="text-xs font-bold truncate">
                          {r.name} &lt;{r.email}&gt;
                        </div>
                      ))}
                      {recipients.length > 10 && (
                        <p className="text-xs text-neutral-500 italic">...and {recipients.length - 10} more</p>
                      )}
                    </div>
                  </div>
                )}

                <NeoButton 
                  variant="dark" 
                  className="w-full py-4" 
                  onClick={handleMassSend}
                  disabled={isSending || recipients.length === 0}
                >
                  {isSending ? 'Sending...' : `Send to ${recipients.length} People`}
                </NeoButton>
              </div>
            </NeoCard>

            <NeoCard>
              <h3 className="text-lg font-black uppercase mb-4">Quick Links</h3>
              <div className="space-y-3">
                <NeoButton variant="secondary" className="w-full justify-start text-sm" to="/reports/state-of-packaging-2026">
                  <FileText className="w-4 h-4 mr-2" /> View Report Page
                </NeoButton>
                <NeoButton variant="secondary" className="w-full justify-start text-sm" to="/workshop-register">
                  <Users className="w-4 h-4 mr-2" /> View Register Page
                </NeoButton>
                <NeoButton variant="secondary" className="w-full justify-start text-sm" to="/ctrl-x9k7m/prospects">
                  <User className="w-4 h-4 mr-2" /> Find New Prospects
                </NeoButton>
              </div>
            </NeoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCampaignPage;
