﻿/*
    *
    * Wijmo Library 5.20171.293
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";function tryGetModuleWijmoGridMultirow(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.multirow}function tryGetModuleWijmoGridSheet(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.sheet}function _merge(n,t,i){var r,u,f;if(i===void 0&&(i=!1),t&&n)for(r in t)if(u=t[r],f=n[r],wjcCore.isObject(u)){if(f===undefined||!wjcCore.isObject(f)&&i)if(wjcCore.isFunction(u.clone)){n[r]=f=u.clone();continue}else n[r]=f={};wjcCore.isObject(f)&&_merge(n[r],u,i)}else(f===undefined||i&&u!==undefined)&&(n[r]=u);return n}var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcSelf,ScaleMode,ExportMode,PdfFormatItemEventArgs,globCell,FlexGridPdfConverter;Object.defineProperty(exports,"__esModule",{value:!0});var wjcPdf=require("wijmo/wijmo.pdf"),wjcGrid=require("wijmo/wijmo.grid"),wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.grid.pdf");window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.pdf=wjcSelf,function(n){n[n.ActualSize=0]="ActualSize";n[n.PageWidth=1]="PageWidth";n[n.SinglePage=2]="SinglePage"}(ScaleMode=exports.ScaleMode||(exports.ScaleMode={})),function(n){n[n.All=0]="All";n[n.Selection=1]="Selection"}(ExportMode=exports.ExportMode||(exports.ExportMode={}));PdfFormatItemEventArgs=function(n){function t(t,i,r,u,f,e,o,s,h){var c=n.call(this,t,i)||this;return c.cancelBorders=!1,c._cell=wjcCore.asType(r,HTMLElement,!0),c._canvas=u,c._clientRect=f,c._contentRect=e,c._textTop=o,c._style=s,c._getFormattedCell=h,c}return __extends(t,n),Object.defineProperty(t.prototype,"canvas",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cell",{get:function(){return this._cell},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clientRect",{get:function(){return this._clientRect},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"contentRect",{get:function(){return this._contentRect},enumerable:!0,configurable:!0}),t.prototype.getFormattedCell=function(){return wjcCore.asFunction(this._getFormattedCell)()},Object.defineProperty(t.prototype,"style",{get:function(){return this._style},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textTop",{get:function(){return this._textTop},enumerable:!0,configurable:!0}),t}(wjcGrid.CellRangeEventArgs);exports.PdfFormatItemEventArgs=PdfFormatItemEventArgs;FlexGridPdfConverter=function(){function n(){}return n.draw=function(n,t,i,r,u){wjcCore.assert(!!n,'The flex argument cannot be null.');wjcCore.assert(!!t,'The doc argument cannot be null.');var f=_merge({},u);_merge(f,this.DefaultDrawSettings);f.scaleMode=i==null?ScaleMode.ActualSize:r==null?ScaleMode.PageWidth:ScaleMode.SinglePage;try{f.recalculateStarWidths&&n.columns._updateStarSizes(wjcPdf.ptToPx(t.width));this._draw(n,t,null,i,r,f)}finally{f.recalculateStarWidths&&n.invalidate(!0)}},n.drawToPosition=function(n,t,i,r,u,f){wjcCore.assert(!!n,'The flex argument cannot be null.');wjcCore.assert(!!t,'The doc argument cannot be null.');wjcCore.assert(!!i,'The point argument cannot be null.');var e=_merge({},f);_merge(e,this.DefaultDrawSettings);e.scaleMode=r==null?ScaleMode.ActualSize:u==null?ScaleMode.PageWidth:ScaleMode.SinglePage;try{e.recalculateStarWidths&&n.columns._updateStarSizes(wjcPdf.ptToPx(t.width));this._draw(n,t,i,r,u,e)}finally{e.recalculateStarWidths&&n.invalidate(!0)}},n.export=function(n,t,i){var u,r;wjcCore.assert(!!n,'The flex argument cannot be null.');wjcCore.assert(!!t,'The fileName argument cannot be empty.');i=_merge({},i);_merge(i,this.DefaultExportSettings);u=i.documentOptions.ended;i.documentOptions.ended=function(n,i){u&&u.apply(r,[n,i])===!1||wjcPdf.saveBlob(i.blob,t)};r=new wjcPdf.PdfDocument(i.documentOptions);try{i.recalculateStarWidths&&n.columns._updateStarSizes(wjcPdf.ptToPx(r.width));this._draw(n,r,null,null,null,i);r.end()}finally{i.recalculateStarWidths&&n.invalidate(!0)}},n._draw=function(n,t,i,r,u,f){var b=i!=null,o=new wjcCore.Size(t.width,t.height),e,w;i||(i=new wjcCore.Point(0,t.y));wjcCore.isArray(f.embeddedFonts)&&f.embeddedFonts.forEach(function(n){t.registerFont(n)});var p=RowRange.getSelection(n,f.exportMode),c=this._getGridRenderer(n,p,!1,this.BorderWidth,null,!0),s=new wjcCore.Rect(i.x||0,i.y||0,r||o.width,u||o.height),h=this._getScaleFactor(c,f.scaleMode,s),l=this._getPages(c,p,s,f,b,h);globCell=document.createElement('div');globCell.setAttribute(wjcGrid.FlexGrid._WJS_MEASURE,'true');globCell.style.visibility='hidden';n.hostElement.appendChild(globCell);try{for(e=0;e<l.length;e++){e>0&&t.addPage();var a=l[e],v=a.pageCol===0?s.left:0,y=a.pageRow===0?s.top:0;t.saveState();t.paths.rect(0,0,o.width,o.height).clip();t.scale(h,h,new wjcCore.Point(v,y));t.translate(v,y);w=this._getGridRenderer(n,a.range,f.repeatMergedValuesAcrossPages,this.BorderWidth,f.styles,e===l.length-1);w.render(t,f);t.restoreState();t.x=v;t.y=y+c.renderSize.height*h}}finally{globCell&&(globCell.parentElement.removeChild(globCell),globCell=null)}},n._getScaleFactor=function(n,t,i){var u=1,f,r;return t===ScaleMode.ActualSize?u:(f=n.renderSize,t===ScaleMode.SinglePage?(r=Math.min(i.width/f.width,i.height/f.height),r<1&&(u=r)):(r=i.width/f.width,r<1&&(u=r)),u)},n._getPages=function(n,t,i,r,u,f){var ft=this,o=[],s=[],a=wjcPdf.pxToPt,v=n.flex,b=n.showColumnHeader,k=n.showRowHeader,y=b?a(v.columnHeaders.height):0,p=k?a(v.rowHeaders.width):0,ct=r.scaleMode===ScaleMode.ActualSize||r.scaleMode===ScaleMode.PageWidth,lt=r.scaleMode===ScaleMode.ActualSize,at=(i.width-i.left)*(1/f),vt=(i.height-i.top)*(1/f),yt=i.width*(1/f),pt=i.height*(1/f),c=y,l=p,et=u&&r.scaleMode==ScaleMode.ActualSize,d,g,nt,tt,w,it,e,h,ut,ht;if(ct&&(d=0,t.forEach(v.cells,function(n,t,i,r){var f=o.length?pt:vt,u;PanelSection.isRenderableRow(n)&&(u=a(n.renderHeight),d++,c+=u,(b||d>1)&&(c-=ft.BorderWidth),c>f&&(y+u>f||et?(o.push(r),c=y):(o.push(r-1),c=y+u),b&&(c-=ft.BorderWidth)))})),g=t.length()-1,o.length&&o[o.length-1]===g||o.push(g),lt)for(nt=0,e=t.leftCol;e<=t.rightCol;e++)tt=v.columns[e],tt.isVisible&&(w=a(tt.renderWidth),it=s.length?yt:at,nt++,l+=w,(k||nt>1)&&(l-=this.BorderWidth),l>it&&(p+w>it||et?(s.push(e),l=p):(s.push(e-1),l=p+w),k&&(l-=this.BorderWidth)));s.length&&s[s.length-1]===t.rightCol||s.push(t.rightCol);var ot=[],rt=!1,st=1,wt=u&&r.maxPages>0?1:r.maxPages;for(e=0;e<o.length&&!rt;e++)for(h=0;h<s.length&&!rt;h++,st++)(rt=st>wt)||(ut=e==0?0:o[e-1]+1,ht=h==0?t.leftCol:s[h-1]+1,ot.push(new PdfPageRowRange(t.subrange(ut,o[e]-ut+1,ht,s[h]),h,e)));return ot},n._getGridRenderer=function(n,t,i,r,u,f){var e=tryGetModuleWijmoGridMultirow()&&n instanceof tryGetModuleWijmoGridMultirow().MultiRow&&MultiRowRenderer||tryGetModuleWijmoGridSheet()&&n instanceof tryGetModuleWijmoGridSheet().FlexSheet&&FlexSheetRenderer||FlexGridRenderer;return new e(n,t,i,r,u,f)},n}();FlexGridPdfConverter.BorderWidth=1;FlexGridPdfConverter.DefaultDrawSettings={maxPages:Number.MAX_VALUE,exportMode:ExportMode.All,repeatMergedValuesAcrossPages:!0,recalculateStarWidths:!0,styles:{cellStyle:{font:new wjcPdf.PdfFont,padding:1.5,verticalAlign:'middle'},headerCellStyle:{font:{weight:'bold'}}}};FlexGridPdfConverter.DefaultExportSettings=_merge({scaleMode:ScaleMode.PageWidth,documentOptions:{compress:!1,pageSettings:{margins:{left:36,right:36,top:18,bottom:18}}}},FlexGridPdfConverter.DefaultDrawSettings);exports.FlexGridPdfConverter=FlexGridPdfConverter;var FlexGridRenderer=function(){function n(n,t,i,r,u,f){this._flex=n;this._borderWidth=r;this._lastPage=f;this._topLeft=new PanelSectionRenderer(this,n.topLeftCells,this.showRowHeader&&this.showColumnHeader?new RowRange(n,[new wjcGrid.CellRange(0,0,n.topLeftCells.rows.length-1,n.topLeftCells.columns.length-1)]):new RowRange(n,[]),i,r,u);this._rowHeader=new PanelSectionRenderer(this,n.rowHeaders,this.showRowHeader?t.clone(0,n.rowHeaders.columns.length-1):new RowRange(n,[]),i,r,u);this._columnHeader=new PanelSectionRenderer(this,n.columnHeaders,this.showColumnHeader?new RowRange(n,[new wjcGrid.CellRange(0,t.leftCol,n.columnHeaders.rows.length-1,t.rightCol)]):new RowRange(n,[]),i,r,u);this._cells=new PanelSectionRenderer(this,n.cells,t,i,r,u);this._bottomLeft=new PanelSectionRenderer(this,n.bottomLeftCells,this.showRowHeader&&this.showColumnFooter?new RowRange(n,[new wjcGrid.CellRange(0,0,n.bottomLeftCells.rows.length-1,n.bottomLeftCells.columns.length-1)]):new RowRange(n,[]),i,r,u);this._columnFooter=new PanelSectionRenderer(this,n.columnFooters,this.showColumnFooter?new RowRange(n,[new wjcGrid.CellRange(0,t.leftCol,n.columnFooters.rows.length-1,t.rightCol)]):new RowRange(n,[]),i,r,u)}return n.prototype.render=function(n,t){var r=Math.max(0,this._rowHeader.renderSize.width-this._borderWidth),i=Math.max(0,this._columnHeader.renderSize.height-this._borderWidth);this._topLeft.render(n,0,0,t);this._rowHeader.render(n,0,i,t);this._columnHeader.render(n,r,0,t);this._cells.render(n,r,i,t);i=Math.max(0,i+this._cells.renderSize.height-this._borderWidth);this._bottomLeft.render(n,0,i,t);this._columnFooter.render(n,r,i,t)},Object.defineProperty(n.prototype,"flex",{get:function(){return this._flex},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"renderSize",{get:function(){var n=this._columnHeader.renderSize.height+this._cells.renderSize.height+this._columnFooter.renderSize.height,t=this._rowHeader.renderSize.width+this._cells.renderSize.width;return this._columnHeader.visibleRows>0&&(n-=this._borderWidth),this._columnFooter.visibleRows>0&&(n-=this._borderWidth),this._rowHeader.visibleColumns>0&&(t-=this._borderWidth),new wjcCore.Size(t,n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showColumnHeader",{get:function(){return!!(this._flex.headersVisibility&wjcGrid.HeadersVisibility.Column)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showRowHeader",{get:function(){return!!(this._flex.headersVisibility&wjcGrid.HeadersVisibility.Row)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showColumnFooter",{get:function(){return this._lastPage&&this._flex.columnFooters.rows.length>0},enumerable:!0,configurable:!0}),n.prototype.getCellValue=function(n,t,i){return n.getCellData(i,t,!0)},n.prototype.getColumn=function(n,t){return n.columns[t]},n.prototype.isAlternatingRow=function(n){return n.index%2!=0},n.prototype.isMergeableCell=function(n,t){return t.allowMerging||n.allowMerging||t instanceof wjcGrid.GroupRow},n}(),FlexSheetRenderer=function(n){function t(t,i,r,u,f,e){return n.call(this,t,i,r,u,f,e)||this}return __extends(t,n),t.prototype.getCellValue=function(t,i,r){return t.cellType===wjcGrid.CellType.Cell?t.rows[r]instanceof tryGetModuleWijmoGridSheet().HeaderRow?this.flex.columnHeaders.getCellData(r,i,!0):this.flex.getCellValue(r,i,!0):n.prototype.getCellValue.call(this,t,i,r)},Object.defineProperty(t.prototype,"showColumnHeader",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showRowHeader",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showColumnFooter",{get:function(){return!1},enumerable:!0,configurable:!0}),t}(FlexGridRenderer),MultiRowRenderer=function(n){function t(t,i,r,u,f,e){return n.call(this,t,i,r,u,f,e)||this}return __extends(t,n),t.prototype.getColumn=function(n,t,i){return this.flex.getBindingColumn(n,i,t)},t.prototype.isAlternatingRow=function(t){return t instanceof tryGetModuleWijmoGridMultirow()._MultiRow?t.dataIndex%2!=0:n.prototype.isAlternatingRow.call(this,t)},t.prototype.isMergeableCell=function(){return!0},t}(FlexGridRenderer),PanelSection=function(){function n(n,t){this._panel=n;this._range=t.clone()}return n.isRenderableRow=function(n){return n.isVisible&&!(n instanceof wjcGrid._NewRowTemplate)},Object.defineProperty(n.prototype,"visibleRows",{get:function(){var n=this;return this._visibleRows==null&&(this._visibleRows=0,this._range.forEach(this._panel,function(t){n.isRenderableRow(t)&&n._visibleRows++})),this._visibleRows},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"visibleColumns",{get:function(){if(this._visibleColumns==null&&(this._visibleColumns=0,this._range.isValid))for(var n=this._range.leftCol;n<=this._range.rightCol;n++)this._panel.columns[n].isVisible&&this._visibleColumns++;return this._visibleColumns},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){if(this._size==null){var n=this._range.getRenderSize(this._panel);this._size=new wjcCore.Size(wjcPdf.pxToPt(n.width),wjcPdf.pxToPt(n.height))}return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"range",{get:function(){return this._range},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"panel",{get:function(){return this._panel},enumerable:!0,configurable:!0}),n.prototype.isRenderableRow=function(t){return n.isRenderableRow(t)},n}(),PanelSectionRenderer=function(n){function t(t,i,r,u,f,e){var o=n.call(this,i,r)||this;return o._gr=t,o._repeatMergedValues=u,o._borderWidth=f,o._styles=e,o}return __extends(t,n),Object.defineProperty(t.prototype,"gr",{get:function(){return this._gr},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"styles",{get:function(){return this._styles},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderSize",{get:function(){return this._renderSize==null&&(this._renderSize=this.size.clone(),this.visibleColumns>1&&(this._renderSize.width-=this._borderWidth*(this.visibleColumns-1)),this.visibleRows>1&&(this._renderSize.height-=this._borderWidth*(this.visibleRows-1))),this._renderSize},enumerable:!0,configurable:!0}),t.prototype.getRangeWidth=function(n,t){for(var f,i=0,r=0,e=this.panel,u=n;u<=t;u++)f=e.columns[u],f.isVisible&&(r++,i+=f.renderWidth);return i=wjcPdf.pxToPt(i),r>1&&(i-=this._borderWidth*(r-1)),i},t.prototype.getRangeHeight=function(n,t){for(var f,i=0,r=0,e=this.panel,u=n;u<=t;u++)f=e.rows[u],this.isRenderableRow(f)&&(r++,i+=f.renderHeight);return i=wjcPdf.pxToPt(i),r>1&&(i=i-this._borderWidth*(r-1)),i},t.prototype.render=function(n,t,i,r){var u=this,f=this.range,s=this.panel,c=new GetMergedRangeProxy(this._gr.flex),h=new wjcGrid.CellRange(0,0,0,0),l=new CellRenderer(this,n,r,this._borderWidth),e,o;if(f.isValid){for(e={},o=f.leftCol;o<=f.rightCol;o++)e[o]=i;f.forEach(s,function(n,i,r){var g,o,p,a,d;if(u.isRenderableRow(n))for(g=t,o=f.leftCol;o<=f.rightCol;o++){var nt=u.gr.getColumn(s,o,r),v=undefined,y=undefined,w,b=!1,k=undefined;if(nt.isVisible){if(p=u._getCellValue(o,r),a=null,u.gr.isMergeableCell(nt,n)&&(a=c.getMergedRange(s,r,o)))if(h.setRange(a.topRow,a.leftCol,a.bottomRow,a.rightCol),a.topRow!==a.bottomRow)a.firstVisibleRow===r||r===i.topRow?(b=!0,w=u._repeatMergedValues?p:a.firstVisibleRow===r?p:'',v=u.getRangeHeight(r,Math.min(a.bottomRow,i.bottomRow)),y=u.getRangeWidth(o,o)):y=u.getRangeWidth(o,o);else for(b=!0,w=u._repeatMergedValues?p:o===a.leftCol?p:'',v=u.getRangeHeight(r,r),y=u.getRangeWidth(Math.max(f.leftCol,a.leftCol),Math.min(f.rightCol,a.rightCol)),k=Math.min(f.rightCol,a.rightCol),d=o+1;d<=k;d++)e[d]+=v-u._borderWidth;else h.setRange(r,o,r,o),b=!0,w=p,v=u.getRangeHeight(r,r),y=u.getRangeWidth(o,o);b&&l.renderCell(w,n,nt,h,new wjcCore.Rect(g,e[o],y,v));v&&(e[o]+=v-u._borderWidth);y&&(g+=y-u._borderWidth);k&&(o=k)}}})}},t.prototype._getCellValue=function(n,t){var r=this.panel,e=this.gr.getCellValue(r,n,t),i,u,f;return e||r.cellType!==wjcGrid.CellType.Cell||(i=r.rows[t],i instanceof wjcGrid.GroupRow&&i.dataItem&&i.dataItem.groupDescription&&n===r.columns.firstVisibleIndex&&(u=i.dataItem.groupDescription.propertyName,f=r.columns.getColumn(u),f&&f.header&&(u=f.header),e=u+': '+i.dataItem.name+' ('+i.dataItem.items.length+' items)')),e},t}(PanelSection),CellRenderer=function(){function n(n,t,i,r){this._pr=n;this._area=t;this._settings=i||{};this._borderWidth=r}return n.prototype.renderCell=function(n,t,i,r,u){var o,h=t.grid,c=this._pr.panel,v=function(){return globCell.style.cssText='',globCell.className='',h.cellFactory.updateCell(c,r.topRow,r.leftCol,globCell),globCell},y=function(n){return n.className=n.className.replace('wj-state-selected',''),n.className=n.className.replace('wj-state-multi-selected',''),window.getComputedStyle(n)},a=!!this._settings.customCellContent,l=null,f=this._getMergedCellStyle(t),e,s;if(a&&(l=v()),a&&(n=l.textContent.trim()),a&&(e=y(l),f.color=e.color,f.backgroundColor=e.backgroundColor,f.borderColor=e.borderColor||e.borderRightColor||e.borderBottomColor||e.borderLeftColor||e.borderTopColor,f.font=new wjcPdf.PdfFont(e.fontFamily,wjcPdf._asPt(e.fontSize,!0,undefined),e.fontStyle,e.fontWeight)),f.boxSizing='border-box',f.borderWidth=this._borderWidth,f.borderStyle='solid',t instanceof wjcGrid.GroupRow&&!i.aggregate||(f.textAlign=i.getAlignment()),c.cellType===wjcGrid.CellType.Cell&&h.rows.maxGroupLevel>=0&&r.leftCol===h.columns.firstVisibleIndex){var p=t instanceof wjcGrid.GroupRow?Math.max(t.level,0):h.rows.maxGroupLevel+1,w=wjcPdf._asPt(f.paddingLeft||f.padding),b=wjcPdf.pxToPt(p*h.treeIndent);f.paddingLeft=w+b}s=this._measureCell(n,i,t,c,f,u);wjcCore.isFunction(this._settings.formatItem)&&(o=new PdfFormatItemEventArgs(c,r,l,this._area,s.rect,s.contentRect,s.textRect.top,f,function(){return l||v()}),o.data=n,this._settings.formatItem(o),o.data!==n&&(n=wjcCore.asString(o.data),s.textRect=this._calculateTextRect(n,i,t,c,s.contentRect,f)));this._renderCell(n,t,i,r,s,f,o?!o.cancel:!0,o?!o.cancelBorders:!0)},n.prototype._renderCell=function(n,t,i,r,u,f,e,o){if(e||o){var s=this._pr.panel,h=s.grid;this._isBooleanCell(n,i,t,s)?this._renderBooleanCell(n,u,f,e,o):this._renderTextCell(n,u,f,e,o)}},n.prototype._getMergedCellStyle=function(n){var t=this._pr.styles,i=_merge({},t.cellStyle),r=this._pr.panel;switch(r.cellType){case wjcGrid.CellType.Cell:this._isGroupRow(n)?_merge(i,t.groupCellStyle,!0):this._pr.gr.isAlternatingRow(n)&&_merge(i,t.altCellStyle,!0);break;case wjcGrid.CellType.ColumnHeader:case wjcGrid.CellType.RowHeader:case wjcGrid.CellType.TopLeft:case wjcGrid.CellType.BottomLeft:_merge(i,t.headerCellStyle,!0);break;case wjcGrid.CellType.ColumnFooter:_merge(i,t.headerCellStyle,!0);_merge(i,t.footerCellStyle,!0)}return i},n.prototype._isBooleanCell=function(n,t,i,r){return t.dataType===wjcCore.DataType.Boolean&&r.cellType===wjcGrid.CellType.Cell&&!this._isGroupRow(i)&&this._isBoolean(n)},n.prototype._isBoolean=function(n){var t=wjcCore.isString(n)&&n.toLowerCase();return t==='true'||t==='false'||n===!0||n===!1},n.prototype._isGroupRow=function(n){return n instanceof wjcGrid.GroupRow&&n.hasChildren},n.prototype._measureCell=function(n,t,i,r,u,f){this._decompositeStyle(u);var a=f.left,v=f.top,o=f.height,s=f.width,l=this._parseBorder(u),y=l.left.width,p=l.top.width,d=l.bottom.width,g=l.right.width,e=this._parsePadding(u),h=0,c=0,w=0,b=0;if(u.boxSizing==='content-box'||u.boxSizing===undefined)h=e.top+o+e.bottom,c=e.left+s+e.right,w=o,b=s;else{if(u.boxSizing==='border-box')wjcPdf._IE&&u instanceof CSSStyleDeclaration?(h=e.top+e.bottom+o,c=e.left+e.right+s):(h=o-p-d,c=s-y-g);else throw'Invalid value: '+u.boxSizing;w=h-e.top-e.bottom;b=c-e.left-e.right}var f=new wjcCore.Rect(a,v,s,o),nt=new wjcCore.Rect(a+y,v+p,c,h),k=new wjcCore.Rect(a+y+e.left,v+p+e.top,b,w),tt=this._calculateTextRect(n,t,i,r,k,u);return{rect:f,clientRect:nt,contentRect:k,textRect:tt}},n.prototype._decompositeStyle=function(n){if(n){var t;(t=n.borderColor)&&(n.borderLeftColor||(n.borderLeftColor=t),n.borderRightColor||(n.borderRightColor=t),n.borderTopColor||(n.borderTopColor=t),n.borderBottomColor||(n.borderBottomColor=t));(t=n.borderWidth)&&(n.borderLeftWidth||(n.borderLeftWidth=t),n.borderRightWidth||(n.borderRightWidth=t),n.borderTopWidth||(n.borderTopWidth=t),n.borderBottomWidth||(n.borderBottomWidth=t));(t=n.borderStyle)&&(n.borderLeftStyle||(n.borderLeftStyle=t),n.borderRightStyle||(n.borderRightStyle=t),n.borderTopStyle||(n.borderTopStyle=t),n.borderBottomStyle||(n.borderBottomStyle=t));(t=n.padding)&&(n.paddingLeft||(n.paddingLeft=t),n.paddingRight||(n.paddingRight=t),n.paddingTop||(n.paddingTop=t),n.paddingBottom||(n.paddingBottom=t))}},n.prototype._parseBorder=function(n){var t={left:{width:0},top:{width:0},bottom:{width:0},right:{width:0}};return n.borderLeftStyle!=='none'&&(t.left={width:wjcPdf._asPt(n.borderLeftWidth),style:n.borderLeftStyle,color:n.borderLeftColor}),n.borderTopStyle!=='none'&&(t.top={width:wjcPdf._asPt(n.borderTopWidth),style:n.borderTopStyle,color:n.borderTopColor}),n.borderBottomStyle!=='none'&&(t.bottom={width:wjcPdf._asPt(n.borderBottomWidth),style:n.borderBottomStyle,color:n.borderBottomColor}),n.borderRightStyle!=='none'&&(t.right={width:wjcPdf._asPt(n.borderRightWidth),style:n.borderRightStyle,color:n.borderRightColor}),t},n.prototype._parsePadding=function(n){return{left:wjcPdf._asPt(n.paddingLeft),top:wjcPdf._asPt(n.paddingTop),bottom:wjcPdf._asPt(n.paddingBottom),right:wjcPdf._asPt(n.paddingRight)}},n.prototype._renderEmptyCell=function(n,t,i,r){var f=n.rect.left,e=n.rect.top,s=n.clientRect.width,h=n.clientRect.height,k=n.rect.height,d=n.rect.width,u=n.clientRect.left-n.rect.left,o=n.clientRect.top-n.rect.top,c=n.rect.top+n.rect.height-(n.clientRect.top+n.clientRect.height),l=n.rect.left+n.rect.width-(n.clientRect.left+n.clientRect.width),v,y;if(r&&(u||l||c||o)){var a=t.borderLeftColor||t.borderColor,p=t.borderRightColor||t.borderColor,w=t.borderTopColor||t.borderColor,b=t.borderBottomColor||t.borderColor;u&&o&&c&&l&&u===l&&u===c&&u===o&&a===p&&a===b&&a===w?(v=u,y=v/2,this._area.paths.rect(f+y,e+y,s+v,h+v).stroke(new wjcPdf.PdfPen(a,v))):(u&&this._area.paths.polygon([[f,e],[f+u,e+o],[f+u,e+o+h],[f,e+o+h+c]]).fill(a),o&&this._area.paths.polygon([[f,e],[f+u,e+o],[f+u+s,e+o],[f+u+s+l,e]]).fill(w),l&&this._area.paths.polygon([[f+u+s+l,e],[f+u+s,e+o],[f+u+s,e+o+h],[f+u+s+l,e+o+h+c]]).fill(p),c&&this._area.paths.polygon([[f,e+o+h+c],[f+u,e+o+h],[f+u+s,e+o+h],[f+u+s+l,e+o+h+c]]).fill(b))}i&&t.backgroundColor&&s>0&&h>0&&this._area.paths.rect(f+u,e+o,s,h).fill(t.backgroundColor)},n.prototype._renderBooleanCell=function(n,t,i,r,u){if(this._renderEmptyCell(t,i,r,u),r){var s=.5,c=t.textRect.left,l=t.textRect.top,f=t.textRect.height;if(this._area.paths.rect(c,l,f,f).fillAndStroke(wjcCore.Color.fromRgba(255,255,255),new wjcPdf.PdfPen(undefined,s)),wjcCore.changeType(n,wjcCore.DataType.Boolean,'')===!0){var h=f/20,e=f-s-h*2,o=f/8;this._area._pdfdoc.saveState();this._area.translate(c+s/2+h,l+s/2+h).paths.moveTo(o/2,e*.6).lineTo(e-e*.6,e-o).lineTo(e-o/2,o/2).stroke(new wjcPdf.PdfPen(undefined,o));this._area._pdfdoc.restoreState()}}},n.prototype._renderTextCell=function(n,t,i,r,u){(this._renderEmptyCell(t,i,r,u),r)&&n&&this._area.drawText(n,t.textRect.left,t.textRect.top,{brush:i.color,font:i.font,height:t.textRect.height,width:t.textRect.width,align:i.textAlign==='center'?wjcPdf.PdfTextHorizontalAlign.Center:i.textAlign==='right'?wjcPdf.PdfTextHorizontalAlign.Right:i.textAlign==='justify'?wjcPdf.PdfTextHorizontalAlign.Justify:wjcPdf.PdfTextHorizontalAlign.Left})},n.prototype._calculateTextRect=function(n,t,i,r,u,f){var e=u.clone(),s,o;if(this._isBooleanCell(n,t,i,r)){s=this._area.measureText('A',f.font,{width:Infinity}).size.height;switch(f.verticalAlign){case'middle':e.top=u.top+u.height/2-s/2;break;case'bottom':e.top=u.top+u.height-s}switch(f.textAlign){case'justify':case'center':e.left=u.left+u.width/2-s/2;break;case'right':e.left=u.left+u.width-s}e.height=e.width=s}else if(e.height>0&&e.width>0)switch(f.verticalAlign){case'bottom':o=this._area.measureText(n,f.font,{height:e.height,width:e.width});o.size.height<e.height&&(e.top+=e.height-o.size.height,e.height=o.size.height);break;case'middle':o=this._area.measureText(n,f.font,{height:e.height,width:e.width});o.size.height<e.height&&(e.top+=e.height/2-o.size.height/2,e.height=o.size.height)}return e},n}(),GetMergedRangeProxy=function(){function n(n){this._columns={};this._flex=n}return n.prototype.getMergedRange=function(n,t,i){var r=this._columns[i],u;return r&&t>=r.topRow&&t<=r.bottomRow?r:(u=this._flex.getMergedRange(n,t,i,!1),this._columns[i]=u?new CellRangeExt(n,u):null)},n}(),CellRangeExt=function(n){function t(t,i){var r=n.call(this,i.row,i.col,i.row2,i.col2)||this,f,e,u;for(r.firstVisibleRow=-1,f=r.topRow,e=r.bottomRow,u=f;u<e;u++)if(t.rows[u].isVisible){r.firstVisibleRow=u;break}return r}return __extends(t,n),t}(wjcGrid.CellRange),RowRange=function(){function n(n,t){this._flex=n;this._ranges=t||[]}return n.getSelection=function(t,i){var u=[],e,f,r,o;if(i===ExportMode.All)u.push(new wjcGrid.CellRange(0,0,t.rows.length-1,t.columns.length-1));else{e=t.selection;switch(t.selectionMode){case wjcGrid.SelectionMode.Cell:case wjcGrid.SelectionMode.CellRange:u.push(e);break;case wjcGrid.SelectionMode.Row:u.push(new wjcGrid.CellRange(e.topRow,0,e.topRow,t.cells.columns.length-1));break;case wjcGrid.SelectionMode.RowRange:u.push(new wjcGrid.CellRange(e.topRow,0,e.bottomRow,t.cells.columns.length-1));break;case wjcGrid.SelectionMode.ListBox:for(f=-1,r=0;r<t.rows.length;r++)o=t.rows[r],o.isSelected?(f<0&&(f=r),r===t.rows.length-1&&u.push(new wjcGrid.CellRange(f,0,r,t.cells.columns.length-1))):(f>=0&&u.push(new wjcGrid.CellRange(f,0,r-1,t.cells.columns.length-1)),f=-1)}}return new n(t,u)},n.prototype.length=function(){for(var n,i=0,t=0;t<this._ranges.length;t++)n=this._ranges[t],n.isValid&&(i+=n.bottomRow-n.topRow+1);return i},Object.defineProperty(n.prototype,"isValid",{get:function(){return this._ranges.length&&this._ranges[0].isValid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"leftCol",{get:function(){return this._ranges.length?this._ranges[0].leftCol:-1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"rightCol",{get:function(){return this._ranges.length?this._ranges[0].rightCol:-1},enumerable:!0,configurable:!0}),n.prototype.clone=function(t,i){for(var r,f=[],u=0;u<this._ranges.length;u++)r=this._ranges[u].clone(),arguments.length>0&&(r.col=t),arguments.length>1&&(r.col2=i),f.push(r);return new n(this._flex,f)},n.prototype.getRenderSize=function(n){for(var r,t=new wjcCore.Size(0,0),i=0;i<this._ranges.length;i++)r=this._ranges[i].getRenderSize(n),t.width=Math.max(t.width,r.width),t.height+=r.height;return t},n.prototype.forEach=function(n,t){for(var i,r,f=0,u=0;u<this._ranges.length;u++)if(i=this._ranges[u],i.isValid)for(r=i.topRow;r<=i.bottomRow;r++)t(n.rows[r],i,r,f++)},n.prototype.subrange=function(t,i,r,u){var c=[],e,o,s,f;if(t>=0&&i>0)for(e=0,o=0,s=0;s<this._ranges.length&&i>0;s++,e=o+1)if(f=this._ranges[s],o=e+(f.bottomRow-f.topRow),!(t>o)){var h=t>e?f.topRow+(t-e):f.topRow,l=Math.min(f.bottomRow,h+i-1),a=arguments.length>2?r:f.leftCol,v=arguments.length>2?u:f.rightCol;c.push(new wjcGrid.CellRange(h,a,l,v));i-=l-h+1}return new n(this._flex,c)},n}(),PdfPageRowRange=function(){function n(n,t,i){this._col=t;this._row=i;this._range=n}return Object.defineProperty(n.prototype,"range",{get:function(){return this._range},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"pageCol",{get:function(){return this._col},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"pageRow",{get:function(){return this._row},enumerable:!0,configurable:!0}),n}()