define("feed-modals/components/reposts-modal",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","@ember/object","comments/utils/constants","feed-utils/utils/constants","feed-requests/update-actions","@ember/helper","feed-utils/helpers/render-model-path","feed-requests/reshares","@ember/service","@ember/destroyable","@ember/utils","feed-utils/utils/error-parsing","ember-lifeline","@glimmer/tracking","tracked-built-ins","artdeco-empty-state/components/artdeco-empty-state","artdeco-loader/components/artdeco-loader","artdeco-modal/components/artdeco-modal","feed-control-menu/components/comment-restriction-settings-modal","@glimmer/component","voyager-web/config/environment","feed-control-menu/components/control-menu","feed-components-shared/components/modals/decision-modal","graphql-queries/mutations/feed/delete-feed-dash-repost-by-urn.graphql","graphql-queries/mutations/feed/delete-feed-update-by-urn.graphql","@ember/render-modifiers/modifiers/did-insert","feed-components-shared/components/modals/embed-modal","ember-semaphore/components/ember-semaphore","global-helpers/helpers/eq","scaffold-finite-scroll/components/finite-scroll","feed-shared/components/update/generic-update","global-helpers/helpers/is-empty","global-helpers/helpers/load","global-helpers/helpers/not","trust/components/reporting-flow-modal","sharing-entry/components/share-box-modal","ember-cli-pemberly-i18n/helpers/t","ember-cli-pemberly-tracking/modifiers/track-render","feed-shared/components/render-models/update-v2"],(function(e,t,o,n,s,i,a,r,l,d,c,p,m,u,h,g,f,T,_,y,E,S,M,b,D,R,O,C,A,k,I,w,N,U,v,P,L,x,F,j,K,B,q,z,G){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var H,W,V,J,Q,Y,$,X,Z,ee,te,oe,ne,se,ie,ae,re,le,de,ce,pe,me,ue
e.default=(0,a.setComponentTemplate)((0,i.createTemplateFactory)({id:"rAokCXKl",block:'[[[1,"\\n"],[41,[51,[30,0,["modalToShow"]]],[[[1,"      "],[8,[32,0],null,[["@dismissModal","@headerId","@isOpen","@modalClasses","@size"],[[30,0,["dismissRepostsModal"]],"feed-modals-reposts-modal__header",[30,1],"feed-modals-reposts-modal","medium"]],[["default"],[[[[1,"\\n        "],[8,[30,2,["artdeco-modal-header"]],null,[["@classNames"],["feed-modals-reposts-modal__header-container pl5"]],[["default"],[[[[1,"\\n          "],[10,"h2"],[14,1,"feed-modals-reposts-modal__header"],[14,0,"t-20 t-black--light t-normal"],[12],[1,"\\n            "],[1,[28,[32,1],["i18n_num_reposts_v2","feed-modals/components/reposts-modal"],[["value"],[[30,3]]]]],[1,"\\n          "],[13],[1,"\\n        "]],[]]]]],[1,"\\n\\n        "],[8,[30,2,["artdeco-modal-content"]],[[16,0,[29,["feed-modals-reposts-modal__content loading-bg p0\\n            ",[52,[28,[32,2],[[30,0,["repostsData"]]],null],"feed-modals-reposts-modal__content--empty"]]]]],null,[["default"],[[[[1,"\\n"],[41,[30,1],[[[44,[[28,[32,3],[[30,0,["initialReposts"]]],null]],[[[41,[30,4,["isLoading"]],[[[1,"                "],[8,[32,4],null,null,null],[1,"\\n"]],[]],[[[41,[30,4,["isLoaded"]],[[[1,"                "],[8,[32,5],[[4,[32,7],null,[["pageKey","routeName","currentRoute"],[[30,0,["pageKey"]],[28,[32,8],[[53,"outletState"],"render.name"],null],[28,[32,8],[[53,"outletState"],"render"],null]]]],[4,[32,9],[[30,0,["checkReloadReposts"]]],null]],[["@isDisabled","@items","@onTrigger"],[[28,[32,6],[[30,0,["hasMoreItems"]]],null],[30,0,["repostsData"]],[30,0,["loadMoreReposts"]]]],[["content","empty"],[[[[1,"\\n"],[42,[28,[31,5],[[28,[31,5],[[30,6]],null]],null],null,[[[1,"                      "],[8,[30,5],null,[["@index"],[[30,8]]],[["default"],[[[[1,"\\n                        "],[8,[32,10],null,[["@customModuleKey","@hideCaEntryPoint","@hideComments","@hideReshare","@hideSendPrivately","@isRepostsTotalClickable","@isWrapped","@model","@shouldShowReshare","@onCommentButtonClick","@onCommentsTotalClick","@onControlMenuItemSelection","@onReactionsTotalClick","@openFeedDetailPage","@reloadActionsDisabled","@shouldHideContentAdminIdentityToggle","@socialActionsClassNames","@socialCountClassNames","@updateIndex","@isDashEnabled"],[[30,0,["pageKey"]],true,true,true,true,false,true,[30,7],false,[28,[32,11],[[30,0,["goToFeedDetailsPage"]],[30,7,["metadata","backendUrn"]]],null],[28,[32,11],[[30,0,["goToFeedDetailsPage"]],[30,7,["metadata","backendUrn"]]],null],[30,0,["onControlMenuItemSelection"]],[28,[32,11],[[30,0,["goToFeedDetailsPage"]],[30,7,["metadata","backendUrn"]]],null],[28,[32,11],[[30,0,["goToFeedDetailsPage"]],[30,7,["metadata","backendUrn"]]],null],true,true,"feed-shared-social-action-bar--extra-horizontal-padding-for-humor-reaction",[30,0,["socialCountClassNames"]],[30,8],true]],null],[1,"\\n                        "],[10,"hr"],[14,0,"artdeco-divider feed-modals-reposts-modal__update-divider mb0"],[12],[13],[1,"\\n                      "]],[]]]]],[1,"\\n"]],[7,8]],null],[1,"                  "]],[5,6]],[[[1,"\\n                    "],[10,0],[14,0,"feed-modals-reposts-modal__image-and-message display-flex align-items-center flex-column text-align-center justify-content-center feed-modals-reposts-modal__image-and-message--lighter"],[12],[1,"\\n                      "],[8,[32,12],null,[["@headline","@illustration","@message","@size"],[[28,[32,1],["i18n_reposts_list_empty_state_title","feed-modals/components/reposts-modal"],null],"empty-no-mail",[28,[32,1],["i18n_reposts_list_empty_state_message","feed-modals/components/reposts-modal"],null],2]],null],[1,"\\n                    "],[13],[1,"\\n                  "]],[]]]]],[1,"\\n"],[41,[30,0,["shouldShowBottomBanner"]],[[[1,"                  "],[10,0],[14,0,"feed-modals-reposts-modal__private-shares-footer"],[12],[1,"\\n                    "],[1,[28,[32,1],["i18n_reposts_list_empty_state_message","feed-modals/components/reposts-modal"],null]],[1,"\\n                  "],[13],[1,"\\n"]],[]],null]],[]],[[[41,[30,4,["isError"]],[[[1,"                "],[10,0],[14,0,"feed-modals-reposts-modal__image-and-message p4 display-flex align-items-center flex-column text-align-center justify-content-center"],[12],[1,"\\n                  "],[8,[32,12],null,[["@actionText","@buttonType","@headline","@illustration","@message","@onButtonClick","@size"],[[28,[32,1],["i18n_try_again","feed-modals/components/reposts-modal"],null],"secondary",[28,[32,1],["i18n_reposts_list_failed_title","feed-modals/components/reposts-modal"],null],"error-server",[28,[32,1],["i18n_reposts_list_failed_message","feed-modals/components/reposts-modal"],null],[30,0,["getInitialReposts"]],2]],null],[1,"\\n                "],[13],[1,"\\n              "]],[]],null]],[]]]],[]]]],[4]]]],[]],null],[1,"        "]],[]]]]],[1,"\\n      "]],[2]]]]],[1,"\\n"]],[]],null],[1,"\\n"],[41,[28,[32,13],[[30,0,["modalToShow"]],[30,0,["modalTypes","REPORT"]]],null],[[[41,[30,0,["shouldUseNewReportingFlow"]],[[[1,"        "],[8,[32,14],null,[["@authorUrn","@cancel","@class","@contentSource","@entityUrn","@failure","@isDisinterestOptionEnabled","@success","@track"],[[30,0,["reportingArgs","authorUrn"]],[30,0,["_resetAllModals"]],"feed-modals-reposts-modal__semaphore",[30,0,["reportingArgs","contentSource"]],[30,0,["reportingArgs","entityUrn"]],[30,0,["_onReportFailure"]],false,[30,0,["_onReportSuccess"]],[30,0,["_onReportTrack"]]]],null],[1,"\\n"]],[]],[[[1,"        "],[8,[32,15],null,[["@authorProfileId","@authorUrn","@cancel","@class","@contentSource","@entityUrn","@failure","@isBackButtonEnabled","@isDisinterestOptionEnabled","@parentUrn","@success","@track"],[[30,0,["reportingArgs","authorProfileId"]],[30,0,["reportingArgs","authorUrn"]],[30,0,["_resetAllModals"]],"feed-modals-reposts-modal__semaphore",[30,0,["reportingArgs","contentSource"]],[30,0,["reportingArgs","entityUrn"]],[30,0,["_onReportFailure"]],false,false,[30,0,["reportingArgs","parentUrn"]],[30,0,["_onReportSuccess"]],[30,0,["_onReportTrack"]]]],null],[1,"\\n"]],[]]]],[]],[[[41,[28,[32,13],[[30,0,["modalToShow"]],[30,0,["modalTypes","COMMENTS_RESTRICTIONS_SETTINGS"]]],null],[[[1,"      "],[8,[32,16],null,[["@isModalOpen","@onUpdateCommentRestrictionSettings","@dismissModal","@update","@allowedCommentersScope"],[true,[30,0,["_onUpdateCommentRestrictionSettings"]],[30,0,["commentRestrictionModalArgs","dismissModal"]],[30,0,["commentRestrictionModalArgs","update"]],[30,0,["commentRestrictionModalArgs","update","socialDetail","allowedCommentersScope"]]]],null],[1,"\\n"]],[]],[[[41,[28,[32,13],[[30,0,["modalToShow"]],[30,0,["modalTypes","DECISION"]]],null],[[[1,"      "],[8,[32,17],null,[["@isModalOpen","@modalContext","@closeDecisionModal"],[true,[30,0,["decisionModalContext"]],[30,0,["_resetAllModals"]]]],null],[1,"\\n"]],[]],[[[41,[28,[32,13],[[30,0,["modalToShow"]],[30,0,["modalTypes","EMBED"]]],null],[[[1,"      "],[8,[32,18],null,[["@hasLinkedInVideo","@isOpen","@model","@onDismissModal","@useLiveEmbedRoute"],[[30,0,["embedModalArgs","hasLinkedInVideo"]],true,[30,0,["embedModalArgs","action"]],[30,0,["_resetAllModals"]],[30,0,["embedModalArgs","useLiveEmbedRoute"]]]],null],[1,"\\n"]],[]],[[[41,[28,[32,13],[[30,0,["modalToShow"]],[30,0,["modalTypes","EDIT_SHARE"]]],null],[[[1,"      "],[8,[32,19],null,[["@isShareboxModalOpen","@onCloseShareboxModal","@onEditShareSuccess","@shareUrn","@updateV2"],[true,[30,0,["_resetAllModals"]],[30,0,["editModalArgs","success"]],[30,0,["editModalArgs","update","metadata","shareUrn"]],[30,0,["editModalArgs","update"]]]],null],[1,"\\n    "]],[]],null]],[]]]],[]]]],[]]]],[]]],[1,"  "]],["@isRepostsModalOpen","modal","@numShares","promise","ItemContainer","items","repost","index"],false,["unless","if","let","-get-dynamic-var","each","-track-array"]]',moduleName:"feed-modals/components/reposts-modal.gjs",scope:()=>[b.default,q.default,x.default,F.default,M.default,P.default,j.default,z.default,p.get,w.default,L.default,p.fn,S.default,v.default,K.default,U.default,D.default,A.default,N.default,B.default],isStrictMode:!0}),(H=(0,h.inject)("tracking"),W=(0,h.inject)("global-services@store-shim"),V=(0,h.inject)("social-counts-service@social-counts"),J=(0,h.inject)("i18n"),Q=(0,h.inject)("persistent-toast-manager@persistent-toast-manager"),Y=(0,h.inject)("jet"),$=(0,h.inject)("router"),X=(0,h.inject)("pem-tracking"),Z=(0,h.inject)("@linkedin/ember-restli-graphql@graphql"),ee=class extends R.default{constructor(){super(...arguments);(0,t.default)(this,"tracking",te,this);(0,t.default)(this,"storeShim",oe,this);(0,t.default)(this,"socialCountsService",ne,this);(0,t.default)(this,"i18n",se,this);(0,t.default)(this,"persistentToastManager",ie,this);(0,t.default)(this,"jet",ae,this);(0,t.default)(this,"router",re,this);(0,t.default)(this,"pemTracking",le,this);(0,t.default)(this,"graphql",de,this);(0,t.default)(this,"repostsData",ce,this);(0,t.default)(this,"promise",pe,this);(0,t.default)(this,"hasMoreItems",me,this);(0,t.default)(this,"modalToShow",ue,this);(0,o.default)(this,"hasBeenOpened",!1);(0,o.default)(this,"metadata",void 0);(0,o.default)(this,"paging",void 0);(0,o.default)(this,"pageKey","flagship3_feed_reshare_list");(0,o.default)(this,"modalTypes",{COMMENTS_RESTRICTIONS_SETTINGS:"COMMENTS_RESTRICTIONS_SETTINGS",DECISION:"DECISION",DELETE:"DELETE",EDIT_SHARE:"EDIT_SHARE",EMBED:"EMBED",HIDE_REPOST_MODAL:"HIDE_REPOST_MODAL",REPORT:"REPORT"})}get shouldShowBottomBanner(){const{numShares:e}=this.args,t=this.repostsData.length
return!(0,f.isEmpty)(this.repostsData)&&t!==e}get shouldUseNewReportingFlow(){return"UGC_POST"===this.reportingArgs.contentSource||"GROUPS_POST"===this.reportingArgs.contentSource}get initialReposts(){return this.getInitialReposts()}dismissRepostsModal(){var e,t
null===(e=(t=this.args).dismissRepostsModal)||void 0===e||e.call(t)
this.hasBeenOpened=!0}getInitialReposts(){const e={reload:!0,adapterOptions:{degradations:[d.DEGRADATION_TRACKING_METADATA.REPOST_LIST],degradedEntityIDsToRemove:[]}}
this.promise=(0,u.getReshares)({options:e,graphQlService:this.graphql,targetUrn:this.args.updateId}).then((e=>{let{elements:t,metadata:o,paging:n,hasMoreItems:s}=e
if(!(0,g.isDestroying)(this)){this.repostsData=t
this.socialCountsService.registerElementsList(this.repostsData)
this.metadata=o
this.paging=n
this.hasMoreItems=s}})).catch((e=>{if(!(0,g.isDestroying)(this)&&(0,T.isHttpErrorStatus)(e)){const e=this.i18n.lookupTranslation(this.constructor,"i18n_reposts_list_failed_title")()
this.persistentToastManager.error({message:e})
this.jet.logError(new Error("Network request failed while attempting to fetch reposts list"),d.JET_TAGS.GET_SHARES,!1)}throw e}))
return this.promise}checkReloadReposts(){if(this.hasBeenOpened){this.hasBeenOpened=!1
this.getInitialReposts()}}loadMoreReposts(){var e
const t={adapterOptions:{degradations:[d.DEGRADATION_TRACKING_METADATA.REPOST_LIST],degradedEntityIDsToRemove:[]}}
return(0,u.getReshares)({options:t,graphQlService:this.graphql,targetUrn:this.args.updateId,pagination:this.paging,additionalParams:{paginationToken:null===(e=this.metadata)||void 0===e?void 0:e.paginationToken}}).then((e=>{let{elements:t,metadata:o,paging:n,hasMoreItems:s}=e
if(!(0,g.isDestroying)(this)){this.repostsData.push(...t)
this.socialCountsService.registerElementsList(t)
this.paging=n
this.metadata=o
this.hasMoreItems=s}}))}retry(){this.getInitialReposts()}goToFeedDetailsPage(e){var t,o
null===(t=(o=this.args).dismissRepostsModal)||void 0===t||t.call(o)
this.router.transitionTo("feed.update",e)}onControlMenuItemSelection(e){let{menuAction:t,dashUpdateUrn:o}=e
if({[d.controlMenuMap.COMMENTS_RESTRICTIONS_SETTINGS.action]:!0,[d.controlMenuMap.DELETE.action]:!0,[d.controlMenuMap.DISABLE_COMMENTS.action]:!0,[d.controlMenuMap.EDIT_SHARE.action]:!0,[d.controlMenuMap.EMBED.action]:!0,[d.controlMenuMap.REPORT.action]:!0,[d.controlMenuMap.DELETE_REPOST.action]:!0}[t.action]){this.modalToShow=this.modalTypes.HIDE_REPOST_MODAL;(0,_.scheduleTask)(this,"render",(()=>{switch(t.action){case d.controlMenuMap.REPORT.action:this._reportingFlow(t)
break
case d.controlMenuMap.COMMENTS_RESTRICTIONS_SETTINGS.action:this._commentRestrictionsSettingsFlow(t)
break
case d.controlMenuMap.DELETE.action:this._deleteFlow({menuAction:t.menuAction,dashUpdateUrn:o})
break
case d.controlMenuMap.DELETE_REPOST.action:this._deleteRepostFlow(t)
break
case d.controlMenuMap.DISABLE_COMMENTS.action:this._disableCommentsFlow(t,t.menuAction.targetUrn)
break
case d.controlMenuMap.EDIT_SHARE.action:this._editFlow(t)
break
case d.controlMenuMap.EMBED.action:this._embedFlow(t)
break
default:this.goToFeedDetailsPage(t.menuAction.targetUrn)}}))}return null}_resetAllModals(){(0,_.scheduleTask)(this,"render",(()=>{this.modalToShow=null
this.decisionModalContext={}
this.commentRestrictionModalArgs={}
this.editModalArgs={}
this.embedModalArgs={}
this.reportingArgs={}}))}_findUpdateByUrn(e){let{targetUrn:t,actionTypeMatch:o="DELETE"}=e
for(let e=0;e<this.repostsData.length;e++){var n
const s=this.repostsData[e],i=s.metadata
if(t===(null==i?void 0:i.shareUrn))return{item:s,index:e}
const a=null==i||null===(n=i.updateActions)||void 0===n?void 0:n.actions
if(null==a?void 0:a.find((e=>e.actionType.includes(o)&&e.targetUrn===t)))return{item:s,index:e}}return{}}_removeUpdateFromList(e,t,o){const{index:n}=this._findUpdateByUrn({targetUrn:e,actionTypeMatch:o||"DELETE",dashUpdateUrn:t})
n>-1&&this.repostsData.splice(n,1)}_commentRestrictionsSettingsFlow(e){let{menuAction:t}=e
const{targetUrn:o}=t,{item:n}=this._findUpdateByUrn({targetUrn:o,actionTypeMatch:"COMMENTS_RESTRICTIONS_SETTINGS"})
if(n){this.modalToShow=this.modalTypes.COMMENTS_RESTRICTIONS_SETTINGS
this.commentRestrictionModalArgs={update:n,targetUrn:o,dismissModal:()=>{this.decisionModalContext||this._resetAllModals()}}}}_deleteRepostFlow(e){let{menuAction:t}=e
const o=this.i18n.lookupTranslation(A.default,"delete_repost")(),n=this.i18n.lookupTranslation(A.default,"delete_repost_description")(),s=this.i18n.lookupTranslation(A.default,"delete")(),i=this.i18n.lookupTranslation(A.default,"cancel")(),{targetUrn:a}=t
this.decisionModalContext={confirmAction:()=>this._onDeleteRepostConfirmed(a),trackingPrefix:"deletereposts.",confirmTrackingKey:"delete",cancelTrackingKey:"cancel",pageTrackingKey:"flagship3_feed_deletereposts.module",modalTitle:o,modalDescription:n,confirmKeyText:s,cancelKeyText:i}
this.modalToShow=this.modalTypes.DECISION}_onDeleteRepostConfirmed(e){const t=`/${O.default.namespace}/voyagerFeedDashReposts/${e}`,o=this.graphql.executeMutation(k.default,{resourceKey:e})
this.pemTracking.trackFeatureDegradations(t,[e],[d.DEGRADATION_TRACKING_METADATA.REPOST_DELETE],o)
o.then((()=>{var t
if(!(0,g.isDestroying)(this)){this._removeUpdateFromList(e,e,"DELETE_REPOST")
null===(t=this.args.updateTrackingObj)||void 0===t||t.fireFeedActionAndSponsoredTrackingEvents({actionCategory:"DELETE",actionType:"deleteRepost",controlName:"control_delete"})}})).catch((e=>{if((0,g.isDestroying)(this))throw e
const t=this.i18n.lookupTranslation(C.default,"i18n_delete_repost_unsuccessful")()
this.persistentToastManager.error({message:t})
throw e}))}_deleteFlow(e){let{menuAction:t,dashUpdateUrn:o}=e
const n=this.i18n.lookupTranslation(A.default,"delete_post")(),s=this.i18n.lookupTranslation(A.default,"delete_post_description")(),i=this.i18n.lookupTranslation(A.default,"delete")(),a=this.i18n.lookupTranslation(A.default,"cancel")(),{targetUrn:r}=t
this.decisionModalContext={confirmAction:()=>this._onDeleteConfirmed(r,o),trackingPrefix:"deleteshares.",confirmTrackingKey:"delete",cancelTrackingKey:"cancel",pageTrackingKey:this.pageKey,modalTitle:n,modalDescription:s,confirmKeyText:i,cancelKeyText:a}
this.modalToShow=this.modalTypes.DECISION}_reportingFlow(e){let{menuAction:t}=e
this.reportingArgs={authorProfileId:t.authorProfileId??"",authorUrn:t.authorUrn,contentSource:t.contentSource,entityUrn:t.targetUrn,parentUrn:t.parentUrn??""}
this.modalToShow=this.modalTypes.REPORT}_editFlow(e){let{menuAction:t}=e
const{targetUrn:o}=t,{item:n,index:s}=this._findUpdateByUrn({targetUrn:o,actionTypeMatch:"EDIT_SHARE"})
if(n){this.modalToShow=this.modalTypes.EDIT_SHARE
this.editModalArgs={update:n,success:e=>{this.resharesData[s]=e}}}else this.goToFeedDetailsPage(o)}_embedFlow(e){let{menuAction:t}=e
const{item:o}=this._findUpdateByUrn({targetUrn:t.targetUrn,actionTypeMatch:"EMBED"})
if(o){const{content:e}=o,n="linkedin-video"===(0,m.getComponentType)(e)
this.embedModalArgs={action:t,hasLinkedInVideo:n,closeEmbedModal:this._resetAllModals}
this.modalToShow=this.modalTypes.EMBED}}_onUpdateCommentRestrictionSettings(e){const{update:t,targetUrn:o}=this.commentRestrictionModalArgs
if(e!==l.ALLOWED_COMMENTERS_SCOPE.NONE)this._updateCommentRestrictionSetting(o,e,t)
else{const e=this.i18n.lookupTranslation(A.default,"turn_off_comments")(),n=this.i18n.lookupTranslation(A.default,"turn_off_comments_description")(),s=this.i18n.lookupTranslation(A.default,"turn_off")(),i=this.i18n.lookupTranslation(A.default,"cancel")()
this.decisionModalContext={confirmAction:()=>{this._updateCommentRestrictionSetting(o,l.ALLOWED_COMMENTERS_SCOPE.NONE,t)},trackingPrefix:"select_comment_controls_settings",confirmTrackingKey:"_disable",cancelTrackingKey:"_cancel",pageTrackingKey:this.pageKey,modalTitle:e,modalDescription:n,confirmKeyText:s,cancelKeyText:i}
this.modalToShow=this.modalTypes.DECISION}}_updateCommentRestrictionSetting(e,t,o){var n,s
const[i,a,d]=(0,c.dashUpdateCommentRestrictionSettingRequest)((null===(n=o.socialDetail)||void 0===n?void 0:n.dashEntityUrn)??(null===(s=o.socialDetail)||void 0===s?void 0:s.entityUrn),t)
return this.storeShim.adapterFor("-ember-m3").ajax(i,a,d).then((()=>{if(!(0,g.isDestroying)(this)){(0,r.set)(o,"socialDetail.allowedCommentersScope",t)
if(t===l.ALLOWED_COMMENTERS_SCOPE.NONE){(0,r.set)(o,"socialDetail.socialPermissions.canPostComments",!1);(0,r.set)(o,"socialDetail.totalSocialActivityCounts.numComments",0)}else(0,r.set)(o,"socialDetail.socialPermissions.canPostComments",!0)
const e={ALL:"comment_restriction_success_ALL",CONNECTIONS_ONLY:"comment_restriction_success_CONNECTIONS_ONLY",NONE:"comment_restriction_success_NONE"},n=this.i18n.lookupTranslation(D.default,e[t])()
this.persistentToastManager.success({message:n})}})).catch((e=>{if(!(0,g.isDestroying)(this)){const e=this.i18n.lookupTranslation(D.default,"comment_restriction_network_error_occurred")()
e&&this.persistentToastManager.error({message:e})}throw e}))}_disableCommentsFlow(e,t){const o=this.i18n.lookupTranslation(A.default,"disable_comments")(),n=this.i18n.lookupTranslation(A.default,"disable_comments_description")(),s=this.i18n.lookupTranslation(A.default,"disable")(),i=this.i18n.lookupTranslation(A.default,"cancel")(),{item:a}=this._findUpdateByUrn({targetUrn:t,actionTypeMatch:"DISABLE_COMMENTS"})
this.decisionModalContext={confirmAction:()=>this._onToggleCommenting(e,a),trackingPrefix:"disable_comments",confirmTrackingKey:".disable",cancelTrackingKey:"cancel",pageTrackingKey:this.pageKey,modalTitle:o,modalDescription:n,confirmKeyText:s,cancelKeyText:i}
this.modalToShow=this.modalTypes.DECISION}_onToggleCommenting(e,t){var o
const n="DISABLE_COMMENTS"===e.actionType,[s,i]=(0,c.dashUpdateCommentRestrictionSettingRequest)(null===(o=t.socialDetail)||void 0===o?void 0:o.entityUrn,n)
return this.storeShim.adapterFor("-ember-m3").ajax(s,i).then((()=>{if(!(0,g.isDestroying)(this)){(0,r.set)(t,"socialDetail.commentingDisabled",n);(0,r.set)(t,"socialDetail.socialPermissions.canPostComments",!n)
if(n){var e
const o=this.socialCountsService.getSocialCountsManager(null===(e=t.socialDetail)||void 0===e?void 0:e.totalSocialActivityCounts)
null==o||o.updateCommentsCount(0)}}})).catch((e=>{if(!(0,g.isDestroying)(this)){const e=this.i18n.lookupTranslation(G.default,"network_error_occurred")()
e&&this.persistentToastManager.error({message:e})}throw e})).then((()=>{if(!(0,g.isDestroying)(this)){this._updateCommentPermissionsAction(e)
this._resetAllModals()}}))}_updateCommentPermissionsAction(e){let{menuAction:t}=e
const o="ENABLE_COMMENTS"===t.actionType?"DISABLE_COMMENTS":"ENABLE_COMMENTS",n="ENABLE_COMMENTS"===o?this.i18n.lookupTranslation(C.default,"i18n_enable_comments")():this.i18n.lookupTranslation(C.default,"i18n_disable_comments")();(0,r.setProperties)(t,{actionType:o,text:n})}_onReportSuccess(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).includes("HIDE_CONTENT")&&this._removeUpdateFromList(this.reportingArgs.entityUrn)
this._resetAllModals()}_onReportFailure(){this._resetAllModals()
const e=this.i18n.lookupTranslation(C.default,"network_error")()
this.persistentToastManager.error({message:e})}_onReportTrack(e){const t=e.moduleKey
t&&this.tracking.fireInteractionEvent(t)}_onDeleteConfirmed(e,t){const o={degradations:[d.DEGRADATION_TRACKING_METADATA.POST_DELETE],degradedEntityIDsToRemove:[t]}
return this.graphql.executeMutation(I.default,{updateUrn:t},{adapterOptions:o}).then((()=>{(0,g.isDestroying)(this)||this._removeUpdateFromList(e,t)})).catch((e=>{if(!(0,g.isDestroying)(this)){const e=this.i18n.lookupTranslation(C.default,"i18n_delete_post_unsuccessful")()
this.persistentToastManager.error({message:e})}throw e}))}},te=(0,n.default)(ee.prototype,"tracking",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=(0,n.default)(ee.prototype,"storeShim",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=(0,n.default)(ee.prototype,"socialCountsService",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=(0,n.default)(ee.prototype,"i18n",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=(0,n.default)(ee.prototype,"persistentToastManager",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=(0,n.default)(ee.prototype,"jet",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=(0,n.default)(ee.prototype,"router",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=(0,n.default)(ee.prototype,"pemTracking",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),de=(0,n.default)(ee.prototype,"graphql",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce=(0,n.default)(ee.prototype,"repostsData",[y.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new E.TrackedArray([])}}),pe=(0,n.default)(ee.prototype,"promise",[y.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me=(0,n.default)(ee.prototype,"hasMoreItems",[y.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),ue=(0,n.default)(ee.prototype,"modalToShow",[y.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),(0,n.default)(ee.prototype,"dismissRepostsModal",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"dismissRepostsModal"),ee.prototype),(0,n.default)(ee.prototype,"getInitialReposts",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"getInitialReposts"),ee.prototype),(0,n.default)(ee.prototype,"checkReloadReposts",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"checkReloadReposts"),ee.prototype),(0,n.default)(ee.prototype,"loadMoreReposts",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"loadMoreReposts"),ee.prototype),(0,n.default)(ee.prototype,"retry",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"retry"),ee.prototype),(0,n.default)(ee.prototype,"goToFeedDetailsPage",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"goToFeedDetailsPage"),ee.prototype),(0,n.default)(ee.prototype,"onControlMenuItemSelection",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"onControlMenuItemSelection"),ee.prototype),(0,n.default)(ee.prototype,"_resetAllModals",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_resetAllModals"),ee.prototype),(0,n.default)(ee.prototype,"_onDeleteRepostConfirmed",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onDeleteRepostConfirmed"),ee.prototype),(0,n.default)(ee.prototype,"_onUpdateCommentRestrictionSettings",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onUpdateCommentRestrictionSettings"),ee.prototype),(0,n.default)(ee.prototype,"_updateCommentRestrictionSetting",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_updateCommentRestrictionSetting"),ee.prototype),(0,n.default)(ee.prototype,"_onToggleCommenting",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onToggleCommenting"),ee.prototype),(0,n.default)(ee.prototype,"_onReportSuccess",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onReportSuccess"),ee.prototype),(0,n.default)(ee.prototype,"_onReportFailure",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onReportFailure"),ee.prototype),(0,n.default)(ee.prototype,"_onReportTrack",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onReportTrack"),ee.prototype),(0,n.default)(ee.prototype,"_onDeleteConfirmed",[r.action],Object.getOwnPropertyDescriptor(ee.prototype,"_onDeleteConfirmed"),ee.prototype),ee))}))
define("feed-modals/config/environment",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="feed-modals/config/environment",o=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(o))}catch(e){t={}}e.default=t}))
define.alias("ember-holy-futuristic-template-namespacing-batman/helpers/-translate-dynamic-2","feed-modals/helpers/ember-holy-futuristic-template-namespacing-batman-translate-dynamic-2")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","feed-modals/helpers/format-number")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-name","feed-modals/helpers/hue-web-artdeco-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-v2","feed-modals/helpers/hue-web-artdeco-li-icon-migration-runtime-v2")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-path","feed-modals/helpers/hue-web-artdeco-li-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-argument","feed-modals/helpers/hue-web-artdeco-migration-runtime")
define.alias("ember-cli-pemberly-i18n/helpers/t","feed-modals/helpers/t")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/utils/mapping-data","feed-modals/utils/mapping-data")

//# sourceMappingURL=engine.map