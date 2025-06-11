# Ever After Moments - Wedding Planning Website

A stunning, modern wedding planning website with Google Sheets integration for dynamic content management.

## Features

- **Dynamic Content Loading**: Services, Gallery, Testimonials, and Packages are loaded from Google Sheets
- **Admin Panel**: Easy-to-use interface for updating content via Google Sheets
- **Responsive Design**: Beautiful on all devices
- **Smooth Animations**: Elegant scroll animations and transitions
- **SEO Optimized**: Meta tags and semantic HTML structure

## Google Sheets Integration

The website uses the Google Visualization API (gviz) to fetch content from public Google Sheets. This allows non-technical users to update website content by simply editing a spreadsheet.

### Required Sheet Structure

Create a Google Sheet with the following tabs:

#### Services Sheet
| Icon | Title | Description | Features |
|------|-------|-------------|----------|
| Calendar | Wedding Planning | Complete wedding coordination... | Timeline Management,Vendor Coordination,Budget Planning |

#### Gallery Sheet
| Image URL | Alt Text | Category |
|-----------|----------|----------|
| https://... | Beautiful ceremony | Ceremony |

#### Testimonials Sheet
| Name | Image URL | Text | Rating | Wedding |
|------|-----------|------|--------|---------|
| Sarah & Michael | https://... | Amazing service... | 5 | Garden Wedding, June 2024 |

#### Packages Sheet
| Name | Icon | Price | Description | Features | Popular | Color |
|------|------|-------|-------------|----------|---------|-------|
| Essential | Star | $2,999 | Perfect for intimate... | Feature1,Feature2 | FALSE | from-pink-400 to-pink-500 |

### Setting Up Google Sheets

1. Create a new Google Sheet
2. Create tabs named: Services, Gallery, Testimonials, Packages
3. Add the column headers as shown above
4. Fill in your content
5. Make the sheet public:
   - Click "Share" → "Change to anyone with the link"
   - Set permission to "Viewer"
6. Copy the Sheet ID from the URL
7. Use the Admin Panel to load your custom sheet

### Using the Admin Panel

1. Click the settings icon in the bottom-right corner
2. Enter your Google Sheet ID
3. Click "Load Sheet" to update the content
4. Use "Refresh" to reload the current data

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.