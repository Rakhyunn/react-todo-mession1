# React Todo App Mission

## 개요

**React**와 **Vite**를 이용하여 간단한 Todo List 앱을 만드는 프로젝트입니다.

## 목적

1. React 컴포넌트 구조 이해
2. React 상태 관리 방식 학습
3. localStorage를 활용한 데이터 저장 및 유지 기능 구현

## 기술 스택

- React
- Vite
- JavaScript
- TailwindCSS

## 주요 기능

1. 할 일 추가

- 텍스트 입력 후 버튼 클릭 시 리스트에 새로운 할 일이 추가됩니다.

2. 할 일 삭제

- 각 항목의 삭제 버튼 클릭 시 해당 할 일이 리스트에서 제거됩니다.

3. 완료 체크

- 체크박스를 클릭하면 완료 여부가 표시됩니다.
- 완료된 항목은 스타일이 변경됩니다.

4. localStorage 저장

- 할 일 추가 / 삭제 / 완료 상태 변경 시 todo 데이터가 localStorage에 저장됩니다.

5. 초기 데이터 로드

- 앱 실행 시 localStorage에 저장된 todo 데이터를 불러와 화면에 렌더링합니다.

## 프로젝트 구조

```
src/
├── components/
│ ├── TodoForm.jsx # 할 일 입력 폼
│ ├── TodoItem.jsx # 개별 할 일 항목
│ └── TodoList.jsx # 할 일 목록 렌더링
├── context/
│ └── TodoContext.jsx # Context API 전역 상태 제공
├── hooks/
│ └── useTodos.js # 할 일 CRUD 로직 Custom Hook
├── pages/
│ ├── Main.jsx # 메인 페이지
│ └── Todo.jsx # TODO 관리 페이지
├── App.jsx # 라우팅 설정
└── main.jsx # 앱 진입점
```

## 화면 예시

#### 스크린 샷

<img width="400" height="600" src="https://github.com/user-attachments/assets/14bdad96-f09a-4ad7-a277-8cd7a78bf29e" />
<img width="400" height="600" src="https://github.com/user-attachments/assets/e357e6aa-74e0-4140-b9ac-32f3cea09589" />

#### 영상

<p>
<img src="https://github.com/user-attachments/assets/b26fb537-6520-4ccc-af46-fdb144d1325d">
<img src="https://github.com/user-attachments/assets/87905f4c-83e6-4420-b158-44418a96a179">
</p>

## 회고

- context api를 활용하여 전역으로 상태 관리를 하여 메인과 Todo 페이지에서 사용해보며 익힐 수 있었습니다.
- `useEffect`의 의존성 배열에 `todos`를 넣으면 상태가 바뀔 때마다 localStorage에 자동 저장된다는 흐름을 이번 프로젝트에서 정확히 습득할 수 있었습니다.
- 테일윈드가 익숙하지 않아 AI의 도움을 받아 디자인을 구현했고, 사용된 속성을 카테고리별로 직접 정리하며 의미를 하나씩 파악했습니다. 다음 프로젝트에서는 스스로 작성해보는 것이 목표입니다.
