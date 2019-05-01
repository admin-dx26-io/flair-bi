import * as angular from 'angular';
import featureBookmarksHtml from './feature-bookmarks.html';
import featureBookmarkDetailHtml from './feature-bookmark-detail.html';
import featureBookmarkDialogHtml from './feature-bookmark-dialog.html';
import featureBookmarkDeleteDialogHtml from './feature-bookmark-delete-dialog.html';
"use strict";

angular.module("flairbiApp").config(stateConfig);

stateConfig.$inject = ["$stateProvider"];

function stateConfig($stateProvider) {
    $stateProvider
        .state("feature-bookmark", {
            parent: "entity",
            url: "/feature-bookmark",
            data: {
                authorities: ["ROLE_USER"],
                pageTitle: "flairbiApp.featureBookmark.home.title"
            },
            views: {
                "content@": {
                    template: featureBookmarksHtml,
                    controller: "FeatureBookmarkController",
                    controllerAs: "vm"
                }
            },
            resolve: {
                translatePartialLoader: [
                    "$translate",
                    "$translatePartialLoader",
                    function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart("featureBookmark");
                        $translatePartialLoader.addPart("global");
                        return $translate.refresh();
                    }
                ]
            }
        })
        .state("feature-bookmark-detail", {
            parent: "feature-bookmark",
            url: "/feature-bookmark/{id}",
            data: {
                authorities: ["ROLE_USER"],
                pageTitle: "flairbiApp.featureBookmark.detail.title"
            },
            views: {
                "content@": {
                    template: featureBookmarkDetailHtml,
                    controller: "FeatureBookmarkDetailController",
                    controllerAs: "vm"
                }
            },
            resolve: {
                translatePartialLoader: [
                    "$translate",
                    "$translatePartialLoader",
                    function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart("featureBookmark");
                        return $translate.refresh();
                    }
                ],
                entity: [
                    "$stateParams",
                    "FeatureBookmark",
                    function ($stateParams, FeatureBookmark) {
                        return FeatureBookmark.get({ id: $stateParams.id })
                            .$promise;
                    }
                ],
                previousState: [
                    "$state",
                    function ($state) {
                        var currentStateData = {
                            name: $state.current.name || "feature-bookmark",
                            params: $state.params,
                            url: $state.href(
                                $state.current.name,
                                $state.params
                            )
                        };
                        return currentStateData;
                    }
                ]
            }
        })
        .state("feature-bookmark-detail.edit", {
            url: "/detail/edit",
            data: {
                authorities: ["ROLE_USER"]
            },
            onEnter: [
                "$stateParams",
                "$state",
                "$uibModal",
                function ($stateParams, $state, $uibModal) {
                    $uibModal
                        .open({
                            template: featureBookmarkDialogHtml,
                            controller: "FeatureBookmarkDialogController",
                            controllerAs: "vm",
                            backdrop: "static",
                            size: "lg",
                            resolve: {
                                entity: [
                                    "FeatureBookmark",
                                    function (FeatureBookmark) {
                                        return FeatureBookmark.get({
                                            id: $stateParams.id
                                        }).$promise;
                                    }
                                ]
                            }
                        })
                        .result.then(
                            function () {
                                $state.go("^", {}, { reload: false });
                            },
                            function () {
                                $state.go("^");
                            }
                        );
                }
            ]
        })
        .state("feature-bookmark.new", {
            url: "/new",
            data: {
                authorities: ["ROLE_USER"]
            },
            onEnter: [
                "$stateParams",
                "$state",
                "$uibModal",
                function ($stateParams, $state, $uibModal) {
                    $uibModal
                        .open({
                            template: featureBookmarkDialogHtml,
                            controller: "FeatureBookmarkDialogController",
                            controllerAs: "vm",
                            backdrop: "static",
                            size: "lg",
                            resolve: {
                                entity: function () {
                                    return {
                                        name: null,
                                        id: null
                                    };
                                }
                            }
                        })
                        .result.then(
                            function () {
                                $state.go("feature-bookmark", null, {
                                    reload: "feature-bookmark"
                                });
                            },
                            function () {
                                $state.go("feature-bookmark");
                            }
                        );
                }
            ]
        })
        .state("feature-bookmark.edit", {
            url: "/{id}/edit",
            data: {
                authorities: ["ROLE_USER"]
            },
            onEnter: [
                "$stateParams",
                "$state",
                "$uibModal",
                function ($stateParams, $state, $uibModal) {
                    $uibModal
                        .open({
                            template: featureBookmarkDialogHtml,
                            controller: "FeatureBookmarkDialogController",
                            controllerAs: "vm",
                            backdrop: "static",
                            size: "lg",
                            resolve: {
                                entity: [
                                    "FeatureBookmark",
                                    function (FeatureBookmark) {
                                        return FeatureBookmark.get({
                                            id: $stateParams.id
                                        }).$promise;
                                    }
                                ]
                            }
                        })
                        .result.then(
                            function () {
                                $state.go("feature-bookmark", null, {
                                    reload: "feature-bookmark"
                                });
                            },
                            function () {
                                $state.go("^");
                            }
                        );
                }
            ]
        })
        .state("feature-bookmark.delete", {
            url: "/{id}/delete",
            data: {
                authorities: ["ROLE_USER"]
            },
            onEnter: [
                "$stateParams",
                "$state",
                "$uibModal",
                function ($stateParams, $state, $uibModal) {
                    $uibModal
                        .open({
                            template: featureBookmarkDeleteDialogHtml,
                            controller: "FeatureBookmarkDeleteController",
                            controllerAs: "vm",
                            size: "md",
                            resolve: {
                                entity: [
                                    "FeatureBookmark",
                                    function (FeatureBookmark) {
                                        return FeatureBookmark.get({
                                            id: $stateParams.id
                                        }).$promise;
                                    }
                                ]
                            }
                        })
                        .result.then(
                            function () {
                                $state.go("feature-bookmark", null, {
                                    reload: "feature-bookmark"
                                });
                            },
                            function () {
                                $state.go("^");
                            }
                        );
                }
            ]
        });
}
