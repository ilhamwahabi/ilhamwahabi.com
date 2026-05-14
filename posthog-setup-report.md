<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into ilhamwahabi.com, a TanStack Start personal portfolio and blog. The integration adds client-side event tracking across all major user interactions, sets up `PostHogProvider` in the root layout, configures a Vite reverse proxy for PostHog ingestion, and stores credentials via environment variables.

## Changes made

| File | Change |
|------|--------|
| `package.json` | Added `@posthog/react` and `posthog-node` dependencies |
| `.env` | Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` |
| `vite.config.ts` | Added PostHog reverse proxy for `/ingest`, `/ingest/static`, `/ingest/array` |
| `src/routes/__root.tsx` | Added `PostHogProvider` wrapping the app body; extracted footer social links into `FooterSocialLinks` component with click tracking |
| `src/routes/index.tsx` | Added `home_cta_clicked` event on "About me" and "Read Blog" CTA buttons |
| `src/routes/contact.tsx` | Added click events for email, LinkedIn, Twitter, and book-a-meeting links |
| `src/routes/blog/index.tsx` | Added `blog_post_clicked`, `blog_language_filter_applied`, and `blog_topic_filter_applied` events |
| `src/routes/talk/index.tsx` | Added `talk_slides_opened` event on talk slide links |
| `src/routes/project/index.tsx` | Added `project_github_clicked` and `project_link_opened` events on project cards |

## Events tracked

| Event | Description | File |
|-------|-------------|------|
| `blog_post_clicked` | User clicks on a blog post from the blog list page | `src/routes/blog/index.tsx` |
| `blog_language_filter_applied` | User applies a language filter on the blog list (English or Indonesia) | `src/routes/blog/index.tsx` |
| `blog_topic_filter_applied` | User applies a topic filter on the blog list | `src/routes/blog/index.tsx` |
| `talk_slides_opened` | User opens a talk's slides from the talk list page | `src/routes/talk/index.tsx` |
| `project_link_opened` | User opens the live link of a project from the project list page | `src/routes/project/index.tsx` |
| `project_github_clicked` | User clicks the GitHub repository link of a project | `src/routes/project/index.tsx` |
| `social_link_clicked` | User clicks a social media link in the footer (GitHub, LeetCode, Twitter, LinkedIn, Goodreads) | `src/routes/__root.tsx` |
| `contact_email_clicked` | User clicks the email link on the contact page | `src/routes/contact.tsx` |
| `contact_linkedin_clicked` | User clicks the LinkedIn link on the contact page | `src/routes/contact.tsx` |
| `contact_twitter_clicked` | User clicks the Twitter link on the contact page | `src/routes/contact.tsx` |
| `contact_meeting_booked` | User clicks the book a meeting link on the contact page | `src/routes/contact.tsx` |
| `home_cta_clicked` | User clicks the About me or Read Blog CTA on the homepage | `src/routes/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1586017)
- [Content engagement over time](/insights/vwWx5qCt) — Blog posts clicked, talk slides opened, and project links opened per day
- [Social link clicks by platform](/insights/o3L4rNNj) — Which social platforms visitors click most from the footer
- [Contact page conversions](/insights/D2B8SHOt) — How visitors reach out — email, LinkedIn, Twitter, or booking a meeting
- [Home CTA clicks](/insights/NO89x4Hz) — Which homepage CTA button visitors click — About me or Read Blog
- [Blog filter usage](/insights/ZO4mIdDv) — How often visitors use language and topic filters on the blog list

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
