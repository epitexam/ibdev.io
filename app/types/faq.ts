export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQData {
  items: FAQItem[];
}