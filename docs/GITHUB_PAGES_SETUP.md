# GitHub Pages Setup Guide

This guide explains how to enable GitHub Pages for the Community CMS documentation.

## 🌐 Enable GitHub Pages

### Option 1: Using GitHub UI (Recommended)

1. Go to your repository on GitHub
2. Click the **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar under "Code and automation")
4. Under **Source**, configure:
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs`
5. Click **Save**
6. Wait 2-3 minutes for the initial deployment
7. Your documentation will be available at: `https://yourusername.github.io/community-cms/`

### Option 2: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo edit --enable-pages --pages-branch main --pages-path /docs
```

## 📝 Customization

### Update Repository URL

Before deploying, edit `docs/_config.yml` and update your repository URL:

```yaml
github:
  repository_url: https://github.com/YOUR_USERNAME/YOUR_REPO
```

### Change Theme

To use a different Jekyll theme, edit `docs/_config.yml`:

```yaml
theme: jekyll-theme-cayman # Change to your preferred theme
```

**Available GitHub Pages themes:**

- `jekyll-theme-cayman` (default - clean and modern)
- `jekyll-theme-minimal` (simple and lightweight)
- `jekyll-theme-slate` (dark theme)
- `jekyll-theme-architect` (professional)
- `jekyll-theme-dinky` (compact)
- `jekyll-theme-hacker` (terminal-style)
- `jekyll-theme-leap-day` (colorful)
- `jekyll-theme-merlot` (elegant)
- `jekyll-theme-midnight` (dark blue)
- `jekyll-theme-modernist` (clean lines)
- `jekyll-theme-tactile` (textured)
- `jekyll-theme-time-machine` (retro)

## 🚀 Local Preview

To preview your documentation locally before deploying:

### Prerequisites

Install Ruby and Jekyll (one-time setup):

```bash
# macOS (using Homebrew)
brew install ruby
gem install bundler jekyll

# Ubuntu/Debian
sudo apt-get install ruby-full build-essential
gem install bundler jekyll

# Windows
# Download and install from https://rubyinstaller.org/
gem install bundler jekyll
```

### Run Local Server

```bash
# Navigate to docs folder
cd docs

# Create Gemfile (first time only)
cat > Gemfile << EOF
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
EOF

# Install dependencies (first time only)
bundle install

# Start local server
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

The server will auto-reload when you make changes to the documentation files.

## 🔧 Troubleshooting

### Pages Not Showing Up

1. Check that GitHub Pages is enabled in repository settings
2. Verify the branch and folder are set correctly (`main` branch, `/docs` folder)
3. Wait a few minutes - initial deployment can take time
4. Check the Actions tab for any build errors

### 404 Errors

1. Ensure `index.md` exists in the `docs/` folder
2. Check that all internal links use relative paths
3. Verify file names match exactly (case-sensitive)

### Theme Not Applying

1. Ensure `_config.yml` is in the `docs/` folder
2. Check that the theme name is spelled correctly
3. Try clearing your browser cache
4. Wait for GitHub Pages to rebuild (can take a few minutes)

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `docs/` folder with your domain:
   ```
   docs.yourdomain.com
   ```
2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 📊 Monitoring

### Check Deployment Status

- Go to your repository's **Actions** tab
- Look for "pages build and deployment" workflows
- Green checkmark = successful deployment
- Red X = build failed (click for details)

### View Build Logs

If deployment fails:

1. Go to **Actions** tab
2. Click on the failed workflow
3. Expand the "build" step to see error details

## 🔄 Updating Documentation

After enabling GitHub Pages:

1. Edit any `.md` file in the `docs/` folder
2. Commit and push changes
3. GitHub automatically rebuilds and deploys
4. Changes appear within 1-2 minutes

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Jekyll Themes](https://pages.github.com/themes/)

---

Need help? Check the [main README](../README.md) or open an issue on GitHub.
