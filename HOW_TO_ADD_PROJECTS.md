# How to Add New Projects to GreenLeaves Archi Website

## Quick Guide - Adding a New Project

### Step 1: Prepare Your Project Folder
1. Create a new folder in the root directory with your project name
   - Example: `NEW_PROJECT` or `My Project Name`
   - **Note:** If folder name has spaces, you'll need to use `%20` in the config

2. Add all your project images (JPG format) to this folder
   - Recommended size: **1200 x 800 pixels**
   - Recommended file size: **150-250 KB per image**
   - Format: **JPG** (not HEIC, PNG, or other formats)

### Step 2: Update projects-config.js

Open `projects-config.js` and add your new project to the `PROJECTS` array:

```javascript
{
    id: "new-project",                    // Unique ID (lowercase, use hyphens)
    name: "NEW PROJECT NAME",             // Display name (UPPERCASE recommended)
    folder: "NEW_PROJECT",                // Exact folder name (use %20 for spaces)
    description: "Your project description here. Describe the project, location, features, and unique selling points.",
    images: [
        "image1.jpg",                     // List all image filenames from your folder
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
    ]
}
```

### Step 3: Save and Test

1. Save `projects-config.js`
2. Open `index.html` in your browser
3. Navigate to the PROJECTS section
4. Your new project should appear automatically!

---

## Example

Let's say you have a new project called "GREEN VALLEY" with 6 images.

**Step 1:** Create folder structure
```
GreenLeavesArchi/
├── Green Valley/          <- New folder
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
```

**Step 2:** Add to `projects-config.js`
```javascript
const PROJECTS = [
    // ... existing projects ...
    ,
    {
        id: "green-valley",
        name: "GREEN VALLEY",
        folder: "Green%20Valley",           // Note: %20 for space
        description: "A beautiful eco-friendly residential community...",
        images: [
            "photo1.jpg",
            "photo2.jpg",
            "photo3.jpg",
            "photo4.jpg",
            "photo5.jpg",
            "photo6.jpg"
        ]
    }
];
```

**Step 3:** Done! The project will automatically appear on your website.

---

## Important Notes

✅ **DO:**
- Use JPG format for images
- Resize images to 1200x800 pixels before uploading
- Compress images to 150-250 KB (use tinyjpg.com)
- Use descriptive project names
- Write clear, professional descriptions

❌ **DON'T:**
- Use HEIC or PNG format (use JPG only)
- Upload very large images (>1MB each)
- Forget to add comma before new project entry
- Use special characters in folder names (except space)
- Leave images array empty

---

## Folder Naming Tips

| Folder Name | Config Value |
|-------------|--------------|
| MyProject | "MyProject" |
| My Project | "My%20Project" |
| new-project | "new-project" |
| Project_2024 | "Project_2024" |

---

## Troubleshooting

**Q: Images not showing?**
- Check folder name matches exactly (case-sensitive)
- Verify image filenames are correct
- Make sure images are JPG format
- Use %20 for spaces in folder names

**Q: Project not appearing?**
- Check for syntax errors in projects-config.js
- Make sure comma is added before new project
- Refresh browser with Ctrl+Shift+R

**Q: Need help?**
- Check browser console (F12) for errors
- Verify all image files exist in folder
- Compare your entry with existing projects

---

## Benefits of This System

✅ **Easy to Update:** Just edit one config file
✅ **No HTML Changes:** Add projects without touching HTML
✅ **Automatic Slideshows:** Navigation buttons auto-generated
✅ **Scalable:** Add unlimited projects
✅ **Clean Code:** All projects in one place

---

## Current Projects

Your website currently has these projects:
1. KHAMMAM (10 images)
2. PRESTAGE (10 images)
3. HASTINAPURAM (8 images)
4. DD COLONY (8 images)

Add more anytime by following the steps above!
