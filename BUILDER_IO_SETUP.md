# Builder.io Visual Editor - Setup Guide

This is the **experimental** Builder.io integration for GreenStar Solar.

## 🎯 What is This?

This repo is a **safe testing environment** for integrating Builder.io visual editor. The production site (`greenstarwebsiteupgrade`) is completely separate and untouched.

## ✅ What's Already Done

I've completed the following setup:

1. ✅ Installed Builder.io SDK (`@builder.io/sdk-react-nextjs`)
2. ✅ Created component registry (`builder-registry.tsx`)
3. ✅ Registered your existing components (Hero, Gallery, ContactForm, Footer)
4. ✅ Created a test page (`/builder-test`)
5. ✅ Configured for Node 20 compatibility

## 🚀 What You Need to Do

### Step 1: Create a Builder.io Account

1. Go to https://www.builder.io/
2. Sign up for a **free account**
3. Create a new "Space" (project) called "GreenStar Solar Experiment"
4. Copy your **Public API Key** from the dashboard

### Step 2: Add Environment Variables

1. Copy the environment variables from production:
   ```bash
   cd ~/Documents/greenstar-builder-experiment
   ```

2. Go to your Vercel dashboard for the experiment project:
   https://vercel.com/olivers-projects-a3cbd2e0/builder-io-experiment

3. Go to **Settings** → **Environment Variables**

4. Copy ALL variables from the production project, PLUS add this new one:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=<your-builder-io-api-key>
   ```

5. **Redeploy** the Vercel project after adding variables

### Step 3: Configure Builder.io Models

In your Builder.io dashboard:

1. Go to **Models** in the left sidebar
2. Click **+ New Model**
3. Select **Page** model type
4. Name it "page" (lowercase)
5. Click **Create Model**

### Step 4: Test the Integration

1. Visit your deployed site: `https://builder-io-experiment.vercel.app/builder-test`
2. You should see a page saying "Builder.io is Ready!"
3. In Builder.io dashboard, click **+ New** → **Page**
4. Set URL to: `/builder-test`
5. Drag components from the left sidebar
6. Try adding your custom components:
   - Hero Section
   - Gallery Section
   - Contact Form
   - Footer

7. Click **Publish**
8. Refresh your test page - you should see your changes!

### Step 5: Edit Your Components Visually

In the Builder.io visual editor:

- **Drag & Drop:** Arrange components on the page
- **Edit Text:** Click any text to edit inline
- **Change Images:** Click images to upload new ones
- **Adjust Styles:** Use the right panel to change colors, spacing, etc.
- **Preview:** See changes in real-time
- **Publish:** Make changes live instantly

---

## 📁 Files Created/Modified

### New Files:
- `builder-registry.tsx` - Registers your components with Builder
- `app/builder-test/page.tsx` - Test page for Builder.io
- `BUILDER_IO_SETUP.md` - This file

### Modified Files:
- `.env.local.example` - Added Builder.io API key
- `package.json` - Added Builder.io dependencies

---

## 🔧 How Builder.io Works

### Component Registration

Your existing components are registered in `builder-registry.tsx`:

```typescript
Builder.registerComponent(Hero, {
  name: "Hero Section",
  inputs: [ /* editable fields */ ],
});
```

This makes them available in the Builder.io visual editor.

### Visual Editing Flow

1. **Client opens Builder.io dashboard**
2. **Clicks "Edit" on a page**
3. **Drags components onto the page**
4. **Edits content visually**
5. **Clicks "Publish"**
6. **Changes appear live** (no code deployment needed!)

---

## 🎨 Next Steps (If You Like It)

If Builder.io works well and you want to proceed:

### Option A: Migrate More Pages
1. Convert homepage to Builder.io
2. Convert service pages
3. Convert gallery page
4. Make everything visually editable

### Option B: Hybrid Approach
1. Keep critical pages as code (faster, more control)
2. Use Builder.io for:
   - Landing pages
   - Marketing pages
   - Blog posts
   - Case studies

### Option C: Full Migration
1. Rebuild entire site with Builder.io
2. Maximum client editability
3. More setup time required

---

## 💰 Pricing Considerations

**Builder.io Pricing:**
- **Free:** 1,000 API calls/month (good for testing)
- **Growth:** $29/month (unlimited API calls)
- **Enterprise:** Custom pricing

**Your Options:**
1. **Pass cost to client:** Charge $50-100/mo for "Premium Visual CMS"
2. **Absorb cost:** Include in maintenance package
3. **Stay on free tier:** Most small sites work fine with 1,000 calls/month

---

## 🔐 Security Notes

- Builder.io API key is public (safe to expose)
- Content is fetched client-side
- No security risks with visual editing
- All your existing auth/API security stays the same

---

## 🆘 Troubleshooting

### "Builder.io content not loading"
- Check that `NEXT_PUBLIC_BUILDER_API_KEY` is set in Vercel
- Redeploy after adding environment variables
- Check Builder.io dashboard that content is published

### "Components not appearing in Builder"
- Make sure `builder-registry.tsx` is imported
- Check console for errors
- Verify components are exported correctly

### "Changes not showing up"
- Hard refresh the page (Cmd+Shift+R)
- Check that content is **Published** not just saved
- Wait 30 seconds for CDN cache

---

## 🔄 Switching Between Node Versions

This project requires **Node 20** (not Node 24):

```bash
# Load NVM
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20
nvm use 20

# Verify
node --version  # Should show v20.x.x
```

---

## 📊 Comparison: Builder.io vs Sanity

| Feature | Builder.io | Sanity |
|---------|-----------|--------|
| **Visual Editing** | ✅ Drag & drop | ❌ Form-based |
| **Ease of Use** | ✅ Very easy | ⚠️ Moderate |
| **Pricing** | $29/mo | Free (generous) |
| **Setup Time** | 2-3 hours | 8-12 hours |
| **Client Appeal** | ✅ High | ⚠️ Moderate |
| **Flexibility** | ⚠️ Some limits | ✅ Very flexible |
| **Performance** | ✅ Fast | ✅ Fast |

---

## 📞 Questions?

If you have questions or issues:
1. Check the Builder.io docs: https://www.builder.io/c/docs
2. Contact me (Claude) for help
3. Builder.io has excellent support

---

## ✅ Current Status

- [x] Builder.io SDK installed
- [x] Components registered
- [x] Test page created
- [ ] Environment variables set (YOU NEED TO DO THIS)
- [ ] Builder.io account created (YOU NEED TO DO THIS)
- [ ] Test content created in Builder.io
- [ ] Client testing & feedback

**Next action:** Create Builder.io account and add API key to Vercel!

---

Built with ❤️ by Claude Code
