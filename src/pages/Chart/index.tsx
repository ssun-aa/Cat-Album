import { useRecoilState } from 'recoil';
import { favTagData, themeState } from 'recoil/atom';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryPolarAxis,
  VictoryVoronoiContainer,
} from 'victory';
import styles from './chart.module.scss';
import { CHART_STYLE, TOOLTIP_STYLE } from './chartStyle';

function Chart() {
  const [tagData] = useRecoilState(favTagData);
  const [theme] = useRecoilState(themeState);

  return (
    <div className={styles.wrap}>
      <header className={styles.title}>
        <p>내 Tag Chart</p>
      </header>
      <div className={styles.chartWrap}>
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          {...CHART_STYLE}
          containerComponent={
            <VictoryVoronoiContainer
              labels={(datum) => datum.datum.y}
              labelComponent={
                <VictoryTooltip
                  {...TOOLTIP_STYLE}
                  style={{ fill: theme === 'dark' ? '#f3eceb' : '#505050' }}
                />
              }
            />
          }
        >
          <VictoryPolarAxis
            dependentAxis
            style={{
              axis: { stroke: 'none' },
              grid: { stroke: theme === 'dark' ? '#505050' : '#f3eceb' },
            }}
            tickFormat={() => ''}
          />
          <VictoryPolarAxis
            style={{
              axis: { stroke: '#F5DDC4' },
              grid: { stroke: theme === 'dark' ? '#505050' : '#f3eceb' },
              tickLabels: {
                fontSize: 14,
                fill: theme === 'dark' ? '#d0d0d0' : '',
              },
            }}
          />
          <VictoryLine
            data={tagData}
            style={{
              data: { stroke: '#b8c4f5' },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default Chart;
