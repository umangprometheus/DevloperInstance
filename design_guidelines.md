# Contact Form Design Guidelines

## Design Approach: Modern Utility with Visual Warmth

**Selected Framework:** Hybrid approach combining Material Design's form patterns with Apple HIG's minimalist aesthetic, enhanced with modern gradient accents for visual interest.

**Design Philosophy:** Create a welcoming, trustworthy contact experience that reduces friction while maintaining professional credibility. Balance clean functionality with subtle visual delight.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 240 60% 50% (confident blue)
- Background: 0 0% 98% (soft off-white)
- Surface: 0 0% 100% (pure white for form container)
- Text Primary: 220 20% 20% (near-black with warmth)
- Text Secondary: 220 15% 45%
- Border: 220 15% 88%
- Success: 145 65% 45%
- Error: 0 70% 55%

**Dark Mode:**
- Primary: 240 65% 60%
- Background: 220 20% 10%
- Surface: 220 18% 14%
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 65%
- Border: 220 15% 25%
- Success: 145 60% 50%
- Error: 0 65% 60%

### B. Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - clean, readable, professional
- Fallback: system-ui, -apple-system, sans-serif

**Scale:**
- Hero/H1: 3rem/2.5rem (desktop/mobile), font-weight: 700, letter-spacing: -0.02em
- H2: 2rem/1.75rem, font-weight: 600
- Body: 1rem, font-weight: 400, line-height: 1.6
- Labels: 0.875rem, font-weight: 500, letter-spacing: 0.01em
- Helper Text: 0.8125rem, font-weight: 400

### C. Layout System

**Spacing Scale:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Form field gaps: space-y-6
- Section padding: py-20 (desktop), py-12 (mobile)
- Container: max-w-2xl for form, max-w-7xl for full page

**Grid Structure:**
- Single column form on mobile
- Consider 2-column layout on desktop for name/email fields
- Full-width textarea for message field

### D. Component Library

**Hero Section:**
- Height: 50vh minimum
- Background: Subtle gradient overlay (primary color 10% opacity) over professional hero image
- Content: Centered heading + supportive subtext + visual indicator (scroll arrow)
- Hero Image: Use welcoming, professional office/workspace imagery or abstract geometric patterns suggesting communication/connection

**Form Container:**
- Elevated card with soft shadow: shadow-xl
- Rounded corners: rounded-2xl
- Padding: p-8 (desktop), p-6 (mobile)
- Background blurred effect if overlapping hero

**Input Fields:**
- Height: h-12 for text inputs
- Border: 2px solid, rounded-lg
- Focus state: ring-2 ring-primary/20, border-primary
- Error state: border-error, ring-error/20
- Dark mode: Surface color background with lighter borders
- Placeholder: text-secondary with italic style

**Textarea:**
- Minimum height: h-32
- Resize: vertical only
- Same styling as text inputs

**Buttons:**
- Primary CTA: Full-width on mobile, auto on desktop
- Height: h-12
- Rounded: rounded-lg
- Font weight: 600
- Padding: px-8
- Hover: subtle scale (1.02) and shadow increase
- Loading state: spinner + disabled opacity

**Validation Messages:**
- Real-time inline under each field
- Icons: checkmark (success), exclamation (error)
- Smooth slide-in animation (duration-200)
- Font size: 0.8125rem

**Success State:**
- Full-screen overlay with checkmark animation
- Success message with next steps
- Auto-dismiss or manual close option

### E. Page Structure

**Above the Fold:**
- Compelling headline: "Get in Touch" or "We'd Love to Hear From You"
- Brief subtext explaining response time/purpose
- Visual trust indicators (response time badge, security notice)

**Form Section:**
- Fields: Full name, Email, Subject (optional dropdown), Message
- Character counter for message field (max 500)
- Privacy policy checkbox with link
- Submit button with loading state

**Additional Elements:**
- Alternative contact methods sidebar (desktop): phone, email, address with icons
- Business hours indicator
- Social media links (if applicable)
- FAQ section below form addressing common questions

**Footer:**
- Minimal: copyright, privacy policy, terms of service links
- Social proof: "Response within 24 hours" badge

### Images

**Hero Image (Required):**
- Full-width background image suggesting communication/connection
- Examples: Professional workspace with laptop, abstract communication network, modern office collaboration
- Treatment: 40% opacity overlay with gradient (primary color)
- Position: center, cover
- Lazy loading for performance

**Trust Elements:**
- Small icons for contact methods (use Heroicons)
- Success state illustration (celebratory checkmark)

---

## Animation Strategy

**Minimal, Purposeful Motion:**
- Form field focus: gentle border color transition (200ms)
- Validation messages: slide-down (150ms ease-out)
- Submit button: scale on click, spinner on loading
- Success overlay: fade-in (300ms) + checkmark draw animation
- NO continuous animations, parallax, or unnecessary motion

---

## Key Interactions

- Keyboard navigation fully supported (tab order logical)
- Real-time validation on blur (not on every keystroke)
- Submit disabled until all required fields valid
- Success message with clear next action
- Form reset on successful submission (after user acknowledges)

This design creates a professional, accessible contact experience that builds trust while maintaining visual interest through thoughtful use of color, spacing, and subtle elevation.