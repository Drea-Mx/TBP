import React from "react";
import Helmet from 'react-helmet'

const TrackingPixelsTY = () => (
  <Helmet>
    {/* Display Pixel */}
    <iframe
      src="https://14255851.fls.doubleclick.net/activityi;src=14255851;type=leads0;cat=pixel0;qty=1;cost=[Revenue];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[OrderID]?"
      width="1"
      height="1"
      frameborder="0"
      style={{ display: "none" }}
    ></iframe>

    {/* Native Pixel */}
    <script type="text/javascript">
      {`
        var _nattp = _nattp || [];
        _nattp.push(['id', '65d36fd3c6436d660ae067a8',{nat_name: 'conversion'}]);
        (function() {
          var nattp = document.createElement('script'); nattp.type = 'text/javascript';
          nattp.src = '//cdn.nativery.com/widget/js/nattp.js';
          var nattps = document.getElementsByTagName('script')[0]; nattps.parentNode.insertBefore(nattp, nattps);
        })();
      `}
    </script>
    <noscript>
      {`
        <img
          height="1"
          width="1"
          src="//w.nativery.com/tp.gif?id=65d36fd3c6436d660ae067a8&nat_name=conversion"
        />
      `}
    </noscript>
  </Helmet>
);

export default TrackingPixelsTY;
