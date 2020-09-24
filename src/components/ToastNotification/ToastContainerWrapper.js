import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Global, css } from '@emotion/core';
import Icon from '../Icon/Icon';

const CloseButton = ({ closeToast }) => (
  <Icon
    icon='CLOSE'
    size='16px'
    color='white'
    onClick={closeToast}
    aria-label='close notification'
  />
);

const ToastContainerWrapper = ({ containerId, containerWidth }) => (
  <>
    <ToastContainer
      enableMultiContainer
      containerId={containerId}
      position={toast.POSITION.BOTTOM_RIGHT}
      closeButton={<CloseButton />}
      transition={Flip}
      closeOnClick={false}
      draggable={false}
      style={{ width: containerWidth }}
      className='agreed-toast__toast-container'
      bodyClassName='agreed-toast__body'
    />
    <Global
      styles={css`
        .agreed-toast__toast-container {
          padding-top: 6px;
          padding-right: 6px;
          padding-left: 16px;

          position: static !important;
          box-shadow: 0 1px 20px 0 #c8d3e6;
          opacity: 0.54;
          border-radius: 13px;
          background-color: #1b687d;

          // hide it completely when there is not toast
          &:empty {
            opacity: 0;
          }

          .Toastify__toast {
            background-color: #1b687d;
            box-shadow: none;
            margin-bottom: 0px;
          }
        }
        .agreed-toast__body {
          color: white;
        }
      `}
    />
  </>
);

ToastContainerWrapper.displayName = 'ToastContainerWrapper';

ToastContainerWrapper.propTypes = {
  /** 
	 * Use `containerId` if you want to use multiple instances of `ToastContainerWrapper`. With `containerId` you can asign unique id to ToastContainer, and then send toast to specific ToastContainer like `toast("toast-message-goes-here", {
			containerId: '<unique-id>'
		})`
	*/
  containerId: PropTypes.string,

  /** Sets the width of toast container*/
  containerWidth: PropTypes.string,
};

ToastContainerWrapper.defaultProps = {
  containerWidth: '292px',
};

export default ToastContainerWrapper;
