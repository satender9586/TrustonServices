import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqFakeData from "@/constants/FAQ.Fake";

const FAQ = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#EBF7FD] via-white to-[#fcf2f7] py-5 sm:py-8">
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 ">
            Frequently Asked Questions
          </h2>

          <p className="text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed ">
            Find answers to commonly asked questions about Long Term Mentorship
          </p>
        </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            // defaultValue="item-1"
          >
            {faqFakeData?.map(({ title, desc }) => (
              <AccordionItem
                value={title}
                key={title}
                className="shadow-sm bg-white mb-3 px-5 rounded-[7px] border-b-0"
              >
                <AccordionTrigger className="tracking-wide text-[#363535] text-[14px] flex items-center ">
                 { "Q" + ")"+ " "}{ title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-start text-[#6e6e6e] text-[14px] font-sans tracking-wide">
                    {desc}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </header>
  );
};

export default FAQ;
