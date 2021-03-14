import {
  SearchConfigButton,
  GradientCard,
} from '@/components/CustomComponents';
import { Stack, Heading } from '@chakra-ui/react';
import { actionType } from '@/components/SearchConfigButton';
import { Dispatch } from 'react';

type SearchConfigCardProps = {
  dispatchSearchConfig: Dispatch<actionType>;
  dictionary: string[];
  configState: Record<string, boolean>;
  configTitle: 'Roles' | 'Server';
} & Pick<actionType, 'configType'>;

export default function SearchConfigCard({
  dispatchSearchConfig,
  dictionary,
  configState,
  configType,
  configTitle,
}: SearchConfigCardProps): React.ReactElement {
  return (
    <Stack spacing={4}>
      <Heading color="white" fontWeight="400" fontSize={24} textAlign="center">
        {configTitle}
      </Heading>
      <GradientCard h={[64, 80]} w={[52, 64]} py={[2, 5]}>
        <Stack>
          {Object.keys(configState).map((id, index) => (
            <SearchConfigButton
              key={id}
              configValue={id}
              configType={configType}
              isChecked={configState[id]}
              dispatchSearchConfig={dispatchSearchConfig}
            >
              {dictionary[index]}
            </SearchConfigButton>
          ))}
        </Stack>
      </GradientCard>
    </Stack>
  );
}
