import React, { useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

import Loading from "./LoadingSpinner"

export default ({ formUrl, ...props }) => {
  const onMessage = data => {
    if (data.message === "success") {
      props.onSubmit()
    }
  }

  const [iframeReady, setReady] = useState(false)

  return [
    <IframeResizer
      key="iframe"
      onInit={() => setReady(true)}
      onMessage={onMessage}
      scrolling
      heightCalculationMethod="bodyOffset"
      src={formUrl}
      style={{ width: '1px', minWidth: '100%', display: iframeReady ? "block" : "none", minHeight: 50 }}
      frameBorder="0"
      allowTransparency="true"
    />,

    !iframeReady && <Loading key="loading" />
  ]
}


