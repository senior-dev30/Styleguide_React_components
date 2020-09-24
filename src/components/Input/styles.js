const useInputStyle = () => {
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'all 0.2s',
    outline: 'none',
    appearance: 'none',
    fontFamily: 'Avenir',
    fontSize: '14px',
    color: 'secondary',
    lineHeight: '19px',
    border: '1px',
    borderRadius: '7px',
    borderColor: 'grey-light',
    padding: '15px 16px 13px',
    _placeholder: {
      color: 'grey-light',
    },
    _hover: {
      borderColor: 'secondary',
    },
    _focus: {
      borderColor: 'secondary',
      boxShadow: `0 1px 8px 0 rgba(119, 134, 158, 0.25)`,
    },
    _invalid: {
      paddingRight: '41px',
      borderColor: 'error',
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 48 48' fill='%23eb4667'%3E%3Cpath d='M6.345 41h35.31a1.25 1.25 0 001.081-1.878L25.081 8.742a1.25 1.25 0 00-2.162 0L5.264 39.122A1.25 1.25 0 006.345 41zm18.958-5.387h-2.605a.5.5 0 01-.5-.5v-2.591a.5.5 0 01.5-.5h2.605a.5.5 0 01.5.5v2.591a.5.5 0 01-.5.5zm-.5-6.285h-1.605a1 1 0 01-1-1v-9.672a1 1 0 011-1h1.605a1 1 0 011 1v9.672a1 1 0 01-1 1z'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right calc(.3em + .4375rem) center',
    },
    _disabled: {
      color: 'grey-light',
      borderColor: 'disabled-bg',
      backgroundColor: 'disabled-bg',
      cursor: 'not-allowed',
    },
    _readOnly: {
      boxShadow: 'none !important',
      userSelect: 'all',
    },
  };
};

export default useInputStyle;
