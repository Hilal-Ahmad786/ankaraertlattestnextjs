import { pgTable, uuid, text, timestamp, index } from "drizzle-orm/pg-core";

export const clickEvents = pgTable(
  "click_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(), // phone_click | whatsapp_click | page_view
    location: text("location"), // button placement (hero, header, floating, footer...)
    pageUrl: text("page_url"),
    sessionId: text("session_id"),
    ipHash: text("ip_hash"),
    userAgent: text("user_agent"),
    // Ad attribution captured on landing (see captureAttribution in lib/click-beacon)
    gclid: text("gclid"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    referrer: text("referrer"),
    occurredAt: timestamp("occurred_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [
    index("click_events_name_idx").on(t.name),
    index("click_events_occurred_idx").on(t.occurredAt),
  ]
);
