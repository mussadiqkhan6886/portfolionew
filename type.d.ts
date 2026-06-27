interface ExperienceItem {
  index: string;
  role: string[];        // split lines for line-break control
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}