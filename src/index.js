/** Todo
 * @typedef {object} Todo
 * @param {string} id - Todo ID
 * @param {string} content - Todo Content
 * @param {boolean} isCompleted - Todo is Completed
 * @param {string} category - Todo Category
 * @param {Array<string>} [tags] - Todo Tags (optional)
 */

/** tags
 * @typedef {object} Tags
 * @param {string} name - Tags Name
 */

/** @function createTodo
 * @param {string} content - Todo Content
 * @param {string} category - Todo Category
 * @param {Array<string>} [tags] - Todo Tags (optional)
 */
function createTodo(content) {}

/** @function getTodo
 * @param {string} id - Todo ID
 * @returns {void}
 */
function getTodo(id) {}

/** @function updateTodo
 * @param {string} id - Todo ID
 * @param {Array<string>} tags  - Todo Tags (optional)
 */
function updateTodo(id, tags) {}

/** @function deleteTodo
 * @param {string} id - Todo ID
 * @param {Array<string>} tags  - Todo Tags (optional)
 */
function deleteTodo(id, tags) {}
