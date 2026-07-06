// react-share only uses jsonp for deprecated share-count APIs.
function jsonpStub(): () => void {
  return () => {}
}

export default jsonpStub
