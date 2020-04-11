var util = require('./utils'),
    config = require('./config');
var sharedConstants = {
    constants: {
        PERMISSION_TYPES: {
            APPLICATION: "APPLICATION",
            DASHBOARD: "DASHBOARD",
            VIEW: "VIEW"
        },
        ROLES: {
            ROLE_ADMIN: "ROLE_ADMIN",
            ROLE_DEVELOPMENT: "ROLE_DEVELOPMENT",
            ROLE_USER: "ROLE_USER"
        },
        PERMISSIONS: {
            READ_USER_MANAGEMENT: "READ_USER-MANAGEMENT_APPLICATION",
            WRITE_USER_MANAGEMENT: "WRITE_USER-MANAGEMENT_APPLICATION",
            UPDATE_USER_MANAGEMENT: "UPDATE_USER-MANAGEMENT_APPLICATION",
            DELETE_USER_MANAGEMENT: "DELETE_USER-MANAGEMENT_APPLICATION",
            READ_APPLICATION_METRICS: "READ_APPLICATION-METRICS_APPLICATION",
            READ_HEALTH_CHECKS: "READ_HEALTH-CHECKS_APPLICATION",
            READ_CONFIGURATION: "READ_CONFIGURATION_APPLICATION",
            READ_AUDITS: "READ_AUDITS_APPLICATION",
            READ_LOGS: "READ_LOGS_APPLICATION",
            UPDATE_LOGS: "UPDATE_LOGS_APPLICATION",
            READ_API: "READ_API_APPLICATION",
            READ_DATABASE: "READ_DATABASE_APPLICATION",
            READ_PERMISSION_MANAGEMENT: "READ_PERMISSION-MANAGEMENT_APPLICATION",
            UPDATE_PERMISSION_MANAGEMENT: "UPDATE_PERMISSION-MANAGEMENT_APPLICATION",
            READ_DASHBOARDS: "READ_DASHBOARDS_APPLICATION",
            WRITE_DASHBOARDS: "WRITE_DASHBOARDS_APPLICATION",
            READ_CONNECTIONS: "READ_CONNECTIONS_APPLICATION",
            WRITE_CONNECTIONS: "WRITE_CONNECTIONS_APPLICATION",
            READ_VISUAL_METADATA: "READ_VISUAL-METADATA_APPLICATION",
            WRITE_VISUAL_METADATA: "WRITE_VISUAL-METADATA_APPLICATION",
            READ_DATASOURCES: 'READ_DATASOURCES_APPLICATION',
            WRITE_DATASOURCES: 'WRITE_DATASOURCES_APPLICATION',
            UPDATE_DATASOURCES: 'UPDATE_DATASOURCES_APPLICATION',
            DELETE_DATASOURCES: 'DELETE_DATASOURCES_APPLICATION',
            READ_DRILLDOWN: 'READ_DRILLDOWN_APPLICATION',
            WRITE_DRILLDOWN: 'WRITE_DRILLDOWN_APPLICATION',
            UPDATE_DRILLDOWN: 'UPDATE_DRILLDOWN_APPLICATION',
            DELETE_DRILLDOWN: 'DELETE_DRILLDOWN_APPLICATION',
            READ_VISUALIZATIONS: 'READ_VISUALIZATIONS_APPLICATION',
            WRITE_VISUALIZATIONS: 'WRITE_VISUALIZATIONS_APPLICATION',
            UPDATE_VISUALIZATIONS: 'UPDATE_VISUALIZATIONS_APPLICATION',
            DELETE_VISUALIZATIONS: 'DELETE_VISUALIZATIONS_APPLICATION',
            WRITE_FILE_UPLOADER: "WRITE_FILE_UPLOADER_APPLICATION",
            SHARE_SCHEDULED_REPORT: "SHARE_SCHEDULED_REPORT_APPLICATION",
            READ_VISUALIZATION_COLORS: "READ_VISUALIZATION_COLORS_APPLICATION",
            WRITE_VISUALIZATION_COLORS: "WRITE_VISUALIZATION_COLORS_APPLICATION",
            UPDATE_VISUALIZATION_COLORS: "UPDATE_VISUALIZATION_COLORS_APPLICATION",
            DELETE_VISUALIZATION_COLORS: "DELETE_VISUALIZATION_COLORS_APPLICATION"

        },
        COMPARABLE_DATA_TYPES: ['timestamp', 'date', 'datetime'],
        CONDITION_TYPES: [{
            displayName: "Or",
            '@type': "Or",
            type: "composite"
        }, {
            displayName: "Between",
            '@type': "Between",
            type: "simple",
        }, {
            displayName: 'Compare',
            '@type': "Compare",
            type: 'simple'
        }, {
            displayName: 'And',
            '@type': 'And',
            type: 'composite'
        }, {
            displayName: 'Contains',
            '@type': 'Contains',
            type: 'simple'
        }, {
            displayName: 'Not Contains',
            '@type': 'NotContains',
            type: 'simple'
        }, {
            displayName: 'Like',
            '@type': 'Like',
            type: 'simple'
        }],
        COMPARE_TYPES: [{
            displayName: "==",
            value: 'EQ'
        }, {
            displayName: '!=',
            value: 'NEQ'
        }, {
            displayName: '>',
            value: 'GT'
        }, {
            displayName: '<',
            value: 'LT'
        }, {
            displayName: '>=',
            value: 'GTE'
        }, {
            displayName: '<=',
            value: 'LTE'
        }],
        'FILTER_TYPES': {
            BASE: 'BASE',
            FILTER: 'FILTER',
            REDUCTION: 'REDUCTION'
        }
    }
}, devConstants = {
    name: 'flairbiApp',
    constants: {
        VERSION: util.parseVersion(),
        DEBUG_INFO_ENABLED: true,
        ...sharedConstants.constants
    },
    template: config.constantTemplate,
    stream: true
}, prodConstants = {
    name: 'flairbiApp',
    constants: {
        VERSION: util.parseVersion(),
        DEBUG_INFO_ENABLED: false,
        ...sharedConstants.constants
    },
    template: config.constantTemplate,
    stream: true
};

module.exports = {
    devConstants: devConstants,
    prodConstants: prodConstants
};
