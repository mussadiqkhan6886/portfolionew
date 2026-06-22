import ScrollThumbnail from "@/components/ui/Thumbnails";
import { thumbnails1, thumbnails2 } from "@/constants";

const WorkThumbnails = () => {
  return (
    <section className="space-y-5 overflow-hidden py-10">
      <ScrollThumbnail
        texts={[thumbnails1, thumbnails2]}
        velocity={10}
        numCopies={5}
        damping={50}
        stiffness={10000}
      />
    </section>
  );
};

export default WorkThumbnails;