import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqFakeData from "@/constants/FAQ.Fake";

const FAQ = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] overflow-hidden  py-5 sm:py-8">
      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 ">
            Frequently Asked Questions
          </h2>

          <p className="text-[15px]  tracking-wide sm:text-[16px] text-[#747474] leading-relaxed ">
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
                className=" hover:shadow-xl hover:-translate-y-1 transition-all duration-300  shadow-sm bg-white  mb-2 px-5 rounded-[7px] border-b-0"
              >
                <AccordionTrigger className="text-base sm:text-md  font-semibold text-gray-800 mb-1  tracking-wide  group-hover:text-[#AF0D5A] transition-colors flex items-center ">
                 { "Q" + ")"+ " "}{ title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-start tracking-wide text-sm text-gray-600  space-y-1 leading-snug sm:leading-relaxed">
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
