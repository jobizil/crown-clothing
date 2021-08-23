import { createSelector } from 'reselect'

// Select the Directory
const selectDirectory = state => state.directory

export const selectDirectorySection = createSelector(
  [selectDirectory],
  directory => directory.sections
)
