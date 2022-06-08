const CHART_STYLE = {
  animate: {
    duration: 1000,
    onLoad: {
      duration: 500,
    },
  },
};

const TOOLTIP_STYLE = {
  flyoutWidth: 50,
  flyoutHeight: 20,
  pointerLength: 10,
  cornerRadius: 5,
  flyoutStyle: {
    stroke: '#b8c4f5',
    fill: 'transparent',
  },
};

const AXIS_UNDER_STYLE = {
  style: {
    axis: { stroke: '#6d79a8' },
    grid: { stroke: 'transparent' },
    tickLabels: { fill: '#94A2AD' },
  },
};

export { CHART_STYLE, TOOLTIP_STYLE, AXIS_UNDER_STYLE };
