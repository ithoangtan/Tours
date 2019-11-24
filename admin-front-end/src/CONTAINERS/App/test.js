import React, { Component } from "react";

const arrayExternalScript = [
   "./vendor/jquery/jquery.min.js",
   "./vendor/bootstrap/js/bootstrap.bundle.min.js",
   "./vendor/jquery-easing/jquery.easing.min.js",
   "./js/sb-admin-2.min.js",
   "./vendor/chart.js/Chart.min.js",
   "./js/demo/chart-area-demo.js",
   "./js/demo/chart-pie-demo.js",

   "./bower_components/ckeditor/ckeditor.js",
   "./bower_components/ckeditor/config.js?t=J0AG",
   "./bower_components/ckeditor/lang/vi.js?t=J0AG",
   "./bower_components/ckeditor/styles.js?t=J0AG",
   "./bower_components/replaceCkEditor.js?t=J0AG"
];

class test extends Component {
   constructor(props) {
      super(props);
      this.state = {
         textareaValue: ""
      };
   }

   componentDidMount() {
      arrayExternalScript.forEach(item => {
         const script = document.createElement("script");
         script.src = item;
         script.async = true;
         document.body.appendChild(script);
      });
   }
   onchange = event => {
      this.setState({
         textareaValue: event.target.value
      });
   };

   onSubmit = event => {
      event.preventDefault();
      console.log(this.state.textareaValue);
   };

   render() {
      return (
         <section className="content">
            <div className="row">
               <div className="col-md-12">
                  <div className="box box-info">
                     {/* /.box-header */}
                     <div className="box-header"></div>
                     {/* /end-.box-header */}
                     <div className="box-body pad" style={{}}>
                        <form onSubmit={this.onSubmit}>
                           <textarea
                              id="editor1"
                              name="editor1"
                              onchange={this.onchange}
                              rows={40}
                              cols={60}
                              style={{
                                 visibility: "hidden",
                                 display: "none"
                              }}
                              value={this.state.value}
                           />
                           <input type="submit" value="Save" />
                        </form>
                     </div>
                  </div>
               </div>
               {/* /.col*/}
            </div>
            <div></div>
            {/* ./row */}
         </section>
      );
   }
}

export default test;
