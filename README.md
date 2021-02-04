# JS-First-Project

## 구현사항
1. [Clock](#1.-Clock)
2. [Greeting](#2.-Greeting)
3. [ToDoList](#3.-ToDoList)
4. [Weather](#4.-Weather)
5. [Random Background](#5.-Random-Background)

## 1. Clock
- `Date` 객체를 사용하여 현재 시간을 가져온다.

---

## 2. Greeting
- `Window` 객체의 `localStorage`를 사용하여 사용자의 이름을 저장한다.

---

## 3. ToDoList
- `Window` 객체의 `localStorage`를 사용하여 ToDoList를 저장한다.
- `text(string)`와 `id(number)` member를 가진 object를 정의하여 `ToDoList` 배열에 push하였고, 이 배열을 Storage에 저장한다.
```javascript
  const listObj = {
    text : text,
    id : newId
  };
  ToDos.push(listObj);
  saveToDos();//배열을 Storage에 저장하는 함수
```
- id를 선언한 이유는 각각의 목록를 삭제할 때 삭제한 목록을 구별하기 위해서이다.
- localStorage는 JavaScript의 데이터를 저장하지 못하고 오직 `string`만 저장이 가능하다. 그래서 `JSON.stringify()`를 사용하여 `string`으로 변환해준다.
- Storage에서 불러올 때는 `JSON.parse()`를 사용하여 원래의 데이터 형태로 바꿔준다.

---

## 4. Weather
  - 위치정보는 `Navigator` 객체의 `geolocation` 속성 메서드 `getCurrentPosition()`를 사용한다.
  - 날씨정보는 [OpenWeatherMap](https://openweathermap.org/)의 API를 사용한다.
  - 날씨정보 API를 불러올 때는 `fetch()`를 사용한다.
  ```javascript
    fetch(url)
    .then(response => response.json()) // json을 다 불러올 때까지 기다려줌
    .then(myJson => {
        //do somthing with json
    });
  ```

---

## 5. Random Background
  - `Math` 객체를 사용하여 난수를 생성한다.
  ```Javascript
    function genRandom() {
      return Math.floor(Math.random() * 3);
    }
  ```
  - 난수에 맞게 이미지를 웹 페이지에 보여준다.

---