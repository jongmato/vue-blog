# firebase
- 프론트단에서 수정이 가능하므로 보안 규칙 설정이 중요하다.
- 기본 GCP(Google Cloud Platform) 리소스 위치 : DB, Storage등이 보관되는 지역
- firebase.database = realtimedatabase
- firestore =  cloud firestore
- Snapshot.val()로 접근해야 데이터를 볼 수 있다.
- firebase deploy —only database : 변경된 데이터베이스(realtime database) 규칙을 적용할 때 사용하는 명령어 
- firebase deploy —only firestore : 변경된 데이터베이스(cloud store) 규칙을 적용할 때 사용하는 명령어 

# v-list
- v-list-item-action : 이벤트용 버튼을 목록에서 가장 적합한 레이아웃으로 자동 배치해준다.
- <v-list-group> no-action속성이 true면 공백을 없애 준다.

# menu.vue component
- moveItem() : 메뉴를 위 아래로 이동 시키는 함수
- save() : firebase에 데이터를 저장하는 함수 
- saveItem() : 메뉴를 추가하고 저장하는 함수
- saveSubItem() : 서브메뉴를 추가하고 저장하는 함수
- openDialogItem() : dislog창을 열어 메뉴를 추가 수정 해주는 함수 , index를 받아와서 분기점을 나눔  0보다 작으면 새로운 메뉴를 추가 0보다 크면 기존메뉴를 수정 한다.
- openDialogSubItem() : dislog창을 열어 서브 메뉴를 추가 수정 해주는 함수 , index를 받아와서 분기점을 나눔  0보다 작으면 새로운 메뉴를 추가 0보다 크면 기존메뉴를 수정 한다.