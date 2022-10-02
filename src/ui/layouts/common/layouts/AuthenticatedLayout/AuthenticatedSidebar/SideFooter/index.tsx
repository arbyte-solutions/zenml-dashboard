import React, { useState, useEffect } from 'react';
import { MenuItem } from '../Menu/MenuItem';
import { MenuItemExternal } from './MenuItemExternal';
import { routePaths } from '../../../../../../../routes/routePaths';
import { Box, Separator, icons, Paragraph } from '../../../../../../components';
import { iconSizes, iconColors } from '../../../../../../../constants';
import { translate } from '../translate';
import { sessionSelectors } from '../../../../../../../redux/selectors/session';
import { useSelector } from '../../../../../../hooks';
import axios from 'axios';

export const SideFooter: React.FC = () => {

  const authToken = useSelector(sessionSelectors.authenticationToken);
  const [apiVersion, setApiVersion] = useState('')

  useEffect(()  => {  
    const getApiVersion = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/version`, {
      headers: {
        'Authorization': `bearer ${authToken}` 
      }
    })
    setApiVersion(data)
    }

    getApiVersion()
  }, [authToken])
   
  return (
    <>
      <Box marginHorizontal="md">
        <Separator.LightNew />
      </Box>

      <MenuItemExternal
        Icon={() => <icons.docs color={iconColors.white} size={iconSizes.md} />}
        to="https://www.google.com/"
        text="Documentation"
      />
      <MenuItemExternal
        Icon={() => (
          <icons.example color={iconColors.white} size={iconSizes.md} />
        )}
        to="https://www.google.com/"
        text="Example & Tutorials"
      />
      <MenuItemExternal
        Icon={() => <icons.tool color={iconColors.white} size={iconSizes.md} />}
        to="https://www.google.com/"
        text="Report Issue"
      />
      <MenuItem
        Icon={() => (
          <icons.settings color={iconColors.white} size={iconSizes.md} />
        )} to={routePaths.settings.personalDetails} text={translate('menu.setting.text')} />

        <Box paddingLeft='md' paddingTop="md" paddingBottom="sm">
          <Paragraph color='white' style={{ fontSize: '8px' }}>UI Version v{process.env.REACT_APP_VERSION}</Paragraph>
          <Paragraph color='white' style={{ fontSize: '8px' }}>ZenML v{apiVersion}</Paragraph>
        </Box>
      </>
  );
};