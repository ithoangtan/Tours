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
      let xhtml = null;
      xhtml = configs.map((config, key) => {
         // menu:
         if (config.infoType === "menu")
            return (
               <ConfigMenuEditor {...this.props} configs={configs} key={key} />
            );
         // logo
         if (config.infoType === "logo")
            return (
               <ConfigLogoEditor {...this.props} configs={configs} key={key} />
            );
         // info
         if (config.infoType === "info")
            return (
               <ConfigInfoEditor {...this.props} configs={configs} key={key} />
            );
         // social
         if (config.infoType === "social")
            return (
               <ConfigSocialEditor
                  {...this.props}
                  configs={configs}
                  key={key}
               />
            );
         // footer
         if (config.infoType === "footer")
            return (
               <ConfigFooterEditor
                  {...this.props}
                  configs={configs}
                  key={key}
               />
            );
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
