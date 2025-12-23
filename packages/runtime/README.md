# @jsx-runtime/runtime

이 패키지는 모던 JSX(Automatic) 런타임을 위한 핵심 구현을 제공합니다.
React의 `react/jsx-runtime`과 유사하게, JSX 구문을 JavaScript 함수 호출로 변환하는 역할을 담당합니다.

## 🚀 핵심 기능

이 패키지는 두 가지 주요 진입점(entry point)을 제공합니다.

-   `@jsx-runtime/runtime/jsx-runtime`: 프로덕션 빌드를 위한 런타임입니다. `jsx`와 `Fragment` 함수를 내보냅니다.
-   `@jsx-runtime/runtime/jsx-dev-runtime`: 개발 빌드를 위한 런타임입니다. `jsxDEV`와 `Fragment` 함수를 내보내며, 디버깅을 위한 추가 정보(source, self 등)를 포함합니다.

## 🛠️ 사용 방법

이 커스텀 JSX 런타임을 프로젝트에서 사용하려면, TypeScript 설정 파일(`tsconfig.json`)을 다음과 같이 수정해야 합니다.

```json
{
  "compilerOptions": {
    // ... other options
    "jsx": "react-jsx",
    "jsxImportSource": "@jsx-runtime/runtime"
  }
}
```

### 설정 옵션 설명

-   `"jsx": "react-jsx"`: TypeScript 컴파일러에게 새로운 JSX 변환(Automatic Runtime)을 사용하도록 지시합니다. 이 설정을 통해 `import React from 'react'` 구문 없이 JSX를 사용할 수 있습니다.
-   `"jsxImportSource": "@jsx-runtime/runtime"`: JSX 변환 시 `jsx` 또는 `jsxDEV` 함수를 어디서 가져올지 지정합니다. 컴파일러는 이 경로를 기반으로 `import { jsx } from '@jsx-runtime/runtime/jsx-runtime'`와 같은 구문을 자동으로 삽입합니다.

Vite, Next.js, Create React App 등 최신 프론트엔드 빌드 도구들은 대부분 `tsconfig.json`의 이 설정을 자동으로 인식하여 JSX를 처리합니다.

## 📦 빌드

이 패키지를 빌드하려면, 패키지의 루트 디렉토리에서 다음 명령어를 실행하세요.

```bash
npm run build
```

이 명령어는 Vite를 사용하여 `src` 디렉토리의 TypeScript 코드를 `dist` 폴더에 CommonJS (`.cjs`)와 ES Module (`.js`) 형식으로 번들링합니다. 또한 `vite-plugin-dts`를 통해 타입 선언 파일(`.d.ts`)도 함께 생성됩니다.