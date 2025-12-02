// Project Configuration File
// Add your projects here - the website will automatically generate the project sections
// The system will automatically detect INSIGHT, DESIGN, and EXECUTION folders inside each project

const PROJECTS = [
    {
        id: "khammam",
        name: "KHAMMAM",
        folder: "PROJECTS/KHAMMAM",
        description: "A modern residential complex featuring contemporary design elements and sustainable architecture in the heart of Khammam."
    },
    {
        id: "hayathnagar",
        name: "HAYATHNAGAR",
        folder: "PROJECTS/HAYATHNAGAR",
        description: "An innovative residential development combining modern aesthetics with functional design for contemporary living."
    },
    {
        id: "prestage",
        name: "PRESTAGE",
        folder: "PROJECTS/Prestage",
        description: "An iconic commercial and residential development setting new standards in architectural excellence with world-class amenities."
    },
    {
        id: "hastinapuram",
        name: "HASTINAPURAM",
        folder: "PROJECTS/HASTINAPURAM",
        description: "A prestigious township project with thoughtfully planned residences, community spaces, and emphasis on sustainable modern living."
    },
    {
        id: "dd-colony",
        name: "DD COLONY",
        folder: "PROJECTS/DD_COLONY",
        description: "A meticulously planned residential colony with premium housing, wide roads, landscaped gardens, and essential amenities for modern families."
    }
    // TO ADD A NEW PROJECT:
    // 1. Create a new folder under PROJECTS/ (e.g., "PROJECTS/NEW_PROJECT")
    // 2. Inside the project folder, create stage folders: INSIGHT, DESIGN, EXECUTION (or just 2 of them)
    // 3. Put numbered images in each stage folder (e.g., PROJECTNAME_INSIGHT_1.JPG, PROJECTNAME_INSIGHT_2.JPG)
    // 4. Add a new object below following this format:
    /*
    ,
    {
        id: "new-project",                    // Unique ID (lowercase, use hyphens)
        name: "NEW PROJECT NAME",             // Display name (UPPERCASE)
        folder: "PROJECTS/NEW_PROJECT",       // Exact folder path
        description: "Your project description here..."
    }
    */
];
