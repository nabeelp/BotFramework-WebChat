const SET_SEND_TYPING = 'SETTINGS/SET_SEND_TYPING';

export default function (value) {
  return {
    type: SET_SEND_TYPING,
    payload: { sendTyping: !!value }
  };
}

export { SET_SEND_TYPING }
