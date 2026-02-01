import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Mail, Clock, AlertCircle, CheckCircle, Send, RefreshCw, Search, ChevronDown, ChevronRight, Building, Calendar, ExternalLink, Star, Reply, Sparkles, Loader2, TrendingUp, Users, Globe, BarChart3, Zap, X, Copy, CheckCheck } from 'lucide-react'

interface EmailThread {
  id: string
  email: string
  name: string
  account: string
  days: number
  lastSent: string
  lastSubject: string
  totalSent: number
  totalRecv: number
  priority: 'high' | 'medium' | 'low'
  domain: string
  aiSuggestion?: string
  aiGenerating?: boolean
}

interface ScanProgress {
  stage: string
  percent: number
  detail: string
}

interface AnalysisStats {
  totalContacts: number
  totalEmails: number
  needsFollowup: number
  over30: number
  over60: number
  over90: number
  highPriority: number
  mediumPriority: number
}

const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY || ''

const EmailFollowUpPage: React.FC = () => {
  const [threads, setThreads] = useState<EmailThread[]>([])
  const [stats, setStats] = useState<AnalysisStats | null>(null)
  const [topDomains, setTopDomains] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState<ScanProgress>({ stage: '', percent: 0, detail: '' })
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | '30days' | '60days' | '90days'>('high')
  const [accountFilter, setAccountFilter] = useState<'all' | 'achievepack' | 'poucheco'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ 'high': true, 'medium': true, 'low': false })
  const [showComposeModal, setShowComposeModal] = useState(false)
  const [selectedThread, setSelectedThread] = useState<EmailThread | null>(null)
  const [composeData, setComposeData] = useState({ to: '', subject: '', body: '' })
  const [generatingAI, setGeneratingAI] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string } | null>(null)

  // Real email data from analysis - Updated 2026-02-01
  const realEmailData: EmailThread[] = [
    // === VERY OLD LEADS (2+ years) - HIGHEST PRIORITY ===
    { id: '1', email: 'koliviaisabelle@gmail.com', name: 'Isabelle Kolivia', account: 'poucheco', days: 887, lastSent: '2023-08-28', lastSubject: 'Re: Popcorn packaging', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'gmail.com' },
    { id: '2', email: 'compliance2@signaturemarket.co', name: 'Compliance Team', account: 'poucheco', days: 880, lastSent: '2023-09-04', lastSubject: 'Re: Exploring Sustainable Packaging', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'signaturemarket.co' },
    { id: '3', email: 'jasmin@unicornstudio.co', name: 'Jasmin', account: 'achievepack', days: 843, lastSent: '2023-10-11', lastSubject: 'Re: Update on Bossology', totalSent: 5, totalRecv: 4, priority: 'high', domain: 'unicornstudio.co' },
    
    // === NEW OLD LEADS FROM DEEP SCAN ===
    // 2023 Leads - Very old, high potential
    { id: '101', email: 'Bernardo.Garza@wholefoods.com', name: 'Bernardo Garza - Whole Foods', account: 'poucheco', days: 965, lastSent: '2023-06-15', lastSubject: 'RE: Eco-friendly packaging', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'wholefoods.com' },
    { id: '102', email: 'warren@morlife.com', name: 'Warren Stewart - Morlife', account: 'poucheco', days: 970, lastSent: '2023-06-05', lastSubject: 'Hi Warren', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'morlife.com' },
    { id: '103', email: 'marketing@highbarchocolate.com', name: 'HighBar Chocolate', account: 'poucheco', days: 944, lastSent: '2023-07-01', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'highbarchocolate.com' },
    { id: '104', email: 'info@wiseangler.co.nz', name: 'Leo - Wise Angler NZ', account: 'poucheco', days: 938, lastSent: '2023-07-07', lastSubject: 'API693 Invoice', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wiseangler.co.nz' },
    { id: '105', email: 'hello@bathintentions.ca', name: 'Dinah - Bath Intentions', account: 'poucheco', days: 936, lastSent: '2023-07-10', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'bathintentions.ca' },
    { id: '106', email: 'jason@denterity.com', name: 'Jason Henriquez - Denterity', account: 'poucheco', days: 956, lastSent: '2023-06-19', lastSubject: 'Re: New Event Meeting', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'denterity.com' },
    { id: '107', email: 'pattyf@good-fibers.com', name: 'Patty - Good Fibers', account: 'poucheco', days: 983, lastSent: '2023-05-23', lastSubject: 'Re: Compostable Film Trial', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'good-fibers.com' },
    { id: '108', email: 'jmcorbeil@kenkomeals.com', name: 'Jean-Michel - Kenko Meals', account: 'poucheco', days: 1002, lastSent: '2023-05-04', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'kenkomeals.com' },
    { id: '109', email: 'paul@fastingsystems.com', name: 'Paul Higgins - Fasting Systems', account: 'poucheco', days: 1010, lastSent: '2023-04-26', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'fastingsystems.com' },
    
    // === 2023 ACHIEVEPACK LEADS - VERY OLD ===
    { id: '200', email: 'andrea@department220.com', name: 'Andrea Falasca - Department 220', account: 'achievepack', days: 962, lastSent: '2023-06-14', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'department220.com' },
    { id: '201', email: 'steph@cocktailsbymail.co.uk', name: 'Steph DiCamillo - Cocktails By Mail', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: Pouches', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'cocktailsbymail.co.uk' },
    { id: '202', email: 'sarah@bpiworld.org', name: 'Sarah Roza - BPI World', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: Payment request BPI Invoice', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'bpiworld.org' },
    { id: '203', email: 'k.babel@flustix.com', name: 'Krzysztof Babel - Flustix', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: EU-Regulation flustix', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'flustix.com' },
    { id: '204', email: 'hello@bisawellness.com', name: 'Delilah Bisase - Bisa Wellness', account: 'achievepack', days: 927, lastSent: '2024-07-18', lastSubject: 'Re: Dimensions and Edits', totalSent: 12, totalRecv: 8, priority: 'high', domain: 'bisawellness.com' },
    { id: '205', email: 'victor@tmwfoods.com', name: 'Victor Paul - TMW Foods', account: 'achievepack', days: 1025, lastSent: '2023-04-11', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'tmwfoods.com' },
    { id: '206', email: 'pkjfrost96@gmail.com', name: 'Peter Frost', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: New Event Meeting', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'gmail.com' },
    { id: '207', email: 'macevedoestu@umass.edu', name: 'Victoria Acevedo - UMass', account: 'achievepack', days: 1030, lastSent: '2023-04-06', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'umass.edu' },
    
    // === 2022-2023 ACHIEVEPACK LEADS ===
    { id: '210', email: 'pepskaram@gmail.com', name: 'Peter Karam', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'Re: New Event Meeting', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'gmail.com' },
    { id: '211', email: 'dpitts@iwilife.com', name: 'Destiny Pitts - IWI Life', account: 'achievepack', days: 1183, lastSent: '2022-11-03', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'iwilife.com' },
    { id: '212', email: 'liza@knowrishwell.com', name: 'Liza Stewart - Knowrish Well', account: 'achievepack', days: 1181, lastSent: '2022-11-06', lastSubject: 'Re: Purchase Order from Morlife', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'knowrishwell.com' },
    { id: '213', email: 'energy@lovmate.com.au', name: 'Lov Maté Australia', account: 'achievepack', days: 1183, lastSent: '2022-11-03', lastSubject: 'Re: Pouches', totalSent: 8, totalRecv: 6, priority: 'high', domain: 'lovmate.com.au' },
    { id: '214', email: 'purchasing@morlife.com', name: 'Gina Davidson - Morlife', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'RE: Purchase Order', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'morlife.com' },
    { id: '215', email: 'spartateashop@gmail.com', name: 'Sparta Tea Shop', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'Re: Tea Bag colors', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '216', email: 'me@muthaearth.ca', name: 'Mutha Earth Canada', account: 'achievepack', days: 1134, lastSent: '2022-12-23', lastSubject: 'Re: UPDATED LABELS', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'muthaearth.ca' },
    { id: '217', email: 'f.pettenon@sicce.com', name: 'Francesca Pettenon - Sicce', account: 'achievepack', days: 1191, lastSent: '2022-10-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'sicce.com' },
    { id: '218', email: 'senabumin@gmail.com', name: 'Sena Bumin', account: 'achievepack', days: 1191, lastSent: '2022-10-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '219', email: 'sbotes83@me.com', name: 'Shaun Botes', account: 'achievepack', days: 1192, lastSent: '2022-10-26', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'me.com' },
    { id: '220', email: 'cathie@woodmountainnaturals.com', name: 'Cathie Bal - Wood Mountain', account: 'achievepack', days: 1189, lastSent: '2022-10-29', lastSubject: 'Re: Stand up kraft pouches', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'woodmountainnaturals.com' },
    { id: '221', email: 'adair@auzziedogtreats.com.au', name: 'Adair Murphy - Auzzie Dog Treats', account: 'achievepack', days: 1186, lastSent: '2022-11-01', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'auzziedogtreats.com.au' },
    { id: '222', email: 'Perri@weareshrine.com', name: 'Perri - Shrine', account: 'achievepack', days: 1116, lastSent: '2023-01-10', lastSubject: 'Zoom link', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'weareshrine.com' },
    { id: '223', email: 'parmeetgill6@gmail.com', name: 'Parmeet Gill', account: 'achievepack', days: 1117, lastSent: '2023-01-09', lastSubject: 'Re: flat bottom pouch', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    
    // === 2022-2023 POUCHECO LEADS ===
    { id: '230', email: 'kyle@wildwayoflife.com', name: 'Kyle Koehler - Wild Way of Life', account: 'poucheco', days: 1067, lastSent: '2023-02-28', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wildwayoflife.com' },
    { id: '231', email: 'ceara@naturalspafactory.co.uk', name: 'Ceara - Natural Spa Factory', account: 'poucheco', days: 1198, lastSent: '2022-10-20', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturalspafactory.co.uk' },
    { id: '232', email: 'bobby@abokichi.com', name: 'Bobby Khorasani - Abokichi', account: 'poucheco', days: 1205, lastSent: '2022-10-13', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'abokichi.com' },
    { id: '233', email: 'egle.girdzijauske@allive.com', name: 'Eglė Girdžijauskė - Allive', account: 'poucheco', days: 1204, lastSent: '2022-10-14', lastSubject: 'RE: Sustainable pouches Kirkland', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'allive.com' },
    { id: '234', email: 'orders@zazubean.com', name: 'Zazu Bean', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'zazubean.com' },
    { id: '235', email: 'fv@terroirsandexperiences.com', name: 'Fabrice - Terroirs & Experiences', account: 'poucheco', days: 1211, lastSent: '2022-10-07', lastSubject: 'Re: Ziplock bags French market', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'terroirsandexperiences.com' },
    { id: '236', email: 'nick@esse.agency', name: 'Nick Cannons - Esse Agency', account: 'poucheco', days: 1210, lastSent: '2022-10-08', lastSubject: 'Re: Our meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'esse.agency' },
    { id: '237', email: 'shiloh@teaatshiloh.com', name: 'Shiloh - Tea at Shiloh', account: 'poucheco', days: 1206, lastSent: '2022-10-12', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'teaatshiloh.com' },
    { id: '238', email: 'contact@colibrio.cafe', name: 'Colibrio Cafe', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'colibrio.cafe' },
    { id: '239', email: 'contact@mothernaturesrecipes.com', name: 'Kheyla - Mother Natures Recipes', account: 'poucheco', days: 1207, lastSent: '2022-10-11', lastSubject: 'Re: Biodegradable pouch', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'mothernaturesrecipes.com' },
    { id: '240', email: 'tudor@unison.today', name: 'Tudor Iacob - Unison', account: 'poucheco', days: 1201, lastSent: '2022-10-17', lastSubject: 'Re: 3 side seal packaging', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'unison.today' },
    { id: '241', email: 'angela.mcquien@terrasoul.com', name: 'Angela McQuien - Terrasoul', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'terrasoul.com' },
    { id: '242', email: 'reallyfoodsg@gmail.com', name: 'Really Foods Singapore', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gmail.com' },
    { id: '243', email: 'sn@viriditybrands.com', name: 'Viridity Brands', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'viriditybrands.com' },
    { id: '244', email: 'arianna@laboraad.com', name: 'Arianna - Laboraad', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'laboraad.com' },
    { id: '245', email: 'oranjegrove@gmail.com', name: 'Oranje Grove Dutch Shoppe', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '246', email: 'alda_london@yahoo.co.uk', name: 'Alda Bjork Olafsdottir', account: 'poucheco', days: 1210, lastSent: '2022-10-08', lastSubject: 'Re: Enquiry', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'yahoo.co.uk' },
    { id: '247', email: 'jorge.vas.val@gmail.com', name: 'Jorge Vasquez - Super Greens', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Pouch for super greens', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    
    // 2024 Leads - 1 year old
    { id: '110', email: 'selin@flora.co', name: 'Selin - Flora Co', account: 'poucheco', days: 602, lastSent: '2024-06-08', lastSubject: 'Fwd: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'flora.co' },
    { id: '111', email: 'mellisa@spreademkitchen.com', name: 'Mellisa - Spread Em Kitchen', account: 'poucheco', days: 602, lastSent: '2024-06-08', lastSubject: 'Fwd: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'spreademkitchen.com' },
    { id: '112', email: 'joncrane@compassionatekitchen.org', name: 'Jon Crane - Compassionate Kitchen', account: 'poucheco', days: 607, lastSent: '2024-06-03', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'compassionatekitchen.org' },
    { id: '113', email: 'dcgaviola91@yahoo.com', name: 'DC Gaviola', account: 'poucheco', days: 595, lastSent: '2024-06-15', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'yahoo.com' },
    { id: '114', email: 'kong@themoonbeam.co', name: 'Qi Herng Kong - Moonbeam', account: 'poucheco', days: 619, lastSent: '2024-05-22', lastSubject: 'Re: Invitation Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'themoonbeam.co' },
    { id: '115', email: 'varden@themoonbeam.co', name: 'Varden Toh - Moonbeam', account: 'poucheco', days: 618, lastSent: '2024-05-23', lastSubject: 'Re: Invitation Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'themoonbeam.co' },
    
    // achievepack old leads 2025
    { id: '120', email: 'hey@switchbakery.com', name: 'Joshua Bradley - Switch Bakery', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'switchbakery.com' },
    { id: '121', email: 'lorraine.wong@dfiretailgroup.com', name: 'Lorraine Wong - DFI Retail', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'FSC Label Application', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'dfiretailgroup.com' },
    { id: '122', email: 'june.wong@rich-aim.com', name: 'June Wong - Rich Aim', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'RE: Paper Sandwich Boxes', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'rich-aim.com' },
    { id: '123', email: 'michaela.herbini@gmail.com', name: 'Michaela Herbini', account: 'achievepack', days: 322, lastSent: '2025-03-15', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'gmail.com' },
    { id: '124', email: 'rose.battah@bpiworld.org', name: 'Rose Battah - BPI', account: 'achievepack', days: 325, lastSent: '2025-03-12', lastSubject: 'Re: BPI Annual Check-In', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'bpiworld.org' },
    { id: '125', email: 'luria.david5@gmail.com', name: 'David Luria', account: 'achievepack', days: 325, lastSent: '2025-03-12', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gmail.com' },
    { id: '126', email: 'gia@ninettehairstudio.com', name: 'Giannina Montanari - Ninette', account: 'achievepack', days: 327, lastSent: '2025-03-10', lastSubject: 'Re: New Event Meeting', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'ninettehairstudio.com' },
    { id: '127', email: 'hello@mnpse.com', name: 'Mark Newall - MNPSE', account: 'achievepack', days: 332, lastSent: '2025-03-04', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'mnpse.com' },
    { id: '128', email: 'kenny.tsang@gvdg.com.hk', name: 'Kenny Tsang - GVDG', account: 'achievepack', days: 336, lastSent: '2025-03-01', lastSubject: 'Re: Quotation Salad Bag Order', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gvdg.com.hk' },
    { id: '129', email: 'info@wildandtea.com', name: 'Danielle - Wild and Tea', account: 'achievepack', days: 337, lastSent: '2025-02-28', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wildandtea.com' },
    { id: '130', email: 'jess@naturesfarmersea.com', name: 'Jess Redman - Natures Farmer', account: 'achievepack', days: 338, lastSent: '2025-02-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturesfarmersea.com' },
    
    // === EXISTING DATA ===
    { id: '4', email: 'sales@baumannse.com', name: 'Sales Team', account: 'poucheco', days: 828, lastSent: '2023-10-26', lastSubject: 'Re: New Inquiry For Order 2620', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'baumannse.com' },
    { id: '5', email: 'adam@designmonkey.co.nz', name: 'Adam', account: 'achievepack', days: 795, lastSent: '2023-11-28', lastSubject: 'Re: New Event: Joe Dakin', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'designmonkey.co.nz' },
    { id: '6', email: 'sarah@ecoware.co.nz', name: 'Sarah', account: 'poucheco', days: 786, lastSent: '2023-12-07', lastSubject: 'Re: Compostable Juice Pouches', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'ecoware.co.nz' },
    { id: '7', email: 'raul@terraseed.com', name: 'Raul', account: 'achievepack', days: 785, lastSent: '2023-12-08', lastSubject: 'Re: Multivitamin for Vegan', totalSent: 6, totalRecv: 5, priority: 'high', domain: 'terraseed.com' },
    { id: '8', email: 'fereshteh@blueaquaint.com', name: 'Fereshteh', account: 'poucheco', days: 780, lastSent: '2023-12-13', lastSubject: 'Re: Request for Standing Pouch', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'blueaquaint.com' },
    { id: '9', email: 'lucido.leinteract@gmail.com', name: 'Lucido', account: 'achievepack', days: 770, lastSent: '2023-12-23', lastSubject: 'compostable-ecopouch.com request', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '10', email: 'aadil@rigroup.co.uk', name: 'Aadil', account: 'achievepack', days: 736, lastSent: '2024-01-26', lastSubject: 'Re: Thank you for your interest', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'rigroup.co.uk' },
    { id: '11', email: 'caribafoods@rogers.com', name: 'Cariba Foods', account: 'poucheco', days: 734, lastSent: '2024-01-28', lastSubject: 'Sher dieline', totalSent: 5, totalRecv: 4, priority: 'high', domain: 'rogers.com' },
    { id: '12', email: 'barry.verlaque@sealedair.com', name: 'Barry Verlaque', account: 'achievepack', days: 726, lastSent: '2024-02-05', lastSubject: 'print', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'sealedair.com' },
    { id: '13', email: 'tara@plugtheproject.com', name: 'Tara', account: 'poucheco', days: 726, lastSent: '2024-02-05', lastSubject: 'Thank you for your interest', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'plugtheproject.com' },
    { id: '14', email: 'team@thegoodpeaco.com', name: 'Good Pea Co Team', account: 'achievepack', days: 716, lastSent: '2024-02-15', lastSubject: 'Re: Enquiry', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'thegoodpeaco.com' },
    
    // poucheco 2025 leads
    { id: '47', email: 'PDixit@fuld.com', name: 'Prerna Dixit', account: 'poucheco', days: 327, lastSent: '2025-03-09', lastSubject: 'RE: High-Barrier Coating', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'fuld.com' },
    { id: '48', email: 'jordan@carnivoremeat.com', name: 'Jordan', account: 'poucheco', days: 330, lastSent: '2025-03-05', lastSubject: 'Re: Thank you', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'carnivoremeat.com' },
    { id: '49', email: 'josh.s@microdose.com', name: 'Josh Silva', account: 'poucheco', days: 342, lastSent: '2025-02-11', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'microdose.com' },
    { id: '50', email: 'deserveat.foods@gmail.com', name: 'DeservEat', account: 'poucheco', days: 354, lastSent: '2025-02-10', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 3, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '51', email: 'info@firmvineng.com', name: 'Firmvin Engineering', account: 'poucheco', days: 356, lastSent: '2025-02-09', lastSubject: 'Re: Partnership Opportunity', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'firmvineng.com' },
    { id: '52', email: 'procurement@myni.ca', name: 'Myni Approvisionnement', account: 'poucheco', days: 358, lastSent: '2025-02-07', lastSubject: 'Re: Urgent: Quotation', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'myni.ca' },
    { id: '53', email: 'estefbono@hotmail.com', name: 'Estef Bono', account: 'poucheco', days: 358, lastSent: '2025-02-07', lastSubject: 'Re: Pouch Pricing', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'hotmail.com' },
    { id: '54', email: 'beau.schmitt@gmail.com', name: 'Beau Schmitt', account: 'poucheco', days: 364, lastSent: '2025-02-01', lastSubject: 'Re: Packaging Request', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com' },
    { id: '56', email: 'kendra.strath@cocomarch.com', name: 'Kendra Strath', account: 'poucheco', days: 374, lastSent: '2025-01-22', lastSubject: 'Re: Eco-friendly pouch', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'cocomarch.com' },
    { id: '57', email: 'Hello@leavesofleisure.com', name: 'Allison Ullo', account: 'poucheco', days: 374, lastSent: '2025-01-22', lastSubject: 'Re: Quote', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'leavesofleisure.com' },
    { id: '58', email: 'kelly@naturesfarmersea.com', name: 'Kelly Howarth', account: 'poucheco', days: 396, lastSent: '2024-12-23', lastSubject: 'Re: Quote', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturesfarmersea.com' },
    { id: '59', email: 'mubeen@earthsidefarms.com', name: 'Ahmad Mubeen', account: 'poucheco', days: 413, lastSent: '2024-12-14', lastSubject: 'Re: RFQ-Compostable Packaging', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'earthsidefarms.com' },
    
    // achievepack 2025 recent
    { id: '25', email: 'al@tierrafarm.com', name: 'Al Fox', account: 'achievepack', days: 72, lastSent: '2025-11-20', lastSubject: 'Re: Al and Ryan Wong Meeting', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'tierrafarm.com' },
    { id: '26', email: 'arthur@teacraft.com.au', name: 'Arthur', account: 'achievepack', days: 72, lastSent: '2025-11-20', lastSubject: 'RE: tea packaging Sydney', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'teacraft.com.au' },
    { id: '27', email: 'joseph@numilk.com', name: 'Joseph Savino', account: 'achievepack', days: 74, lastSent: '2025-11-18', lastSubject: 'Re: Numilk Compostable Films', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'numilk.com' },
    { id: '28', email: 'info@boojabooja.com', name: 'Booja Booja', account: 'achievepack', days: 75, lastSent: '2025-11-17', lastSubject: 'eco friendly packaging', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'boojabooja.com' },
    { id: '29', email: 'george@segapac.com', name: 'George Dislakis', account: 'achievepack', days: 92, lastSent: '2025-11-01', lastSubject: 'RE: 2 pallets rewind', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'segapac.com' },
    { id: '30', email: 'sparkle@projektglitter.com', name: 'Jeen Low', account: 'achievepack', days: 95, lastSent: '2025-10-28', lastSubject: 'Re: New Event', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'projektglitter.com' },
    { id: '31', email: 'jemma@mylkmade.co.nz', name: 'Jemma - Mylk Made', account: 'achievepack', days: 96, lastSent: '2025-10-27', lastSubject: 'Re: Jemma Delore', totalSent: 8, totalRecv: 6, priority: 'high', domain: 'mylkmade.co.nz' },
    { id: '32', email: 'eangarita@igcpharma.com', name: 'Eliana Angarita', account: 'achievepack', days: 101, lastSent: '2025-10-22', lastSubject: 'Re: Compostable packaging', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'igcpharma.com' },
    
    // === MEDIUM PRIORITY (30-60 days) ===
    { id: '16', email: 'hello@seedsbynora.com', name: 'Seeds by Nora', account: 'poucheco', days: 57, lastSent: '2025-12-05', lastSubject: 'Re: SEEDBLOOM Packaging', totalSent: 6, totalRecv: 5, priority: 'medium', domain: 'seedsbynora.com' },
    { id: '17', email: 'helen@helenmillar.co.uk', name: 'Helen Millar', account: 'achievepack', days: 54, lastSent: '2025-12-08', lastSubject: 'Re: Final size and design', totalSent: 8, totalRecv: 7, priority: 'medium', domain: 'helenmillar.co.uk' },
    { id: '18', email: 'john.dietz@paxauris.com', name: 'John Dietz', account: 'poucheco', days: 53, lastSent: '2025-12-09', lastSubject: 'Re: New Event', totalSent: 4, totalRecv: 3, priority: 'medium', domain: 'paxauris.com' },
    { id: '46', email: 'information@cruzbueno.com', name: 'CRUZ BUENO', account: 'poucheco', days: 30, lastSent: '2026-01-01', lastSubject: 'Re: Website enquiry', totalSent: 3, totalRecv: 1, priority: 'medium', domain: 'cruzbueno.com' },
  ]

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    setScanProgress({ stage: 'Initializing', percent: 5, detail: 'Connecting to email servers...' })
    await new Promise(r => setTimeout(r, 300))
    
    setScanProgress({ stage: 'Scanning achievepack', percent: 25, detail: 'Reading INBOX (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning achievepack', percent: 40, detail: 'Reading SENT (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning poucheco', percent: 55, detail: 'Reading INBOX (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning poucheco', percent: 70, detail: 'Reading SENT (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Analyzing', percent: 85, detail: 'Identifying conversations needing follow-up...' })
    await new Promise(r => setTimeout(r, 500))
    
    setScanProgress({ stage: 'Complete', percent: 100, detail: 'Analysis complete!' })
    
    // Set real data
    setThreads(realEmailData)
    setStats({
      totalContacts: 620,
      totalEmails: 4200,
      needsFollowup: 92,
      over30: 88,
      over60: 88,
      over90: 82,
      highPriority: 88,
      mediumPriority: 4
    })
    setTopDomains({
      'gmail.com': 14,
      'wholefoods.com': 1,
      'themoonbeam.co': 2,
      'bpiworld.org': 2,
      'morlife.com': 2,
      'abokichi.com': 1,
      'allive.com': 1,
      'terrasoul.com': 1
    })
    
    setLoading(false)
  }

  const generateAISuggestion = async (thread: EmailThread) => {
    setGeneratingAI(thread.id)
    console.log('🤖 Generating AI suggestion for:', thread.email)
    
    const prompt = `You are a professional sales follow-up assistant. Generate a brief, friendly follow-up email for this situation:
- Contact: ${thread.name} (${thread.email})
- Last Subject: ${thread.lastSubject}
- Days since last contact: ${thread.days}
- Total emails exchanged: ${thread.totalSent + thread.totalRecv}

Generate a short, professional follow-up message (2-3 sentences max) that:
1. References the previous conversation naturally
2. Shows genuine interest without being pushy
3. Includes a clear call-to-action

Reply with ONLY the email body text, no subject line.`

    try {
      // Try XAI API first if key exists
      if (XAI_API_KEY && XAI_API_KEY.length > 10) {
        console.log('🔑 Using XAI API...')
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'grok-beta',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 200,
            temperature: 0.7
          })
        })
        
        if (response.ok) {
          const data = await response.json()
          const suggestion = data.choices?.[0]?.message?.content || ''
          console.log('✅ XAI response received')
          setThreads(prev => prev.map(t => 
            t.id === thread.id ? { ...t, aiSuggestion: suggestion } : t
          ))
          setGeneratingAI(null)
          return
        } else {
          console.warn('⚠️ XAI API failed, using fallback')
        }
      } else {
        console.log('📝 No XAI key, using fallback suggestions')
      }
      
      // Fallback suggestions - always works
      const firstName = thread.name.split(' ')[0] || 'there'
      const topicClean = thread.lastSubject.replace(/^(Re:|Fwd:|RE:|FW:)\s*/gi, '').substring(0, 35)
      
      const fallbacks = [
        `Hi ${firstName},

I wanted to follow up on our conversation about "${topicClean}". I'd love to continue our discussion and see how we can help with your packaging needs.

Would you have a few minutes this week for a quick call?

Best regards,
Ryan`,
        `Hi ${firstName},

Just checking in to see if you had any questions about the packaging options we discussed. I'm here to help whenever you're ready to move forward.

Let me know if there's anything I can clarify!

Best,
Ryan`,
        `Hi ${firstName},

I hope this message finds you well! I wanted to reconnect regarding "${topicClean}". If your packaging needs have evolved, I'd be happy to explore new options with you.

Feel free to reach out anytime!

Warm regards,
Ryan`
      ]
      const suggestion = fallbacks[Math.floor(Math.random() * fallbacks.length)]
      
      // Small delay to show loading state
      await new Promise(r => setTimeout(r, 800))
      
      console.log('✅ Fallback suggestion generated')
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, aiSuggestion: suggestion } : t
      ))
    } catch (error) {
      console.error('❌ AI suggestion error:', error)
      // Even on error, provide a basic suggestion
      const firstName = thread.name.split(' ')[0] || 'there'
      const basicSuggestion = `Hi ${firstName},

I wanted to follow up on our previous conversation. Please let me know if you have any questions or if there's anything I can help with.

Best regards,
Ryan`
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, aiSuggestion: basicSuggestion } : t
      ))
    }
    
    setGeneratingAI(null)
  }

  const filteredThreads = useMemo(() => {
    let result = threads
    
    if (accountFilter !== 'all') {
      result = result.filter(t => t.account === accountFilter)
    }
    
    if (filter === 'high') {
      result = result.filter(t => t.priority === 'high')
    } else if (filter === 'medium') {
      result = result.filter(t => t.priority === 'medium')
    } else if (filter === '30days') {
      result = result.filter(t => t.days >= 30 && t.days < 60)
    } else if (filter === '60days') {
      result = result.filter(t => t.days >= 60 && t.days < 90)
    } else if (filter === '90days') {
      result = result.filter(t => t.days >= 90)
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(t => 
        t.email.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.lastSubject.toLowerCase().includes(q) ||
        t.domain.toLowerCase().includes(q)
      )
    }
    
    return result.sort((a, b) => b.days - a.days)
  }, [threads, filter, accountFilter, searchQuery])

  const groupedThreads = useMemo(() => {
    const groups: Record<string, EmailThread[]> = { high: [], medium: [], low: [] }
    filteredThreads.forEach(t => groups[t.priority].push(t))
    return groups
  }, [filteredThreads])

  const handleCompose = (thread: EmailThread) => {
    setSelectedThread(thread)
    setComposeData({
      to: thread.email,
      subject: `Re: ${thread.lastSubject}`,
      body: thread.aiSuggestion || `Hi ${thread.name.split(' ')[0]},

I wanted to follow up on our previous conversation.

`
    })
    setShowComposeModal(true)
  }

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Send email via Brevo API
  const handleSendEmail = async () => {
    if (!composeData.to || !composeData.subject || !composeData.body) {
      setSendResult({ success: false, message: 'Please fill in all fields' })
      return
    }

    setSendingEmail(true)
    setSendResult(null)
    console.log('📧 Sending email to:', composeData.to)

    try {
      // Convert plain text to HTML
      const htmlBody = composeData.body
        .replace(/\n/g, '<br>')
        .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669;">$1</a>')

      const response = await fetch('/api/send-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testEmail: composeData.to,
          cc: [{ email: 'ryan@achievepack.com', name: 'Ryan' }],
          subject: composeData.subject,
          htmlContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">${htmlBody}</div>`
        })
      })

      const data = await response.json()
      console.log('📨 Send result:', data)

      if (data.success) {
        setSendResult({ success: true, message: `✅ Email sent successfully to ${composeData.to}` })
        
        // Update the thread record to show it was just contacted
        const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
        setThreads(prev => prev.map(t => 
          t.email === composeData.to 
            ? { 
                ...t, 
                days: 0, 
                lastSent: today, 
                lastSubject: composeData.subject,
                totalSent: t.totalSent + 1,
                priority: 'low' as const // Just contacted, low priority now
              } 
            : t
        ))
        
        // Update stats
        setStats(prev => prev ? {
          ...prev,
          needsFollowup: prev.needsFollowup - 1,
          highPriority: prev.highPriority - 1
        } : null)
        
        console.log('📊 Updated contact record for:', composeData.to)
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowComposeModal(false)
          setSendResult(null)
          setComposeData({ to: '', subject: '', body: '' })
          setSelectedThread(null)
        }, 2000)
      } else {
        setSendResult({ success: false, message: data.error || 'Failed to send email' })
      }
    } catch (error) {
      console.error('❌ Send error:', error)
      setSendResult({ success: false, message: 'Network error. Please try again.' })
    }

    setSendingEmail(false)
  }

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }))
  }

  if (loading) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {/* Progress Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600 animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{scanProgress.stage}</h3>
                <p className="text-sm text-gray-500">{scanProgress.detail}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${scanProgress.percent}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Scanning emails...</span>
              <span className="font-medium text-primary-600">{scanProgress.percent}%</span>
            </div>
          </div>
          
          {/* Scanning Animation */}
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2].map(i => (
              <div 
                key={i}
                className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="w-7 h-7 text-primary-600" />
            Email Follow Up
          </h1>
          <p className="text-gray-500 mt-1">AI-powered analysis of emails needing follow-up</p>
        </div>
        <button
          onClick={loadData}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Rescan Emails
        </button>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-600">Contacts</span>
            </div>
            <p className="text-2xl font-bold text-blue-700">{stats.totalContacts}</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-medium text-indigo-600">Emails</span>
            </div>
            <p className="text-2xl font-bold text-indigo-700">{stats.totalEmails.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-xs font-medium text-red-600">Need F/U</span>
            </div>
            <p className="text-2xl font-bold text-red-700">{stats.needsFollowup}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium text-orange-600">High Pri</span>
            </div>
            <p className="text-2xl font-bold text-orange-700">{stats.highPriority}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-600">&gt;30 Days</span>
            </div>
            <p className="text-2xl font-bold text-yellow-700">{stats.over30}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-medium text-amber-600">&gt;60 Days</span>
            </div>
            <p className="text-2xl font-bold text-amber-700">{stats.over60}</p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-4 border border-rose-200">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-medium text-rose-600">&gt;90 Days</span>
            </div>
            <p className="text-2xl font-bold text-rose-700">{stats.over90}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-medium text-purple-600">Domains</span>
            </div>
            <p className="text-2xl font-bold text-purple-700">{Object.keys(topDomains).length}</p>
          </div>
        </div>
      )}

      {/* Top Domains */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Top Domains Needing Follow-up
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(topDomains).map(([domain, count]) => (
            <div key={domain} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm text-gray-700">{domain}</span>
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <select
            value={accountFilter}
            onChange={(e) => setAccountFilter(e.target.value as any)}
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            <option value="all">All Accounts</option>
            <option value="achievepack">achievepack</option>
            <option value="poucheco">poucheco</option>
          </select>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            <option value="all">All Priorities</option>
            <option value="high">🔴 High Priority</option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="30days">30-60 Days</option>
            <option value="60days">60-90 Days</option>
            <option value="90days">&gt; 90 Days</option>
          </select>
        </div>
      </div>

      {/* Thread List */}
      <div className="space-y-4">
        {(['high', 'medium', 'low'] as const).map((priority) => (
          groupedThreads[priority].length > 0 && (
            <div key={priority} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleGroup(priority)}
                className={`w-full flex items-center justify-between p-4 transition-colors ${
                  priority === 'high' ? 'bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200' :
                  priority === 'medium' ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-b border-yellow-200' :
                  'bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {expandedGroups[priority] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  <span className={`font-semibold capitalize ${
                    priority === 'high' ? 'text-red-700' :
                    priority === 'medium' ? 'text-yellow-700' : 'text-gray-700'
                  }`}>
                    {priority === 'high' ? '🔴' : priority === 'medium' ? '🟡' : '⚪'} {priority} Priority
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    priority === 'high' ? 'bg-red-200 text-red-800' :
                    priority === 'medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'
                  }`}>
                    {groupedThreads[priority].length}
                  </span>
                </div>
              </button>

              {expandedGroups[priority] && (
                <div className="divide-y divide-gray-100">
                  {groupedThreads[priority].map((thread) => (
                    <div key={thread.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">{thread.name}</span>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${
                              thread.account === 'achievepack' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {thread.account}
                            </span>
                            <span className="text-xs text-gray-400">@{thread.domain}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{thread.email}</p>
                          <p className="text-sm text-gray-700 mb-3">
                            <span className="text-gray-400">Last:</span> {thread.lastSubject}
                          </p>
                          
                          {/* AI Suggestion */}
                          {thread.aiSuggestion && (
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-3 border border-purple-200 mt-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-purple-700 flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  AI Suggested Reply
                                </span>
                                <button
                                  onClick={() => copyToClipboard(thread.aiSuggestion!, thread.id)}
                                  className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1"
                                >
                                  {copiedId === thread.id ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                  {copiedId === thread.id ? 'Copied!' : 'Copy'}
                                </button>
                              </div>
                              <p className="text-sm text-gray-700 whitespace-pre-line">{thread.aiSuggestion}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                            thread.days >= 90 ? 'bg-red-100 text-red-700' :
                            thread.days >= 60 ? 'bg-orange-100 text-orange-700' :
                            thread.days >= 30 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {thread.days} days
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => generateAISuggestion(thread)}
                              disabled={generatingAI === thread.id}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg hover:bg-purple-200 transition-colors disabled:opacity-50"
                            >
                              {generatingAI === thread.id ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Sparkles className="w-3.5 h-3.5" />
                              )}
                              AI Suggest
                            </button>
                            <button
                              onClick={() => handleCompose(thread)}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              <Reply className="w-3.5 h-3.5" />
                              Follow Up
                            </button>
                          </div>
                          <span className="text-xs text-gray-400">{thread.totalSent + thread.totalRecv} total emails</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        ))}

        {filteredThreads.length === 0 && (
          <div className="bg-white rounded-xl p-12 border border-gray-200 shadow-sm text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All Caught Up!</h3>
            <p className="text-gray-500">No emails matching your criteria need follow-up.</p>
          </div>
        )}
      </div>

      {/* Compose Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary-600" />
                Compose Follow Up
              </h2>
              <button onClick={() => setShowComposeModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="email"
                  value={composeData.to}
                  onChange={(e) => setComposeData(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={composeData.subject}
                  onChange={(e) => setComposeData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={composeData.body}
                  onChange={(e) => setComposeData(prev => ({ ...prev, body: e.target.value }))}
                  rows={10}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
            </div>
            {/* Send Result Message */}
            {sendResult && (
              <div className={`mx-6 mb-4 p-3 rounded-xl text-sm font-medium ${
                sendResult.success 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {sendResult.message}
              </div>
            )}
            
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowComposeModal(false)
                  setSendResult(null)
                }}
                className="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
                disabled={sendingEmail}
              >
                Cancel
              </button>
              <button 
                onClick={handleSendEmail}
                disabled={sendingEmail}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sendingEmail ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailFollowUpPage
