import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqFakeData from "@/constants/FAQ.Fake";

const FAQ = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#EBF7FD] via-white to-[#fcf2f7] py-10 ">
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[1px] md:font-semibold text-[#AF0D5A] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="hidden sm:block text-[14px] sm:text-[16px] text-[#555] leading-relaxed font-serif">
            Find answers to commonly asked questions about Long Term Mentorship
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            // defaultValue="item-1"
          >
            {faqFakeData?.map(({ title, desc }) => (
              <AccordionItem
                value={title}
                className="shadow-md mb-5 px-5 rounded-[7px] border-b-0"
              >
                <AccordionTrigger className="tracking-wide font-serif text-[18px] ">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-start text-[#5F5F5F] text-[15px] font-sans tracking-wide">
                    {desc}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </header>
  );
};

export default FAQ;
