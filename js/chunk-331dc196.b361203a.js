(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-331dc196","chunk-54d2584a","chunk-3c26585a","chunk-96806980"],{1629:function(e,t,n){"use strict";n("ac1a")},"1e03":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contractorDetail"},[n("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",[e._v(" 姓名:"),n("span",[e._v("编号")]),n("br"),e._v(" 类别:"),n("span",[e._v("名称")]),n("br"),e._v(" 性别:"),n("span",[e._v("类型")]),n("br"),e._v(" 年龄:"),n("span",[e._v("营业执照编号")]),n("br")])]),n("el-col",{attrs:{span:8}},[n("div",[e._v(" 身份证号:"),n("span",[e._v("法人代表")]),n("br"),e._v(" 学历:"),n("span",[e._v("联系电话")]),n("br"),e._v(" 专业:"),n("span",[e._v("部门")]),n("br"),e._v(" 职称:"),n("span",[e._v("标志")]),n("br")])]),n("el-col",{attrs:{span:8}},[n("div",[e._v(" 专业年限:"),n("span",[e._v("安全生产许可证编号")]),n("br"),e._v(" 职务或工种:"),n("span",[e._v("注册地址")]),n("br"),e._v(" 任命文件:"),n("span",[e._v("考评分")]),n("br")])])],1)],1),n("el-collapse-item",{attrs:{title:"资质文件",name:"2"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",[e._v(" 特种作业人员证书编号:"),n("span",[e._v("资质审查表")]),n("br"),e._v(" 项目名称:"),n("span",[e._v("资格确认书")]),n("br"),e._v(" 出入证号:"),n("span",[e._v("安全协议")]),n("br")])]),n("el-col",{attrs:{span:12}},[n("div",[e._v(" 调入项目日期:"),n("span",[e._v("营业执照")]),n("br"),e._v(" 人脸信息（门禁对接）:"),n("span",[e._v("安全生产许可证")]),n("br")])])],1)],1)],1)],1)},a=[],l=n("b837"),r={name:"contractor-detail",components:{commonTable:l["default"]},props:{data:{type:Object,default:{}}},data:function(){return{activeName:"first",activeNames:["1","2","3","4","5"],tableConfig:{headerClassName:"",stripe:!0,tableHeight:"calc(100% - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableData:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],tableConfigCar:{headerClassName:"",stripe:!0,tableHeight:"calc(100% - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableDataCar:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],tableColumnList:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 1}},{label:"姓名",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"性别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"年龄",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"身份证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"学历",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"专业",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"职称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"专业年限",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"职务或工种",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"任命文件",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"特种作业人员证书编号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"项目名称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"调入项目日期",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"人脸信息（门禁对接）",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}}],tableColumnListCar:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 1}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"名称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"型号规格",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"使用许可证编号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"复审日期",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"操作人",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"操作人证件号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"车牌号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"交强险",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}}]}},methods:{handleChange:function(e){}}},i=r,c=(n("5959"),n("2877")),p=Object(c["a"])(i,o,a,!1,null,"7c476bb7",null);t["default"]=p.exports},"30d1":function(e,t,n){},"51b4":function(e,t,n){"use strict";n("30d1")},5959:function(e,t,n){"use strict";n("fc81")},"5f00":function(e,t,n){"use strict";n("cf09")},"9ea6":function(e,t,n){},ac1a:function(e,t,n){},b9b8:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{class:{commonFullScreenDialog:e.dialogSet.fullscreen,commonNoTitle:!e.dialogSet.title},attrs:{title:e.dialogSet.title,visible:e.dialogSet.isShow,width:e.dialogSet.width,modal:e.dialogSet.modal,"close-on-click-modal":e.dialogSet.modalClick||!1,fullscreen:e.dialogSet.fullscreen,"destroy-on-close":!0,"before-close":e.handleClose,"append-to-body":e.dialogSet.appendBody,"modal-append-to-body":e.dialogSet.modalAppendBody,top:e.dialogSet.top},on:{"update:visible":function(t){return e.$set(e.dialogSet,"isShow",t)},close:e.closeDialog,open:e.openDialog}},[e._t("dialog-components"),e.dialogSet.footer?n("div",{attrs:{slot:"footer"},slot:"footer"},[e._l(e.dialogBtn,(function(t,o){return n("el-button",{key:o,attrs:{disabled:t.disabled||!1,type:t.type,icon:t.icon,round:t.round},on:{click:t.handleClick}},[e._v(" "+e._s(t.name)+" ")])})),e._t("dialogBtn")],2):e._e()],2)},a=[],l={name:"screen-dialog",props:{dialogSet:Object,dialogBtn:Array,closeDialog:{type:Function,default:function(){}},openDialog:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClose:function(e){this.dialogSet.beforeClose?this.dialogSet.beforeClose():e()}}},r=l,i=(n("1629"),n("fa9b"),n("2877")),c=Object(i["a"])(r,o,a,!1,null,"81e8fe72",null);t["default"]=c.exports},c351:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tabs",{staticStyle:{height:"100%"},attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"人员信息"}},[n("commonSelect",{attrs:{columnList:e.columnList,formData:e.formData,onSubmit:e.onSubmit,showAdd:!1}}),n("div",{staticClass:"table",staticStyle:{height:"calc(100% - 11vh)","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.08)","border-radius":"10px",overflow:"hidden"}},[n("commonTable",{attrs:{tableData:e.tableData,dblClick:e.init,listMethods:e.init,columnList:e.columnListTable,tableConfig:e.tableConfig}})],1)],1),n("el-tab-pane",{attrs:{label:"机具车辆信息"}},[n("commonSelect",{attrs:{columnList:e.columnListCar,formData:e.formData,onSubmit:e.onSubmit,showAdd:!1}}),n("div",{staticClass:"table",staticStyle:{height:"calc(100% - 11vh)","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.08)","border-radius":"10px",overflow:"hidden"}},[n("commonTable",{attrs:{tableData:e.tableDataCar,dblClick:e.init,listMethods:e.init,columnList:e.columnListTableCar,tableConfig:e.tableConfigCar}})],1)],1)],1),n("screenDialog",{attrs:{dialogSet:e.dialogSetDetailCheck,dialogBtn:e.dialogBtnDetailCheck,closeDialog:e.closeDialogDetail}},[n("template",{slot:"dialog-components"},[n("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("通过")]),n("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("驳回")])],1)],2),n("screenDialog",{attrs:{dialogSet:e.dialogSetDetail,dialogBtn:e.dialogBtnDetail,closeDialog:e.closeDialogDetail}},[n("template",{slot:"dialog-components"},[n("examineDetail",{attrs:{data:e.detailData}})],1)],2)],1)},a=[],l=n("b837"),r=n("f4ae"),i=n("b9b8"),c=n("1e03"),p={name:"人员机具审核",components:{commonTable:l["default"],commonSelect:r["default"],screenDialog:i["default"],examineDetail:c["default"]},created:function(){},mounted:function(){},data:function(){var e=this;return{radio:"1",dialogBtnDetail:[{name:"确定",type:"primary",handleClick:function(){e.saveSystem("1")}},{name:"取消",type:"info",handleClick:function(){e.dialogSetDetail.isShow=!1}}],dialogSetDetail:{title:"详情",isShow:!1,width:"85%",modal:!0,fullscreen:!1,footer:!0,append:!1,top:"15vh"},dialogBtnDetailCheck:[{name:"确定",type:"primary",handleClick:function(){e.saveSystem("1")}},{name:"取消",type:"info",handleClick:function(){e.dialogSetDetailCheck.isShow=!1}}],dialogSetDetailCheck:{title:"审核",isShow:!1,width:"30%",modal:!0,fullscreen:!1,footer:!0,append:!1,top:"15vh"},tableConfig:{headerClassName:"",stripe:!0,tableHeight:"calc(62vh - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableData:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],columnListTable:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 1}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"姓名",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 3}},{label:"性别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 4}},{label:"年龄",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 5}},{label:"身份证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"学历",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"专业",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"职称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"操作",prop:"",htmlRender:!1,isButton:!0,componentRender:!1,width:"140",minWidth:"140",btnGroup:[{icon:"el-icon-s-order",name:"详情",onClick:function(t){e.linkDetais(t)}},{name:"修改",icon:"el-icon-s-tools",onClick:function(t){e.dialogSetDetailCheck.isShow=!0}}],formatter:function(){}}],tableConfigCar:{headerClassName:"",stripe:!0,tableHeight:"calc(62vh - 40px)",paginationShow:!0,tableRefName:"",limit:50,pageNo:1,total:3},tableDataCar:[{name:123,value:1},{name:123,value:1},{name:123,value:1}],columnListTableCar:[{label:"序号",prop:"",isButton:!1,width:80,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 1}},{label:"类别",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 2}},{label:"名称",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 3}},{label:"型号规格",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 4}},{label:"使用许可证编号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 5}},{label:"复审日期",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"操作人",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"操作人证件号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"车牌号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"出入证号",prop:"",isButton:!1,htmlRender:!0,componentRender:!1,formatter:function(e,t){return 6}},{label:"操作",prop:"",htmlRender:!1,isButton:!0,componentRender:!1,width:"140",minWidth:"140",btnGroup:[{icon:"el-icon-s-order",name:"详情",onClick:function(t){e.linkDetais(t)}},{name:"修改",icon:"el-icon-s-tools",onClick:function(t){e.dialogSetDetailCheck.isShow=!0}}],formatter:function(){}}],formData:{name:"",type:"",numid:"",department:"",mark:""},columnListCar:[{label:"名称",placeholder:"默认显示",type:"input",prop:"name"},{label:"使用许可证编号",placeholder:"默认显示",type:"input",prop:"name"},{label:"车牌号",placeholder:"默认显示",type:"input",prop:"name"}],columnList:[{label:"名称",placeholder:"默认显示",type:"input",prop:"name"},{label:"类型",placeholder:"默认显示",type:"select",prop:"type",option:[{label:"劳务外派",value:"劳务外派"},{label:"供应商",value:"供应商"},{label:"承运商",value:"承运商"},{label:"作业承包商",value:"作业承包商"},{label:"服务承包商",value:"服务承包商"}]},{label:"身份证号",placeholder:"默认显示",type:"input",prop:"numid"},{label:"职务工种",placeholder:"默认显示",type:"input",prop:"department"},{label:"标志",placeholder:"默认显示",type:"select",prop:"mark",option:[{label:"准承包商",value:"准承包商"},{label:"正式承包商",value:"正式承包商"},{label:"黑名单",value:"黑名单"}]}]}},methods:{init:function(){},onSubmit:function(e){},closeDialogDetail:function(){},linkDetais:function(){this.dialogSetDetail.isShow=!0}}},u=p,m=(n("5f00"),n("2877")),d=Object(m["a"])(u,o,a,!1,null,null,null);t["default"]=d.exports},cf09:function(e,t,n){},f4ae:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"commonSelect"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formData}},[e._l(e.columnList,(function(t,o){return n("el-form-item",{key:o,attrs:{label:t.label}},["input"==t.type?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.formData[t.prop],callback:function(n){e.$set(e.formData,t.prop,n)},expression:"formData[col.prop]"}}):e._e(),"select"==t.type?n("el-select",{attrs:{placeholder:t.placeholder},model:{value:e.formData[t.prop],callback:function(n){e.$set(e.formData,t.prop,n)},expression:"formData[col.prop]"}},e._l(t.option,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.clickSubmit}},[e._v("查询")])],1),e.showAdd?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.clickAdd}},[e._v("新增")])],1):e._e()],2)],1)},a=[],l={name:"common-select",props:{showAdd:{type:Boolean,default:!0},columnList:Array,formData:{type:Object,default:{}},onSubmit:{type:Function,default:function(){}},onAdd:{type:Function,default:function(){}}},data:function(){return{}},methods:{clickSubmit:function(){this.onSubmit(this.formData)},clickAdd:function(){this.onAdd()}}},r=l,i=(n("51b4"),n("2877")),c=Object(i["a"])(r,o,a,!1,null,"0d985d11",null);t["default"]=c.exports},fa9b:function(e,t,n){"use strict";n("9ea6")},fc81:function(e,t,n){}}]);