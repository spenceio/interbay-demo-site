# InterbayLabs Landing Page

A demonstration landing page showcasing **InterbayLabs.org** and **InterbayLabs.com** - premium domain names available for research institutions, non-profits, and R&D organizations.

## 🎯 Overview

This landing page is part of the Spence.io domain portfolio, targeting academic research labs, non-profit organizations, open-source foundations, and climate/AI safety research initiatives.

**Live Demo:** [Your Vercel URL here]

---

## 🚀 Features

- **Dual TLD Selector** - Interactive toggle between .org and .com pricing
- **Bundle Offer** - Special pricing for purchasing both domains together
- **Mobile Responsive** - Fully optimized for all device sizes
- **Fast Performance** - Built with Next.js and Tailwind CSS via CDN
- **Demo Disclaimer** - Clear notice that this is a demonstration page
- **Market Segmentation** - Tailored messaging for different research sectors:
  - Biotech Research
  - Climate Science
  - Open Source
  - AI Safety

---

## 💻 Tech Stack

- **Framework:** Next.js 15.1.4
- **UI Library:** React 18.3.1
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Language:** JavaScript (ES6+)

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- Git installed
- Vercel account (for deployment)

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/spenceio/interbaylabs-landing.git
cd interbaylabs-landing
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
interbaylabs-landing/
├── pages/
│   ├── _app.js          # App wrapper with Tailwind CDN
│   └── index.js         # Main landing page component
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

---

## 🎨 Customization

### Update Domain Pricing

Edit the `pricing` object in `pages/index.js`:

```javascript
const pricing = {
  org: {
    buyNow: 450,      // Update .org buy now price
    minOffer: 280,    // Update .org minimum offer
    lease: 23,
    tld: '.org'
  },
  com: {
    buyNow: 2200,     // Update .com buy now price
    minOffer: 1300,   // Update .com minimum offer
    lease: 110,
    tld: '.com'
  }
};
```

### Update GoDaddy Lander URLs

Replace the placeholder URLs at the top of `pages/index.js`:

```javascript
const BUY_NOW_URL_ORG = "your-godaddy-url-here";
const BUY_NOW_URL_COM = "your-godaddy-url-here";
const MAKE_OFFER_URL_ORG = "your-godaddy-url-here";
const MAKE_OFFER_URL_COM = "your-godaddy-url-here";
```

### Update Contact Email

Change `domains@spence.io` to your email address in:
- Purchase options section
- Bundle inquiry link

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `interbaylabs.spence.io`)
   - Update DNS records as instructed

---

## 🎯 Target Audience

This landing page is designed for:

✅ **University Research Labs** - Genomics, computational biology, life sciences  
✅ **Climate Research Institutes** - Environmental modeling, sustainability  
✅ **Open Source Foundations** - Developer tools, libraries, platforms  
✅ **AI Safety Research** - Alignment research, ethics, governance  
✅ **Non-Profit Organizations** - Grant-funded research initiatives  
✅ **Corporate R&D Divisions** - Private sector research and development  

---

## 💡 Key Selling Points

### InterbayLabs.org ($450)
- Perfect for non-profit research organizations
- Signals mission-driven, academic credibility
- Expected TLD for university research
- Strengthens grant applications
- Builds public trust

### InterbayLabs.com ($2,200)
- Ideal for research commercialization
- Corporate R&D divisions
- Tech transfer and spin-offs
- Brand protection strategy
- Future commercial flexibility

### Bundle Offer ($2,400)
- Save $250 by purchasing both domains
- Complete brand protection
- Flexibility for hybrid models
- Best value for growing institutions

---

## 📊 Grant-Friendly Pricing

InterbayLabs.org at **$450** fits within typical grant line items:

- **NSF Grants:** Allowable as project infrastructure
- **NIH Grants:** Qualifies as dissemination/outreach expense
- **Foundation Grants:** Standard non-profit infrastructure budget item

Perfect for including in:
- Equipment and supplies budgets
- Website development costs
- Communications infrastructure
- Outreach and dissemination expenses

---

## 🔒 Security & Dependencies

All dependencies are up-to-date and secure:

- ✅ Next.js 15.1.4 (latest stable, no known vulnerabilities)
- ✅ React 18.3.1 (latest stable, patched)
- ✅ Tailwind CSS via CDN (no build vulnerabilities)
- ✅ Lucide React (actively maintained icon library)

---

## 📝 License & Usage

This landing page is a **demonstration** and does not represent an actual company.

**For Domain Sellers:**
- Feel free to use this template for your own domain sales
- Customize colors, pricing, and content for your portfolio
- Attribution appreciated but not required

**For Research Institutions:**
- Contact domains@spence.io to inquire about purchasing InterbayLabs.org or .com
- All purchases secured via Escrow.com
- Fast 48-72 hour transfer process

---

## 🤝 Support & Contact

**Domain Inquiries:**  
📧 domains@spence.io

**Portfolio Website:**  
🌐 [spence.io](https://spence.io)

**Response Time:**  
⏱️ Within 4 hours (business hours)

---

## 🛠️ Troubleshooting

### Styling Not Appearing

If Tailwind styles don't load:

1. Check that `pages/_app.js` includes the CDN script:
```javascript
<script src="https://cdn.tailwindcss.com"></script>
```

2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

3. Check browser console for errors

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

2. Clear Vercel build cache and redeploy

3. Ensure Node.js version is 18 or higher:
```bash
node --version
```

### Icons Not Displaying

If Lucide icons aren't showing:

1. Verify `lucide-react` is installed:
```bash
npm list lucide-react
```

2. Reinstall if needed:
```bash
npm install lucide-react@^0.294.0
```

---

## 📈 Future Enhancements

Potential improvements for future versions:

- [ ] Add analytics tracking (Google Analytics, Plausible)
- [ ] Implement A/B testing for pricing display
- [ ] Add testimonials from research institutions
- [ ] Create FAQ section about domain transfers
- [ ] Add live chat widget for inquiries
- [ ] Implement dark/light mode toggle
- [ ] Add more research sector examples
- [ ] Create case studies section

---

## 🏗️ Built With

This project is part of the **Spence.io** premium domain portfolio, featuring:

- AgentEntity.ai - Multi-agent AI orchestration
- EntityGraph.ai - Knowledge graph infrastructure  
- SatelliteIntegrator.com - Space/defense systems
- InterbayLabs.org/.com - Research infrastructure

---

**© 2026 Spence.io - Premium Domains for Frontier Technology**

*This page is for demonstration purposes only and does not represent an actual company.*
