import { Dispatch, useReducer } from 'react';
import { actionType } from '@/components/SearchConfigButton';

type searchConfigType = {
  roleSelection: Record<string, boolean>;
  serverSelection: Record<string, boolean>;
};

const defaultSearchConfig = {
  roleSelection: {
    rockie: false,
    coach: false,
  },
  serverSelection: {
    us: false,
    eu: false,
    sea: false,
  },
};

const toggleSearchConfig = (
  state: searchConfigType,
  action: actionType
): searchConfigType => {
  const { configValue } = action;
  switch (action.configType) {
    case 'role': {
      // Resets to default state
      const { roleSelection } = defaultSearchConfig;
      return {
        ...state,
        roleSelection: {
          ...roleSelection,
          [configValue]: true,
        },
      };
      break;
    }
    case 'server': {
      // Resets to default state
      const { serverSelection } = defaultSearchConfig;
      return {
        ...state,
        serverSelection: {
          ...serverSelection,
          [configValue]: !state.serverSelection[configValue],
        },
      };
      break;
    }
    default:
      throw new Error('Unexcepted Action Type');
  }
};

export const useSearchConfig = (): [searchConfigType, Dispatch<actionType>] =>
  useReducer(toggleSearchConfig, defaultSearchConfig);

export const roleSelectionDictionary = ['Player', 'Coach'];

export const serverSelectionDictionary = ['US', 'EU', 'SEA'];
