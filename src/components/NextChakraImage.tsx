import NextImage from 'next/image';
import { useBreakpointValue } from '@chakra-ui/react';

type NextChakraImageProps = {
  width: string[];
  height: string[];
  src: string;
  alt: string;
};
export default function NextChakraImage({
  width,
  height,
  src,
  alt,
}: NextChakraImageProps): React.ReactElement {
  const w = useBreakpointValue(width)?.replace('px', '') || 0;
  const h = useBreakpointValue(height)?.replace('px', '') || 0;
  return <NextImage src={src} width={w} height={h} alt={alt} />;
}
