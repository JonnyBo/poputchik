(function(h){"function"===typeof define&&define.amd?define(["jquery","./grid.base.js","./jquery.fmatter","./grid.common"],h):"object"===typeof exports?h(require("jquery")):h(jQuery)})(function(h){var u=h.jgrid,C=function(){var a=h.makeArray(arguments);a.unshift("");a.unshift("");a.unshift(this.p);return u.feedback.apply(this,a)},D=function(a,b){var d=this.grid.fbRows;return h((null!=d&&d[0].cells.length>b?d[a.rowIndex]:a).cells[b])};u.extend({editCell:function(a,b,d){return this.each(function(){var f=
this,g=h(f),e=f.p,l,c,k,r;l=f.rows;if(f.grid&&!0===e.cellEdit&&null!=l&&null!=l[a]&&(a=parseInt(a,10),b=parseInt(b,10),!isNaN(a)&&!isNaN(b))){var t=l[a],m=null!=t?t.id:null,n=h(t),p=parseInt(e.iCol,10),A=parseInt(e.iRow,10),w=h(l[A]),v=e.savedRow;if(null!=m){e.selrow=m;e.knv||g.jqGrid("GridNav");if(0<v.length){if(!0===d&&a===A&&b===p)return;g.jqGrid("saveCell",v[0].id,v[0].ic)}else setTimeout(function(){h("#"+u.jqID(e.knv)).attr("tabindex","-1").focus()},1);r=e.colModel[b];l=r.name;if("subgrid"!==
l&&"cb"!==l&&"rn"!==l){k=D.call(f,t,b);t=r.editable;h.isFunction(t)&&(t=t.call(f,{rowid:m,iCol:b,iRow:a,name:l,cm:r,mode:"cell"}));var x=g.jqGrid("getGuiStyles","states.select","edit-cell"),y=g.jqGrid("getGuiStyles","states.hover","selected-row");if(!0!==t||!0!==d||k.hasClass("not-editable-cell"))0<=p&&0<=A&&(D.call(f,w[0],p).removeClass(x),w.removeClass(y)),k.addClass(x),n.addClass(y),c=k.html().replace(/&#160;/ig,""),C.call(f,"onSelectCell",m,l,c,a,b);else{0<=p&&0<=A&&(D.call(f,w[0],p).removeClass(x),
w.removeClass(y));k.addClass(x);n.addClass(y);r.edittype||(r.edittype="text");n=r.edittype;try{c=h.unformat.call(f,k,{rowId:m,colModel:r},b)}catch(q){c="textarea"===n?k.text():k.html()}e.autoEncodeOnEdit&&(c=u.oldDecodePostedData(c));v.push({id:a,ic:b,name:l,v:c});if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c="";h.isFunction(e.formatCell)&&(p=e.formatCell.call(f,m,l,c,a,b),void 0!==p&&(c=p));C.call(f,"beforeEditCell",m,l,c,a,b);r=h.extend({},r.editoptions||{},{id:a+"_"+l,name:l,
rowId:m,mode:"cell",cm:r,iCol:b});var B=u.createEl.call(f,n,r,c,!0,h.extend({},u.ajaxOptions,e.ajaxSelectOptions||{})),n=k;(p=!0===e.treeGrid&&l===e.ExpandColumn)&&(n=k.children("span.cell-wrapperleaf,span.cell-wrapper"));n.html("").append(B).attr("tabindex","0");p&&h(B).width(k.width()-k.children("div.tree-wrap").outerWidth());u.bindEv.call(f,B,r);setTimeout(function(){h(B).focus()},1);h("input, select, textarea",k).bind("keydown",function(d){27===d.keyCode&&(0<h("input.hasDatepicker",k).length?
h(".ui-datepicker").is(":hidden")?g.jqGrid("restoreCell",a,b):h("input.hasDatepicker",k).datepicker("hide"):g.jqGrid("restoreCell",a,b));if(13===d.keyCode&&!d.shiftKey)return g.jqGrid("saveCell",a,b),!1;if(9===d.keyCode){if(f.grid.hDiv.loading)return!1;d.shiftKey?g.jqGrid("prevCell",a,b):g.jqGrid("nextCell",a,b)}d.stopPropagation()});C.call(f,"afterEditCell",m,l,c,a,b);g.triggerHandler("jqGridAfterEditCell",[m,l,c,a,b])}e.iCol=b;e.iRow=a}}}})},saveCell:function(a,b){return this.each(function(){var d=
this,f=h(d),g=d.p,e=u.info_dialog,l=u.jqID;if(d.grid&&!0===g.cellEdit){var c=f.jqGrid("getGridRes","errors"),k=c.errcap,r=f.jqGrid("getGridRes","edit").bClose,t=g.savedRow,m=1<=t.length?0:null;if(null!==m){var n=d.rows[a],p=n.id,A=h(n),w=g.colModel[b],v=w.name,x,y=D.call(d,n,b),B={},q=u.getEditedValue.call(d,y,w,B);if(q!==t[m].v){x=f.triggerHandler("jqGridBeforeSaveCell",[p,v,q,a,b]);void 0!==x&&(q=x);h.isFunction(g.beforeSaveCell)&&(x=g.beforeSaveCell.call(d,p,v,q,a,b),void 0!==x&&(q=x));var E=u.checkValues.call(d,
q,b,void 0,void 0,{oldValue:t[m].v,newValue:q,cmName:v,rowid:p,iCol:b,iRow:a,cm:w,tr:n,td:y,mode:"cell"}),n=w.formatoptions||{};if(null==E||!0===E||!0===E[0]){m=f.triggerHandler("jqGridBeforeSubmitCell",[p,v,q,a,b])||{};h.isFunction(g.beforeSubmitCell)&&((m=g.beforeSubmitCell.call(d,p,v,q,a,b))||(m={}));0<h("input.hasDatepicker",y).length&&h("input.hasDatepicker",y).datepicker("hide");"date"===w.formatter&&!0!==n.sendFormatted&&(q=h.unformat.date.call(d,q,w));if("remote"===g.cellsubmit)if(g.cellurl){var z=
{};z[v]=q;var c=g.prmNames,n=c.oper,F=d.grid.hDiv;z[c.id]=u.stripPref(g.idPrefix,p);z[n]=c.editoper;z=h.extend(m,z);g.autoEncodeOnEdit&&h.each(z,function(a,b){h.isFunction(b)||(z[a]=u.oldEncodePostedData(b))});f.jqGrid("progressBar",{method:"show",loadtype:g.loadui,htmlcontent:u.defaults.savetext||"Saving..."});F.loading=!0;h.ajax(h.extend({url:h.isFunction(g.cellurl)?g.cellurl.call(d,g.cellurl,a,b,p,q,v):g.cellurl,data:u.serializeFeedback.call(d,g.serializeCellData,"jqGridSerializeCellData",z),type:"POST",
complete:function(c){f.jqGrid("progressBar",{method:"hide",loadtype:g.loadui});F.loading=!1;if((300>c.status||304===c.status)&&(0!==c.status||4!==c.readyState)){var m=f.triggerHandler("jqGridAfterSubmitCell",[d,c,z.id,v,q,a,b])||[!0,""];if(null==m||!0===m||!0===m[0]&&h.isFunction(g.afterSubmitCell))m=g.afterSubmitCell.call(d,c,z.id,v,q,a,b);null==m||!0===m||!0===m[0]?(f.jqGrid("setCell",p,b,q,!1,!1,!0),y.addClass("dirty-cell"),A.addClass("edited"),C.call(d,"afterSaveCell",p,v,q,a,b),t.splice(0,1)):
(e.call(d,k,m[1],r),f.jqGrid("restoreCell",a,b))}},error:function(c,m,n){h("#lui_"+l(g.id)).hide();F.loading=!1;f.triggerHandler("jqGridErrorCell",[c,m,n]);h.isFunction(g.errorCell)?g.errorCell.call(d,c,m,n):e.call(d,k,c.status+" : "+c.statusText+"<br/>"+m,r);f.jqGrid("restoreCell",a,b)}},u.ajaxOptions,g.ajaxCellOptions||{}))}else try{e.call(d,k,c.nourl,r),f.jqGrid("restoreCell",a,b)}catch(G){}"clientArray"===g.cellsubmit&&(f.jqGrid("setCell",p,b,"select"===w.edittype&&"select"!==w.formatter?B.text:
q,!1,!1,!0),y.addClass("dirty-cell"),A.addClass("edited"),C.call(d,"afterSaveCell",p,v,q,a,b),t.splice(0,1))}else try{setTimeout(function(){e.call(d,k,q+" "+E[1],r)},100),f.jqGrid("restoreCell",a,b)}catch(G){}}else f.jqGrid("restoreCell",a,b)}setTimeout(function(){h("#"+l(g.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(a,b){return this.each(function(){var d=this.p,f=this.rows[a],g=f.id,e,l;if(this.grid&&!0===d.cellEdit){var c=d.savedRow;e=D.call(this,f,b);if(1<=c.length){if(h.isFunction(h.fn.datepicker))try{h("input.hasDatepicker",
e).datepicker("hide")}catch(k){}f=d.colModel[b];!0===d.treeGrid&&f.name===d.ExpandColumn?e.children("span.cell-wrapperleaf,span.cell-wrapper").empty():e.empty();e.attr("tabindex","-1");e=c[0].v;l=f.formatoptions||{};"date"===f.formatter&&!0!==l.sendFormatted&&(e=h.unformat.date.call(this,e,f));h(this).jqGrid("setCell",g,b,e,!1,!1,!0);C.call(this,"afterRestoreCell",g,e,a,b);c.splice(0,1)}setTimeout(function(){h("#"+d.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(a,b){return this.each(function(){var d=
h(this),f=this.p,g=!1,e,l,c,k=this.rows;if(this.grid&&!0===f.cellEdit&&null!=k&&null!=k[a]){for(e=b+1;e<f.colModel.length;e++)if(c=f.colModel[e],l=c.editable,h.isFunction(l)&&(l=l.call(this,{rowid:k[a].id,iCol:e,iRow:a,name:c.name,cm:c,mode:"cell"})),!0===l){g=e;break}!1!==g?d.jqGrid("editCell",a,g,!0):0<f.savedRow.length&&d.jqGrid("saveCell",a,b)}})},prevCell:function(a,b){return this.each(function(){var d=h(this),f=this.p,g=!1,e,l,c,k=this.rows;if(this.grid&&!0===f.cellEdit&&null!=k&&null!=k[a]){for(e=
b-1;0<=e;e--)if(c=f.colModel[e],l=c.editable,h.isFunction(l)&&(l=l.call(this,{rowid:k[a].id,iCol:e,iRow:a,name:c.name,cm:c,mode:"cell"})),!0===l){g=e;break}!1!==g?d.jqGrid("editCell",a,g,!0):0<f.savedRow.length&&d.jqGrid("saveCell",a,b)}})},GridNav:function(){return this.each(function(){function a(a,b,c){a=d.rows[a];if("v"===c.substr(0,1)){var g=k.clientHeight,f=k.scrollTop,h=a.offsetTop+a.clientHeight,e=a.offsetTop;"vd"===c&&h>=g&&(k.scrollTop+=a.clientHeight);"vu"===c&&e<f&&(k.scrollTop-=a.clientHeight)}"h"===
c&&(c=k.scrollLeft,b=a.cells[b],a=b.offsetLeft,b.offsetLeft+b.clientWidth>=k.clientWidth+parseInt(c,10)?k.scrollLeft+=b.clientWidth:a<c&&(k.scrollLeft-=b.clientWidth))}function b(a,b){var c=0,d,f=g.colModel;if("lft"===b)for(c=a+1,d=a;0<=d;d--)if(!0!==f[d].hidden){c=d;break}if("rgt"===b)for(c=a-1,d=a;d<f.length;d++)if(!0!==f[d].hidden){c=d;break}return c}var d=this,f=h(d),g=d.p,e=d.grid,l,c;if(e&&!0===g.cellEdit){var k=e.bDiv;g.knv=g.id+"_kn";var r=h("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+
g.knv+"'></div></div>");h(r).insertBefore(e.cDiv);h("#"+g.knv).focus().keydown(function(h){var e=parseInt(g.iRow,10),k=parseInt(g.iCol,10);c=h.keyCode;"rtl"===g.direction&&(37===c?c=39:39===c&&(c=37));switch(c){case 38:0<e-1&&(a(e-1,k,"vu"),f.jqGrid("editCell",e-1,k,!1));break;case 40:e+1<=d.rows.length-1&&(a(e+1,k,"vd"),f.jqGrid("editCell",e+1,k,!1));break;case 37:0<=k-1&&(l=b(k-1,"lft"),a(e,l,"h"),f.jqGrid("editCell",e,l,!1));break;case 39:k+1<=g.colModel.length-1&&(l=b(k+1,"rgt"),a(e,l,"h"),f.jqGrid("editCell",
e,l,!1));break;case 13:0<=k&&0<=e&&f.jqGrid("editCell",e,k,!0);break;default:return!0}return!1})}})},getChangedCells:function(a){var b=[];a||(a="all");this.each(function(){var d=this,f=d.p,g=u.htmlDecode,e=d.rows;d.grid&&!0===f.cellEdit&&h(e).each(function(l){var c={};if(h(this).hasClass("edited")){var k=this;h(this.cells).each(function(b){var t=f.colModel[b],m=t.name,n=D.call(d,k,b);if("cb"!==m&&"subgrid"!==m&&"rn"!==m&&("dirty"!==a||n.hasClass("dirty-cell")))try{c[m]=h.unformat.call(d,n[0],{rowId:e[l].id,
colModel:t},b)}catch(p){c[m]=g(n.html())}});c.id=this.id;b.push(c)}})});return b}})});
//# sourceMappingURL=grid.celledit.map
