# 배포 과정에서 일어난 이슈 (2026-01-19)
환경 : Window 11 / CRA(react-scripts) / React18

---
<br>
## 1.문제
npm run deploy 과정에서 오류
<br>
-browserslist 업데이트 실패
ajv 오류 --> react-script에서 ajv 6버전으로 실행되어야 했으나 8버전으로 설치되어 충돌 
Material-UI 오류 --> node 20 버전으로  npm i 진행하면서 5버전이 설치되었고 기존에 4버전으로 쓰인 프로젝트에서 에러남



## browserslist 업데이트 실패

- nvm 통해 node 20, npm 10 버전 설치

(cmd)

rmdir /s /q node_modules   

--> nodemodule 삭제
<br>

del package-lock.json      

--> package-lock 삭제
<br>

npm cache clean --force    

--> npm cache 삭제
<br>

npm install --legacy-peer-deps   

--> 충돌 무시
<br>

npx browserslist@latest --update-db 

-->  browserslist 업데이트
<br>

npm install @mui/styles --legacy-peer-deps  

--> MUI 설치
<br>

npm install ajv@6 ajv-keywords@3 --legacy-peer-deps 

--> ajv 6버전 설치
<br>
