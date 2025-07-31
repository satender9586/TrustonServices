import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WhyChooseUsCrauselProps } from "@/types/landing";
import FeedbackCard from "./FeedbackCard";
import Link from "next/link";

const FeedbackCrouserl: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="py-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" basis-full md:basis-1/2 lg:basis-1/3 "
          >
            <Link href={"feedback"}>
              <FeedbackCard />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeedbackCrouserl;
