import { ImageProps } from '@chakra-ui/react';
import Image from '@/components/NextChakraImage';

export default function Hero({
  src = '/horiz/dazzle_hphover.png',
}: ImageProps): React.ReactElement {
  return (
    <Image
      src={src}
      width={['56', '80']}
      height={['32', '48']}
      alt="Hero Dazzle"
    />
  );
}
