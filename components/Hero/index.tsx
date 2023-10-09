import Image from 'next/image';

interface HeroProps {
  content: [homeContent];
}

interface homeContent {
    hero: {
      url: string,
      title: string
    }
}
export const Hero = ({content}: HeroProps) => {
  return (
      <Image
          alt={content[0].hero.title}
          height={200}
          width={2000}
          priority
          src={content[0].hero.url}
      />
)
};
