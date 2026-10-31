# City Grafix Kadapa - Official Modern Website

A high-performance, mobile-first website and digital quotation portal built for **City Grafix**, Kadapa's premier one-stop destination for Jumbo Xerox, flex printing, 3D LED glow signage, digital printing, and personalized gifting.

**Slogan:** *Quality Printing | Creative Designing | Affordable Prices | On-Time Delivery*

---

## 🌟 4 Core Service Pillars

1. **Jumbo Xerox & Large Format Plan Printing (`#services?tab=xerox`)**:
   - A0, A1, A2, A3, A4 Xerox in Colour & Black & White.
   - CAD engineering drawings, architectural blueprints, and venture layout plans.
   - Municipal layout & village map plotting on heavy bond paper or tracing paper/cloth.
   - High-resolution wide-format scanning up to A0 with direct WhatsApp/email dispatch.

2. **Flex Printing & 3D Signage (`#services?tab=flex`)**:
   - Star Flex (హై-క్వాలిటీ స్టార్ ఫ్లెక్స్), Normal Flex, Backlit Flex & Frontlit Hoardings.
   - 3D Acrylic LED glow sign boards, ACP router cut signs & steel channel letters.
   - Vinyl printing & One-Way Vision window graphic film.

3. **Personalised Gifts & Frames (`#services?tab=gifts`)**:
   - Photo Mugs & heat-reactive Magic Mugs.
   - Premium synthetic & wooden photo frames (A4 to 12×18").
   - Photo cushions & pillows (12×12", 16×16", Heart shape, Magic sequin).
   - Customized T-shirt photo printing with breathable sublimation ink.
   - Corporate, birthday, anniversary & return gifts.

4. **Stickers & Rigid Boards (`#services?tab=boards`)**:
   - 3mm & 5mm Sunboard / PVC Foam Board direct mounting.
   - Die-cut vinyl stickers, product labels & vehicle graphics.
   - Art boards, promotional display stands & corporate wall branding.

---

## ⚙️ Interactive Features

1. **Instant Print Size & Order Estimator (`#calculator`)**:
   - Interactive specification engine with customizable dimensions (feet / inches / quantity / letter counts).
   - Supports Jumbo Xerox (A0–A3), Star Flex, LED Glow Boards, Sunboards, Custom T-Shirts, Photo Cushions, Visiting Cards, and Mugs.
   - Zero hardcoded public pricing—generates a clean specification for direct wholesale quote confirmation.
   - 1-Tap **"Send Specs to WhatsApp for Best Quote"**: Directly opens WhatsApp with the formatted order specs.
   - Built for customer-provided ready designs (CDR, PSD, PDF, TIFF, or high-res JPG).

2. **Interactive Custom Gifting Studio (`#custom-gifts`) (ImpressKart & TheGifty Style)**:
   - Visual customization builder with real-time 2D product mockup rendering for:
     - **Custom Mugs & Cups**: Plain Ceramic (₹350), Inner Colour (₹450), Heart Handle (₹500), Magic Heat-Reveal (₹550).
     - **Photo T-Shirts**: Sublimation (Round Neck ₹300 / Collar ₹400), DTF Wash-Proof (Round Neck ₹400 / Collar ₹500), XL/XXL (+₹50 extra).
     - **Photo Frames**: Desktop 6×8" (₹250), Wall 8×12" (₹350), Collage 12×18" (₹650), Grand 16×24" (₹1,100), LED Glow 12×18" (₹1,250).
     - **Photo Pillows**: Heart or Square Standard (₹450), Fancy Fur (₹600), Magic Sequins (₹800), LED Glow (₹850).
     - **Caps & Merch**: Cap + High-Definition DTF Print (₹300).
   - **Interactive Visual Mockups**:
     - 📸 Live Photo Upload & auto-fitting onto mockups.
     - ✍️ Custom text inscription with live font styles (Serif, Sans, Script) and color swatches.
     - 🔥 Magic Mug hot/cold reveal test toggle.
     - 💡 Ambient LED Glow Frame / Cushion lights ON/OFF toggle.
     - ✨ Magic Pillow reversible sequins swipe animation.
   - **WhatsApp Order & Approval Workflow**:
     - Formats complete order breakdown (Product, Variant, Specs, Inscription, Quantity, Exact Total ₹).
     - 1-Tap submission directly to WhatsApp.
     - Workshop team verifies photo/digital proof, shares UPI QR, and begins printing upon customer approval.

3. **Google Business Profile Review Integration**:
   - Direct CTA linking to the official ReviewSmart review collection portal: `https://www.reviewsmart.online/r/citygrafix`.

3. **Dual Social Media Hub - Instagram & YouTube (`#social`)**:
   - Showcases `@citygrafix1` on Instagram and `@Citygrafix1` on YouTube side-by-side with 1-tap links to stream workshop tours, LED glow tests, and live printing reels.
   - Eliminates misleading mock/dummy posts, providing direct authentic links to active social video feeds.

4. **Client Photography Proofing Hub (`#gallery-hub`) & Admin Portal**:
   - Dedicated photography gallery system for wedding & event photographers.
   - **Modern Memory-Efficient Image Optimizer**:
     - Zero-heap decoding via `URL.createObjectURL` and hardware `createImageBitmap` acceleration.
     - Multi-step anti-aliased downsampling (stepped mipmapping) for crystal-clear fabric, jewelry, and portrait details.
     - WebP perceptual compression with customizable profiles (Studio Web 80%, Retina 2K 85%, Mobile Fast 72%) achieving **~95% memory & storage savings** without perceptual visual loss.
     - Micro-thumbnail generation (~18KB) for instantaneous mobile masonry rendering.
     - Sequential batch queue with GC tick pauses preventing browser tab out-of-memory crashes.
   - **High-Capacity IndexedDB Engine**:
     - Overcomes traditional 5MB `localStorage` limits with gigabytes of local storage capacity.
   - Zero-login mobile photo viewing, heart/favoriting for album selection, client-side ZIP bulk downloads, and configurable expiry periods (6 mo / 1 yr / 2 yr / unlimited).

5. **Store Location & Contact (`#contact`)**:
   - **Address:** `#21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa, Andhra Pradesh – 516001.`
   - **Direct Call & WhatsApp:** `+91 76010 43674`

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom CMYK printing palette & responsive typography
- **Icons**: Lucide React + custom SVG icons
- **State & Storage**: SQLite-backed photo database via browser IndexedDB/LocalStorage fallback with zero external tracking
