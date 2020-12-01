import React, { useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

import Loading from "./LoadingSpinner"

const pardotBlogCTA = "https://go.submittable.com/l/897841/2020-11-30/2b58"

export default (props) => {
  const onMessage = data => {
    if (data.message === "success") {
      props.onSubmit()
    }
  }

  const [iframeReady, setReady] = useState(false)

  return [
    <IframeResizer
      onInit={() => setReady(true)}
      onMessage={onMessage}
      scrolling
      heightCalculationMethod="bodyOffset"
      src={pardotBlogCTA}
      style={{ width: '1px', minWidth: '100%', display: iframeReady ? "block" : "none", minHeight: 50 }}
      frameborder="0"
      allowTransparency="true"
    />,

    !iframeReady && <Loading />
  ]
}


