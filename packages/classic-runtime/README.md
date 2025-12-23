# @jsx-runtime/classic-runtime

이 패키지는 클래식 JSX 런타임(Classic Runtime)을 위한 구현을 제공합니다.
React의 `React.createElement`와 유사하게, JSX 구문을 명시적인 함수 호출로 변환할 때 사용됩니다.

## 🚀 핵심 기능

이 패키지는 JSX 변환을 위한 팩토리 함수를 제공합니다.

-   `toElement`: JSX 요소를 생성하는 함수입니다.
-   `Fragment`: Fragment 요소를 위한 심볼 또는 컴포넌트입니다.

## 🛠️ 사용 방법

이 커스텀 JSX 런타임을 프로젝트에서 사용하려면, TypeScript 설정 파일(`tsconfig.json`)을 다음과 같이 수정해야 합니다.

```json
{
  "compilerOptions": {
    // ... other options
    "jsx": "react",
    "jsxFactory": "toElement",
    "jsxFragmentFactory": "Fragment"
  }
}
```

그리고 JSX를 사용하는 파일 상단에서 팩토리 함수를 가져와야 합니다.

```tsx
import { toElement, Fragment } from '@jsx-runtime/classic-runtime';

const element = <><div>Hello World</div></>;
```

또는 파일별로 pragma를 사용할 수도 있습니다.

```tsx
/** @jsx toElement */
/** @jsxFrag Fragment */
import { createElement, Fragment } from '@jsx-runtime/classic-runtime';

const element = <><div>Hello World</div></>;
```

## 📦 빌드

이 패키지를 빌드하려면, 패키지의 루트 디렉토리에서 다음 명령어를 실행하세요.

```bash
npm run build
```

이 명령어는 Vite를 사용하여 `src` 디렉토리의 TypeScript 코드를 `dist` 폴더에 CommonJS (`.cjs`)와 ES Module (`.js`) 형식으로 번들링합니다. 또한 `vite-plugin-dts`를 통해 타입 선언 파일(`.d.ts`)도 함께 생성됩니다.