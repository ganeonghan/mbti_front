import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SlideContentProps {
  currentSlide: {
    type: string;
    src?: string;
    title?: string;
    description?: string;
  };
}

export function SlideContent({ currentSlide }: SlideContentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative w-full h-full'>
      {currentSlide.type === 'image' ? (
        <Image
          src={
            isMobile
              ? '/images/test-cake-jo-mobile.png'
              : currentSlide.src ?? '/images/test-cake-jo.png'
          }
          alt='결과 이미지'
          layout='fill'
          objectFit='cover'
        />
      ) : (
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 px-6'>
          <h1 className='text-xl sm:text-2xl font-bold'>
            {currentSlide.title}
          </h1>
          <p className='mt-2 text-base sm:text-lg leading-relaxed max-w-[80%] font-galmuri'>
            {currentSlide.description}
          </p>
        </div>
      )}
    </div>
  );
}
