'use client';
import React, { useState, useEffect, Fragment, useRef } from 'react';
import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import Chroma from 'chroma-js';
import SURFICIAL_DATA from '@public/demo-data/surficial.json';

HC_exporting(Highcharts);
function computeForStartTs(ts, duration = 7, unit = 'days') {
  if (unit === 'all') {
    return 'None';
  }

  const ts_format = 'YYYY-MM-DD HH:mm:ss';
  const ts_start = moment(ts).subtract(duration, unit).format(ts_format);
  return ts_start;
}

function capitalizeFirstLetter(str, every_word = false) {
  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  if (every_word) {
    const arr = str.split(' ');
    const cap_arr = arr.map(s => capitalize(s));

    return cap_arr.join(' ');
  }

  return capitalize(str);
}

// eslint-disable-next-line max-params
function prepareOptions(
  input,
  data,
  width,
  setIsOpenClickModal,
  setChosenPointCopy,
  is_end_of_shift,
) {
  const { site_code, timestamps } = input;
  const { start, end } = timestamps;
  const start_date = moment(start, 'YYYY-MM-DD HH:mm:ss');
  const end_date = moment(end, 'YYYY-MM-DD HH:mm:ss');

  const font_size = '1rem';

  let subtitle = `As of: <b>${moment(end_date).format(
    'D MMM YYYY, hh:mm A',
  )}</b>`;

  let min_x = start_date;
  if ((is_end_of_shift || start === 'None') && data.length > 0) {
    const min = data.reduce((cur_min, row) => {
      const { data: cd } = cur_min;
      const { data: rd } = row;
      if (cd.length === 0) return row;
      if (rd.length === 0) return cur_min;
      return cd[0].x < rd[0].x ? cur_min : row;
    });
    min_x = min.data.length > 0 ? moment(min.data[0].x) : moment();
  }

  data.forEach(row => {
    // eslint-disable-next-line no-param-reassign
    row.turboThreshold = 100000;
    const { data: series_data } = row;
    series_data.forEach(series_data_row => {
      const { unreliable_data } = series_data_row;
      if (Object.keys(unreliable_data).length !== 0) {
        const { tag_type } = unreliable_data;
        let symbol;
        let fillColor;
        if (tag_type === -1) {
          symbol = 'triangle-down';
          fillColor = '#FF0000';
        } else if (tag_type === 0) {
          symbol = 'circle';
          fillColor = '#FFFF00';
        } else {
          symbol = 'triangle';
          fillColor = '#06e606';
        }

        const marker = {
          symbol,
          radius: 8,
          fillColor,
          lineColor: '#000000',
          lineWidth: 1,
        };
        // eslint-disable-next-line no-param-reassign
        series_data_row.marker = marker;
      } else {
        // eslint-disable-next-line no-param-reassign
        series_data_row.unreliable_data = false;
      }
    });
  });

  return {
    title: {
      text: `<b>Surficial Data History Chart of Barangay Bakun</b>`,
      style: { fontSize: font_size },
      margin: 36,
      y: 18,
    },
    time: { timezoneOffset: -8 * 60 },
    series: data,
    chart: {
      type: 'line',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      height: 400,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30,
        },
      },
      spacingTop: 24,
      spacingRight: 24,
      events: {
        // load() {
        //     const chart = this;
        //     const initial_x = 20;
        //     const initial_y = 5;
        //     const loader = (row, i) => {
        //         const symbol_y = initial_y + (20 * (i + 1));
        //         chart.renderer.symbol(row.symbol, initial_x, symbol_y, 10, 10)
        //             .attr({ zIndex: 5 })
        //             .css({ fill: row.color, stroke: "black" })
        //             .add();
        //         const label_y = (initial_y + 10) + (20 * (i + 1));
        //         chart.renderer.text(row.label, initial_x + 15, label_y)
        //             .attr({ zIndex: 5 })
        //             .css({ fontSize: "12px" })
        //             .add();
        //     };
        //     this.showLoading(); // show loading message
        //     this.hideNoData();  // hide no data message
        // }
      },
    },
    subtitle: {
      text: subtitle,
      style: { fontSize: '0.75rem' },
    },
    legend: {
      labelFormatter() {
        const {
          userOptions: { marker_name: mn, in_use },
        } = this;
        const name = in_use === 0 ? `${mn} (Defunct)` : mn;
        return name;
      },
    },
    yAxis: {
      title: {
        text: '<b>Measurement (cm)</b>',
      },
    },
    xAxis: {
      min: Date.parse(min_x),
      max: Date.parse(end_date),
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b %Y',
        year: '%b',
      },
      title: {
        text: '<b>Date</b>',
      },
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      xDateFormat: "%A, %b %d, %I:%M %p"
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
        },
        dashStyle: 'ShortDash',
      },
      series: {
        marker: {
          radius: 6,
        },
        cursor: 'pointer',
        point: {
          events: {
            click() {
              if (!is_end_of_shift) {
                const {
                  data_id,
                  x,
                  y,
                  mo_id,
                  series: { name },
                  unreliable_data,
                  observer_name,
                } = this;

                const obj = {
                  data_id,
                  name,
                  mo_id,
                  ts: moment(x),
                  measurement: y,
                  unreliable_data,
                  observer_name,
                };
                setChosenPointCopy(obj);
                setIsOpenClickModal(true);
              }
            },
          },
        },
      },
    },
    loading: {
      showDuration: 100,
      hideDuration: 1000,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      sourceWidth: 850,
      sourceHeight: 400,
    },
  };
}

