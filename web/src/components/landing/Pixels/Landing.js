import React from "react";

const LandingPixel = () => {
  const renderMetaPixel = () => {
    const scripts = [];
    scripts.push(
      <script type="text/javascript">
        {`
          var axel = Math.random() + "";
          var a = axel * 10000000000000;
          document.write('<iframe src="https://14255851.fls.doubleclick.net/activityi;src=14255851;type=pagev0;cat=pixel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=;gdpr_consent=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        `}
      </script>
    );
    scripts.push(
      <noscript>
        {`
          <iframe src="https://14255851.fls.doubleclick.net/activityi;src=14255851;type=pagev0;cat=pixel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=;gdpr_consent=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
        `}
      </noscript>
    );
    scripts.push(
      <script type="text/javascript">
      {`
        var _nattp = _nattp || [];
        _nattp.push(['id', '65d36f84c6436d660ae06785',{nat_name: 'session_relevant'}]);
        (function() {
          var nattp = document.createElement('script'); nattp.type = 'text/javascript';
          nattp.src = '//cdn.nativery.com/widget/js/nattp.js';
          var nattps = document.getElementsByTagName('script')[0]; nattps.parentNode.insertBefore(nattp, nattps);
        })();
       `}
     </script>
    );
    scripts.push(
      <noscript>
        {`
          <img height="1" width="1" src="//w.nativery.com/tp.gif?id=65d36f84c6436d660ae06785&nat_name=session_relevant" />
        `}
      </noscript>
    );

    return scripts;
  };

  return <>{renderMetaPixel()}</>;
};

export default LandingPixel;
