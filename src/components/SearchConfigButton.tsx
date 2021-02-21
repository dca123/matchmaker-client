import { Button, Checkbox, Text } from '@chakra-ui/react';
import { Dispatch } from 'react';

export interface actionType {
  configType: 'role' | 'server';
  configValue: string;
}

interface RoleButtonProps {
  children: React.ReactChild;
  isChecked: boolean;
  dispatchSearchConfigState: Dispatch<actionType>;
  configValue: string;
  configType: 'role' | 'server';
}

export default function RoleButton({
  children,
  isChecked,
  dispatchSearchConfigState,
  configValue,
  configType,
}: RoleButtonProps): React.ReactElement {
  return (
    <Button
      borderRadius="sm"
      bg={isChecked ? 'brand.300' : 'brand.800'}
      color="white"
      w={[44]}
      justifyContent="flex-start"
      _hover={{
        bg: isChecked ? 'brand.200' : 'brand.500',
      }}
      onClick={() => dispatchSearchConfigState({ configType, configValue })}
      colorScheme="brand"
      fontFamily="Nunito"
      fontWeight="400"
    >
      <Checkbox
        colorScheme="brand"
        isChecked={isChecked}
        onChange={() => dispatchSearchConfigState({ configType, configValue })}
      />
      <Text ml={2} fontSize={['md', 'lg']} textAlign="center" w="100%">
        {children}
      </Text>
    </Button>
  );
}
