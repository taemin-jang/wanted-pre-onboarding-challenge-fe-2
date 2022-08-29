# 원티드 프리온보딩 프론트엔드 챌린지 9월: TypeScript

## 사전 과제 요구사항

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- [x] `JSDoc`을 활용해 문서화한다.
- [x] `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
/**
 * Todo
 * @typedef {object} Todo
 * @param {string} id - Todo ID
 * @param {string} content - Todo Content
 * @param {boolean} isCompleted - Todo is Completed
 * @param {string} category - Todo Category
 * @param {Array<string>} [tags] - Todo Tags (optional)
 */
```

### Tags

```js
/**
 * tags
 * @typedef {object} Tags
 * @param {string} name - Tags Name
 */
```

#### createTodo

- 할 일을 추가할 수 있습니다.

- 내용없이 추가할 수 없습니다.

```js
/**
 * @function createTodo
 * - 할 일을 추가합니다.
 * - 내용 없이 추가할 수 없다.
 * @param {string} content - Todo Content
 * @param {string} category - Todo Category
 * @param {Array<string>} [tags] - Todo Tags (optional)
 * @returns
 */
function createTodo(content) {}
```

#### getTodo

- 모든 할 일을 조회할 수 있습니다.

- ID를 기반으로 특정 할 일을 조회할 수 있습니다.

```js
/**
 * @function getTodo
 *  - 모든 할 일을 조회할 수 있다.
 *  - ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id - Todo ID
 * @returns
 */
function getTodo(id) {}
```

#### updateTodo

- ID를 제외한 모든 속성을 수정할 수 있습니다.

- 특정 할 일의 특정 태그를 수정할 수 있습니다.

```js
/**
 * @function updateTodo
 * - ID를 제외한 모든 속성을 수정할 수 있다.
 * - 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {string} id - Todo ID
 * @param {Array<string>} tags  - Todo Tags (optional)
 * @returns
 */
function updateTodo(id, tags) {}
```

#### deleteTodo

- ID를 기반으로 특정 할 일을 삭제할 수 있습니다.

- 모든 할 일을 제거할 수 있습니다.

- 특정 할 일의 특정 태그를 삭제할 수 있습니다.

- 특정 할 일의 모든 태그를 제거할 수 있습니다.

```js
/**
 * @function deleteTodo
 * - ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * - 모든 할 일을 제거할 수 있다.
 * - 특정 할 일의 특정 태그를 삭제할 수 있다.
 * - 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} id - Todo ID
 * @param {Array<string>} tags  - Todo Tags (optional)
 * @returns
 */
function deleteTodo(id, tags) {}
```
