interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-[var(--gray-200)]">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-4">
          <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-[var(--gray-900)]">
            {faq.question}
            <span
              aria-hidden="true"
              className="ml-4 text-[var(--gray-400)] transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-[var(--gray-500)]">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
