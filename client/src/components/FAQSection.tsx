import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, please call us directly.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please provide as much detail as possible about your inquiry. Include relevant information such as order numbers, account details, or specific questions to help us assist you better.",
  },
  {
    question: "Can I attach files to my message?",
    answer:
      "Currently, file attachments are not supported through this form. If you need to share documents, please mention it in your message and we'll follow up with alternative methods.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes, we take your privacy seriously. All information submitted through this form is encrypted and handled according to our privacy policy. We never share your personal information with third parties.",
  },
  {
    question: "What if I don't receive a confirmation email?",
    answer:
      "If you don't receive a confirmation email within a few minutes, please check your spam folder. If it's still not there, feel free to reach out to us directly via phone or email.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions about contacting us
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent data-testid={`accordion-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
