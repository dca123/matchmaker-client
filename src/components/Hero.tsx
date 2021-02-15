import { Image, ImageProps } from '@chakra-ui/react';

export default function Hero({
  src = 'horiz/dazzle_hphover.png',
}: ImageProps): React.ReactElement {
  return <Image src={src} w={[14, 20]} h={[8, 12]} alt="Hero Dazzle" />;
}
