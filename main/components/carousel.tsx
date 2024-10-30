"use client";
import {
    Carousel as EmblaCarousel,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

export default function Carousel({ children }: { children: React.ReactNode }) {
    return (
        <EmblaCarousel
            opts={{ loop: true }}
            plugins={[AutoPlay({ stopOnMouseEnter: true })]}
        >
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </EmblaCarousel>
    );
}
