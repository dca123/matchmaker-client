import { Heading, HeadingProps } from '@chakra-ui/react';

export default function PageHeading({
  children,
}: HeadingProps): React.ReactElement {
  return (
    <Heading fontWeight="400" color="white" fontSize={['3xl', '5xl']}>
      {children}
    </Heading>
  );
}
