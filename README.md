# News Viewer 

React + TypeScript + Vite로 만든 간단한 뉴스 뷰어 프로젝트입니다.

미국 주요 뉴스 헤드라인을 **카테고리별로 조회**할 수 있고, 각 뉴스 카드를 클릭하면 원문 기사를 새 탭에서 확인할 수 있습니다.


## 주요 기능

- **카테고리별 뉴스 조회**
  - 전체보기, 비즈니스, 엔터테인먼트, 건강, 과학, 스포츠, 기술 등
  - 상단 카테고리 네비게이션 클릭 시 URL이 변경되며 해당 카테고리 뉴스 요청
- **뉴스 리스트 & 카드 UI**
  - 썸네일, 제목, 설명을 카드 형태로 표시
  - 카드 클릭 시 새 탭에서 기사 링크 열기
- **핑크 테마 UI**
  - 카테고리 바, 뉴스 리스트/카드가 모두 핑크 계열 테마로 통일
- **라우팅 & 동적 파라미터**
  - `react-router` 기반 라우팅
  - `/` → 전체보기, `/:category` → 카테고리별 뉴스
  - `useParams`로 현재 카테고리 읽어서 API 요청


## 기술 스택

- **Frontend**: React, TypeScript
- **번들러/개발 서버**: Vite
- **라우팅**: React Router
- **HTTP 통신**: Axios
- **스타일링**: CSS Modules (Tailwind 컨셉을 참고한 커스텀 스타일)

## 환경 변수 설정 (NewsAPI 키)

이 프로젝트는 [NewsAPI](https://newsapi.org/)의 `top-headlines` 엔드포인트를 사용합니다.

1. NewsAPI 사이트에서 API Key를 발급받습니다.
2. 프로젝트 루트에 `.env` 파일을 생성하고 다음과 같이 설정합니다.

```bash
VITE_NEWS_API_KEY=발급받은_API_KEY_여기에
```

3. 코드에서 `import.meta.env.VITE_NEWS_API_KEY`를 사용해 키를 참조합니다.

> ⚠ 실제 배포 시에는 API Key가 노출되지 않도록 주의가 필요합니다.


## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 프리뷰
npm run preview
```


## 개선 예정

- 카테고리 선택 시 스켈레톤 UI 또는 로딩 인디케이터 개선
- 에러 처리 UI (API 제한 초과, 네트워크 오류 등) 추가
- 페이지네이션 또는 "더 보기" 기능
- 다크 모드 및 추가 테마 지원
