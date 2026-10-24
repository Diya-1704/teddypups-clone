# TeddyPups UAE — Reference Analysis (Verified)

> Source: https://puppy.instabizweb.com/  
> Captured: 2026-10-23  
> Status: **Verified** — structure below reflects actual live homepage

---

## 1. Global Brand & Design

| Attribute | Value |
|-----------|-------|
| Brand name | **TeddyPups U.A.E.** |
| Tagline | *"every puppy is family"* |
| Visual style | Warm, premium, minimal |
| Background | Cream / off-white |
| Text colour | Dark brown / charcoal |
| Accent colour | Gold / tan |
| Card style | Rounded corners, soft drop-shadows |
| Photography | Large, high-quality puppy images |

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body / UI**: Nunito (clean humanist sans-serif)

---

## 2. Header / Navigation

- **Logo**: "TeddyPups" wordmark + small paw/brand mark
- **Nav links** (left → right):
  - Home
  - Puppies
  - Happy Families
  - How It Works
  - FAQ
  - Visit & Contact
  - Gone Home *(conditional)*
- **WhatsApp CTA button**: green, right-aligned
- **Behaviour**: sticky with blur backdrop (`backdrop-filter: blur`)
- **Mobile**: hamburger icon → full-screen or slide-down overlay nav

---

## 3. Homepage Section Order (VERIFIED)

### Section 1 — Hero
- **Eyebrow text**: "every puppy is family"
- **H1**: "Premium teacup puppies in Dubai"
- **Sub-copy**: "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide."
- **CTAs**: "View Available Puppies" (primary) + WhatsApp button (secondary)

### Section 2 — Two Ways to Meet Your Puppy
- **H2**: "Two ways to meet your puppy"
- **Card 1 — Puppies in Dubai**
  - Body: "See them, love them, take them home. Come meet our locally available puppies before you decide."
  - Button: "Meet local puppies"
- **Card 2 — Imported for You**
  - Body: "Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import."
  - Button: "See imported puppies"

### Section 3 — Your Puppy Journey (3 steps)
- **H2**: "Your puppy journey"
- **Sub-copy**: "A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful."
- **Step 1 — Choose your breed**
  - "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."
- **Step 2 — Get photos & details**
  - "Our team will share real photos, health details, and all necessary information directly on WhatsApp."
- **Step 3 — Secure & safe delivery**
  - "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free."

### Section 4 — WhatsApp CTA Block
- Heading: "Say hello on WhatsApp"
- Pre-filled message: "Hi TeddyPups! I'd love to know more about your puppies."

### Section 5 — Why Families Trust TeddyPups (4 badges)
- **H2**: "Why families trust TeddyPups"
- **Badge 1**: "Vet-checked & healthy" — "Every puppy comes vaccinated, dewormed, and with a verified health certificate."
- **Badge 2**: "Korea to Dubai, safely" — "Trusted breeders, safe travel, and premium care from start to finish."
- **Badge 3**: "Support 24/7" — "Always here to help, from choosing your puppy to post-delivery support."
- **Badge 4**: "Trusted by families worldwide" — "Puppies delivered to loving homes all around the world."

### Section 6 — Happy Families & Puppies (Gallery)
- **H2**: "Happy families & puppies"
- **Body**: "We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts."
- Responsive photo grid (grid or masonry layout)

### Section 7 — Questions, Answered (FAQ Preview)
- **H2**: "Questions, answered"
- Link: "Read all questions →"
- **Accordion — Q1**: "Are your puppies vaccinated and health-checked?"
  - A: "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."
- **Accordion — Q2**: "Can I meet a puppy before I decide?"
  - A: "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."
- **Accordion — Q3**: "Can I take my puppy home the same day?"
  - A: "Local puppies are available immediately, so you can take your puppy home the same day."

### Section 8 — Final CTA
- **H2**: "Ready to meet your new best friend?"
- **Body**: "Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE."
- **CTAs**: WhatsApp button + "View Puppies" button

### Section 9 — Footer
- Logo + tagline
- Link columns: **Explore** | **Support** | **Contact**
- Contact: Downtown Dubai showroom address, WhatsApp number, email
- Copyright line

---

## 4. Subpages

| Route | Description |
|-------|-------------|
| `/puppies` | Grid of puppy cards — photo, name, breed, age, gender, status badge. Filters by breed/status. Pagination or infinite scroll. |
| `/puppies/:slug` | Detail page — gallery (prev/next), name, breed, gender, age, status, health info, WhatsApp enquiry button, enquiry form, related puppies. |
| `/happy-families` | Testimonials + photo gallery with lightbox. |
| `/how-it-works` | Full 3-step journey expanded, plus delivery / import / reservation detail sections. |
| `/faq` | Searchable accordion of all FAQs. Empty-state message when search has no results. |
| `/contact` | Form: name, phone/WhatsApp, email, location, puppy selection, message. Dubai showroom info. Google Maps link. |
| `/gone-home` | Puppies with `status = gone_home`. CTA back to available puppies. |

---

## 5. WhatsApp Integration Notes

- WhatsApp number stored in `site_settings` (configurable via admin).
- Deep-link format: `https://wa.me/<number>?text=<url-encoded-message>`
- Pre-filled messages:
  - Global: "Hi TeddyPups! I'd love to know more about your puppies."
  - Puppy-specific: "Hi TeddyPups! I'm interested in [Puppy Name]. Can I get more details?"
- URLs must be properly encoded (`encodeURIComponent`).
- No WhatsApp Business API integration is claimed — links only.

---

## 6. Content Authenticity Notices

- Demo gallery images use placeholder assets; real photos must be uploaded via admin.
- FAQ answers are reproduced from the live site; no medical claims are added.
- Seed data is clearly labelled as demo/sample data.
- No invented testimonials — all gallery items must be uploaded by admin.

---

*End of reference analysis.*
