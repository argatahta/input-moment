import cx from 'classnames';
import React, { Component } from 'react';
import moment from "moment-timezone";
import InputSlider from 'react-input-slider';

export default class extends Component {
  changeHours = pos => {
    const m = this.props.moment;
    const tz = this.props.timezone
    m.hours(pos.x)
    this.props.onChange( moment.tz(m, tz));
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    const tz = this.props.timezone
    m.minutes(pos.x)
    this.props.onChange( moment.tz(m, tz));
  };

  render() {
    const m = this.props.moment;
    const tz = this.props.timezone;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <span className="time">{moment(m, tz).format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{moment(m, tz).format('mm')}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            xstep={this.props.hourStep}
            x={moment(m, tz).hour()}
            onChange={this.changeHours}
          />
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.minStep}
            x={moment(m, tz).minute()}
            onChange={this.changeMinutes}
          />
        </div>
      </div>
    );
  }
}
