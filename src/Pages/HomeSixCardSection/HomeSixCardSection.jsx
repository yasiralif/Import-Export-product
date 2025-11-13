import React from 'react';
import DesignCard from '../../Components/DesginCard/DesignCard';
import BlueHoverButton from '../../Components/BlueHoverButton/BlueHoverButton';
import Card from '../../Components/DesginCard/Card';
import Input from '../../Components/Scarch/Input';

const HomeSixCardSection = ({homeData}) => {
    // console.log(homeData);
    return (
        <div className=' bg-[#e8e8e8]  '>

             <div className='  w-11/12 mx-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-2xl

                 text-amber-500  mt-4 px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-all duration-300 hover:scale-105 
                '>Scarch Your Product</div>
                 <Input/>
              

                </div>

            </div>
          

          

             {/* <Card/> */}
            <div >

                <div>

           

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                      {
                    homeData.map(data=>{
                        return(
                            <div className='mt-3  hover:cursor-pointer py-6' key={data._id}>
                               <Card
                               price={data.price} 
  quantity={data.stock}
  country={data.origin_country}
  rating={data.rating}
                               
  title={data.name}
  description={data.description}
  buttonText="See Detalis"
  link="/all-products"
  image={data.image_link}
/>

                               {/* <DesignCard
                                  title={data.name}
                                 icon={
        <img src={data.image_link} alt="" srcset="" />
      }
      link={<BlueHoverButton/>}
      description="This is a dynamic animated card using styled-components."
    
                               /> */}
                            </div>
                           
                        )
                    })
                }


                </div>


              
            </div>






            </div>
             

         
           

            
        </div>
    );
};

export default HomeSixCardSection;