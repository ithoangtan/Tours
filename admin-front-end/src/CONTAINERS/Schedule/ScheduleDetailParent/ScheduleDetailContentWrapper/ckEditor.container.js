import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EditorContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         id: props.id,
         content: props.content,
         handleWYSIWYGInput: props.handleWYSIWYGInput,
         editor: ClassicEditor,
         schedule: {},
         recordTour: {}
      };
   }

   componentDidMount() {
      // const { handle } = this.props.match.params;
      // const { record } = this.props.location.state;
      // console.log(record);

      if (this.props !== null) {
         // const { record } = this.props.location.state;
         console.log(this.props);
         // this.setState({ record: record });
      }
   }

   onChange = (event, editor) => {
      const data = editor.getData();
      //this.state.handleWYSIWYGInput(this.props.id, data);
      console.log({ event, editor, data });
      console.log(this.state.content);
   };

   render() {
      return (
         <div className="container-fluid card shadow ht-style-card">
            <div className="ht-card-title-schedule">
               <h5>Title Tour</h5>
            </div>
            <div className="Editor-content ht-style-editor">
               <CKEditor
                  minHeight={"500px"}
                  editor={this.state.editor}
                  data={this.state.content}
                  config={{
                     // ckfinder: {
                     //    // eslint-disable-next-line max-len
                     //    uploadUrl:
                     //       "https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json"
                     // },
                     cloudServices: {
                        tokenUrl:
                           "https://43967.cke-cs.com/token/dev/PLTDrOf3tlrbQxO14HqGZdCdWnqVWTV991y772AEWgYmoonLkUTIHZbiiEa2",
                        uploadUrl: "https://43967.cke-cs.com/easyimage/upload/"
                     }
                  }}
                  // extraPlugins={"easyimage"}
                  onInit={editor => {
                     // You can store the "editor" and use when it is needed.
                     console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => this.onChange(event, editor)}
                  onBlur={editor => {
                     console.log("Blur.", editor);
                  }}
                  onFocus={editor => {
                     console.log("Focus.", editor);
                  }}
               />
            </div>
         </div>
      );
   }
}

export default EditorContainer;
