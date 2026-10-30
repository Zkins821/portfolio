export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "owl-vision",
    role: "Mechanical Engineering Intern",
    company: "Owl Vision AI",
    location: "Needham, MA",
    period: "February 2026 – Present",
    bullets: [
      "Design custom bug trap housings in Onshape to interface with Owl Vision’s eScout field monitoring device.",
      "Rapidly prototype parts using 3D printing and bench testing to validate trap effectiveness, weather resistance, and field usability.",
      "Collaborate directly with the CEO on DFM, tolerance analysis, and BOM optimization, reducing part count by 20% and streamlining field assembly with clients."
    ]
  },
  {
    id: "mirai-cultural",
    role: "Board Member",
    company: "MIRAI Cultural Alliance",
    location: "Needham, MA",
    period: "April 2026 – Present",
    bullets: [
      "Manage event logistics and organizational budgets alongside Olin’s JSA (Japanese Student Association) and Babson’s JIC (Japanese International Circle).",
      "Raised over $10,000 running a booth at Japan Festival Boston 2026, serving Okonomiyaki to festival goers."
    ]
  },
  {
    id: "olin-baja",
    role: "Chassis Subteam Member",
    company: "Olin Baja SAE Team",
    location: "Needham, MA",
    period: "September 2025 – May 2026",
    bullets: [
      "Manufactured and maintained off-road chassis and suspension components using CNC plasma cutting and manual machining to meet strict SAE competition rules.",
      "Designed and fabricated custom ABS body and floor panels in Onshape, integrating quick-release mounting pins for the 2026 competition car."
    ]
  },
  {
    id: "olympic-collectible",
    role: "Robotics Intern",
    company: "Olympic Collectible AI Solutions",
    location: "Renton, WA",
    period: "August 2024 – June 2025",
    bullets: [
      "Developed and assembled CNC Mini-Robots capable of sorting, identifying, and grading sports trading cards.",
      "Diagnosed and tested new code, stepper motors, and pick-and-place processes for Mini-Robots.",
      "Integrated mechanical drivetrains, wiring harnesses, and sensor arrays for large-scale production sorting robots deployed to commercial customers."
    ]
  },
  {
    id: "fresh-consulting",
    role: "Mechanical Engineering Intern",
    company: "Fresh Consulting",
    location: "Bellevue, WA",
    period: "September 2023 – December 2023",
    bullets: [
      "Assembled a ~27,000-part industrial machine engineered to heat and bend custom PVC pipes at factory production scale.",
      "Interpreted SolidWorks assembly drawings and engineering documentation to verify mechanical tolerances and resolve issues with senior project engineers."
    ]
  }
];
