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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcCore,wjcSelf,TreeView,TreeNode,FormatNodeEventArgs,TreeNodeEventArgs,TreeNodeDragDropEventArgs,DropPosition,_TreeDragDropManager,_BindingArray;Object.defineProperty(exports,"__esModule",{value:!0});wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.nav");window.wijmo=window.wijmo||{};window.wijmo.nav=wjcSelf;TreeView=function(n){function t(i,r){var u=n.call(this,i)||this,e,f;return u._itmPath=new _BindingArray('items'),u._dspPath=new _BindingArray('header'),u._imgPath=new _BindingArray,u._html=!1,u._animated=!0,u._xpndOnClick=!0,u._autoColl=!0,u._showChk=!1,u._srch='',u._isReadOnly=!0,u.itemsSourceChanged=new wjcCore.Event,u.loadingItems=new wjcCore.Event,u.loadedItems=new wjcCore.Event,u.itemClicked=new wjcCore.Event,u.selectedItemChanged=new wjcCore.Event,u.checkedItemsChanged=new wjcCore.Event,u.isCollapsedChanging=new wjcCore.Event,u.isCollapsedChanged=new wjcCore.Event,u.isCheckedChanging=new wjcCore.Event,u.isCheckedChanged=new wjcCore.Event,u.formatItem=new wjcCore.Event,u.dragStart=new wjcCore.Event,u.dragOver=new wjcCore.Event,u.drop=new wjcCore.Event,u.dragEnd=new wjcCore.Event,u.nodeEditStarting=new wjcCore.Event,u.nodeEditStarted=new wjcCore.Event,u.nodeEditEnding=new wjcCore.Event,u.nodeEditEnded=new wjcCore.Event,e=u.getTemplate(),u.applyTemplate('wj-control wj-content wj-treeview',e,{_root:'root'}),u.hostElement.setAttribute('role','tree'),wjcCore.addClass(u._root,t._CNDL),u._root.setAttribute('role','group'),f=u.hostElement,u.addEventListener(f,'mousedown',u._mousedown.bind(u)),u.addEventListener(f,'click',u._click.bind(u)),u.addEventListener(f,'keydown',u._keydown.bind(u)),u.addEventListener(f,'keypress',u._keypress.bind(u)),u.addEventListener(f,'wheel',function(n){f.scrollHeight>f.offsetHeight&&(n.deltaY<0&&f.scrollTop==0||n.deltaY>0&&f.scrollTop+f.offsetHeight>=f.scrollHeight)&&(n.preventDefault(),n.stopPropagation())}),u.addEventListener(f,'blur',function(){u._edtNode&&!wjcCore.contains(u._edtNode.element,wjcCore.getActiveElement())&&u.finishEditing()},!0),u.initialize(r),u.refresh(),u}return __extends(t,n),Object.defineProperty(t.prototype,"itemsSource",{get:function(){return this._items},set:function(n){this._items!=n&&(this._items=wjcCore.asArray(n),this.onItemsSourceChanged(),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childItemsPath",{get:function(){return this._itmPath.path},set:function(n){n!=this.childItemsPath&&(this._itmPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"displayMemberPath",{get:function(){return this._dspPath.path},set:function(n){n!=this.displayMemberPath&&(this._dspPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageMemberPath",{get:function(){return this._imgPath.path},set:function(n){n!=this.imageMemberPath&&(this._imgPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isContentHtml",{get:function(){return this._html},set:function(n){n!=this._html&&(this._html=wjcCore.asBoolean(n),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showCheckboxes",{get:function(){return this._showChk},set:function(n){n!=this._showChk&&(this._showChk=wjcCore.asBoolean(n),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoCollapse",{get:function(){return this._autoColl},set:function(n){this._autoColl=wjcCore.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAnimated",{get:function(){return this._animated},set:function(n){n!=this._animated&&(this._animated=wjcCore.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReadOnly",{get:function(){return this._isReadOnly},set:function(n){this._isReadOnly=wjcCore.asBoolean(n)},enumerable:!0,configurable:!0}),t.prototype.startEditing=function(n){var i,r,u,f;if(this.isReadOnly||(n||(n=this.selectedNode),!n||n.isDisabled)||!this.finishEditing()||(i=n.element.querySelector('.'+t._CNDT),!i)||(r=new TreeNodeEventArgs(n),!this.onNodeEditStarting(r)))return!1;i.tabIndex=0;i.focus();i.contentEditable='true';i.style.cursor='auto';u=document.createRange();u.selectNodeContents(i);f=getSelection();f.removeAllRanges();f.addRange(u);i.focus();wjcCore.setAttribute(i,'autocomplete','off');wjcCore.setAttribute(i,'autocorrect','off');this._edtNode=n;this.onNodeEditStarted(r);return!0},t.prototype.finishEditing=function(n){var r=this._edtNode,i,e,u,f,o,s;if(r){if((i=r.element.querySelector('.'+t._CNDT),!i)||(e=new TreeNodeEventArgs(r),!this.onNodeEditEnding(e)))return!1;u=r.dataItem;f=r.level;this.isContentHtml?n?i.innerHTML=this._dspPath.getValue(u,f):this._dspPath.setValue(u,f,i.innerHTML):n?i.textContent=this._dspPath.getValue(u,f):this._dspPath.setValue(u,f,i.textContent);o=document.createRange();o.selectNodeContents(i);s=getSelection();s.removeAllRanges();i.contentEditable='false';i.style.cursor='';this._edtNode=null;this.onNodeEditEnded(e)}return!0},Object.defineProperty(t.prototype,"allowDragging",{get:function(){return this._dd!=null},set:function(n){var r,i,u;if(n!=this.allowDragging)for(wjcCore.asBoolean(n)?this._dd=new _TreeDragDropManager(this):(this._dd.dispose(),this._dd=null),r=this.hostElement.querySelectorAll('.'+t._CND),i=0;i<r.length;i++)u=r[i],wjcCore.setAttribute(u,'draggable',this._dd?!0:null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expandOnClick",{get:function(){return this._xpndOnClick},set:function(n){this._xpndOnClick=wjcCore.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedItem",{get:function(){return this._selNode?this._selNode.dataItem:null},set:function(n){n!=this.selectedItem&&(this.selectedNode=n?this.getNode(n):null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedNode",{get:function(){return this._selNode},set:function(n){n!=this.selectedNode&&(this._prevSel=this._selNode,n?n.select():this._selNode&&(wjcCore.removeClass(this._selNode.element,t._CSEL),this._selNode=null,this.onSelectedItemChanged()))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedPath",{get:function(){for(var i,t=[],n=this.selectedNode;n;n=n.parentNode)i=this._dspPath.getValue(n.dataItem,n.level),t.splice(0,0,i);return t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checkedItems",{get:function(){var i,u;if(this._chkItems==null){var n=t,f='.'+n._CND+'.'+n._CEMP+' > input:checked.'+n._CNDC,r=this._root.querySelectorAll(f);for(this._chkItems=[],i=0;i<r.length;i++)u=r[i].parentElement[n._DATAITEM_KEY],this._chkItems.push(u)}return this._chkItems},set:function(n){var i,r,u;if(this.showCheckboxes){var f=t,s='.'+f._CND+'.'+f._CEMP,e=this._root.querySelectorAll(s),o=!1;for(i=0;i<e.length;i++)r=new TreeNode(this,e[i]),u=n.indexOf(r.dataItem)>-1,r.isChecked!=u&&(r.isChecked=u,o=!0);o&&this.onCheckedItemsChanged()}},enumerable:!0,configurable:!0}),t.prototype.checkAllItems=function(n){var i,r;if(this.showCheckboxes){var u=t,o='.'+u._CND+'.'+u._CEMP,f=this._root.querySelectorAll(o),e=!1;for(i=0;i<f.length;i++)r=new TreeNode(this,f[i]),r.isChecked!=n&&(r.isChecked=n,e=!0);e&&this.onCheckedItemsChanged()}},Object.defineProperty(t.prototype,"totalItemCount",{get:function(){var n=this.hostElement.querySelectorAll('.'+t._CND);return n.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lazyLoadFunction",{get:function(){return this._lazyLoad},set:function(n){n!=this._lazyLoad&&(this._lazyLoad=wjcCore.asFunction(n),this._reload())},enumerable:!0,configurable:!0}),t.prototype.getFirstNode=function(n,i){var u=this.hostElement.querySelector('.'+t._CND),r=u?new TreeNode(this,u):null;return n&&r&&!r.element.offsetHeight&&(r=r.next(n,i)),i&&r&&r.isDisabled&&(r=r.next(n,i)),r},t.prototype.getLastNode=function(n,i){var u=this.hostElement.querySelectorAll('.'+t._CND+':last-child'),r=u.length?new TreeNode(this,u[u.length-1]):null;return n&&r&&!r.element.offsetHeight&&(r=r.previous(n,i)),i&&r&&r.isDisabled&&(r=r.previous(n,i)),r},Object.defineProperty(t.prototype,"nodes",{get:function(){return TreeNode._getChildNodes(this,this._root)},enumerable:!0,configurable:!0}),t.prototype.getNode=function(n){for(var r,u=this.hostElement.querySelectorAll('.'+t._CND),i=0;i<u.length;i++)if(r=u[i],r[t._DATAITEM_KEY]==n)return new TreeNode(this,r);return null},t.prototype.collapseToLevel=function(n){var t=this._animated,i=this._autoColl;this._animated=this._autoColl=!1;this._collapseToLevel(this.nodes,n,0);this._animated=t;this._autoColl=i},t.prototype.onItemsSourceChanged=function(n){this.itemsSourceChanged.raise(this,n)},t.prototype.onLoadingItems=function(n){this.loadingItems.raise(this,n)},t.prototype.onLoadedItems=function(n){this.loadedItems.raise(this,n)},t.prototype.onItemClicked=function(n){this.itemClicked.raise(this,n)},t.prototype.onSelectedItemChanged=function(n){this.selectedItemChanged.raise(this,n)},t.prototype.onCheckedItemsChanged=function(n){this._chkItems=null;this.checkedItemsChanged.raise(this,n)},t.prototype.onIsCollapsedChanging=function(n){return this.isCollapsedChanging.raise(this,n),!n.cancel},t.prototype.onIsCollapsedChanged=function(n){this.isCollapsedChanged.raise(this,n)},t.prototype.onIsCheckedChanging=function(n){return this.isCheckedChanging.raise(this,n),!n.cancel},t.prototype.onIsCheckedChanged=function(n){this.isCheckedChanged.raise(this,n)},t.prototype.onFormatItem=function(n){this.formatItem.raise(this,n)},t.prototype.onDragStart=function(n){return this.dragStart.raise(this,n),!n.cancel},t.prototype.onDragOver=function(n){return this.dragOver.raise(this,n),!n.cancel},t.prototype.onDrop=function(n){return this.drop.raise(this,n),!n.cancel},t.prototype.onDragEnd=function(n){this.dragEnd.raise(this,n)},t.prototype.onNodeEditStarting=function(n){return this.nodeEditStarting.raise(this,n),!n.cancel},t.prototype.onNodeEditStarted=function(n){this.nodeEditStarted.raise(this,n)},t.prototype.onNodeEditEnding=function(n){return this.nodeEditEnding.raise(this,n),!n.cancel},t.prototype.onNodeEditEnded=function(n){this.nodeEditEnded.raise(this,n)},t.prototype.refresh=function(){n.prototype.refresh.call(this);!this.isUpdating&&this._isDirty&&this._populateTree()},t.prototype._reload=function(){this._isDirty=!0;this.invalidate()},t.prototype._mousedown=function(n){if(!n.defaultPrevented){var r=wjcCore.closest(n.target,'input.'+t._CNDC),u=wjcCore.closest(n.target,'.'+t._CND),i=u?new TreeNode(this,u):null;i&&!i.isDisabled&&(this.selectedNode=i);this._dnIndet=r&&r.indeterminate}},t.prototype._click=function(n){var s=this,r,i,u;if(!n.defaultPrevented&&(r=wjcCore.closest(n.target,'.'+t._CND),r)){if(i=new TreeNode(this,r),u=wjcCore.closest(n.target,'input.'+t._CNDC),i.isDisabled)return;if(!u&&i.equals(this._edtNode))return;if(r.focus(),u&&(n.preventDefault(),n.stopPropagation(),setTimeout(function(){u.indeterminate=!1;i.isChecked=!i.isChecked;s.onCheckedItemsChanged()})),!u){var h=n.target,c=n.ctrlKey||n.metaKey,e=c&&!i.hasPendingChildren,o=r.getBoundingClientRect(),l=this.rightToLeft?o.right-n.clientX:n.clientX-o.left,f=!1;l<=h.offsetHeight?(e?this.collapseToLevel(i.isCollapsed?i.level+1:i.level):i.isCollapsed=!i.isCollapsed,f=!0):this.expandOnClick&&i.isCollapsed&&(e?this.collapseToLevel(i.level):i.isCollapsed=!1,f=!0);f&&e&&this.selectedNode&&this.selectedNode.ensureVisible();f||this.isReadOnly||this.selectedNode&&this.selectedNode.equals(this._prevSel)&&this.startEditing()}this.selectedItem&&this.onItemClicked()}},t.prototype._keydown=function(n){var u;if(!n.defaultPrevented){var t=this._selNode,i,r=n.keyCode,f=!0;if(t&&!t.isDisabled){switch(r){case wjcCore.Key.F2:this.startEditing();n.preventDefault();break;case wjcCore.Key.Escape:this.finishEditing(!0);n.preventDefault();break;case wjcCore.Key.Up:case wjcCore.Key.Down:this.finishEditing();break;case wjcCore.Key.Enter:this._edtNode?(this.finishEditing(),r=wjcCore.Key.Down):(this.startEditing(),n.preventDefault())}if(this._edtNode)return;if(this.rightToLeft)switch(r){case wjcCore.Key.Left:r=wjcCore.Key.Right;break;case wjcCore.Key.Right:r=wjcCore.Key.Left}switch(r){case wjcCore.Key.Left:!t.isCollapsed&&t.hasChildren?t.setCollapsed(!0):(t=t.parentNode,t&&t.select());break;case wjcCore.Key.Right:t.setCollapsed(!1);break;case wjcCore.Key.Up:i=t.previous(!0,!0);break;case wjcCore.Key.Down:i=t.next(!0,!0);break;case wjcCore.Key.Home:i=this.getFirstNode(!0,!0);break;case wjcCore.Key.End:i=this.getLastNode(!0,!0);break;case wjcCore.Key.Space:this.selectedItem&&(u=t.checkBox,u&&(t.isChecked=!u.checked,this.onCheckedItemsChanged()));break;case wjcCore.Key.Enter:this.selectedItem&&this.onItemClicked();break;default:f=!1}f&&(n.preventDefault(),i&&i.select())}}},t.prototype._keypress=function(n){var e=this,r,u,f,i;if(!n.defaultPrevented){if(n.target instanceof HTMLInputElement)return;if(this._edtNode)return;if(n.charCode>32&&this.startEditing(this.selectedNode)){r=wjcCore.getActiveElement();wjcCore.contains(this._edtNode.element,r)&&(r.textContent=String.fromCharCode(n.charCode),n.preventDefault(),u=document.createRange(),u.selectNodeContents(r),u.collapse(!1),f=getSelection(),f.removeAllRanges(),f.addRange(u));return}(n.charCode>32||n.charCode==32&&this._srch)&&(n.preventDefault(),this._srch+=String.fromCharCode(n.charCode).toLowerCase(),this._toSrch&&clearTimeout(this._toSrch),this._toSrch=setTimeout(function(){e._toSrch=null;e._srch=''},t._AS_DLY),i=this._findNext(),i==null&&this._srch.length>1&&(this._srch=this._srch[this._srch.length-1],i=this._findNext()),i!=null&&(this.selectedItem=i))}},t.prototype._findNext=function(){var f,t;if(this.hostElement&&this.selectedItem){var u=this.getNode(this.selectedItem),n=u,i=!1,r=!1;for(this._srch.length==1&&(r=!0);n;){if(!n.isDisabled&&!r&&(f=n.element.textContent.trim().toLowerCase(),f.indexOf(this._srch)==0))return n.dataItem;if(t=n.next(!0,!0),t==u&&i)break;t||i||(t=this.getFirstNode(!0,!0),i=!0);n=t;r=!1}}return null},t.prototype._populateTree=function(){var t=this._root,i,r,n;if(t){if(this._isDirty=!1,i=this.containsFocus(),r=this.selectedItem,this.selectedItem=null,this._chkItems=null,this._ldLvl=-1,this.onLoadingItems(),t.innerHTML='',this._items)for(n=0;n<this._items.length;n++)this._addItem(t,0,this._items[n]);i&&!this.containsFocus()&&this.focus();this.selectedItem=r;this.onLoadedItems();this._ldLvl=-1}},t.prototype._addItem=function(n,i,r){var a=this._dspPath.getValue(r,i),v=this._imgPath.getValue(r,i),f=wjcCore.asArray(this._itmPath.getValue(r,i),!0),u=document.createElement('div'),e,l,o,h,s,c;if(wjcCore.addClass(u,t._CND),u.tabIndex=0,u.setAttribute('role','treeitem'),e=document.createElement('span'),this.isContentHtml?e.innerHTML=a:e.textContent=a,wjcCore.addClass(e,t._CNDT),u.appendChild(e),v&&(l=document.createElement('img'),l.src=v,u.insertBefore(l,u.firstChild)),this._showChk&&!this._lazyLoad&&(o=document.createElement('input'),o.type='checkbox',o.tabIndex=-1,wjcCore.addClass(o,t._CNDC),u.insertBefore(o,u.firstChild)),this._dd&&u.setAttribute('draggable','true'),n.appendChild(u),u[t._DATAITEM_KEY]=r,f&&f.length==0&&!this.lazyLoadFunction&&(f=null),f){if(h=!0,i>this._ldLvl?(this._ldLvl=i,f.length==0&&(wjcCore.addClass(u,t._CCLD),h=!1)):(wjcCore.addClass(u,t._CCLD),h=!1,i<this._ldLvl&&(this._ldLvl=1e4)),f.length>0){for(s=document.createElement('div'),wjcCore.addClass(s,t._CNDL),c=0;c<f.length;c++)this._addItem(s,i+1,f[c]);n.appendChild(s);u.setAttribute('aria-expanded',h.toString());s.setAttribute('role','group')}}else wjcCore.addClass(u,t._CEMP);if(this.formatItem.hasHandlers)this.onFormatItem(new FormatNodeEventArgs(r,u,i))},t.prototype._collapseToLevel=function(n,t,i){for(var r,u=0;u<n.length;u++)(r=n[u],r.hasPendingChildren)||(r.isCollapsed=i>=t,r.hasChildren&&this._collapseToLevel(r.nodes,t,i+1))},t.prototype._lazyLoadNode=function(n){var i=this.hostElement;wjcCore.hasClass(i,t._CLDG)||(wjcCore.addClass(i,t._CLDG),wjcCore.addClass(n.element,t._CLDG),this.lazyLoadFunction(n,this._lazyLoadCallback.bind(n)))},t.prototype._lazyLoadCallback=function(n){var t=this,i=t.treeView;i._lazyLoadNodeDone(t,n)},t.prototype._lazyLoadNodeDone=function(n,i){var u=t,f,s,e;wjcCore.removeClass(n.element,u._CLDG);wjcCore.removeClass(this.hostElement,u._CLDG);var h=n.dataItem,o=n.level,r=wjcCore.asArray(i,!0);if(r==null||r.length==0)this._itmPath.setValue(h,o,null),wjcCore.addClass(n.element,u._CEMP);else if(r.length){for(this._itmPath.setValue(h,o,r),f=document.createElement('div'),s=n.element,wjcCore.addClass(f,u._CNDL),s.parentElement.insertBefore(f,s.nextSibling),e=0;e<r.length;e++)this._addItem(f,o+1,r[e]);n.isCollapsed=!1}},t}(wjcCore.Control);TreeView._DATAITEM_KEY='wj-Data-Item';TreeView._AS_DLY=600;TreeView._AN_DLY=200;TreeView._CND='wj-node';TreeView._CNDL='wj-nodelist';TreeView._CEMP='wj-state-empty';TreeView._CNDT='wj-node-text';TreeView._CNDC='wj-node-check';TreeView._CSEL='wj-state-selected';TreeView._CCLD='wj-state-collapsed';TreeView._CCLG='wj-state-collapsing';TreeView._CLDG='wj-state-loading';TreeView.controlTemplate='<div wj-part="root"></div>';exports.TreeView=TreeView;TreeNode=function(){function n(t,i){wjcCore.hasClass(i,'wj-treeview')?(t=wjcCore.Control.getControl(i),i=null):n._assertNode(i);this._t=t;this._e=i}return Object.defineProperty(n.prototype,"dataItem",{get:function(){return this._e[TreeView._DATAITEM_KEY]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"element",{get:function(){return this._e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"treeView",{get:function(){return this._t},enumerable:!0,configurable:!0}),n.prototype.ensureVisible=function(){for(var n=this.parentNode;n;n=n.parentNode)n.isCollapsed=!1;var r=this.treeView.hostElement,t=this.element.getBoundingClientRect(),i=r.getBoundingClientRect();t.bottom>i.bottom?r.scrollTop+=t.bottom-i.bottom:t.top<i.top&&(r.scrollTop-=i.top-t.top)},n.prototype.equals=function(n){return n!=null&&n.element==this.element},n.prototype.select=function(){var n=this._t,t=n._selNode;this.equals(t)||(t&&wjcCore.removeClass(t.element,TreeView._CSEL),n._selNode=this,wjcCore.addClass(this.element,TreeView._CSEL),this.ensureVisible(),n.containsFocus()&&this.element.focus(),n.onSelectedItemChanged())},Object.defineProperty(n.prototype,"index",{get:function(){for(var i=0,t=this._pse(this.element);t;t=this._pse(t))n._isNode(t)&&i++;return i},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"parentNode",{get:function(){var t=null,i;return this._e&&(i=this._e.parentElement,n._assertNodeList(i),t=this._pse(i)),t?new n(this._t,t):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"level",{get:function(){for(var t=-1,n=this;n;n=n.parentNode)t++;return t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasChildren",{get:function(){return n._isNode(this._e)&&!n._isEmpty(this._e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasPendingChildren",{get:function(){return this.isCollapsed&&this.hasChildren&&!n._isNodeList(this.element.nextElementSibling)&&wjcCore.isFunction(this._t.lazyLoadFunction)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"nodes",{get:function(){return this.hasChildren?n._getChildNodes(this._t,this._e.nextSibling):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"checkBox",{get:function(){return this._e.querySelector('input.'+TreeView._CNDC)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isCollapsed",{get:function(){return this.hasChildren&&wjcCore.hasClass(this._e,TreeView._CCLD)},set:function(n){if(n!=this.isCollapsed){var t=this.treeView,i=new TreeNodeEventArgs(this);if(t.onIsCollapsedChanging(i)){this.setCollapsed(wjcCore.asBoolean(n),t.isAnimated,t.autoCollapse);t.onIsCollapsedChanged(i)}}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isChecked",{get:function(){var n=this.checkBox;return n&&!n.indeterminate?n.checked:null},set:function(n){if(n!=this.isChecked){var t=this.treeView,i=new TreeNodeEventArgs(this);if(t.onIsCheckedChanging(i)){this.setChecked(wjcCore.asBoolean(n),!0);t.onIsCheckedChanged(i)}}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this._e&&this._e.getAttribute('disabled')!=null},set:function(n){n=wjcCore.asBoolean(n,!0);n!=this.isDisabled&&wjcCore.enable(this._e,!n)},enumerable:!0,configurable:!0}),n.prototype.previous=function(t,i){var r=this._pse(this._e),u;if(!r&&n._isNodeList(this._e.parentElement)&&(r=this._pse(this._e.parentElement)),n._isNodeList(r)){while(n._isNodeList(r)&&r.childElementCount)r=r.lastChild;n._isNodeList(r)&&(r=this._pse(r))}return u=n._isNode(r)?new n(this._t,r):null,t&&u&&!u.element.offsetHeight&&(u=u.previous(t,i)),i&&u&&u.isDisabled&&(u=u.previous(t,i)),u},n.prototype.next=function(t,i){var r=this._e.nextSibling,f,u;if(n._isNodeList(r)&&(r=r.childElementCount?r.firstChild:r.nextSibling),!r)for(f=this._e.parentElement;!r&&n._isNodeList(f);f=f.parentElement)r=f.nextSibling;return u=n._isNode(r)?new n(this._t,r):null,t&&u&&!u.element.offsetHeight&&(u=u.next(t,i)),i&&u&&u.isDisabled&&(u=u.next(t,i)),u},n.prototype.previousSibling=function(){var t=this._pse(this.element);return n._isNodeList(t)&&(t=this._pse(t)),t?new n(this.treeView,t):null},n.prototype.nextSibling=function(){var t=this.element.nextSibling;return n._isNodeList(t)&&(t=t.nextSibling),t?new n(this.treeView,t):null},n.prototype.setCollapsed=function(t,i,r){var f=this._e,e=this._e.nextElementSibling,c=n._isNodeList(e),s,u,h,o;if(c?f.setAttribute('aria-expanded',(!t).toString()):f.removeAttribute('aria-expanded'),t!=this.isCollapsed){if(!t&&!c&&wjcCore.isFunction(this._t.lazyLoadFunction)){this._t._lazyLoadNode(this);return}if(i==null&&(i=this.treeView.isAnimated),r==null&&(r=this.treeView.autoCollapse),i?c&&(t?(s=e.offsetHeight,u=e.style,wjcCore.toggleClass(f,TreeView._CCLG,!0),wjcCore.animate(function(n){n<1?(n=1-n,u.height=(n*s).toFixed(0)+'px'):(u.height=u.opacity='',wjcCore.toggleClass(f,TreeView._CCLD,!0),wjcCore.toggleClass(f,TreeView._CCLG,!1))},TreeView._AN_DLY)):(wjcCore.toggleClass(f,TreeView._CCLD,!1),s=e.offsetHeight,u=e.style,u.height=u.opacity='0',wjcCore.animate(function(n){u.height=n>=1?u.opacity='':(n*s).toFixed(0)+'px'},TreeView._AN_DLY))):wjcCore.toggleClass(f,TreeView._CCLD,t),!t&&r&&(e=f.parentElement,n._isNodeList(e)))for(h=0;h<e.children.length;h++)o=e.children[h],o!=f&&n._isNode(o)&&(wjcCore.toggleClass(o,TreeView._CCLD,!0),o.setAttribute('aria-expanded','false'))}},n.prototype.setChecked=function(n,t){var f=this.checkBox,r,i,e,u;if(f.checked=n,f.indeterminate=!1,this.hasChildren)for(r=this.nodes,i=0;i<r.length;i++)e=r[i],e.setChecked(n,!1);t&&(u=this.parentNode,u&&u._updateCheckedState())},n.prototype.move=function(n,t){var i,r,u,e,f,o;return this._contains(n)?!1:(i=this.parentNode,r=this._getArray(),this._moveElements(n,t),u=this.parentNode,e=this._getArray(),i&&i._updateState(),u&&u._updateState(),f=this.dataItem,o=r.indexOf(f),r.splice(o,1),e.splice(this.index,0,f),n.treeView&&(this._t=n.treeView),!0)},n.prototype._pse=function(n){return n.previousElementSibling},n.prototype._contains=function(n){for(;n;n=n.parentNode)if(n.element==this.element)return!0;return!1},n.prototype._getArray=function(){var r=this._t,t=this.parentNode,n=r.itemsSource,i;return t&&(i=r._itmPath,n=i.getValue(t.dataItem,this.level),n||(n=[],i.setValue(t.dataItem,this.level,n))),n},n.prototype._moveElements=function(t,i){var f=t.element,r=f?f.parentElement:t.treeView._root,o=DropPosition,e,u;n._assertNodeList(r);e=document.createDocumentFragment();u=this.hasChildren&&!this.hasPendingChildren?this.element.nextSibling:null;e.appendChild(this.element);u&&(n._assertNodeList(u),e.appendChild(u));switch(i){case o.Before:r.insertBefore(e,f);break;case o.After:t=t.nextSibling();f=t?t.element:null;r.insertBefore(e,f);break;case o.Into:(!t.hasChildren||t.hasPendingChildren)&&(u=document.createElement('div'),wjcCore.addClass(u,TreeView._CNDL),r.insertBefore(u,f.nextSibling));r=t.element.nextSibling;n._assertNodeList(r);r.insertBefore(e,null)}},n.prototype._updateState=function(){this._updateEmptyState();this._updateCheckedState()},n.prototype._updateEmptyState=function(){var t=this.element.nextSibling,i=!1;n._isNodeList(t)&&(t.childElementCount?i=!0:t.parentElement.removeChild(t));wjcCore.toggleClass(this.element,TreeView._CEMP,!i)},n.prototype._updateCheckedState=function(){var n=this.checkBox,t=this.nodes,u=0,f=0,i,e,r;if(n&&t){for(i=0;i<t.length;i++){e=t[i];switch(e.isChecked){case!0:u++;break;case!1:f++}}u==t.length?(n.checked=!0,n.indeterminate=!1):f==t.length?(n.checked=!1,n.indeterminate=!1):(n.checked=!1,n.indeterminate=!0)}r=this.parentNode;r&&r._updateCheckedState()},n._getChildNodes=function(t,i){var u,f,r,e;if(n._assertNodeList(i),u=[],n._isNodeList(i))for(f=i.children,r=0;r<f.length;r++)e=f[r],n._isNode(e)&&u.push(new n(t,e));return u},n._isNode=function(n){return n&&wjcCore.hasClass(n,TreeView._CND)},n._isNodeList=function(n){return n&&wjcCore.hasClass(n,TreeView._CNDL)},n._isEmpty=function(t){return n._isNode(t)&&wjcCore.hasClass(t,TreeView._CEMP)},n._isCollapsed=function(t){return n._isNode(t)&&!n._isEmpty(t)&&wjcCore.hasClass(t,TreeView._CCLD)},n._assertNode=function(t){wjcCore.assert(n._isNode(t),'node expected')},n._assertNodeList=function(t){wjcCore.assert(n._isNodeList(t),'nodeList expected')},n}();exports.TreeNode=TreeNode;FormatNodeEventArgs=function(n){function t(t,i,r){var u=n.call(this)||this;return u._data=t,u._e=wjcCore.asType(i,HTMLElement),u._level=r,u}return __extends(t,n),Object.defineProperty(t.prototype,"dataItem",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this._e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"level",{get:function(){return this._level},enumerable:!0,configurable:!0}),t}(wjcCore.EventArgs);exports.FormatNodeEventArgs=FormatNodeEventArgs;TreeNodeEventArgs=function(n){function t(t){var i=n.call(this)||this;return i._node=t,i}return __extends(t,n),Object.defineProperty(t.prototype,"node",{get:function(){return this._node},enumerable:!0,configurable:!0}),t}(wjcCore.CancelEventArgs);exports.TreeNodeEventArgs=TreeNodeEventArgs;TreeNodeDragDropEventArgs=function(n){function t(t,i,r){var u=n.call(this)||this;return u._src=wjcCore.asType(t,TreeNode),u._tgt=wjcCore.asType(i,TreeNode),u._pos=r,u}return __extends(t,n),Object.defineProperty(t.prototype,"dragSource",{get:function(){return this._src},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dropTarget",{get:function(){return this._tgt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._pos},set:function(n){this._pos=wjcCore.asEnum(n,DropPosition)},enumerable:!0,configurable:!0}),t}(wjcCore.CancelEventArgs);exports.TreeNodeDragDropEventArgs=TreeNodeDragDropEventArgs,function(n){n[n.Before=0]="Before";n[n.After=1]="After";n[n.Into=2]="Into"}(DropPosition=exports.DropPosition||(exports.DropPosition={}));_TreeDragDropManager=function(){function n(n){this._tree=wjcCore.asType(n,TreeView);this._dragstartBnd=this._dragstart.bind(this);this._dragoverBnd=this._dragover.bind(this);this._dropBnd=this._drop.bind(this);this._dragendBnd=this._dragend.bind(this);var t=this._tree,i=t.hostElement;t.addEventListener(i,'dragstart',this._dragstartBnd);t.addEventListener(i,'dragover',this._dragoverBnd);t.addEventListener(i,'dragleave',this._dragoverBnd);t.addEventListener(i,'drop',this._dropBnd);t.addEventListener(i,'dragend',this._dragendBnd);t.addEventListener(i,'keydown',this._keydown)}return n.prototype.dispose=function(){var n=this._tree,t=n.hostElement;n.removeEventListener(t,'dragstart',this._dragstartBnd);n.removeEventListener(t,'dragover',this._dragoverBnd);n.removeEventListener(t,'dragleave',this._dragoverBnd);n.removeEventListener(t,'drop',this._dropBnd);n.removeEventListener(t,'dragend',this._dragendBnd);n.removeEventListener(t,'keydown',this._keydown);this._showDragMarker()},n.prototype._dragstart=function(t){var f;if(!t.defaultPrevented){var i=n,r=this._tree,u=wjcCore.closest(t.target,'.'+TreeView._CND);i._drgSrc=TreeNode._isNode(u)?new TreeNode(r,u):null;i._drgSrc&&(f=new TreeNodeEventArgs(i._drgSrc),r.onDragStart(f)||(i._drgSrc=null));i._drgSrc&&t.dataTransfer?(wjcCore._startDrag(t.dataTransfer,'copyMove'),t.stopPropagation()):t.preventDefault()}},n.prototype._dragover=function(n){this._handleDragDrop(n,!1)},n.prototype._drop=function(n){this._handleDragDrop(n,!0)},n.prototype._dragend=function(){n._drgSrc=null;this._showDragMarker();this._tree.onDragEnd()},n.prototype._keydown=function(n){n.defaultPrevented||n.keyCode==wjcCore.Key.Escape&&this._dragendBnd(null)},n.prototype._handleDragDrop=function(t,i){var h=n,f,a,r,c,v,y,p;if(!t.defaultPrevented&&h._drgSrc){if(a=document.elementFromPoint(t.clientX,t.clientY),r=wjcCore.closest(a,'.'+TreeView._CND),r==null&&(c=wjcCore.Control.getControl(wjcCore.closest(a,'.wj-treeview')),c instanceof TreeView&&c.totalItemCount==0&&(r=c.hostElement)),r==h._drgSrc.element&&(r=null),r){var l=this._tree,u=new TreeNode(l,r),s=DropPosition,e=s.Into,o=r.getBoundingClientRect(),w=u.hasPendingChildren?o.height/2:o.height/3;u.element==null?(o=wjcCore.Rect.fromBoundingRect(o),o.inflate(-12,-12),e=s.Before):t.clientY<o.top+w?e=s.Before:(t.clientY>o.bottom-w||u.hasPendingChildren)&&(e=s.After,!u.hasChildren||u.isCollapsed||u.hasPendingChildren||(e=s.Before,u=u.next(!0,!1),r=u.element,o=r.getBoundingClientRect()));h._drgSrc._contains(u)?r=null:(f=new TreeNodeDragDropEventArgs(h._drgSrc,u,e),f.cancel=h._drgSrc.treeView!=u.treeView,l.onDragOver(f)||(r=null))}r&&(e=f.position,e==s.Before?(v=f.dragSource.next(!0,!1),v&&v.element==r&&(r=null)):e==s.After&&(y=f.dragSource.previous(!0,!1),y&&y.element==r&&(r=null)));r&&!i?(t.dataTransfer.dropEffect='move',t.preventDefault(),t.stopPropagation(),this._showDragMarker(o,e)):this._showDragMarker();r&&i&&l.onDrop(f)&&(l.hostElement.focus(),p=f.dragSource,p.move(f.dropTarget,f.position),p.select())}},n.prototype._showDragMarker=function(t,i){var r=this._tree,u=n._dMarker.parentElement;if(t){var f=r.hostElement.getBoundingClientRect(),o=i==DropPosition.After?t.bottom:t.top,e={top:Math.round(o-f.top+r.hostElement.scrollTop-2),width:'75%',height:i==DropPosition.Into?t.height:4,opacity:i==DropPosition.Into?'0.15':''};r.rightToLeft?e.right=Math.round(f.right-t.right):e.left=Math.round(t.left-f.left);wjcCore.setCss(n._dMarker,e);u!=r._root&&r._root.appendChild(n._dMarker)}else u&&u.removeChild(n._dMarker)},n}();_TreeDragDropManager._dMarker=wjcCore.createElement('<div class="wj-marker">&nbsp;</div>');exports._TreeDragDropManager=_TreeDragDropManager;_BindingArray=function(){function n(n){this.path=n}return Object.defineProperty(n.prototype,"path",{get:function(){return this._path},set:function(n){if(this._path=n,wjcCore.isString(n))this._bindings=[new wjcCore.Binding(n)];else if(wjcCore.isArray(n)){this._bindings=[];for(var t=0;t<n.length;t++)this._bindings.push(new wjcCore.Binding(n[t]))}else n!=null&&wjcCore.assert(!1,'Path should be a string or an array of strings.');this._maxLevel=this._bindings?this._bindings.length-1:-1},enumerable:!0,configurable:!0}),n.prototype.getValue=function(n,t){var i=Math.min(t,this._maxLevel);return i>-1?this._bindings[i].getValue(n):null},n.prototype.setValue=function(n,t,i){var r=Math.min(t,this._maxLevel);r>-1&&this._bindings[r].setValue(n,i)},n}();exports._BindingArray=_BindingArray