import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";

import ConfigMenuEditor from "./ConfigMenu.editor";
import ConfigLogoEditor from "./ConfigLogo.editor";
import ConfigInfoEditor from "./ConfigInfo.editor";
import ConfigSocialEditor from "./ConfigSocial.editor";
import ConfigFooterEditor from "./ConfigFooter.editor";

export default class ContentTableWrapperContainer extends Component {
   renderConfigEditors() {
      const { configs } = this.props;
      let xhtml = configs.map((config, key) => {
         // menu:
         if (config.infoType === "menu")
            return (
               <ConfigMenuEditor
                  {...this.props}
                  configOfMenu={config}
                  key={key}
               />
            );
         // logo
         if (config.infoType === "logo")
            return (
               <ConfigLogoEditor
                  {...this.props}
                  configOfLogo={config}
                  key={key}
               />
            );
         // info
         if (config.infoType === "info")
            return (
               <ConfigInfoEditor
                  {...this.props}
                  configOfInfo={config}
                  key={key}
               />
            );
         // social
         if (config.infoType === "social")
            return (
               <ConfigSocialEditor
                  {...this.props}
                  configOfSocial={config}
                  key={key}
               />
            );
         // footer
         if (config.infoType === "footer")
            return (
               <ConfigFooterEditor
                  {...this.props}
                  configOfFooter={config}
                  key={key}
               />
            );
         return <div></div>;
      });
      return xhtml;
   }

   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer {...this.props} />
            {/* End of Topbar */}
            {/* Main Content */}
            {this.renderConfigEditors()}
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
