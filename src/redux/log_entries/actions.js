// Define Action Types
export const FETCH_LOG_ENTRIES_REQUESTED = "FETCH_LOG_ENTRIES_REQUESTED";
export const FETCH_LOG_ENTRIES_COMPLETED = "FETCH_LOG_ENTRIES_COMPLETED";
export const FETCH_LOG_ENTRIES_ERROR = "FETCH_LOG_ENTRIES_ERROR";

export const UPDATE_RECENT_LOG_ENTRIES = "UPDATE_RECENT_LOG_ENTRIES";
export const UPDATE_RECENT_LOG_ENTRIES_COMPLETED = "UPDATE_RECENT_LOG_ENTRIES_COMPLETED";
export const UPDATE_RECENT_LOG_ENTRIES_ERROR = "UPDATE_RECENT_LOG_ENTRIES_ERROR";

export const CLEAN_RECENT_LOG_ENTRIES = "CLEAN_RECENT_LOG_ENTRIES";
export const CLEAN_RECENT_LOG_ENTRIES_COMPLETED = "CLEAN_RECENT_LOG_ENTRIES_COMPLETED";
export const CLEAN_RECENT_LOG_ENTRIES_ERROR = "CLEAN_RECENT_LOG_ENTRIES_ERROR";

// Define Actions
export const getLogEntriesAsync = (since) => ({
  type: FETCH_LOG_ENTRIES_REQUESTED,
  since
});

export const updateRecentLogEntriesAsync = () => ({
  type: UPDATE_RECENT_LOG_ENTRIES
});

export const cleanRecentLogEntriesAsync = (recentLogEntries) => ({
  type: CLEAN_RECENT_LOG_ENTRIES,
  recentLogEntries
});