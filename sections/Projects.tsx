import ProjectShowCaseMobile from '@/components/comp/ProjectShowCaseMobile';
import ProjectsShowcase from '@/components/comp/ProjectsShowCase';

const Projects = () => {
  return (
    <section className='mb-10 md:mb-0'>
      <ProjectShowCaseMobile className="md:hidden" smaller={true} /> 
      <ProjectsShowcase className="hidden md:block" /> 
    </section>
  )
}

export default Projects
