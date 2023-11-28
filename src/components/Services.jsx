import Title from "./Title";
import { servicesInfo } from './data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services'/>
     
      <div className='section-center services-center'>
        {servicesInfo.map((service) => {
          const {id,icon, heading,text}=service
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{heading}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          );

        })}
        
      </div>
    </section>
  );
}
export default Services