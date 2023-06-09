export type Timeseries = {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: string;
      };
    };
    next_6_hours: {
      summary: {
        symbol_code: string;
      };
    };
  };
};

export type Feature = {
  properties: {
    meta: {
      updated_at: string;
      units: {
        air_temperature: string;
      };
    };
    timeseries: Timeseries[];
  };
};
