import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'reactstrap/src/utils';

const propTypes = {
  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  /** Spans the full width of the Button parent */
  block: PropTypes.bool,
  /**
   * buttons may be one of a variety of visual variants such as:
   *
   * `'primary', 'secondary', 'success', 'error'`
   *
   */
  color: PropTypes.string,
  shadowNone: PropTypes.bool,
  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: PropTypes.bool,
  /**
   * Use "outline" versions of button, e.g. `'outline-primary', 'outline-secondary'`
   */
  outline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool,
};

const defaultProps = {
  color: 'secondary',
  shadowNone: false,
  tag: 'button',
};

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      'aria-label': ariaLabel,
      block,
      className,
      close,
      cssModule,
      color,
      outline,
      size,
      tag: Tag,
      innerRef,
      shadowNone,
      ...attributes
    } = this.props;

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = <span aria-hidden>×</span>;
    }

    const btnOutlineColor = `btn${outline ? '-outline' : ''}-${color}`;

    const classes = mapToCssModules(
      classNames(
        className,
        { close },
        close || 'btn',
        close || btnOutlineColor,
        size ? `btn-${size}` : false,
        block ? 'btn-block' : false,
        { active, disabled: this.props.disabled, 'shadow-none': shadowNone },
      ),
      cssModule,
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    const defaultAriaLabel = close ? 'Close' : null;

    return (
      <Tag
        type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
        aria-label={ariaLabel || defaultAriaLabel}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