function createSurficialGraph(options, chartRef) {
  const temp = (
    <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
  );

  return temp;
}

function Surficial(props) {
  const {
    width,
    fullScreen,
    disableBack,
    disableMarkerList,
    saveSVG,
    input,
    currentUser,
    isEndOfShift,
  } = props;

  const default_range_info = { label: '3 months', unit: 'months', duration: 3 };
  const [selected_range_info, setSelectedRangeInfo] =
    useState(default_range_info);
  const { unit, duration } = selected_range_info;

  const ts_now = moment();
  let ts_end = ts_now.format('YYYY-MM-DD HH:mm:ss');
  let dt_ts_end = ts_now;
  const site_code = 'mar';

  const save_svg = typeof saveSVG === 'undefined' ? false : saveSVG;
  const is_end_of_shift =
    typeof isEndOfShift === 'undefined' ? false : isEndOfShift;

  const ts_start = computeForStartTs(dt_ts_end, duration, unit);
  const chartRef = React.useRef(null);
  const timestamps = { start: ts_start, end: ts_end };

  const [surficial_data, setSurficialData] = useState([]);
  const [selected_marker, setSelectedMarker] = useState(null);
  const [historical_markers, setHistoricalMarkers] = useState(false);

  const [save_svg_now, setSaveSVGNow] = useState(false);
  const [to_redraw_chart, setRedrawChart] = useState(true);
  const [show_trending, setShowTrending] = useState(false);
  const [generate_trending, setGenerateTrending] = useState(false);

  const [is_open_click_modal, setIsOpenClickModal] = useState(false);
  const [is_open_add_event_modal, setIsOpenAddEventModal] = useState(false);
  const [add_new_marker, setAddNewMarker] = useState(false);

  const [is_open_export, setIsOpenExport] = useState(false);

  const default_point = {
    data_id: null,
    mo_id: null,
    name: null,
    ts: null,
    measurement: 0,
  };
  const [chosen_point, setChosenPointCopy] = useState({ ...default_point });
  const [edit_modal, setEditModal] = useState({
    ...default_point,
    is_open: false,
  });

  const [surficial_data_tag_modal, setSurficialDataTagModal] = useState({
    ...default_point,
    is_open: false,
  });

  useEffect(() => {
    setSurficialData([]);
    setRedrawChart(true);
  }, [selected_range_info]);

  useEffect(() => {
    const { current } = chartRef;
    if (to_redraw_chart) {
      let filter_data = SURFICIAL_DATA.filter(e => e.data.length > 0);
          if (filter_data.length > 0) {
            setSurficialData(filter_data);
          } else {
            filter_data = data.filter(e => e.in_use === 1);
            setSurficialData(filter_data);
          }

          if (filter_data.length > 0) {
            if (chartRef.current) {
              const {
                current: { chart },
              } = chartRef;
              chart.hideLoading();
              if (save_svg) setSaveSVGNow(true);
            }
          }

      setRedrawChart(false);
    }
  }, [to_redraw_chart]);

  useEffect(() => {
    if (!historical_markers && surficial_data.length !== 0) {
      const markers = [];
      const rainbow_colors = Chroma.scale(['#f00', '#0f0', '#00f'])
        .mode('lch')
        .domain([0, surficial_data.length - 1]);
      surficial_data.forEach(({ marker_history }, i) => {
        marker_history.forEach(({ marker_name }) => {
          if (marker_name) {
            markers.push(marker_name.marker_name);
          }
        });

        surficial_data[i].color = rainbow_colors(i).name();
      });
      setHistoricalMarkers(markers);
    }
  }, [historical_markers, surficial_data]);

  useEffect(() => {
    if (chartRef.current) {
      const {
        current: { chart },
      } = chartRef;
      if (selected_marker) {
        chart.series.forEach(s => {
          const bool = selected_marker.marker_name === s.name;
          s.setVisible(bool, false);
        });
        chart.redraw();
        chart.reflow();
      }
    }
  }, [selected_marker]);

  const input_obj = { site_code, timestamps };
  const options = prepareOptions(
    input_obj,
    surficial_data,
    width,
    setIsOpenClickModal,
    setChosenPointCopy,
    is_end_of_shift,
  );
  const graph_component = createSurficialGraph(options, chartRef);

  return (
    <Fragment>
      {surficial_data.length > 0 ? (
        graph_component
      ) : (
        <></>
      )}
    </Fragment>
  );
}

export default Surficial;
