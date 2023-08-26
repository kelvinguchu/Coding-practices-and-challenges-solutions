/**
 * Activity Selection using Greedy algorithm.
 */

/**
 * Represents an activity with a start time and finish time.
 * 
 * @typedef {Object} Activity
 * @property {number} start - Start time of the activity.
 * @property {number} finish - Finish time of the activity.
 */

/**
 * Returns a maximum set of activities that can be done by a single person, one at a time.
 * Assumes that activities are already sorted based on their finish time.
 *
 * @param {Activity[]} activities - Array of activities sorted by finish time.
 * @returns {Activity[]} - Maximum set of activities that can be done without overlap.
 */
function selectActivities(activities) {
    const n = activities.length;
    let i = 0;

    // The first activity is always selected as we sort by finish time.
    const result = [activities[0]];

    // Go through the remaining activities.
    for (let j = 1; j < n; j++) {
        // If this activity has a start time greater than or equal to the finish
        // time of the previously selected, then select it.
        if (activities[j].start >= activities[i].finish) {
            result.push(activities[j]);
            i = j;  // Update the index of the last selected activity.
        }
    }

    return result;
}

// Usage example:
const activities = [
    { start: 1, finish: 2 },
    { start: 3, finish: 4 },
    { start: 0, finish: 6 },
    { start: 5, finish: 7 },
    { start: 8, finish: 9 },
    { start: 5, finish: 9 }
];

// Note: Ensure activities are sorted by their finish times before passing to the function.
const sortedActivities = activities.sort((a, b) => a.finish - b.finish);
const selected = selectActivities(sortedActivities);

console.log("Activities selected are:", selected);