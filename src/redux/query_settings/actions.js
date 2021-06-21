// Define Action Types
export const TOGGLE_DISPLAY_QUERY_SETTINGS_REQUESTED = "TOGGLE_DISPLAY_QUERY_SETTINGS_REQUESTED";
export const TOGGLE_DISPLAY_QUERY_SETTINGS_COMPLETED = "TOGGLE_DISPLAY_QUERY_SETTINGS_COMPLETED";

export const UPDATE_QUERY_SETTING_SINCE_DATE_REQUESTED = "UPDATE_QUERY_SETTING_SINCE_DATE_REQUESTED";
export const UPDATE_QUERY_SETTING_SINCE_DATE_COMPLETED = "UPDATE_QUERY_SETTING_SINCE_DATE_COMPLETED";

export const UPDATE_QUERY_SETTING_INCIDENT_STATUS_REQUESTED = "UPDATE_QUERY_SETTING_INCIDENT_STATUS_REQUESTED";
export const UPDATE_QUERY_SETTING_INCIDENT_STATUS_COMPLETED = "UPDATE_QUERY_SETTING_INCIDENT_STATUS_COMPLETED";

export const UPDATE_QUERY_SETTING_INCIDENT_URGENCY_REQUESTED = "UPDATE_QUERY_SETTING_INCIDENT_URGENCY_REQUESTED";
export const UPDATE_QUERY_SETTING_INCIDENT_URGENCY_COMPLETED = "UPDATE_QUERY_SETTING_INCIDENT_URGENCY_COMPLETED";

// Define Actions
export const toggleDisplayQuerySettings = () => ({
  type: TOGGLE_DISPLAY_QUERY_SETTINGS_REQUESTED
});

export const updateQuerySettingsSinceDate = (sinceDate) => ({
  type: UPDATE_QUERY_SETTING_SINCE_DATE_REQUESTED,
  sinceDate
});

export const updateQuerySettingsIncidentStatus = (incidentStatus) => ({
  type: UPDATE_QUERY_SETTING_INCIDENT_STATUS_REQUESTED,
  incidentStatus
});

export const updateQuerySettingsIncidentUrgency = (incidentUrgency) => ({
  type: UPDATE_QUERY_SETTING_INCIDENT_URGENCY_REQUESTED,
  incidentUrgency
});