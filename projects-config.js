// Project Configuration File
// Add your projects here - the website will automatically generate the project sections

const PROJECTS = [
    {
        id: "khammam",
        name: "KHAMMAM",
        folder: "PROJECTS/khammam",
        description: "A modern residential complex featuring contemporary design elements and sustainable architecture. Located in the heart of Khammam, this project combines luxury living with eco-friendly practices. The development includes spacious apartments with premium amenities, green spaces, and state-of-the-art facilities designed for modern families seeking comfort and style.",
        images: [
            "17e9ebd4-db76-4e47-81bb-1757f77be418.jpg",
            "1f5366db-94d5-40c2-955c-b530ab0e1d8b.jpg",
            "5fff2cbf-6657-4d3e-816b-4e752c8d5b67.jpg",
            "6326eeb2-0c03-44eb-8e98-4661290af170.jpg",
            "64113be4-0ab9-4aad-936d-566beab43ff4.jpg",
            "9fc64178-63ef-4ec9-ba3b-cc4ccaaa4867.jpg",
            "bd8bdb49-20d7-4cba-840f-71faa7381715.jpg",
            "d40a1eae-0d71-48c1-b06d-9f1c7b9c1073.jpg",
            "dd4f0763-09c9-4ea6-93a7-f8ac26382cd4.jpg",
            "ecc86821-fe42-4113-8fd8-6588707fab22.jpg"
        ]
    },
    {
        id: "prestage",
        name: "PRESTAGE",
        folder: "PROJECTS/Prestage",
        description: "An iconic commercial and residential development that sets new standards in architectural excellence. Prestage offers a perfect blend of modern infrastructure and elegant design, creating spaces that inspire productivity and relaxation. With world-class amenities and strategic location, this project represents the pinnacle of contemporary urban living.",
        images: [
            "CollageMaker_20211108_150645508_Original.JPG",
            "CollageMaker_20211108_152042092_Original.JPG",
            "CollageMaker_20211108_152220558_Original.JPG",
            "CollageMaker_20211108_152538344_Original.JPG",
            "IMG-20211103-WA0000_Original.JPG",
            "IMG_20211023_101301_Original.JPG",
            "IMG_20211023_101333_Original.JPG",
            "IMG_20211023_101754_Original.JPG",
            "IMG_20211024_131243_Original.JPG",
            "IMG_20211024_131341_Original.JPG"
        ]
    },
    {
        id: "hastinapuram",
        name: "HASTINAPURAM",
        folder: "PROJECTS/Hastinapuram",
        description: "A prestigious township project designed to provide a complete lifestyle experience. Hastinapuram features thoughtfully planned residences, community spaces, and recreational facilities. The project emphasizes sustainability and modern living, offering residents a harmonious balance between nature and urban convenience in a well-connected locality.",
        images: [
            "IMG_7820.JPG",
            "IMG_7822.JPG",
            "IMG_7826.JPG",
            "IMG_7831.JPG",
            "IMG_7834.JPG",
            "IMG_8606.JPG",
            "IMG_8824.JPG",
            "IMG_8827.JPG"
        ]
    },
    {
        id: "dd-colony",
        name: "DD COLONY",
        folder: "PROJECTS/DD_COLONY",
        description: "A meticulously planned residential colony that embodies modern architectural vision and traditional values. DD Colony offers premium housing solutions with focus on community living and quality construction. The project features wide roads, landscaped gardens, and essential amenities, making it an ideal choice for families seeking a peaceful and well-planned neighborhood.",
        images: [
            "IMG_9367.JPG",
            "IMG_9688.JPG",
            "IMG_9734.JPG",
            "IMG_9736.JPG",
            "IMG_9737.JPG",
            "IMG_9738.JPG",
            "IMG_9739.JPG",
            "IMG_9741.JPG"
        ]
    },
    {
        id: "TESTNEWPROJECT",
        name: "testNewProject",
        folder: "PROJECTS/testNewProject",
        description: "This is a test new project adding as new",
        images: [
            "frontend_1.JPG",
            "frontend_2.JPG",
            "frontend_3.JPG"
        ]
    }
    // TO ADD A NEW PROJECT:
    // 1. Create a new folder with your project name (e.g., "NEW_PROJECT")
    // 2. Put all JPG images in that folder
    // 3. Add a new object below following this format:
    /*
    ,
    {
        id: "new-project",                    // Unique ID (lowercase, use hyphens)
        name: "NEW PROJECT NAME",             // Display name (UPPERCASE)
        folder: "NEW_PROJECT",                // Exact folder name (use %20 for spaces)
        description: "Your project description here...",
        images: [
            "image1.jpg",                     // List all image filenames
            "image2.jpg",
            "image3.jpg"
        ]
    }
    */
];
