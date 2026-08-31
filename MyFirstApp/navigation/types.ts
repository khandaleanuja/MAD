export type RootStackParamList = {
  Home: undefined;

  Experiment: {
    experimentId: string;
    title: string;
  };

  Activity: {
    component: string;
    title: string;
  };
};