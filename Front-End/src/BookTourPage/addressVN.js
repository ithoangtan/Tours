import data from "./treeAddressVN.json";

import _ from "lodash";

export function mapAddressToOptionAntd() {
   let addressMapped = _.map(data, divided);
   addressMapped.forEach(element => {
      element["quan-huyen"] = _.map(element["quan-huyen"], divided);
      element["quan-huyen"].forEach(element => {
         element["xa-phuong"] = _.map(element["xa-phuong"], divided);
      });
   });
   let arrayAddress = [];
   //  addressMapped.forEach(element => {
   //     let addressProvince = {
   //        name: element["name"],
   //        nameWithType: element["name_with_type"],
   //        districts: []
   //     };
   //     element["quan-huyen"].forEach(element => {
   //        let addressDistrict = {
   //           name: element["name"],
   //           nameWithType: element["name_with_type"],
   //           wards: []
   //        };
   //        element["xa-phuong"].forEach(element => {
   //           let addressWard = {
   //              name: element["name"],
   //              nameWithType: element["name_with_type"]
   //           };
   //           addressDistrict.wards.push(addressWard);
   //        });
   //        addressProvince.districts.push(addressDistrict);
   //     });
   //     arrayAddress.push(addressProvince);
   //  });
   addressMapped.forEach(element => {
      let addressProvince = {
         value: element["name"],
         label: element["name_with_type"],
         children: []
      };
      element["quan-huyen"].forEach(element => {
         let addressDistrict = {
            value: element["name"],
            label: element["name_with_type"],
            children: []
         };
         element["xa-phuong"].forEach(element => {
            let addressWard = {
               value: element["name"],
               label: element["name_with_type"]
            };
            addressDistrict.children.push(addressWard);
         });
         addressProvince.children.push(addressDistrict);
      });
      arrayAddress.push(addressProvince);
   });
   return arrayAddress;
}

export function mapAddressNotWardToOptionAntd() {
   let addressMapped = _.map(data, divided);
   addressMapped.forEach(element => {
      element["quan-huyen"] = _.map(element["quan-huyen"], divided);
      element["quan-huyen"].forEach(element => {
         element["xa-phuong"] = _.map(element["xa-phuong"], divided);
      });
   });
   let arrayAddress = [];
   addressMapped.forEach(element => {
      let addressProvince = {
         value: element["name"],
         label: element["name_with_type"],
         children: []
      };
      element["quan-huyen"].forEach(element => {
         let addressDistrict = {
            value: element["name"],
            label: element["name_with_type"],
            children: []
         };
         addressProvince.children.push(addressDistrict);
      });
      arrayAddress.push(addressProvince);
   });
   return arrayAddress;
}

/**
 * @param {*} data
 */
function divided(item) {
   return item;
}
