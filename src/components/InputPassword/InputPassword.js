/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, warnOnce, tagPropType } from 'reactstrap/src/utils';
import { Box, Icon } from '../';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  type: 'text',
};

class InputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
    this.state = {
      isPasswordVisible: false,
    };
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }

  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }

  render() {
    let {
      className,
      cssModule,
      type,
      bsSize,
      valid,
      invalid,
      tag,
      addon,
      plaintext,
      innerRef,
      ...attributes
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    const isNotaNumber = new RegExp('\\D', 'g');

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    const rangeInput = type === 'range';
    let Tag = tag || (selectInput || textareaInput ? type : 'input');

    let formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (rangeInput) {
      formControlClass = `${formControlClass}-range`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    const classes = mapToCssModules(
      classNames(
        className,
        'hide-default-invalid-icon', // MAGICAL LINE
        invalid && 'is-invalid',
        valid && 'is-valid',
        bsSize ? `form-control-${bsSize}` : false,
        formControlClass,
      ),
      cssModule,
    );

    if (Tag === 'input' || (tag && typeof tag === 'function')) {
      attributes.type = type;
    }

    if (
      attributes.children &&
      !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')
    ) {
      warnOnce(
        `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`,
      );
      delete attributes.children;
    }

    return (
      <Box position='relative' className='input-password-wrapper'>
        {/** adding input-password-wrapper to make FormFeedback work */}
        <Tag
          {...attributes}
          ref={innerRef}
          className={classes}
          type={this.state.isPasswordVisible ? 'text' : 'password'}
        />
        <Box position='absolute' right='17px' top='12px'>
          <Icon
            icon={this.state.isPasswordVisible ? 'VISIBILITY_OFF' : 'VISIBILITY'}
            color={invalid ? 'error' : 'primary'}
            size='22px'
            onClick={() =>
              this.setState(({ isPasswordVisible }) => ({ isPasswordVisible: !isPasswordVisible }))
            }
          />
        </Box>
      </Box>
    );
  }
}

InputPassword.propTypes = propTypes;
InputPassword.defaultProps = defaultProps;

export default InputPassword;
