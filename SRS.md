# Software Requirements Specification (SRS) - Detailed
## Project: Arba Minch Tourism Platform ("VArb")
**Version:** 1.1
**Status:** In-Depth Blueprint

---

## 1. Introduction
### 1.1 Purpose
This document provides a comprehensive technical and functional blueprint for the Arba Minch Tourism Platform. It serves as the primary reference for developers, designers, and stakeholders to coordinate the three-phase rollout of the digital ecosystem.

### 1.2 Glossary
| Term | Definition |
| :--- | :--- |
| **Kurkufa / Fosose** | Traditional Gamo foods integral to the local cultural identity. |
| **Dorze** | An ethnic group near Arba Minch famous for weaving and beehive-shaped huts. |
| **40 Springs** | The literal translation of "Arba Minch," referring to the local groundwater springs. |
| **LCP / SEO** | Largest Contentful Paint (Speed metric) / Search Engine Optimization. |
| **RBAC** | Role-Based Access Control. |
| **Telebirr / Chapa** | Local Ethiopian digital payment and fintech gateways. |

### 1.3 Constraints & Assumptions
- **Connectivity:** The site must be optimized for varying internet speeds in the Gamo zone.
- **Data Privacy:** Compliance with regional data regulations as they evolve.
- **Mobile-First:** 80%+ of traffic is assumed to be mobile-based.

---

## 2. Phase 1: The "Digital Showcase" (Frontend)
**Objective:** High-performance, SEO-optimized landing and content pages.

### 2.1 Technical Architecture
- **Framework:** Next.js (App Router) for Server-Side Rendering (SSR).
- **Data:** Static JSON files stored in `/src/data/`.
- **Images:** Optimized via `next/image` with WebP format support.

### 2.2 Data Schemas (JSON)
#### Attraction Schema (`attractions.json`)
```json
{
  "id": "uuid",
  "name": "string",
  "category": ["Nature", "Culture", "History"],
  "description": "text (markdown support)",
  "images": ["url_string"],
  "coordinates": { "lat": "number", "lng": "number" },
  "tags": ["Bird watching", "Hiking"]
}
```

### 2.3 Key UI Components
- **Hero Unit:** Dynamic background with parallax effect; overlay text optimized for screen contrast.
- **Hover-Active Cards:** Cards that reveal a "Quick Look" summary on hover.
- **SEO Component:** A centralized metadata manager that sets unique OpenGraph tags for every attraction detail page.

---

## 3. Phase 2: The "Community Platform" (Backend)
**Objective:** Transform into a dynamic web app with user-generated content.

### 3.1 Relational Database Schema (PostgreSQL)
- **Users Table:** `id, email, password_hash, role (tourist/provider/admin), created_at`.
- **Profiles Table:** `user_id, business_name, tin_number, contact_phone, description, rating_avg`.
- **Listings Table:** `id, owner_id, title, category_id, price_range, location_text, status (pending/active)`.
- **Reviews Table:** `id, listing_id, user_id, rating (1-5), comment, created_at`.

### 3.2 Role-Based Access Control (RBAC)
| Feature | Tourist | Service Provider | Admin |
| :--- | :---: | :---: | :---: |
| View Listings | Yes | Yes | Yes |
| Like/Save | Yes | No | Yes |
| Create Listing | No | Yes (Own) | Yes (All) |
| Hide Review | No | No | Yes |
| Dashboard Access | Basic | Business-Specific | Full System |

### 3.3 API Endpoint Definitions (Partial)
- `POST /api/auth/register`: User signup with NextAuth validation.
- `GET /api/listings?filter=price&sort=desc`: Dynamic fetching with pagination.
- `POST /api/listings/{id}/reviews`: Transactional update to refresh listing `rating_avg`.

---

## 4. Phase 3: The "Robust Ecosystem" (Rich Features)
**Objective:** Monetization, advanced interactivity, and verified trust.

### 4.1 Trip Planner Logic
- **Concept:** Client-side "Bucket" state (Redux/Zustand) allowing users to add `attraction_id` objects.
- **PDF Engine:** Integration with `jspdf` to generate a formatted itinerary with maps and contact details.

### 4.2 Monetization Tiering
| Tier | Price | Features |
| :--- | :--- | :--- |
| **Basic** | Free | Single listing, text description. |
| **Premium** | $X / mo | Video uploads, direct website link, "Instant Call" button. |
| **Featured** | $Y / wk | Listing pinned to the top of category search results. |

### 4.3 Payment Workflow
1. User selects "Upgrade to Premium."
2. API generates a Chapa checkout URL.
3. Webhook listener updates `profiles.subscription_status` upon successful transaction.

### 4.4 Verification Workflow
- Provider uploads a business license (PDF/Image).
- Admin panel flags "Needs Review."
- Admin verifies and toggles `profile.is_verified = true`.
- Frontend displays a "Blue Badge" with a tooltip: "Government Verified Business."

---

## 5. Non-Functional Requirements (In-Depth)
- **Performance:** TTFB (Time to First Byte) < 300ms. 90+ Lighthouse score for Accessibility.
- **Security:**
  - JWT for session management.
  - SQL Injection prevention via Prisma/TypeORM.
  - Rate limiting on API routes to prevent scrapers.
- **Scalability:** Stateless backend architecture to allow horizontal scaling on Vercel/Railway.
