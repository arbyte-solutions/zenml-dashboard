/* eslint-disable */

import { useEffect } from 'react';
import {
  pipelinePagesActions,
  runsActions,
  pipelinesActions,
} from '../../../../redux/actions';
import {
  pipelinePagesSelectors,
  workspaceSelectors,
} from '../../../../redux/selectors';
import { useDispatch, useRequestOnMount, useSelector } from '../../../hooks';

interface ServiceInterface {
  setFetching: (arg: boolean) => void;
  setCurrentWorkspace: (arg: TWorkspace | null) => void;
  currentWorkspace: TWorkspace | null;
  // workspaces: TWorkspace[];
}

export const useService = (): ServiceInterface => {
  const currentWorkspace = useSelector(pipelinePagesSelectors.currentWorkspace);

  const dispatch = useDispatch();

  // const workspaces = useSelector(workspaceSelectors.myWorkspaces);

  // useRequestOnMount(workspacesActions.getMy, {});

  useEffect(() => {
    setFetching(true);
    console.log('asdasdasdasd');
    dispatch(
      runsActions.allRuns({
        // id: currentWorkspace.id,
        onSuccess: () => setFetching(false),
        onFailure: () => setFetching(false),
      }),
    );
    dispatch(
      pipelinesActions.getMy({
        onSuccess: () => setFetching(false),
        onFailure: () => setFetching(false),
      }),
    );
  });
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     //assign interval to a variable to clear it.
  //     dispatch(
  //       runsActions.allRuns({
  //         // id: currentWorkspace.id,
  //         onSuccess: () => setFetching(false),
  //         onFailure: () => setFetching(false),
  //       }),
  //     );
  //     dispatch(pipelinesActions.getMy({}));
  //   }, 5000);

  //   return () => clearInterval(intervalId); //This is important
  // });

  const setFetching = (fetching: boolean) => {
    dispatch(pipelinePagesActions.setFetching({ fetching }));
  };

  const setCurrentWorkspace = (workspace: TWorkspace | null) => {
    dispatch(pipelinePagesActions.setCurrentWorkspace({ workspace }));

    // if (workspace) {
    //   setFetching(true);
    //   dispatch(
    //     workspacesActions.pipelinesForWorkspaceId({
    //       id: workspace.id,
    //       onSuccess: () => setFetching(false),
    //       onFailure: () => setFetching(false),
    //     }),
    //   );
    // }
  };

  return {
    setFetching,
    setCurrentWorkspace,
    currentWorkspace,
    // workspaces,
  };
};
