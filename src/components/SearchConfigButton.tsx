import { Button, Checkbox, Box } from '@chakra-ui/react';
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
    >
      <Checkbox colorScheme="brand" isChecked={isChecked} />
      <Box ml={2} textAlign="center" w="100%">
        {children}
      </Box>
    </Button>
  );
}
