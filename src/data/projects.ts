export interface ProjectImage {
  src: string;
  caption: string;
  alt: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  timeframe: string;
  shortDescription: string;
  sections: ProjectSection[];
  images: [ProjectImage, ProjectImage, ProjectImage];
  githubUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "universal-bug-trap",
    title: "Universal Bug Trap",
    category: "Mechanical Design & Prototyping",
    timeframe: "Owl Vision AI",
    shortDescription: "Redesigned and built Owl Vision’s Universal Bug Trap, interfacing directly with the eScout field monitoring device to monitor bug species remotely.",
    sections: [
      {
        title: "Overview",
        content: "Redesigned and built Owl Vision’s Universal Bug Trap, interfacing directly with the eScout field monitoring device. This trap is deployed by farmers and researchers looking to control and monitor various bug species remotely. Designed using Onshape, and rapidly prototyped 3D printed parts in-house to be later outsourced for large-scale manufacturing."
      },
      {
        title: "Impact",
        content: "Addressed previous concerns of camera distance and board height inconsistencies. Reduced part count from previous design by 20%, improving ease of assembly. Filmed assembly tutorial videos, and worked directly with clients to ensure consistency and clarity on product."
      },
      {
        title: "Key Learning",
        content: "Design for Manufacturing and ensuring that the product meets customer needs. Working alongside both CEO and clients, expressing ideas thoughtfully and clearly. Constant trial and error, gaining experience rapidly prototyping using an iterative process."
      }
    ],
    images: [
      {
        src: "/images/projects/bug-trap-cad.png",
        caption: "Onshape CAD Assembly",
        alt: "Onshape CAD Assembly of Universal Bug Trap"
      },
      {
        src: "/images/projects/bug-trap-prototype.png",
        caption: "Physical 3D-Printed Prototype Assembled in Shop",
        alt: "Physical 3D-Printed Prototype Assembled in Shop"
      },
      {
        src: "/images/projects/bug-trap-field.webp",
        caption: "Photo from Trap in the field",
        alt: "Photo from Trap in the field with detected insects"
      }
    ]
  },
  {
    id: "baja-sae-body-panels",
    title: "Baja SAE Body Panels",
    category: "Sheet Metal & CNC Fabrication",
    timeframe: "Olin Baja SAE Team",
    shortDescription: "Designed and fabricated custom ABS body and floor panels for the 2026 Olin Baja SAE car using Onshape Sheet Metal, CNC routing, and heat bending.",
    sections: [
      {
        title: "Overview",
        content: "Designed and fabricated custom ABS body and floor panels for the 2026 Olin Baja SAE car. CAD was done using the Sheet Metal Toolbox in Onshape. Panels were cut out using a CNC router, and custom bent using a heat gun. Mounted using quarter-turn fasteners and body panel tabs welded to the car chassis."
      },
      {
        title: "Impact",
        content: "These panels were essential in passing the Baja SAE rules and inspection, allowing the team to drive in competition. Additionally, they provided protection to the driver, engine, suspension, and other components, deflecting any incoming dirt and debris."
      },
      {
        title: "Key Learning",
        content: "Sheet Metal Toolbox and ensuring that designed parts are feasible to manufacture. Working alongside other subsystem members to make sure that CAD and physical system are up to date, as body panel dimensions are dependent on things such as the pedal assembly and suspension. Standups and team design reviews, staying accountable with deadlines and tasks."
      }
    ],
    images: [
      {
        src: "/images/projects/baja-panels-cad.png",
        caption: "Onshape Sheet Metal CAD Model on Car Chassis",
        alt: "Onshape Sheet Metal CAD Model on Car Chassis"
      },
      {
        src: "/images/projects/baja-panels-front.jpg",
        caption: "Formed ABS Nose Panel",
        alt: "Formed ABS Nose Panel mounted on car"
      },
      {
        src: "/images/projects/baja-panels-side.jpg",
        caption: "Formed Side Panels",
        alt: "Formed Side Panels mounted on chassis"
      }
    ]
  },
  {
    id: "custom-rummikub-set",
    title: "Custom Rummikub Set",
    category: "Codesign & Rapid Prototyping",
    timeframe: "Products & Markets · Olin College",
    shortDescription: "Codesigned a custom Rummikub board game set with laser cut acrylic/wood tiles and 3D printed stands for seniors at Wingate Living.",
    sections: [
      {
        title: "Overview",
        content: "Created a custom Rummikub board game set for the seniors at Wingate Living in Needham, MA for Olin’s Products and Markets course. The goal of the project was to codesign a product for a customer segment, iterating and improving it over multiple trials. The set features laser cut acrylic and plywood game tiles, each with Wingate’s leaf logo engraved on the rear. Additionally, the tile stands were designed in SolidWorks and 3D printed."
      },
      {
        title: "Impact",
        content: "By interviewing and iterating with the seniors, we were able to find the exact issues with their original Rummikub set and our initial prototypes. These issues included the small size of the tiles, the tiles being too slippery to grab, and the size of the font, all of which hindered their ability to enjoy the game. We implemented changes into our custom set to counteract these issues, while also building bonds with the seniors over the game that they love."
      },
      {
        title: "Key Learning",
        content: "The importance of codesigning and truly understanding your customer base. We wouldn’t have realized all the issues with our initial prototypes without field testing. Iterative design and constantly seeking improvement in a product’s performance."
      }
    ],
    images: [
      {
        src: "/images/projects/rummikub-action.jpg",
        caption: "Custom Laser-Cut Tiles & 3D-Printed Stands in Play",
        alt: "Custom Laser-Cut Tiles and 3D-Printed Stands in Play"
      },
      {
        src: "/images/projects/rummikub-flatlay.jpg",
        caption: "Complete Set with Engraved Wingate Leaf Logo",
        alt: "Complete Set with Engraved Wingate Leaf Logo on tile backs"
      },
      {
        src: "/images/projects/rummikub-seniors.jpg",
        caption: "Codesigning & Playing with Seniors at Wingate Living",
        alt: "Playing with seniors at Wingate Living"
      }
    ]
  }
];
